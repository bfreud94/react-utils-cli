import { writeFileSync } from 'fs'
import { getErrors } from '../utils/errors.js'
import { getArgReadPathMap, getWritePathNames } from '../constants/paths.js'
import { createDirectoryAndSubDirectories } from '../utils/directory.js'

const createTSGroup = (args: any) => {
	const errors = getErrors(args)
	const reactTSComponentName = args['reactTSComponent']
	const writePaths = getWritePathNames(reactTSComponentName, args['fileLocation'])
	createDirectoryAndSubDirectories(args['fileLocation'], args['reactTSComponent'])
	if (errors.length === 0) {
		Object.keys(args).forEach((arg: string) => {
			const validReplaceArg = arg === 'reactTSComponent' || arg === 'styles' || arg === 'types'
			if (validReplaceArg) {
                const preReact18String = args['preReact18'] ? 'React, ' : ''
                const argReadPathMap = getArgReadPathMap(preReact18String)
				const contents = argReadPathMap[arg].replace(/ComponentName/gi, args['reactTSComponent'])
				writeFileSync(writePaths[arg], contents)
			}
		})
	} else {
		errors.forEach((error: string) => {
			console.error(error)
		})
	}
}

export default createTSGroup