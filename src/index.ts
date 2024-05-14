#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { getArgs, getCommand } from './utils/commands.js'
import createTSGroup from './commands/createTSGroup.js'
import { CREATE_TS_GROUP, acceptableCommands } from './constants/commands.js'

const main = () => {
    const { argv } = yargs(process.argv)
    const command = getCommand(argv)
    const args = getArgs(argv, command)

    if (!acceptableCommands.includes(command)) {
        return console.log('ERROR: Command not found')
    }

    switch (command) {
        case CREATE_TS_GROUP:
            return createTSGroup(args)
        default:
            return console.log('ERROR: Command not found')
    }
}

main()