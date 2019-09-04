<template>
  <div class="footerFix">
    <mt-tabbar :value="selected" fixed>
      <mt-tab-item id="home" href="/">
        <img class="footer_icon_1" v-if="selected === 'home'" slot="icon" src="~/assets/img/hq-home-actived.png">
        <img class="footer_icon_1" v-else slot="icon" src="~/assets/img/hq-home-normal.png">
        主页
      </mt-tab-item>
      <mt-tab-item id="courseCenter" href="/courseCenter">
        <img class="footer_icon_2" v-if="selected === 'courseCenter'" slot="icon"
             src="~/assets/img/hq-course-actived.png">
        <img class="footer_icon_2" v-else slot="icon" src="~/assets/img/hq-course-normal.png">
        课程
      </mt-tab-item>
      <mt-tab-item id="orangize" href="/organise">
        <img class="footer_icon_3" v-if="selected === 'orangize'" slot="icon" src="~/assets/img/hq-org-actived.png">
        <img class="footer_icon_3" v-else slot="icon" src="~/assets/img/hq-org-normal.png">
        组织机构
      </mt-tab-item>
      <mt-tab-item id="personalCenter" href="/personalCenter">
        <img class="footer_icon_4" v-if="selected === 'personalCenter'" slot="icon"
             src="~/assets/img/hq-my-actived.png">
        <img class="footer_icon_4" v-else slot="icon" src="~/assets/img/hq-my-normal.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabItem } from 'mint-ui'
  import Vue from 'vue'

  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  export default {
    name: 'footerFix',
    props: {
      selected: {
        type: String
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .footerFix {
    .mint-tabbar {
      height: toRem(98px);
      background-color: #fff;
      border-top: 1px solid $border-color-base;
    }

    .mint-tab-item-icon {
      .webapp {
        font-size: 24px;
      }
    }

    .mint-tabbar > .mint-tab-item.is-selected {
      background-color: #fff;
      color: $brand-primary;
    }

    .mint-tab-item {
      padding: toRem(10px) 0;

      .mint-tab-item-icon {
        width: toRem(48px);
        height: toRem(48px);
        margin: 0 auto 0;

        & > {
          .footer_icon_1 {
            width: toRem(56px);
            height: toRem(48px);
            margin: 0 auto;
          }

          .footer_icon_2 {
            width: toRem(56px);
            height: toRem(46px);
            margin: 0 auto;
          }

          .footer_icon_3 {
            width: toRem(54px);
            height: toRem(48px);
            margin: 0 auto;
          }

          .footer_icon_4 {
            width: toRem(50px);
            height: toRem(53px);
            margin: 0 auto;
          }
        }
      }

      .mint-tab-item-label {
        line-height: 1.5;
        font-size: toRem(24px);
      }
    }
  }
</style>
