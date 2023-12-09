#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { argReadPathMap, getWritePathNames } from './constants/index.js'
import { getArgs } from './utils/commands.js'
import { getErrors } from './utils/errors.js'

const { argv } = yargs(process.argv)
const args = getArgs(argv)

const main = () => {
	const errors = getErrors(args)
	const reactTSComponentName = args['reactTSComponent']
	const writePaths = getWritePathNames(reactTSComponentName, args['fileLocation'])
	if (errors.length === 0) {
		Object.keys(args).forEach((arg: string) => {
			const validReplaceArg = arg === 'reactTSComponent' || arg === 'styles' || arg === 'types'
			if (validReplaceArg) {
				const contents = readFileSync(argReadPathMap[arg], { encoding: 'utf8', flag: 'r' })
					.replace(/ComponentName/gi, args['reactTSComponent'])
				if (!existsSync(args['fileLocation'])) {
					mkdirSync(args['fileLocation'])
				}
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