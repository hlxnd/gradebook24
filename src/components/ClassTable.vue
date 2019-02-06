<template>
<div>
    <p/>
        <h1>Klasse: {{ $route.params.classId }}</h1>
    <p/>
  <v-data-table
    :headers="headers"
    :items="desserts"

    :hide-actions="true"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import store from '../store/store.js'

export default {
  data () {
    return store.state.tableData
  }
}
</script>
