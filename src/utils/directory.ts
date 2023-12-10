import { existsSync, mkdirSync } from 'fs'

export const createDirectoryAndSubDirectories = (inputFileLocation: string): void => {
	const directories = inputFileLocation.split('/')
	let directoryLocation = ''
	directories.forEach((directory: string, index: number) => {
		if (index !== directories.length) {
			directoryLocation += directory + '/'
		}
		if (!existsSync(directory)) {
			mkdirSync(directoryLocation)
		}
	})
}