<template>
  <button :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
button {
  background: none;
  border: none;
  color: #ffffff;
  font-weight: 700;
  background: #fb7f26;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  border-radius: 99px;
  transition: 300ms;

  &:hover {
    background: rgba(#fb7f26, 0.9);
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
}
</style>
