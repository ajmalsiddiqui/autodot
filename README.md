autodot
=======

A minimal dotfile manager for those magical entities.

[![Version](https://img.shields.io/npm/v/autodot.svg)](https://npmjs.org/package/autodot)
[![CircleCI](https://circleci.com/gh/ajmalsiddiqui/autodot/tree/master.svg?style=shield)](https://circleci.com/gh/ajmalsiddiqui/autodot/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ajmalsiddiqui/autodot?branch=master&svg=true)](https://ci.appveyor.com/project/ajmalsiddiqui/autodot/branch/master)
[![Codecov](https://codecov.io/gh/ajmalsiddiqui/autodot/branch/master/graph/badge.svg)](https://codecov.io/gh/ajmalsiddiqui/autodot)
[![Downloads/week](https://img.shields.io/npm/dw/autodot.svg)](https://npmjs.org/package/autodot)
[![License](https://img.shields.io/npm/l/autodot.svg)](https://github.com/ajmalsiddiqui/autodot/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g autodot
$ autodot COMMAND
running command...
$ autodot (-v|--version|version)
autodot/0.0.1 darwin-x64 node-v9.11.1
$ autodot --help [COMMAND]
USAGE
  $ autodot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [autodot hello [FILE]](#autodot-hello-file)
* [autodot help [COMMAND]](#autodot-help-command)

## autodot hello [FILE]

describe the command here

```
USAGE
  $ autodot hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ autodot hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.0.1/src/commands/hello.ts)_

## autodot help [COMMAND]

display help for autodot

```
USAGE
  $ autodot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.4/src/commands/help.ts)_
<!-- commandsstop -->
