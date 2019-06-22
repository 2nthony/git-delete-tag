import test from 'ava'
import spawn from 'cross-spawn'

test('delete tag', t => {
  const ps = spawn.sync('./bin/cli.js', ['test'])
  const stdout = ps.stdout.toString()
  t.is(stdout, '')
})

test('delete remotes tag', t => {
  const ps = spawn.sync('./bin/cli.js', ['test', '-r'])
  const stdout = ps.stdout.toString()
  t.is(stdout, '')
})
