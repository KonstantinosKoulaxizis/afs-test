<template>
  <div class="home">
    <h1>This is a table with some important data</h1>
    <b-table :data="tableData" :columns="columns"></b-table>
    <table-totals :tableData="tableData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TableData } from "@/types/types";
import TableTotals from "@/components/tableTotals.vue";
import { HOME_TABLE_NUM_COLUMNS } from "@/classes/TableTotalsData";

@Component({
  components: { TableTotals },
})
export default class Home extends Vue {
  tableData: TableData[] = [];
  columns = [
    {
      label: "Security class",
      field: "name",
    },
    ...HOME_TABLE_NUM_COLUMNS,
  ];
  loading = false;

  // mounted works fine if your ide complains about it
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    this.handleGetData();
  }

  async handleGetData(): Promise<void> {
    try {
      this.loading = true;
      const data = await this.getData();
      this.tableData = data.map((dataItem: TableData) => {
        return {
          ...dataItem,
          randomNumber: Math.random(),
        };
      });
      this.loading = false;
    } catch (error) {
      console.log(error, "This is not good");
    }
  }

  async getData(): Promise<TableData[]> {
    return [
      {
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f06",
        name: "Series A",
        nominalValue: 5,
        authorizedAmount: 1500,
        issuedAmount: 500,
        authorizedCapital: 7550,
        issuedCapital: 2500,
      },
      {
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f06",
        name: "Series B",
        nominalValue: 10,
        authorizedAmount: 15000,
        issuedAmount: 5000,
        authorizedCapital: 150000,
        issuedCapital: 50000,
      },
      {
        id: "fd78c11b-e3d2-455a-99b0-49907a75c463",
        name: "Series C",
        nominalValue: 1,
        authorizedAmount: 96876,
        issuedAmount: 61760,
        authorizedCapital: 96876,
        issuedCapital: 61760,
      },
      {
        id: "d8654cb0-8986-4fbc-b969-025e514cb934",
        name: "Series D",
        nominalValue: 1,
        authorizedAmount: 10110,
        issuedAmount: 1100,
        authorizedCapital: 10110,
        issuedCapital: 1100,
      },
    ];
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
