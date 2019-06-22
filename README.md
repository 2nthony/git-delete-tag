# git-delete-tag

> Git delete tag enhancement tooling

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/git-delete-tag?icon=npm)](https://npmjs.com/package/git-delete-tag)
[![NPM download](https://badgen.net/npm/dm/git-delete-tag?icon=npm)](https://npmjs.com/package/git-delete-tag)
[![CircleCI](https://badgen.net/circleci/github/evillt/git-delete-tag?icon=circleci)](https://circleci.com/gh/evillt/git-delete-tag/tree/master)
[![License](https://badgen.net/npm/license/git-delete-tag)](./LICENSE)
[![donate](https://badgen.net/badge/support%20me/donate/f2a)](https://donate.evila.me)

## Features

- Support delete matched tags. e.g.`v1*`

<p align="center">
  <img src="https://unpkg.com/@evillt/media@latest/projects/git-delete-tag/main.svg">
</p>

## Prerequisites

- git
- node.js

## Usage

One-off usage via `npx`:

```sh
$ npx git-delete-tag [...tags]

# Example
$ npx git-delete-tag dev test-*
```

Using it globally:

```sh
$ npm i -g git-delete-tag

# Or using yarn
$ yarn global add git-delete-tag

$ git-dt [...tags]
$ git-delete-tag [...tags]

# Or using git external commands
$ git dt [...tags]
$ git delete-tag [...tags]
```

## CLI

`git-delete-tag [...tags] [options]`

### `tags`

Delete tags

### `options`

#### `-r, --remotes`

Delete remotes tags

#### `--scope <scope>`

- Default: `origin`
- When: `-r, --remotes`

Branches scope name

## Relates

- [git-delete-branch](https://github.com/evillt/git-delete-branch)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**git-delete-tag** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/git-delete-tag/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
