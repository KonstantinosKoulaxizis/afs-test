<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal-paper">
        <header class="modal-header">
          <p><slot name="header"> This is the default tile! </slot></p>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body"> This is the default body! </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "ModalTemplate",
})
export default class ModalTemplate extends Vue {
  close(): void {
    this.$emit("close");
  }
}
</script>

<style lang="scss">
.modal-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-paper {
    background-color: #ffffff;
    max-width: 500px;
    max-height: 650px;
    overflow: scroll;
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 20px 1px;

    .modal-header {
      padding: 15px;
      display: flex;
    }

    .modal-header {
      position: relative;
      border-bottom: 1px solid #bdbdbd;
      background-color: #e0dede;
      color: #131514;
      justify-content: space-between;
      align-items: baseline;
      p {
        font-size: 20px;
        font-weight: bold;
      }

      .btn-close {
        border: none;
        font-size: 28px;
        cursor: pointer;
        font-weight: bold;
        color: #c51162;
        border-radius: 50%;
        background: transparent;
      }
    }

    .modal-body {
      position: relative;
      padding: 20px 10px;
    }
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
