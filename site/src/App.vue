<template>
  <td-doc-layout direction="column">
    <td-header framework="site" :style="headerStyle" />
    <router-view />
  </td-doc-layout>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1200,
  "--bg-color-secondarypage": "var(--bg-color-navigation)",
  "--bg-color-secondarypage-hover": "var(--bg-color-navigation-hover)",
  "--bg-color-secondarypage-select": "var(--bg-color-navigation-select)",
};
</script>

<style scoped></style>
