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