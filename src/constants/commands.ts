export const CREATE_TS_GROUP = 'createTSGroup'
export const HELP = 'help'

export const acceptableArguments = {
    [CREATE_TS_GROUP]: [
        'fileLocation',
        'reactTSComponent',
        'styles',
        'types',
        'preReact18'
    ],
    [HELP]: []
}

export const acceptableCommands = Object.keys(acceptableArguments)