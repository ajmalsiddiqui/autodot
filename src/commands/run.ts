import {Command} from '@oclif/command'

import {runScript} from '../utils/index'

export default class Run extends Command {
  static description = 'This command runs a script specified as an argument. Scripts are specified in the "scripts" section of autodot.json. See the example autodot.json and the introduction for more details.'

  static examples = [
    '$ autodot run script-name'
  ]

  static args = [
    {name: 'scriptName'}
  ]

  async run() {
    try {
      const {args} = this.parse(Run)
      await runScript(args.scriptName)
    } catch (e) {
      this.error(e)
    }
  }
}
