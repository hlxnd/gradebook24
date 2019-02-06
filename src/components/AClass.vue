<template>
<v-flex md12>
    <v-card>
        <v-card-title>
            <h1>Klasse: {{ $route.params.classId }}</h1>
        </v-card-title>
        <v-card-text>
            <hot-table :settings="settings" ></hot-table>
        </v-card-text>
        <p/>
    </v-card>
</v-flex>
</template>

<script>
import { HotTable } from '@handsontable/vue'
import store from '../store/store.js'

export default {
  data: function () {
    return {
      settings: store.loadSettings(this.$route.params.classId)
    //   {
    //     data: [
    //       [10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13],
    //       [20, 11, 14, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13],
    //       [30, 15, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11, 12, 13]
    //     ],
    //     colHeaders: ['', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Volvo', 'Toyota', 'Honda'],
    //     rowHeaders: ['2016', '2017', '2018'],
    //     preventOverflow: 'horizontal'
    //   }
    }
  },
  components: {
    HotTable,

  }
}
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
