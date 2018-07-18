# vue-serverless-ssr-poc

> Nuxt.js TypeScript project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deploying to AWS

Technologies:
- AWS Lambda, AWS Api Gateway
- Serverless Framework

- set up your profile and additional data (e.g. role & region) in ```~/.aws/credentials``` and ```~/.aws/config```
- run ```export AWS_PROFILE=<your_profile>``` before executing ```yarn deploy```
