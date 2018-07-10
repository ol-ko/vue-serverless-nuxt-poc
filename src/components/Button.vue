<template>
  <a :class="['base-button', 'color-' + color ]" v-on:click="onClick">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  props: {
    color: {
      type: String,
      required: false,
      default: "blue"
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
})
export default class Button extends Vue {}
</script>

<style lang="scss">
.base-button {
  background-color: white;
  color: #2c3e50;
  font-weight: bold;
  border-radius: 3em;
  padding: 0.75em 1.5em;
  cursor: pointer;

  &:hover {
    background-color: darken($color: white, $amount: 10%);
  }

  &.color-blue {
    background-color: #039be5;
    color: white;

    &:hover {
      background-color: darken($color: #039be5, $amount: 10%);
    }
  }
}
</style>