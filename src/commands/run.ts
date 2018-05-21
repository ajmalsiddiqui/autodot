import {Command, flags, run} from '@oclif/command'

import {runScript} from '../utils/index'

export default class Run extends Command {
	static description = 'This command runs a script specified as an argument'

	static examples = [
		`$ autodot run script-name`
	]

	static args = [
		{name: 'scriptName'}
	]

	async run() {
		try {
			const {args} = this.parse(Run)
			await runScript(args.scriptName)
			// this.log('Syncing done')
		} catch(e) {
			this.error(e)
		}
	}
}