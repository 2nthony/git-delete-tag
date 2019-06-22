const path = require('path')
const fs = require('fs')
const cac = require('cac')
const spawn = require('cross-spawn')
const ora = require('ora')
const matcher = require('multimatch')
const kleur = require('kleur')
const logger = require('../utils/logger')
const parseArgs = require('../utils/parseArgs')

module.exports = class Core {
  constructor() {
    this.cwd = process.cwd()
    this.rawArgs = process.argv
    this.args = parseArgs(this.rawArgs)
    this.isRemotes = this.args.has('r') || this.args.has('remotes')

    this.isGitProject()

    this.initCli()
  }

  initCli() {
    const cli = (this.cli = cac())
    this.command = cli
      .command('[...tags]')
      .usage('[...tags] [options]')
      .option('-r, --remotes', 'Delete remotes tags')
      .action((tags, options) => {
        if (tags.length === 0) cli.outputHelp()

        this.deleteTag(tags, options)
      })

    if (this.isRemotes) {
      cli.option('--scope <scope>', 'Remote tag scope', {
        default: 'origin'
      })
    }

    cli.version(require('../package.json').version).help()

    this.cli.parse(this.rawArgs, { run: false })
  }

  isGitProject() {
    if (!fs.existsSync(path.join(this.cwd, '.git'))) {
      throw new Error(
        logger.error('Current working directory is not a git project!')
      )
    }
    return true
  }

  getTag(options) {
    const { stdout } = spawn.sync(
      'git',
      this.isRemotes ? ['ls-remote', '--tags'] : ['tag']
    )

    let tags = []

    tags = stdout
      .toString()
      .trimRight()
      .split('\n')

    if (this.isRemotes && options.scope) {
      tags = tags
        .map(tag => tag.match(/refs\/tags\/([\S]*)/)[1])
        .filter(tag => !tag.includes('^{}'))
    }

    return tags
  }

  deleteTag(tags, options) {
    const matched = matcher(this.getTag(options), tags)

    matched.forEach(tag => {
      const spinner = ora(`Deleting${this.text(tag)}`)
      spinner.start()
      const args = this.isRemotes
        ? ['push', options.scope, `:refs/tags/${tag}`]
        : ['tag', tag, '-d']
      const ps = spawn.sync('git', args)
      if (ps.status === 0) {
        spinner.succeed(`Deleted${this.text(tag)}`)
      }
    })
  }

  text(tag) {
    return `${this.isRemotes ? ' remotes' : ''} tag ` + kleur.magenta(tag)
  }

  run() {
    this.cli.runMatchedCommand()
  }
}
