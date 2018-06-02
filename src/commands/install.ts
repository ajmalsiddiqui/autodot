import {Command, flags} from '@oclif/command'

import {join} from 'path'

import {config} from '../config/config'
import {cloneAsync, runCoreCommand} from '../utils/index'

export default class Install extends Command {
  static description = 'This command "installs" the dotfiles from a dotfiles repo on your system, assuming it has an autodot.json file. The command works with a specific branch too by using the -b or --branch flags (see examples). If no argument is provided, the command attempts to find an autodot.json file in the current directory, and, if it has a repository field, installs it (this functionality has not been implemented yet).'

  static examples = [
    '$ autodot install <github_url>',
    '$ autodot install -b <autodot_branch> <github_url>',
    '$ autodot install'
  ]

  static flags = {
    branch: flags.string({char: 'b'})
  }

  static args = [
    {name: 'gitRepo'}
  ]

  async run() {
    // TODO: error handling needs to be fixed
    // TODO: add functionality to handle a case where an argument is not there
    try {
      const {flags, args} = this.parse(Install)

      if (args.gitRepo) {
        const result = await this.cloneRepo(args.gitRepo, {
          checkoutBranch: flags.branch ? flags.branch : 'master'
        })

        this.log(result.message)
        const bootstrap = await this.bootstrapSystem(result.repoName)
        this.log(bootstrap)
      }

    } catch (e) {
      this.error(e)
    }
  }

  async cloneRepo(repoLink: string, options = {}) {
    try {
      const repoName = repoLink.split('/').slice(-1)

      this.log(`Cloning into ${repoName}`)

      // remember that everything is relative to the cwd when the command is called
      await cloneAsync(repoLink, `${config.repoPath}/${repoName}`, options)
      return {
        message: `Successfully cloned dotfiles from ${repoLink} into ${config.repoPath}/${repoName}`,
        repoName: `${repoName}`
      }
    } catch (e) {
      throw e
    }
  }

  async bootstrapSystem(repoName: string) {
    try {
      this.log(`Bootstrapping system with ${repoName}`)

      const binPath: string = join(`${config.repoPath}/${repoName}`, '')

      await runCoreCommand('bootstrap', binPath)
      return 'bootstrapping complete'
    } catch (e) {
      throw e
    }
  }
}
