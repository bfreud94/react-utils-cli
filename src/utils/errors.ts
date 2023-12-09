import { Args } from '../types/commands.js'

export const getErrors = (args: Args): string[] => {
	const errors = []
	const reactTSComponentArg = args['reactTSComponent']
	const fileLocation = args['fileLocation']

	if (!isNaN(reactTSComponentArg)) {
		errors.push('ERROR: Provide a valid component name')
	} else {
		args['reactTSComponent'] = reactTSComponentArg.substring(0, 1).toUpperCase() + reactTSComponentArg.substring(1)
	}

	if (!fileLocation && isNaN(fileLocation)) {
		errors.push('ERROR: Please provide a valid file location')
	}

	return errors
}