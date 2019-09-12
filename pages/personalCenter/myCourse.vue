/**
* 我的课程
*/
<template>
  <div class="my_course container_top">
    <header-fix fixed>
      <i class="webapp webapp-left" @click.stop="goBack" slot="left"></i>
      <mb-tab slot="title" v-model="tabType">
        <mb-tab-item id="0">未完成</mb-tab-item>
        <mb-tab-item id="1">已完成</mb-tab-item>
      </mb-tab>
      <nuxt-link slot="right" to="/courseSearch"><i class="webapp webapp-search"></i></nuxt-link>
    </header-fix>
    <div class="my_course_container">
      <mt-tab-container v-model="tabType">
        <mt-tab-container-item id="0">
          <section v-if="tabType === '0'" v-infinite-scroll="getMyUnFinishCourse"
                   infinite-scroll-disabled="loading"
                   infinite-scroll-immediate-check="immediate"
                   infinite-scroll-distance="10">
            <course-list :course-data="courseUnFinishData"
                         :no-data-bg="noUfDataBg"
                         :no-data="noUfData"
                         my-course>
            </course-list>
          </section>
        </mt-tab-container-item>
        <mt-tab-container-item id="1">
          <section v-if="tabType === '1'" v-infinite-scroll="getMyFinishCourse"
                   infinite-scroll-disabled="loading"
                   infinite-scroll-immediate-check="immediate"
                   infinite-scroll-distance="10">
            <course-list :course-data="courseFinishData"
                         :no-data-bg="noFDataBg"
                         :no-data="noFData"
                         my-course>
            </course-list>
          </section>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import { headerFix, mbTab, mbTabItem, courseList } from '~/components'
  import { goBack } from '~/service/mixins'
  import { GetUserCourseInfoList } from '~/service/getData'

  export default {
    components: {
      headerFix,
      mbTab,
      mbTabItem,
      courseList
    },
    mixins: [goBack],
    data () {
      return {
        tabType: '0',
        courseFinishData: [],
        courseUnFinishData: [],
        noFDataBg: false,
        noFData: false,
        noUfDataBg: false,
        noUfData: false,
        loading: false,
        immediate: false,
        unFinishPage: 1,
        finishPage: 1,
        startX: 0,
        endX: 0
      }
    },
    mounted () {
      this.getMyFinishCourse()
      this.getMyUnFinishCourse()
    },
    methods: {
      // 已完成课程
      async getMyFinishCourse () {
        this.noFData = false
        this.noFDataBg = false
        this.loading = true
        Indicator.open()
        let data = await GetUserCourseInfoList({ Finish: '1', Page: this.finishPage })
        Indicator.close()
        if (data.Type == 1) {
          let list = data.Data.List
          if (list.length == 0 && this.finishPage > 1) {
            this.noFData = true
            return
          }
          if (list.length == 0 && this.finishPage == 1) {
            this.noFDataBg = true
            return
          }
          this.courseFinishData = this.courseFinishData.concat(list)
          this.loading = false
          this.finishPage += 1
        }
      },
      // 未完成课程
      async getMyUnFinishCourse () {
        this.noUfData = false
        this.noUfDataBg = false
        this.loading = true
        Indicator.open()
        let data = await GetUserCourseInfoList({ Finish: '0', Page: this.unFinishPage })
        Indicator.close()
        if (data.Type == 1) {
          let list = data.Data.List
          if (list.length == 0 && this.unFinishPage > 1) {
            this.noUfData = true
            return
          }
          if (list.length == 0 && this.unFinishPage == 1) {
            this.noUfDataBg = true
            return
          }
          this.courseUnFinishData = this.courseUnFinishData.concat(list)
          this.loading = false
          this.unFinishPage += 1
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .my_course {
    .mb_tab {
      .mb_tab_item {
        border: 1px solid #d61300;
        background-color: #fff;
        color: #d61300;
        font-size: 14px;
        padding: 0 toRem(25px);
        display: block;

        &.active {
          background: #d61300;
          color: #fff;
        }

      }

      :first-child {
        @include border-left-radius(10px);
      }

      :nth-child(2) {
        @include border-right-radius(10px);
      }
    }
  }
</style>
