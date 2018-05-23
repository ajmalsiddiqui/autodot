import {Command} from '@oclif/command'

import {runCoreCommand} from '../utils/index'

export default class Bootstrap extends Command {
  static description = 'This command bootstraps a new system with your dotfiles by executing the bootstrap command specified in autodot.json'

  static examples = [
    '$ autodot bootstrap'
  ]

  async run() {
    try {
      await runCoreCommand('bootstrap')
      this.log('Bootstrap done')
    } catch (e) {
      this.error(e)
    }
  }

}
