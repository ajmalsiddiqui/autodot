import {Command} from '@oclif/command'

import {join} from 'path'

import {config} from '../config/config'
import {cloneAsync, runCoreCommand} from '../utils/index'

export default class Install extends Command {
  static description = 'This command "installs" the dotfiles from a remote dotfiles repo on GitHub on your system, assuming it has an autodot.json file. If no argument is provided, the command attempts to find an autodot.json file in the current directory, and, if it has a repository field, installs it (this functionality has not been implemented yet).'

  static examples = [
    '$ autodot install <github_url>',
    '$ autodot install'
  ]

  static args = [
    {name: 'gitRepo'}
  ]

  async run() {
    // TODO: error handling needs to be fixed
    // TODO: add functionality to handle a case where an argument is not there
    try {
      const {args} = this.parse(Install)

      if (args.gitRepo) {
        const result = await this.cloneRepo(args.gitRepo)
        this.log(result.message)
        this.bootstrapSystem(result.repoName)
      }

    } catch (e) {
      this.error(e)
    }
  }

  async cloneRepo(repoLink: string) {
    try {
      const repo: string[] = repoLink.split('/').slice(-2)
      const repoName: string = repo[0] + '_' + repo[1]

      this.log(`Cloning into ${repoName}`)

      // remember that everything is relative to the cwd when the command is called
      await cloneAsync(repoLink, `${config.repoPath}/${repoName}`)
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
