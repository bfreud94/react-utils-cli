import { acceptableArguments } from '../constants/commands.js'
import { Args } from '../types/commands.js'

export const getArgs = (args: Args): Args => {
	Object.keys(args).forEach((arg: string) => {
		if (!acceptableArguments.includes(arg)) {
			delete args[arg]
		}
	})
	return args
}

export const getCommand = (argv: any) => argv._[2]

export const COMMANDS = {
    CREATE_TS_GROUP: 'createTSGroup'
}