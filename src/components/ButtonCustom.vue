<template>
  <button
    :class="{
      'outlined': outlined,
      'disabled': disabled,
    }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonCustom',
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  gap: 1rem;
  font-size: 1.75rem;
  color: rgb(128, 0, 128);
  background: rgb(255, 255, 255);
  border: 2px solid rgb(128, 0, 128);
  border-radius: 5.6rem;
  transition: color 0.3s ease-in-out,
    background 0.3s ease-in-out,
    border 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  :slotted(img) {
    transition: filter 0.3s ease-in-out;
    filter: brightness(1);
  }

    &.disabled {
      color: grey;
      cursor: default;
      opacity: 0.5;
    }

  &.disabled {
    cursor: default;
    opacity: 0.5;
  }

  .img {
    filter: brightness(0);
  }

  &:not(.disabled):hover {
    color: pink;
    background:  rgb(128, 0, 128);
    border: 2px solid  rgb(128, 0, 128);
    box-shadow: 0px 4px 16px rgba(252, 252, 253, 0.4);

    img {
      filter: brightness(0);
    }
  }
}
</style>
