<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="handleRedirect(item.route)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/fastbill-logo-black.svg"
          transition="scale-transition"
          width="150"
        />
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    item: 0,
    items: [
      { text: 'Home', icon: 'mdi-home', route: 'home' },
      { text: 'Customer Creation', icon: 'mdi-account-plus', route: '/customer-create' },
      { text: 'Customer List', icon: 'mdi-account-group', route: 'customer-list' },
      { text: 'Invoice Creation', icon: 'mdi-file', route: 'invoice-creation' },
      { text: 'Invoice List', icon: 'mdi-newspaper-variant-multiple-outline', route: 'invoice-list' }
    ]
  }),
  methods: {
    handleRedirect (route) {
      this.$router.push(route)
    }
  }
}
</script>
