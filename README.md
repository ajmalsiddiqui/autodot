autodot
=======

A minimal dotfile manager for those magical entities.

[![Version](https://img.shields.io/npm/v/autodot.svg)](https://npmjs.org/package/autodot)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ajmalsiddiqui/autodot?branch=master&svg=true)](https://ci.appveyor.com/project/ajmalsiddiqui/autodot/branch/master)
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
autodot/0.1.0 darwin-x64 node-v9.11.1
$ autodot --help [COMMAND]
USAGE
  $ autodot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [autodot bootstrap](#autodot-bootstrap)
* [autodot help [COMMAND]](#autodot-help-command)
* [autodot init](#autodot-init)
* [autodot install [GITREPO]](#autodot-install-gitrepo)
* [autodot run [SCRIPTNAME]](#autodot-run-scriptname)
* [autodot sync](#autodot-sync)

## autodot bootstrap

This command bootstraps a new system with your dotfiles by executing the corresponding command specified in autodot.json

```
USAGE
  $ autodot bootstrap

EXAMPLE
  $ autodot bootstrap
```

_See code: [src/commands/bootstrap.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.0/src/commands/bootstrap.ts)_

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

## autodot init

This command initializes an autodot repo by creating the autodot.json file

```
USAGE
  $ autodot init

OPTIONS
  -h, --help  show CLI help
  -y, --yes

EXAMPLE
  $ autodot init
  		TODO: add example here :p
```

_See code: [src/commands/init.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.0/src/commands/init.ts)_

## autodot install [GITREPO]

This command "installs" the dotfiles from a remote dotfiles repo on GitHub on your system, assuming it has an autodot.json file. If no argument is provided, the command attempts to find an autodot.json file in the current directory, and, if it has a repository field, installs it.

```
USAGE
  $ autodot install [GITREPO]

EXAMPLES
  $ autodot install <github_url>

  $ autodot install
```

_See code: [src/commands/install.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.0/src/commands/install.ts)_

## autodot run [SCRIPTNAME]

This command runs a script specified as an argument

```
USAGE
  $ autodot run [SCRIPTNAME]

EXAMPLE
  $ autodot run script-name
```

_See code: [src/commands/run.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.0/src/commands/run.ts)_

## autodot sync

This command syncs the dotfiles in the dotfile project directory with the actual ones using the corresponding command specified in autodot.json

```
USAGE
  $ autodot sync

EXAMPLE
  $ autodot sync
```

_See code: [src/commands/sync.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.0/src/commands/sync.ts)_
<!-- commandsstop -->
