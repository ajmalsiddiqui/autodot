import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import * as fs from 'fs'

import {config} from '../config/config'

export default class Init extends Command {
	static description = 'This command initializes an autodot repo by creating the autodot.json file'

	static examples = [
		`$ autodot init
		TODO: add example here :p
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
		const {flags} = this.parse(Init)
		try {
			const result = await this.makeConfigFile()
			this.log(result)
		} catch (e) {
			this.error(`An error occured:\n${e}`)
		}
	}

	async makeConfigFile() {		
		const bootstrap = await cli.prompt('Bootstrap File')
		const sync = await cli.prompt('Sync File')
		const repository = await cli.prompt('GitHub Repository')
		const autodot = {
			commands: {
				bootstrap: bootstrap,
				sync: sync
			},
			repository: repository
			// removing this field because root is local 
			// root: process.cwd()
		}
		return new Promise((resolve, reject) => {
			fs.writeFile(`${config.autodotPath}/autodot.json`, JSON.stringify(autodot, null, 2), err => {
				if (err) reject(err)
				resolve('Successfully created autobot.json')
			});
		})
	}

}