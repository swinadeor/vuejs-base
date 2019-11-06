
# TASK

Your task consists in creating 3 views. The Customer List, Invoice Creatin and the Invoice List

- Customer List: to fill data for it, just use the Customer Creation view and use the FastBill API to retrieve the data and display it using any vuetify component
- Invoice Creation: similar to the Customer Creation but with one condition, you will need to pull any CUSTOMERID you created with the Customer Creation
- Invoice List: similar to the CustomerList pull the data directly from the FastBill API. To display the invoices, you can use the vuetify components or create your own components

Notes: all the CSS is handled through Vuetify. No need to create your own classes. [Vuetify component docs](https://vuetifyjs.com/en/components/api-explorer).

## Account and API Key

Create a FastBill account in [FastBill registration](https://www.fastbill.com/registrierung).

Once you create the account, go to the Settings in the left upper corner of the WebApp and then scroll all the way down until 
you find the section "FastBill API Key". Copy the API Key and paste it in the ".env" file to set it as a environment variable.
 
This will allow you to interact with the FastBill API.

[FastBill API docs](https://apidocs.fastbill.com/)

## Plugins installed

Make sure you have installed in your computer Node and Yarn (or NPM) so that you can run the project. 

The following plugins have been installed:
1. VueJS
2. Vue-router
3. Vuetify (component library)
4. Axios (HTTP client)

There are other plugins installed (you can chekc in the package.json) but those are not mandatory to use for this task.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
