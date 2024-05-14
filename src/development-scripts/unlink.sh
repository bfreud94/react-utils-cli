#!/bin/bash

# Unlinking
cd $(npm -g root)
echo Uninstalling react-utils-cli...
rm -rf react-utils-cli
echo Reinstall react-utils-cli...
npm i -g react-utils-cli
npm -g ls