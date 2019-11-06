<template>
  <div>
    <v-container>
        <v-col>
          <v-select
            v-model="customerType"
            :items="customerTypes"
            label="Customer Type"
          ></v-select>
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
          class="mr-4"
          @click="handleCustomerCreation"
        >
          Create
        </v-btn>
        <v-btn
          color="warning"
          @click="handleResetForm"
        >
          Reset Form
        </v-btn>
      </v-container>
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
    >
      {{ snackbar.text }}
      <v-btn
        color="white"
        text
        @click="snackbar.show = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>

export default {
  name: 'CustomerCreate',
  data: () => ({
    snackbar: {
      show: false,
      text: '',
      color: ''
    },
    valid: true,
    customerTypes: ['business', 'consumer'],
    customerType: '',
    organization: '',
    lastName: ''
  }),
  methods: {
    handleCustomerCreation () {
      const that = this

      const data = {
        'SERVICE': 'customer.create',
        'DATA': {
          'CUSTOMER_TYPE': this.customerType,
          'ORGANIZATION': this.organization,
          'LAST_NAME': this.lastName
        }
      }

      this.axios.post('', data)
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            if (response.data.RESPONSE && response.data.RESPONSE.ERRORS) {
              that.snackbar.color = 'error'
              that.snackbar.text = response.data.RESPONSE.ERRORS
            } else {
              that.snackbar.color = ''
              that.snackbar.text = 'A customer has been created :)'
              that.handleResetForm()
            }
            that.snackbar.show = true
          }
        })
        .catch(error => {
          console.log(error)
          that.snackbar.color = 'error'
          that.snackbar.text = 'ERROR REQUEST'
        })
    },
    handleResetForm () {
      this.customerType = ''
      this.organization = ''
      this.lastName = ''
    }
  }
}
</script>
