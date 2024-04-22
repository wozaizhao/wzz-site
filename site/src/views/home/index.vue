<template>
  <div class="home-page page">
    <div class="tdesign-document tdesign-source-page">
      <div class="tdesign-source-header">
        <div class="content">
          <h1>Design Resources</h1>
          <div class="description">
            <p>
              Here are the download links for TDesign-related design resources
              and design tools. More design resources are being sorted out and
              perfected.
            </p>
            <p>
              If you have any suggestions or feedback, please send an email to
              tdesign@tencent.com or submit an
              <a
                href="https://github.com/Tencent/tdesign/issues"
                target="_blank"
                >issue</a
              >
            </p>
          </div>

          <!-- <td-doc-tabs ref="tabs" :tab="tab"></td-doc-tabs> -->
        </div>
      </div>

      <resources :data="data" />
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
import { onMounted, ref } from 'vue';
import resources from './components/resources.vue';
import { getResources } from '@/api/resource';
const footerStyle = {
  "--content-padding-right": "0",
  "--content-max-width": "1440px",
  "--content-padding-left-right": "48px",
  "--footer-inner-position": "relative",
  "--footer-logo-position": "unset",
};

const data = ref([]);

onMounted(() => {
  getResources().then(res => {
    data.value = res.list;
  });
})
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
