# React CLI Utils
This project is mainly for creating React TypeScript components, styles, and types files on the fly, but might be used for other things in the future.

# Installation
This package is meant to be setup as a global utility, rather than something part of an individual project that bulks up the local node_modules

```
npm i -g react-utils-cli
```

# Commands

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