import * as fs from 'fs'
import {execSync} from 'child_process'
import { resolve } from 'path';

import {config} from '../config/config'

export const runCoreCommand: Function =  (commandName: string) => {
	// Temporarily removing default scripts
	return new Promise((resolve, reject) => {
		try {
			fs.readFile(`${config.autodotPath}/autodot.json`, (err, buf) => {
				if(err) throw err
				const data = JSON.parse(buf.toString())
				// console.log(data)
				// const command = data.commands[commandName] || `sh ${data.root}/src/scripts/${commandName}.sh`
				const command = data.commands[commandName]
				if(!command) {
					throw new Error(`${commandName} command not specified in autodot.json. Add this command manually or run autodot init.`)
				}
				execSync(command, {stdio: 'inherit'})
			})
		} catch(e) {
			reject(e)
		}
	})
}

export const runScript: Function = (scriptName: string) => {
	return new Promise((resolve, reject) => {
		try {
			fs.readFile(`${config.autodotPath}/autodot.json`, (err, buf) => {
				if(err) throw err
				const data = JSON.parse(buf.toString())
				const script = data.scripts[scriptName]
				if(!script) {
					throw new Error(`${scriptName} script not specified in autodot.json. Add this command manually.`)
				}
				execSync(script, {stdio: 'inherit'})
			})
		} catch(e) {
			reject(e)
		}
	})
}