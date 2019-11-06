<template>
  <div>

    <v-fom
      ref="form"
    >
      <v-container>

        <v-col>
          <v-text-field
          v-model="customerType"
          label="Customer Type"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
          v-model="organization"
          label="Organization"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
          v-model="lastName"
          label="Last Name">
          </v-text-field>
        </v-col>
        <v-btn
          color="primary"
          @click="handleCustomerCreation"
        >
          Validate
        </v-btn>
      </v-container>
    </v-fom>
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
