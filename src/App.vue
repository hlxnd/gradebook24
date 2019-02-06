<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="" :to="{path: '/'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
                prepend-icon="school"
                value="true"
              >

          <v-list-tile slot="activator">
            <v-list-tile-title>Classes</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="clazz in store.backendData.classes"
            @click="" :to="{path: '/classes/'+clazz.id}">
            <v-list-tile-action>
              <v-icon>people</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{clazz.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list-group>

        <v-list-tile @click="" :to="{path: '/settings'}">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="green" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>GradeBook24</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <!-- <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn slot="activator" :href="source" icon large target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container> -->
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
          <!-- <ClassTable></ClassTable> -->
        </v-fade-transition>
      </v-container>
    </v-content>
    <v-footer color="green" app>
      <span class="white--text">&nbsp;&copy; 2017 <a class="white--text" href=#>www.gradebook24.com</a></span>
    </v-footer>
  </v-app>
</template>

<script>
import ClassTable from './components/ClassTable.vue'
import store from './store/store.js'

export default {
  data: () => ({
    drawer: null,
    store: store.state,
    bang: 'bing'
  }),

  props: {
    source: String
  },

  components: {
  }
}
</script>
