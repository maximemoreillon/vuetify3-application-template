#!/bin/bash

npm run --prefix ../ build
npm pack ../
npm uninstall @moreillon/vuetify3-application-template
npm install moreillon-vuetify3-application-template-0.*.*.tgz