import {Command, flags, run} from '@oclif/command'

import {runCoreCommand} from '../utils/index'

export default class Sync extends Command {
	static description = 'This command syncs the dotfiles in the dotfile project directory with the actual ones using the corresponding command specified in autodot.json'

	static examples = [
		`$ autodot sync`
	]

	async run() {
		try {
			await runCoreCommand('sync')
			this.log('Syncing done')
		} catch(e) {
			this.error(e)
		}
	}
}