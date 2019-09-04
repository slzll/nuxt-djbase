/**
* 通知公告
*/
<template>
  <div class="notice_center container_top">
    <!--头部-->
    <header-fix title="通知公告" fixed>
      <i class="webapp webapp-left" @click.stop="goBack" slot="left"></i>
    </header-fix>
    <section v-infinite-scroll="getNoticeList"
             infinite-scroll-immediate-check="immediate"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
      <notice-list :notice-data="noticeData" :no-data="noData" :no-more-data="noMoreData"></notice-list>
    </section>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import { goBack } from '~/service/mixins'
  import {
    GetNoticeInfoList
  } from '~/service/getData'
  import headerFix from '~/components/headerFix'
  import noticeList from '~/components/noticeList'

  export default {
    head: { title: '通知公告' },
    components: {
      headerFix,
      noticeList
    },
    mixins: [goBack],
    data () {
      return {
        loading: false,
        immediate: false,
        noData: false,
        noMoreData: false,
        noticeData: [],
        page: 1
      }
    },
    mounted () {
      this.getNoticeList()
    },
    methods: {
      /* 获取站内信 */
      async getNoticeList () {
        if (this.page > 1 && this.noMoreData) {
          return
        }
        Indicator.open()
        let res = await GetNoticeInfoList({ Page: this.page })
        Indicator.close()
        if (res.IsSuccess) {
          let list = res.Data.List || []
          if (list.length === 0 && this.page > 1) {
            this.noMoreData = true
            return
          }
          if (list.length === 0 && this.page == 1) {
            this.noData = true
            return
          }
          list.forEach(item => {
            const createTime = new Date(item.NoticeCreatedate)
            const now = new Date()
            item.isNew = now - createTime < 30 * 24 * 60 * 60 * 1000
            const categories = item.NoticeCategory
            item.isImportant = false
            categories.forEach(category => {
              if (category.Code == 'zytz') {
                item.isImportant = true
              }
            })
          })
          this.noticeData = this.noticeData.concat(list)
          this.page++
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .notice_center {
    & > .header {
      border-bottom: 1px solid $border-color-base;
    }
  }
</style>
