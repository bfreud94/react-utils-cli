# React CLI Utils
This project is mainly for creating React TypeScript components, styles, and types files on the fly, but might be used for other things in the future.

# Installation
This package is meant to be setup as a global utility, rather than something part of an individual project that bulks up the local node_modules

```
npm i -g react-utils-cli
```

# Commands
1. CreateTSGroup
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
2. Help
    - Command: react-utils help
    - Returns some text that helps a user get going


## Create TS Group
```
react-utils createTSGroup --reactTSComponent=TestComponent --styles --types --fileLocation=src/path/to/component

```

# Development Scripts
There are two scripts in this repository that link and unlink the local repository to a user's global npm.

In order to run them, you must give the shell script access by running the following command:
```
chmod +x ./src/development-scripts/link.sh
chmod +x ./src/development-scripts/unlink.sh
```