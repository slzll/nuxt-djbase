<template>
  <section class="my_library_page container_top">
    <header-fix title="我的图书" fixed>
      <i slot="left" class="webapp webapp-left" @click="goBack"></i>
    </header-fix>
    <section v-infinite-scroll="getList"
             infinite-scroll-immediate-check="immediate"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
      <ul class="book_list">
        <li class="book_item" v-for="item in bookList" :key="item.Id">
          <div class="book_info">
            <p class="book_name">{{item.BookName}}</p>
            <div class="book_code_and_time">
              书籍编号：<span class="book_code">{{item.BookNo}}</span>
              借阅时间：<span class="book_time">{{item.BookReturnTime | day | date_format('YYYY-MM-DD')}}</span>
            </div>
          </div>
          <div v-if="item.BookState == 1" class="book_action" @click="returnBook(item)">
            <img src="~/assets/img/library_back.png" alt="">
            <p>还书</p>
          </div>
          <div v-else class="book_action">
            <p>已还书</p>
          </div>
        </li>
      </ul>
      <div v-if="noData" class="no-meet-data">暂无数据</div>
      <div v-if="noMoreData" class="no-data">没有更多数据啦</div>
    </section>
  </section>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import { goBack } from '~/service/mixins'
  import { GetBookRecordList, UpdateBookRecord } from '~/service/getData'
  import { headerFix } from '~/components'

  export default {
    components: {
      headerFix
    },
    mixins: [goBack],
    data () {
      return {
        bookList: [],
        immediate: false,
        loading: false,
        page: 1,
        noData: false,
        noMoreData: false
      }
    },
    created () {
      this.getList()
    },
    methods: {
      async getList () {
        if ((this.page > 1 && this.noMoreData) || this.loading) {
          return
        }
        this.loading = true
        let res = await GetBookRecordList({ Page: this.page })
        this.loading = false
        if (res.IsSuccess) {
          let list = res.Data.BookRecordInfoList
          if (this.page > 1 && list.length == 0) {
            this.noMoreData = true
            return
          }
          if (this.page == 1 && list.length == 0) {
            this.noData = true
            return
          }
          this.bookList = this.bookList.concat(list)
          this.page++
        }
      },
      async returnBook (item) {
        let res = await UpdateBookRecord({ Id: item.Id })
        MessageBox.alert(res.Message).then(() => {
          if (res.IsSuccess) {
            this.page = 1
            this.bookList = []
            this.noData = false
            this.noMoreData = false
            this.getList()
          }
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~assets/scss/mixin";

  .my_library_page {
    background-color: #fff;

    .header {
      background-color: $brand-primary;

      .webapp {
        color: #fff;
      }

      /deep/ .header_title {
        color: #fff;
      }
    }

    .book_list {
      padding: 0 toRem(30px);

      .book_item {
        padding: toRem(30px) 0;
        @include flex(flex-start);
        align-items: center;

        .book_info {
          border-right: 1px dashed $border-color-base;
          width: toRem(570px);

          .book_name {
            @extend %ellipsis;
            width: 100%;
            font-size: toRem(34px);
            font-weight: bold;
          }

          .book_code_and_time {
            margin-top: toRem(30px);
            color: #999;
            font-size: toRem(24px);

            .book_code {
              margin-right: toRem(30px);
            }
          }
        }

        .book_action {
          width: toRem(120px);
          text-align: center;

          img {
            @include wh(44px, 32px);
          }

          p {
            margin-top: toRem(20px);
            font-size: toRem(24px);
            font-weight: bold;
            color: $brand-primary;
          }
        }

        & + .book_item {
          border-top: 1px solid $border-color-base;
        }
      }
    }
  }
</style>
