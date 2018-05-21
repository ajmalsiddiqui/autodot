import {Command} from '@oclif/command'

import {Clone} from 'nodegit' 

import {mkdirSync} from 'fs'
import {execSync} from 'child_process'
import {join} from 'path'

import {config} from '../config/config'

export default class Install extends Command {
	static description = 'This command "installs" the dotfiles from a remote dotfiles repo on GitHub on your system, assuming it has an autodot.json file. If no argument is provided, the command attempts to find an autodot.json file in the current directory, and, if it has a repository field, installs it.'

	static examples = [
		`$ autodot install <github_url>`,
		`$ autodot install`
	]

	static args = [
		{name: 'gitRepo'}
	]

	async run() {
		// TODO: error handling needs to be fixed
		// TODO: add functionality to handle a case where an argument is not there
		try {
			const {args} = this.parse(Install)
			
			if(args.gitRepo) {
				const result = await this.cloneRepo(args.gitRepo)
				this.log(result.message)
				this.bootstrapSystem(result.repoName)
			}

		} catch(e) {
			this.error(e.message)
		}
	}

	async cloneRepo(repoLink: string) {
		return new Promise((resolve, reject) => {
			const repo: string[] = repoLink.split("/").slice(-2)
			const repoName: string = repo[0] + "_" + repo[1]

			this.log(`Cloning into ${repoName}`)

			// remember that everything is relative to the cwd when the command is called
			Clone(repoLink, `${config.repoPath}/${repoName}`)
				.then(repo => resolve({
					message: `Successfully cloned dotfiles from ${repoLink} into ${config.repoPath}/${repoName}`,
					repoName: `${repoName}`
				}))
				.catch((e: Object) => {
					// TODO: fix this
					reject({
						message: `${e}`
					})
				})
		})
		
	}

	async bootstrapSystem(repoName: string) {
		return new Promise((resolve, reject) => {
			this.log(`Bootstrapping system with ${repoName}`)
			
			const binPath: string = join(`${config.repoPath}/${repoName}`, '')
			
			try {
				const result = execSync("../../bin/run bootstrap", {
					cwd: `${config.repoPath}/${repoName}`,
					stdio: "inherit"
				})

				// TODO: improve this
				resolve("Bootstrapping complete")
			} catch(e) {
				// console.log(e)
				reject({
					message: `${e}`
				})
			}
		})
	}
}