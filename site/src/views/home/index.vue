<template>
  <div class="home-page page">
    <div class="tdesign-document tdesign-source-page">
      <!-- <div class="tdesign-source-header">
        <div class="content">
          <h1>Design Resources</h1>
          <div class="description">
            <p>
              Here are the download links for TDesign-related design resources
              and design tools. More design resources are being sorted out and
              perfected.
            </p>
          </div>
        </div>
      </div> -->

      <resources :data="data" />
      <more ref="moreRef" :status="status" />
      <td-doc-footer :style="footerStyle" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "home",
};
</script>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";
import resources from "./components/resources.vue";
import more from "@/components/more.vue";
import { getResources } from "@/api/resource";
const footerStyle = {
  "--content-padding-right": "0",
  "--content-max-width": "1440px",
  "--content-padding-left-right": "48px",
  "--footer-inner-position": "relative",
  "--footer-logo-position": "unset",
};

const data = ref([]);

const moreRef = ref(null);
const isVisible = useElementVisibility(moreRef);
const status = ref("");

const pagination = ref({
  pageSize: 12,
  total: 0,
  current: 1,
});

watch(() => isVisible.value, (value) => {
  if (status.value === 'finish') {
    return;
  }
  if (value) {
    pagination.value.current = pagination.value.current + 1;
    fetchData();
  }
});

const fetchData = async () => {
  status.value = "loading";
  try {
    const { list, total } = await getResources({
      page: pagination.value.current,
      pageSize: pagination.value.pageSize,
    });
    if (list.length === 0) {
      status.value = "finish";
    } else {
      data.value = data.value.concat(list);
      pagination.value = {
        ...pagination.value,
        total,
      };
      status.value = "loaded";
    }
  } catch (e) {
    console.log(e);
  } finally {
    
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="less" scoped>
.tdesign-document {
  background: none;
}

.tdesign-source-page {
  --source-page-padding: 48px;

  @media screen and (max-width: 959px) {
    --source-page-padding: 24px;
  }

  @media screen and (max-width: 1344px) {
    --iframe-height: calc((100vw - 48px * 2) * (632 / 1344));
    --iframe-border: none;
    --iframe-border-radius: 0;
  }

  .tdesign-source-header {
    box-shadow: var(--header-box-shadow);

    .content {
      position: relative;

      td-doc-tabs {
        position: absolute;
        left: var(--source-page-padding);
      }
    }
  }
}
</style>
