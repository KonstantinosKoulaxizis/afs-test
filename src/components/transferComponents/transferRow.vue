<template>
  <div class="transfer-row-container">
    <div :class="transferClass">
      <h4>{{ transfer.fromSecurityHolder }}</h4>
      <p class="type-info">Type: {{ transfer.type }}</p>
      <p>Date: {{ transfer.recordDate }}</p>
      <p class="state-info">State: {{ transfer.state }}</p>
      <p class="amount-info">Amount: {{ transfer.amount }}</p>
      <span v-if="transfer.forgottenProperty">{{
        transfer.forgottenProperty
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Transaction } from "@/types/types";
import {
  TransferStyleClass,
  TransferTypes,
} from "@/classes/TransferStyleClass";

@Component({
  name: "TransferRow",
})
export default class TransferRow extends Vue {
  @Prop({ required: true }) transfer!: Transaction;

  get transferClass(): string {
    const resultClass = new TransferStyleClass(
      this.transfer.type as TransferTypes
    );
    return resultClass.transferClass;
  }
}
</script>

<style lang="scss">
.transfer-row-container {
  display: flex;
  justify-content: center;
  background-color: #505c73;
  margin: 0 20px;
  .transfer-row {
    background-color: #fdfdfd;
    margin: 1rem;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 6px;
    border-left: 5px solid #f1514a;

    .state-info {
      color: #b9b9b9;
    }

    .amount-info {
      color: #8e8e8e;
    }

    .type-info {
      font-weight: bold;
    }
  }

  .issue-stock {
    border-left-color: #bb66ca;
  }

  .increase-auth-capital {
    border-left-color: #4ea33b;
  }

  .transfer {
    border-left-color: #f6ac16;
  }
}
</style>
