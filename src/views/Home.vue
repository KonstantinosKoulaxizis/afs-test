<template>
  <div class="home">
    <h1>This is a table with some important data</h1>
    <div id="add-security-container">
      <button>Add security</button>
    </div>
    <b-table :data="$store.state.homeTableData" :columns="columns"></b-table>
    <table-totals :tableData="$store.state.homeTableData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TableTotals from "@/components/tableTotals.vue";
import { HOME_TABLE_NUM_COLUMNS } from "@/classes/TableTotalsData";

@Component({
  components: { TableTotals },
})
export default class Home extends Vue {
  columns = [
    {
      label: "Security class",
      field: "name",
    },
    ...HOME_TABLE_NUM_COLUMNS,
  ];

  // Add missing return type of function in order to remove editor's complains
  mounted(): void {
    this.handleGetInitialData();
  }

  async handleGetInitialData(): Promise<void> {
    // Implement a check and fetch data only if the array is empty
    // in order to prevent unnecessary requests
    if (!this.$store.state.homeTableData) {
      await this.$store.dispatch("handleGetData");
    }
  }
}
</script>

<style lang="scss">
#add-security-container {
  display: flex;
  justify-content: right;
  padding: 10px 25px;
  button {
    padding: 15px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;
  }
}
</style>
