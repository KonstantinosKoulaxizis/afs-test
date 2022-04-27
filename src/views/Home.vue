<template>
  <div class="home">
    <h1>This is a table with some important data</h1>
    <div id="add-security-container">
      <button type="button" @click="showModal">Add security class</button>
    </div>
    <b-table :data="$store.state.homeTableData" :columns="columns"></b-table>
    <table-totals :tableData="$store.state.homeTableData" />

    <new-security-modal
      :isModalVisible="isModalVisible"
      :formFields="columns"
      @close="closeModal"
    ></new-security-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TableTotals from "@/components/homeComponents/tableTotals.vue";
import NewSecurityModal from "@/components/homeComponents/newSecurityModal.vue";
import { SECURITY_TABLE_COLUMNS } from "@/utils/SecurityTableColumns";

@Component({
  components: { TableTotals, NewSecurityModal },
})
export default class Home extends Vue {
  columns = SECURITY_TABLE_COLUMNS;
  isModalVisible = false;

  showModal(): void {
    this.isModalVisible = true;
  }
  closeModal(): void {
    this.isModalVisible = false;
  }

  // Add missing return type of function in order to remove editor's complains
  mounted(): void {
    this.handleGetInitialData();
  }

  async handleGetInitialData(): Promise<void> {
    // Implement a check and fetch data only if the array is empty
    // in order to prevent unnecessary requests
    if (!this.$store.state.homeTableData?.length) {
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
    cursor: pointer;
  }
}
</style>
