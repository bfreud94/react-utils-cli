#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { writeFileSync } from 'fs'
import { argReadPathMap, getWritePathNames } from './constants/index.js'
import { createDirectoryAndSubDirectories, getArgs, getErrors } from './utils/index.js'

const { argv } = yargs(process.argv)
const args = getArgs(argv)

const main = () => {
	const errors = getErrors(args)
	const reactTSComponentName = args['reactTSComponent']
	const writePaths = getWritePathNames(reactTSComponentName, args['fileLocation'])
	createDirectoryAndSubDirectories(args['fileLocation'])
	if (errors.length === 0) {
		Object.keys(args).forEach((arg: string) => {
			const validReplaceArg = arg === 'reactTSComponent' || arg === 'styles' || arg === 'types'
			if (validReplaceArg) {
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

main()