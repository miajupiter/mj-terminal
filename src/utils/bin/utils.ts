import axios from 'axios'
import packageJson from '../../../package.json'
import * as bin from './index'

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ')

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`
}

export const echo = async (args: string[]): Promise<string> => args.join(' ')

export const whoami = async (args: string[]): Promise<string> => 'roots'

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString()
}

export const gui = async (args: string[]): Promise<string> => 'Opening GUI version...'

export const nano = async (args: string[]): Promise<string> => `Command not found.`

export const vim = async (args: string[]): Promise<string> => `Command not found.`

export const emacs = async (args?: string[]): Promise<string> => `Command not found.`

export const sudo = async (args?: string[]): Promise<string> => `Permission denied: unable to run the command '${args[0]}' as root.`




export const banner = async (args?: string[]): Promise<string> => {
  let str = process.env.NEXT_PUBLIC_BANNER || 'MJ-TERMINAL'
  if(str.includes('://')){
    try{
      let { data } =  await axios.get(str)
      str=data || str
    }catch(err){
      str+=`\n\nBanner Error: ${err.message || ''}\n`
    }
  }

  return `
${str}
version: ${packageJson.version}

Type 'help' to see list of available commands.
------------------------------------------------------
`

}
