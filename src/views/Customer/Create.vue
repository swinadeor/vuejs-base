<template>
  <div>
    <form @submit.prevent="handleCustomerCreation">
    <div>CustomerCreate</div>
    <label for="name"></label>
    <input id="name" type="text">
      <input type="submit" value="submit">
    </form>
  </div>
</template>
<script>

export default {
  name: 'CustomerCreate',
  data: () => ({
    customerType: 'business',
    organization: 'business',
    lastName: 'Rodi'
  }),
  methods: {
    handleCustomerCreation () {
      const options = {
        method: 'POST',
        data: {
          'SERVICE': 'customer.create',
          'DATA': {
            'CUSTOMER_TYPE': 'business',
            'ORGANIZATION': 'Musterfirma',
            'LAST_NAME': 'Mustermann'
          }
        },
        url: ''
      }

      this.axios(options)
        .then(function (response) {
          console.log(response)
        })
    }
  }
}
</script>
