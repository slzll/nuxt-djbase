<template>
  <section class="my_exam_page container_top">
    <header-fix title="我的考试" fixed>
      <i slot="left" class="webapp webapp-left" @click="goBack"></i>
    </header-fix>
    <mt-navbar v-model="examType" class="examList-title">
      <mt-tab-item id="UnJoin">未考</mt-tab-item>
      <mt-tab-item id="Joined">已考</mt-tab-item>
    </mt-navbar>
    <mt-tab-container>
      <mt-tab-container-item>
        <section v-infinite-scroll="getExamList"
                 infinite-scroll-immediate-check="immediate"
                 infinite-scroll-disabled="loading"
                 infinite-scroll-distance="10">
          <exam-list :exam-data="examData"
                     :no-data-bg="noData"
                     :no-data="noMoreData">
          </exam-list>
        </section>
      </mt-tab-container-item>
    </mt-tab-container>
  </section>
</template>

<script>
  import { Indicator } from 'mint-ui'
  import { goBack } from '~/service/mixins'
  import { GetMyExamList } from '~/service/getData'
  import { headerFix, examList } from '~/components'

  export default {
    components: {
      headerFix,
      examList
    },
    mixins: [goBack],
    data () {
      return {
        examType: 'UnJoin',
        page: 1,
        noMoreData: false,
        noData: false,
        examData: [],
        immediate: false,
        loading: false
      }
    },
    watch: {
      examType (val) {
        this.page = 1
        this.noMoreData = false
        this.noData = false
        this.loading = false
        this.examData = []
        this.getExamList()
      }
    },
    created () {
      this.getExamList()
    },
    methods: {
      // 考试列表
      async getExamList () {
        if ((this.page > 1 && this.noMoreData) || this.loading) {
          return
        }
        Indicator.open()
        this.loading = true
        let data = await GetMyExamList({ ExamType: this.examType, TypeId: 0, Page: this.page })
        this.loading = false
        Indicator.close()
        if (data.IsSuccess) {
          let list = data.Data.List
          if (list.length == 0 && this.page > 1) {
            this.noMoreData = true
            return
          }
          if (list.length == 0 && this.page == 1) {
            this.noData = true
            return
          }
          this.examData = this.examData.concat(list)
          this.page += 1
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~assets/scss/mixin.scss";

  .my_exam_page {
    .header {
      background-color: $brand-primary;

      .webapp, /deep/ .header_title {
        color: #fff;
      }
    }
  }
</style>
