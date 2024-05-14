#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { getArgs, getCommand, COMMANDS } from './utils/commands.js'
import createTSGroup from './commands/createTSGroup.js'

const main = () => {
    const { argv } = yargs(process.argv)
    const command = getCommand(argv)
    const args = getArgs(argv)

    const { CREATE_TS_GROUP } = COMMANDS

    switch (command) {
        case CREATE_TS_GROUP:
            return createTSGroup(args)
        default:
            return console.log('Command not found')
    }
}

main()