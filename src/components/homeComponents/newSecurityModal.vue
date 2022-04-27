<template>
  <modal-template v-show="isModalVisible" @close="close">
    <template v-slot:header> This is a new modal header. </template>

    <template v-slot:body>
      <form id="new-seurity-form" v-on:submit.prevent="handleNewSecurity">
        <div class="field-tile" v-for="field in formFields" :key="field.label">
          <div>
            <label>{{ field.label }} </label>
            <input
              :type="field.text ? 'text' : 'number'"
              v-model="formValue[field.field]"
            />
          </div>
          <p
            class="error-message"
            v-if="notValidated && !formValue[field.field]"
          >
            * Please provide a value
          </p>
        </div>

        <div id="new-security-form-btn">
          <button>Create new security class</button>
        </div>
      </form>
    </template>
  </modal-template>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ModalTemplate from "@/templates/modalTemplate.vue";
import { FormFieldObj } from "@/types/types";

@Component({
  name: "NewSecurityModal",
  components: { ModalTemplate },
})
export default class NewSecurityModal extends Vue {
  public formValue: any = {};
  public notValidated = false;
  @Prop({ required: true }) isModalVisible!: boolean;
  @Prop({ required: true }) formFields!: FormFieldObj[];

  handleNewSecurity(): void {
    const notValidated = this.formFields.some(
      (field) => !this.formValue?.[field.field]?.length
    );
    // Make sure all fields are populated
    if (notValidated) {
      this.notValidated = true;
    } else {
      // Turn all not text props in to number
      const formtated = { ...this.formValue };
      this.formFields.forEach((field) => {
        if (!field.text) {
          formtated[field.field] = Number(formtated[field.field]);
        }
      });

      const newSecurityClass = {
        id: new Date(),
        ...formtated,
      };

      this.$store.commit("addTableData", newSecurityClass);
      this.formValue = {};
      this.close();
    }
  }

  close(): void {
    this.notValidated = false;
    this.$emit("close");
  }
}
</script>

<style lang="scss">
#new-seurity-form {
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  justify-content: center;
  height: 100%;

  .field-tile {
    border: 1px solid #000;
    padding: 15px;
    box-shadow: 1px 1px 3px 1px;
    border-radius: 8px;
    border-bottom: 1px solid black;
    div {
      display: flex;
      gap: 10px;
      justify-content: space-between;
    }

    .error-message {
      color: red;
      text-align: left;
      padding-top: 10px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  #new-security-form-btn {
    width: 100%;
    button {
      padding: 12px;
      font-size: 16px;
      border-radius: 8px;
      color: rgb(55, 55, 55);
      background-color: #93bc39;
      font-weight: bold;
      margin-top: 20px;
      width: 90%;
      cursor: pointer;
    }
  }
}
</style>
