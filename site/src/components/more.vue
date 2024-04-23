<template>
  <div class="">
    <div class="py-3 w-60 m-auto text-center">
      <t-loading v-if="status === 'loading'" />
      <t-divider v-else-if="status === 'finish'">没有更多了</t-divider>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: "more",
};
</script>

<script lang="ts" setup>

const props = defineProps({
  status: {
    type: String,
  },
});
</script>