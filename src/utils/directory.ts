import { existsSync, mkdirSync } from 'fs'

export const createDirectoryAndSubDirectories = (inputFileLocation: string, componentName: string): void => {
    const directories = inputFileLocation.split('/')
    directories.push(`/${componentName}`)
    let directoryLocation = ''
    directories.forEach((directory: string, index: number) => {
        directoryLocation += directory + '/'
        if (!existsSync(directoryLocation)) {
            mkdirSync(directoryLocation)
        }
    })
}