import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {config} from '../config/config'
import {writeFileAsync} from '../utils/index'

export default class Init extends Command {
  static description = 'This command initializes an autodot repo by creating the autodot.json file'

  static examples = [
    `$ autodot init
		TODO: add example here
		`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // Same behaviour as npm init -y
    // specify defaults - install, bootstrap, etc
    yes: flags.boolean({char: 'y'})
  }

  // no args?
  // static args = []

  async run() {
    // temporary; since flags aren't being used rn
    // const {flags} = this.parse(Init)
    try {
      const result: string = await this.makeConfigFile()
      this.log(result)
    } catch (e) {
      this.error(`${e}`)
    }
  }

  async makeConfigFile() {
    // TODO: do something about this messed up error handling situation :'(
    let bootstrap
    let sync
    let repository
    let autodot
    try {
      bootstrap = await cli.prompt('Bootstrap Command')
      sync = await cli.prompt('Sync Command')
      repository = await cli.prompt('GitHub Repository')
      autodot = {
        commands: {
          bootstrap,
          sync
        },
        repository
        // removing this field because root is local
        // root: process.cwd()
      }
      await writeFileAsync(`${config.autodotPath}/autodot.json`, JSON.stringify(autodot, null, 2))
      return 'Successfully created autodot.json'
    } catch (e) {
      throw e
    }
  }

}
