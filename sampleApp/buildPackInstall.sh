#!/bin/bash


npm run --prefix ../ build \
&& npm pack ../ \
&& npm uninstall @moreillon/vuetify3-application-template \
&& npm i ./moreillon-vuetify3-application-template-*.*.*.tgz \
&& npm run dev
