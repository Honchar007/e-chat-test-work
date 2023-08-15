<template>
  <div class="input-wrapper">
    <InputCustom
      v-model="text"
    />
    <ButtonCustom
      :onclick="addTodo"
    >
    +
    </ButtonCustom>
  </div>
</template>
<script>
import {
  defineComponent,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { Actions } from '../store/props';

// components
import ButtonCustom from './ButtonCustom.vue';
import InputCustom from './InputCustom.vue';

export default defineComponent({
  name: 'AddToDo',
  components: {
    ButtonCustom,
    InputCustom,
  },
  props: {
    modelValue: {},
  },
  emits: ['update:modelValue', 'focus'],
  setup() {
    const store = useStore();

    const text = ref('');

    function addTodo() {
      if(text.value !== '') {
        const todo = {
          id: uuidv4(),
          text: text.value,
          done: false,
        };
        store.dispatch(Actions.addTodo, todo);
        text.value = '';
      } else {
        alert('You can not add empty task');
      }
    }
    return {
      text,
      addTodo,
    };
  },
});
</script>
<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap:0.5rem;

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
}
</style>