<template>
  <div class="input-wrapper">
    <CheckboxCustom />
    <input
      :value="modelValue"
      :disabled="disabled"
      @focus="$emit('focus', $event)"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button>Delete</button>
    <button>Edit</button>
  </div>
</template>
<script>
import {
  defineComponent,
} from 'vue';

// components
import CheckboxCustom from './CheckboxCustom.vue';

export default defineComponent({
  name: 'ToDoItem',
  components: {
    CheckboxCustom,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {},
  },
  emits: ['update:modelValue', 'focus'],
  setup() {
    return {

    };
  },
});
</script>
<style lang="scss" scoped>
  .input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>