import { acceptableArguments, acceptableCommands } from '../constants/commands.js'
import { Args } from '../types/commands.js'

export const getArgs = (args: Args, command: string): Args => {
    Object.keys(args).forEach((arg: string) => {
        if (acceptableCommands.includes(command)) {
            if (!acceptableArguments[command].includes(arg)) {
                delete args[arg]
            }
        }
    })
    return args
}

export const getCommand = (argv: any) => argv._[2]