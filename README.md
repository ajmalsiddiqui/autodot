autodot
=======

A minimal dotfile manager for those magical entities.

[![Version](https://img.shields.io/npm/v/autodot.svg)](https://npmjs.org/package/autodot)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ajmalsiddiqui/autodot?branch=master&svg=true)](https://ci.appveyor.com/project/ajmalsiddiqui/autodot/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/autodot.svg)](https://npmjs.org/package/autodot)
[![License](https://img.shields.io/npm/l/autodot.svg)](https://github.com/ajmalsiddiqui/autodot/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Motivation](#motivation)
* [Guide](#guide)
* [Commands](#commands)
* [Dotfile Repositories That Use Autodot](#dotfile-repositories-that-use-autodot)
* [Example Autodot File](#example-autodot-file)
* [Contributing](#contributing)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g autodot
$ autodot COMMAND
running command...
$ autodot (-v|--version|version)
autodot/0.1.8 darwin-x64 node-v9.11.1
$ autodot --help [COMMAND]
USAGE
  $ autodot COMMAND
...
```
<!-- usagestop -->
# Motivation
<!-- motivation -->
Autodot was built with two dotfile management philosophies in mind:
* Your approach to managing dotfiles is totally up to you. It can be as crazy and unique as you want.
* Dotfiles are meant to be shared, and sharing them should be easy and intuitive. The nuances of an individual's approach to managing their dotfiles shouldn't get in the way of other people trying to use them.

Additionally, Autodot aims to standardize your entire dotfile management workflow to further make your approach scalable and easily shared.

Autodot does this by requiring you to define your approach to a few standard dotfile management tasks - bootstraping a system with your dotfiles and syncing the changes you make in your local dotfiles repo with the dotfiles in your home directory. 

How is typing `autodot bootstrap` or `autodot sync` better than typing `sh bootstrap.sh` or `sh sync.sh`? There are two arguments in the favor of Autodot:
1. Everyone who uses Autodot will bootstrap or sync their dotfiles using the same commands. So there is no need for guesswork, documentation or understanding the approach of a person whose dotfiles you wanna try - you know it's always `autodot bootstrap` or `autodot sync`.
2. Your approach to bootstrapping or syncing may not be a simple shell script. Maybe your scripts are split into multiple files that have to be called in order, or maybe you want to do a few additional tasks before and after bootstrapping/syncing. Or perhaps some conditional executions. Or maybe your bootstrap/sync process is so simple that writing a script is overkill. Instead of writing another script to put everything together, do something like this for the bootstrap or sync command in your `autodot.json`:
```
bootstrap": "sh before_bootstrap.sh && bootstrap.sh || echo 'something went wrong while setting things up'"
```

Finally, Autodot standardizes the way you manege your dotfiles by allowing the use of custom scripts and makes installing someones dotfiles a piece of cake. Check out the relevant sections in the [Guide](#guide).
<!-- motivationstop -->
# Guide
<!-- guide -->
### 1. Installation and Basic Usage
Install autodot with `npm install -g autodot` and cd into your local dotfiles repo.

Run `autodot init` to generate `autodot.json`. This will ask you to specifiy the commands to execute for bootstrapping a system with your dotfiles and for syncing dotfiles from your repo with those in the home directory. It will also ask for the link to the GitHub repo of the dotfiles.

Say you have scripts called `bootstrap.sh` and `sync.sh` for bootstrapping and syncing respectively. So you should type `sh bootstrap.sh` and `sh sync.sh` as when prompted for the bootstrap or sync commands. This will be saved to `autodot.json`.

Now, when you execute `autodot bootstrap` or `autodot sync` the corresponding commands (i.e. `sh bootstrap.sh` and `sh sync.sh`) are executed.

### 2. Using Custom Scripts
You can also edit the `autodot.json` file to manually include a `scripts` object that contains custom commands that you may use to manage your dotfiles. The commands can then be invoked by running `autodot run <command_name>`. For example, consider this `autodot.json` (truncated for brevity):

```
{
  ...
  "scripts": {
    "hello": "echo hello",
    "clean": "rm -rf tmp",
    "reload": "source .bash_profile"
  }
}
```

Running `autodot run hello` will execute the corresponding command, i.e., `echo hello` and thus print "hello" to stdout.

Scripts can be used to put all your dotfile management commands in one place and have a consistent way of executing them. They are also useful for brevity if you want to execute multiple commands in succession. You can create an alias to achieve the same functionality, but having a consistent way of executing commands that relate to _managing your dotfiles_ but not to _the dotfiles themselves_ and delegating these commands to autodot makes the distinction between code used to manage the dotfiles and the dotfiles themselves clearer and makes your dotfiles easy to use for other people who may not be familiar with your way of doing things.

### 3. Installing Dotfiles that Use Autodot
One of the core philosophies behind autodot is that dotfiles are meant to be shared, and sharing them should be a breeze. At the same time, doing things your way is how you make your dotfiles your own.  The `autodot bootstrap` command allows you to freely choose how you bootstrap a system with your dotfiles while making it easy for other people to do the same without knowing/understanding the nuances of your approach, thus abstracting away the underlying approach.

With this approach, your flow when installing dotfiles will be something like this:
```
$ git clone <your_dotfiles_repo>
$ cd <your_dotfiles_repo>
$ autodot bootstrap
```

However, autodot makes it even easier to install dotfiles from a remote repository with the [`autodot install`](#autodot-install-gitrepo) command. This command clones the repository given as a command line argument and runs the bootstrap command.
`autodot install <your_dotfiles_repo>` is all it takes!

<!-- guidestop -->
# Commands
<!-- commands -->
* [autodot bootstrap](#autodot-bootstrap)
* [autodot help [COMMAND]](#autodot-help-command)
* [autodot init](#autodot-init)
* [autodot install [GITREPO]](#autodot-install-gitrepo)
* [autodot run [SCRIPTNAME]](#autodot-run-scriptname)
* [autodot sync](#autodot-sync)

## autodot bootstrap

This command bootstraps a new system with your dotfiles by executing the bootstrap command specified in autodot.json

```
USAGE
  $ autodot bootstrap

EXAMPLE
  $ autodot bootstrap
```

_See code: [src/commands/bootstrap.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.8/src/commands/bootstrap.ts)_

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
  		TODO: add example here
```

_See code: [src/commands/init.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.8/src/commands/init.ts)_

## autodot install [GITREPO]

This command "installs" the dotfiles from a dotfiles repo on your system, assuming it has an autodot.json file. The command works with a specific branch too by using the -b or --branch flags (see examples). If no argument is provided, the command attempts to find an autodot.json file in the current directory, and, if it has a repository field, installs it (this functionality has not been implemented yet).

```
USAGE
  $ autodot install [GITREPO]

OPTIONS
  -b, --branch=branch

EXAMPLES
  $ autodot install <github_url>

  $ autodot install -b <autodot_branch> <github_url>

  $ autodot install
```

_See code: [src/commands/install.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.8/src/commands/install.ts)_

## autodot run [SCRIPTNAME]

This command runs a script specified as an argument. Scripts are specified in the "scripts" section of autodot.json. See the example autodot.json and the introduction for more details.

```
USAGE
  $ autodot run [SCRIPTNAME]

EXAMPLE
  $ autodot run script-name
```

_See code: [src/commands/run.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.8/src/commands/run.ts)_

## autodot sync

This command syncs the dotfiles in the dotfile project directory with the actual ones by executing the corresponding command specified in autodot.json

```
USAGE
  $ autodot sync

EXAMPLE
  $ autodot sync
```

_See code: [src/commands/sync.ts](https://github.com/ajmalsiddiqui/autodot/blob/v0.1.8/src/commands/sync.ts)_
<!-- commandsstop -->

# Dotfile Repositories That Use Autodot
> Note:
If your dotfiles repo uses `autodot`, feel free to make a PR!

1. [ajmalsiddiqui's dotfiles](https://github.com/ajmalsiddiqui/dotfiles) ([autodot branch](https://github.com/ajmalsiddiqui/dotfiles/tree/autodot))

# Example Autodot File
<!-- example -->
Here's an example `autodot.json` file. It's pretty self-explanatory!
```
{
  "commands": {
    "bootstrap": "sh bootstrap.sh && rm -rf tmp",
    "sync": "sh sync.sh"
  },
  "repository": "https://github.com/ajmalsiddiqui/dotfiles",
  "scripts": {
    "refresh": "source .bash_profile",
    "say-hello": "echo hello"
  }
}
```
<!-- examplestop -->
# Contributing
<!-- contributing -->
You want to contribute to autodot? That's great! Check out the [CONTRIBUTING.md](https://github.com/ajmalsiddiqui/autodot/blob/master/CONTRIBUTING.md) file in this repository for the guidelines or the [TODO.md](https://github.com/ajmalsiddiqui/autodot/blob/master/TODO.md) file for inspiration for something to work on.