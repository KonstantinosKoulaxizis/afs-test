<template>
  <div id="table-totals">
    <div id="table-total-label">Total</div>
    <div v-for="row in rowData" :key="row.label">
      <span class="total-label">{{ row.label }}</span> {{ row.amount }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { TableData } from "@/types/types";
import { TableTotalsData, TableTotalRow } from "@/classes/TableTotalsData";

@Component({
  name: "TableTotals",
})
export default class TableTotals extends Vue {
  rowData: TableTotalRow[] = [];
  @Prop({ required: true }) tableData!: TableData[];

  @Watch("tableData")
  onChildChanged(val: TableData[]): void {
    const { tableTotalsdata } = new TableTotalsData(val);
    this.rowData = tableTotalsdata;
  }
}
</script>

<style lang="scss">
#table-totals {
  display: flex;
  border: 2px solid #727070;
  background-color: #e0dede;
  div {
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    border-left: 1px solid #727070;
    padding: 8px 12px;
  }
  .total-label {
    text-align: center;
    font-size: 18px;
    color: transparent;
    position: absolute;
    display: flex;
  }
}

@media only screen and (max-width: 768px) {
  #table-totals {
    flex-direction: column;
    margin-bottom: 20px;
    div {
      display: flex;
      justify-content: space-between;
    }
    .total-label {
      color: #000;
      position: unset;
    }
    #table-total-label {
      font-size: 22px;
      justify-content: center;
    }
  }
}
</style>
