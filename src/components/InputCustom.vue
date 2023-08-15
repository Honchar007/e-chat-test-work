<template>
  <input
    class="input-content"
    :class="{
      'readonly': readonly,
    }"
    :value="modelValue"
    :readonly="readonly"
    @focus="$emit('focus', $event)"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
import {
  defineComponent,
} from 'vue';

// components
export default defineComponent({
  name: 'InputCustom',
  components: {
  },
  props: {
    readonly: {
      type: Boolean,
      default: false,
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
.input-content {
  position: relative;
  display: inline-flex;
  width: 100%;
  border-radius: 10rem;
  padding: 0 0.875rem;
  transition: 0.3s ease-in-out all;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.875rem;

  &.readonly {
    cursor: default;
  }

  &:focus {
    box-shadow: 0px 4px 16px rgba(1, 1, 1, 0.2);
  }

  &:hover {
    box-shadow: 0px 4px 16px rgba(1, 1, 1, 0.2);
  }

  &::placeholder {
    color: rgb(0, 0, 0);
  }
}
</style>