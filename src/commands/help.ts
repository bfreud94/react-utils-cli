const help = () => {
    const message = `
**Available Commands**
- CreateTSGroup
    - Command: react-utils createTSGroup ...
    - Creates boiler plate React TS Component with styles file and types file
    - Args
        - reactTSComponent
            - React TS Component Name
        - --styles
            - Creates a file for the Component's styles
        - --types
            - Creates a file for the Component's types
        - fileLocation
            - Path to the component
- Help
    - Command: react-utils help
    - Returns some text that helps a user get going
    `
    console.log(message)
}

export default help