# Vuejs-base Project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run dev
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# TASK

## Plugins installed

Make sure you have installed in your computer Node and Yarn (or NPM) so that you can run the project. 

The following plugins have been installed:
1. VueJS
2. Vue-router
3. Vuetify (component library)
4. Axios (HTTP client)

There are other plugins installed (you can chekc in the package.json) but those are not mandatory to use for this task.

## Account and API Key

Create a FastBill account in [FastBill registration](https://www.fastbill.com/registrierung).

Once you create the account, go to the Settings in the left upper corner of the WebApp and then scroll all the way down until 
you find the section "FastBill API Key". Copy the API Key and paste it in the ".env" file to set it as a environment variable.
 
This will allow you to interact with the FastBill API.

[FastBill API docs](https://apidocs.fastbill.com/)