export const CREATE_TS_GROUP = 'createTSGroup'

export const acceptableArguments = {
    [CREATE_TS_GROUP]: [
        'fileLocation',
        'reactTSComponent',
        'styles',
        'types',
        'preReact18'
    ]
}

export const acceptableCommands = Object.keys(acceptableArguments)