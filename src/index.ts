#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { getArgs, getCommand } from './utils/commands.js'
import { CREATE_TS_GROUP, HELP, acceptableCommands } from './constants/commands.js'
import createTSGroup from './commands/createTSGroup.js'
import help from './commands/help.js'

const main = () => {
    const { argv } = yargs(process.argv)
        .help(false)

    const command = getCommand(argv)

    if (!acceptableCommands.includes(command)) {
        return console.log('ERROR: Command not found')
    }

    const args = getArgs(argv, command)

    switch (command) {
        case CREATE_TS_GROUP:
            return createTSGroup(args)
        case HELP:
            return help()
        default:
            return console.log('ERROR: Command not found')
    }
}

main()