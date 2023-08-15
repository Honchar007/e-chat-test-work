<template>
  <label>
      <span class="checkbox-container">
        <input
          type="checkbox"
          hidden
          :disabled="disabled"
          :checked="modelValue"
          @change="$emit('update:modelValue', $event.target.checked)"
        />
        <span class="checkmark" />
      </span>
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckboxCustom',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
    },
  },
  emits: ['update:modelValue'],
});
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .checkbox-container {
    .checkmark {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      background-color: rgb(255, 255, 255);
      border: 2px solid rgb(128, 0, 128);
      border-radius: 0.25rem;
      transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
      cursor: pointer;

      &::after {
        width: 7px;
        height: 14px;
        border: solid rgb(111, 8, 121);
        border-width: 0 2px 2px 0;
        transform: translateY(-3px) rotate(45deg);
        transition: opacity 0.3s ease-in-out;
        content: '';
        opacity: 0;
      }
    }

    input:checked + .checkmark {
      background-color: rgb(255, 255, 255);
      border-color: rgb(128, 0, 128);

      &::after {
        opacity: 1;
      }
    }

    input:disabled + .checkmark {
      border-color: rgb(182, 29, 196);
      cursor: not-allowed;
    }
  }
}
</style>