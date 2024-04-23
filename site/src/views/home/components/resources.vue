<template>
  <div class="tdesign-source-content">
    <div class="tdesign-source-content-box">
      <h2 class="tdesign-source-content__title">Resource Preview</h2>
    </div>

    <div class="tdesign-source-content-box">
      <div v-if="data.length === 0" class="text-center">
        <t-loading class="py-48" />
      </div>
      <ul v-else class="tdesign-source-content__list">
        <li
          class="tdesign-source-content__list-item"
          :class="{ disabled: item.status === -1 }"
          v-for="(item, index) in data"
          :key="item.id"
          @click="handleSourceClick(item)"
        >
          <div class="tdesign-source-content__list-item-inner">
            <div :class="['mask', masks[index%9]]"></div>
            <span class="source-tag new">{{ item.tags.replaceAll(',', ' · ') }}</span>
            <!-- <span class="source-tag doing" v-else-if="item.status === 2"
              >Updating</span
            >
            <span class="source-tag todo" v-else-if="item.status === -1"
              >In Progress</span
            > -->
            <img v-if="item.logo" :src="`https://cos.wozaizhao.com/${item.logo}`" class="source-icon max-h-8 max-w-16" />
            <h3 class="source-title capitalize">
              {{ item.title }}
              <t-icon
                class="source-title-action"
                color="#777"
                name="jump"
                size="16px"
              />
            </h3>
            <div class="source-detail">
              <span class="source-detail-watch" v-if="item.watch">
                <t-icon name="browse" size="16px" />
                {{ item.watch }}
              </span>
              <t-tooltip :content="item.comment" theme="light" placement="bottom">
                <span class="source-detail-time truncate">
                <!-- <t-icon name="history" size="16px" /> -->
                {{ item.comment }}
              </span>
              </t-tooltip>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- <div class="tdesign-source-content-box">
      <h2 class="tdesign-source-content__title">Contributors</h2>
      <a class="contributor-link" href="" target="_blank">怎样参与 TDesign 设计资源开源共建？</a>
      <div class="contributor-list">
        <a
          class="contributor-avatar"
          :href="'https://github.com/' + user"
          target="_blank"
          v-for="user in webDesignContributor"
          :key="user"
        >
          <t-tooltip :content="user">
            <img
              :src="'https://avatars.githubusercontent.com/' + user"
              width="56"
            />
          </t-tooltip>
        </a>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "home",
};
</script>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const masks = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i'
}

const handleSourceClick = () => {};
</script>

<style lang="less">
.tdesign-source-content {
  background: none;
  overflow: hidden;

  &-box {
    padding: 0 var(--source-page-padding);
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  &__title {
    margin-top: 72px;
    color: var(--text-primary);
  }

  &__list {
    --item-width: calc((100% - 24px * 3) / 4);
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin-top: 24px;
    // min-height: 500px;

    @media screen and (max-width: 1200px) {
      --item-width: calc((100% - 24px * 2) / 3);
    }

    @media screen and (max-width: 959px) {
      --item-width: calc((100% - 24px) / 2);
    }

    @media screen and (max-width: 639px) {
      --item-width: 100%;
    }

    &-item {
      width: var(--item-width);
      position: relative;
      cursor: pointer;
      overflow: hidden;
      box-sizing: border-box;
      padding: 1px;
      border-radius: 10px;

      &.disabled {
        cursor: no-drop;
      }

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: conic-gradient(
          from 187.79deg at 50% 50%,
          #4ceb1b 0deg,
          #0062ff 180deg,
          #4ceb1b 360deg
        );
        z-index: -1;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s linear;
      }

      &-inner {
        display: flex;
        gap: 10px;
        border-radius: 9px;
        flex-direction: column;
        justify-content: flex-end;
        padding: 16px;
        height: 118px;
        box-sizing: border-box;
        background: var(--td-bg-color-resource);
      }

      &:hover {
        &::after {
          opacity: 1;
          visibility: visible;
        }

        .source-title-action {
          opacity: 1;
          visibility: visible;
        }
      }

      .mask {
        position: absolute;
        width: 400px;
        height: 400px;
        left: 0;
        top: 0;
        border-radius: 100%;
        filter: blur(50px);
        pointer-events: none;
        z-index: 10;

        &.a {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(242, 78, 30, 0.1) 0%,
            rgba(242, 78, 30, 0) 100%
          );
          animation: maskRun1 20s linear infinite;
        }

        &.b {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(253, 173, 0, 0.1) 0%,
            rgba(253, 173, 0, 0) 100%
          );
          animation: maskRun2 20s linear infinite;
        }

        &.c {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(246, 94, 199, 0.1) 0%,
            rgba(246, 94, 199, 0) 100%
          );
          animation: maskRun3 20s linear infinite;
        }

        &.d {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(255, 97, 246, 0.1) 0%,
            rgba(255, 97, 246, 0) 100%
          );
          animation: maskRun1 20s linear infinite;
        }

        &.e {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(0, 199, 248, 0.1) 0%,
            rgba(0, 199, 248, 0) 100%
          );
          animation: maskRun2 20s linear infinite;
        }

        &.f {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(253, 173, 0, 0.1) 0%,
            rgba(253, 173, 0, 0) 100%
          );
          animation: maskRun3 20s linear infinite;
        }

        &.g {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(246, 94, 199, 0.1) 0%,
            rgba(246, 94, 199, 0) 100%
          );
          animation: maskRun3 20s linear infinite;
        }

        &.h {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(255, 51, 51, 0.1) 0%,
            rgba(255, 51, 51, 0) 100%
          );
          animation: maskRun1 20s linear infinite;
        }

        &.i {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(57, 112, 227, 0.1) 0%,
            rgba(57, 112, 227, 0) 100%
          );
          animation: maskRun2 20s linear infinite;
        }
      }

      .source-tag {
        position: absolute;
        left: 1px;
        top: 1px;
        border-top-left-radius: 9px;
        border-bottom-right-radius: 9px;
        padding: 6px 16px;

        &.new {
          color: var(--success-main);
          background: var(--success-main-light);
        }

        &.doing {
          color: var(--warning-main);
          background: var(--warning-main-light);
        }

        &.todo {
          color: var(--text-secondary);
          background: var(--bg-color-tag);
        }
      }
    }

    .source-icon {
      position: absolute;
      top: 16px;
      right: 16px;
    }

    .source-title {
      color: var(--text-primary);
      font-size: 20px;
      &-action {
        // position: absolute;
        // right: 20px;
        // bottom: 24px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s linear;
      }
    }

    .source-detail {
      display: flex;
      gap: 16px;
      color: var(--text-placeholder);

      &-watch,
      &-time {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      
    }
  }

  .contributor-link {
    margin: 16px 0 24px;
    display: block;
    text-decoration: none;
  }

  .contributor-list {
    margin-top: 24px;
    margin-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 16px;
    padding-left: 10px;

    .contributor-avatar {
      margin-left: -10px;

      img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 4px solid var(--bg-color-container);
      }
    }
  }
}
</style>
