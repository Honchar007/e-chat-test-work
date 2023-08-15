<template>
  <Transition>
    <div class="input-wrapper">
      <CheckboxCustom
        :modelValue="checked"
        @change="changeCheck"
      />
      {{ readMode }}
      <InputCustom
        v-model="text"
        :readonly="readMode"
      />
      <ButtonCustom
        v-if="readMode"
        :onclick="editTodo"
      >
        <img src="../assets/edit.svg" alt="edit todo" />
      </ButtonCustom>
      <ButtonCustom
        v-else
        :onclick="editTodo"
      >
        <img src="../assets/save.svg" alt="edit todo" />
      </ButtonCustom>
      <ButtonCustom
        :onclick="removeTodo"
      >
        <img src="../assets/close.svg" alt="remove todo" />
      </ButtonCustom>
    </div>
  </Transition>
</template>
<script>
import {
  defineComponent,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import { Actions } from '../store/props';

// components
import CheckboxCustom from './CheckboxCustom.vue';
import ButtonCustom from './ButtonCustom.vue';
import InputCustom from './InputCustom.vue';

export default defineComponent({
  name: 'ToDoItem',
  components: {
    CheckboxCustom,
    ButtonCustom,
    InputCustom,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    modelValue: {},
  },
  emits: ['update:modelValue', 'focus'],
  setup(props) {
    const store = useStore();

    const text = ref(props.label);
    const checked = ref(props.todo.done);
    const readMode = ref(true);

    const changeCheck = () => {
      store.dispatch(Actions.editTodo, { ...props.todo, done: !props.todo.done });
    };

    const editTodo = () => {
      readMode.value = !readMode.value;
      if (readMode.value && props.todo.text !== text.value) {
        store.dispatch(Actions.editTodo, { ...props.todo, text: text.value });
      }
    };

    const removeTodo = () => {
      store.dispatch(Actions.removeTodo, props.todo.id);
    }

    return {
      text,
      checked,
      readMode,
      changeCheck,
      editTodo,
      removeTodo,
    };
  },
});
</script>
<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
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