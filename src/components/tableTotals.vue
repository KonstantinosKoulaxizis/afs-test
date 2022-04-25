<template>
  <div id="table-totals">
    <span>Total</span>
    <span>{{ authorizedAmount }}</span>
    <span>{{ issuedAmount }}</span>
    <span>{{ authorizedCapital }}</span>
    <span>{{ issuedCapital }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { TableData } from "@/types/types";
import { TableTotalsData } from "@/classes/TableTotalsData";

@Component({
  name: "TableTotals",
})
export default class TableTotals extends Vue {
  public authorizedAmount = 0;
  public issuedAmount = 0;
  public authorizedCapital = 0;
  public issuedCapital = 0;
  @Prop({ required: true }) tableData!: TableData[];

  @Watch("tableData")
  onChildChanged(val: TableData[]): void {
    const updated = new TableTotalsData(val);
    this.authorizedAmount = updated.authorizedAmount;
    this.issuedAmount = updated.issuedAmount;
    this.authorizedCapital = updated.authorizedCapital;
    this.issuedCapital = updated.issuedCapital;
  }
}
</script>

<style lang="scss" scoped>
#table-totals {
  display: flex;
  border: 2px solid #727070;
  background-color: #e0dede;
  span {
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    border-left: 1px solid #727070;
    padding: 8px 12px;
  }
}
</style>
