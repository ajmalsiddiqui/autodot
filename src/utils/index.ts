import {execSync} from 'child_process'
import * as fs from 'fs'

import * as nodegit from 'nodegit'

import {config} from '../config/config'

// TODO: add return types to functions

export const runCoreCommand = (commandName: string, autodotPath: string = `${config.autodotPath}`) => {
  // Temporarily removing default scripts

  return new Promise((resolve, reject) => {
    fs.readFile(`${autodotPath}/autodot.json`, (err, buf) => {
      if (err) reject(err)
      const data = JSON.parse(buf.toString())
      // console.log(data)
      // const command = data.commands[commandName] || `sh ${data.root}/src/scripts/${commandName}.sh`

      const command = data.commands[commandName]
      if (!command) {
        reject(new Error(`${commandName} command not specified in autodot.json. Add this command manually or run autodot init.`))
      }
      try {
        execSync(command, {
          stdio: 'inherit',
          cwd: `${autodotPath}`
        })
        resolve('success')
      } catch (e) {
        reject(e)
      }
    })
  })
}

export const runScript = (scriptName: string, autodotPath: string = `${config.autodotPath}`) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${autodotPath}/autodot.json`, (err, buf) => {
      if (err) reject(err)
      const data = JSON.parse(buf.toString())
      const script = data.scripts[scriptName]
      if (!script) {
        reject(new Error(`${scriptName} script not specified in autodot.json. Add this command manually.`))
      }
      try {
        execSync(script, {
          stdio: 'inherit',
          cwd: `${autodotPath}`
        })
        resolve('success')
      } catch (e) {
        reject(e)
      }
    })
  })
}

// the shitload of error handling problems that occur when dealing with node made me do this xD
// TODO: use writeFileSync since destructive fs ops should be performed sync
export const writeFileAsync = (path: string, data: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) reject(err)
      resolve('Success')
    })
  })
}

// async version of the clone function of nodegit
// the options object currently only contains support for
// the checkoutBranch option of nodegit
export const cloneAsync = (link: string, path: string, cloneOptions: object) => {
  return new Promise((resolve, reject) => {
    nodegit.Clone.clone(link, path, cloneOptions)
      .then((repo: object) => resolve(repo))
      .catch((e: Error) => reject(e))
  })
}
