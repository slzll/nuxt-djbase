/**
* 通知列表
*/
<template>
  <div class="notice_list_component">
    <div class="news_item" v-for="item in noticeData" :key="item.NoticeId" @click="goArticleDetail(item)">
      <div class="news_img">
        <error-img :src="item.NoticeImg" :error-src="noNews"></error-img>
      </div>
      <div class="news_desc">
        <div class="news_name">
          {{item.NoticeTitle | wordLimit(25)}}
          <span class="is_important" v-if="item.isImportant">重要通知</span>
        </div>
        <div class="news_info">
          <span class="news_time">发布时间：{{item.NoticeCreatedate | dateFilter('yyyy.MM.dd')}}</span>
        </div>
      </div>
    </div>
    <div class="noDataBg" v-if="noData"></div>
    <div class="no-data" v-if="noMoreData">没有更多内容了...</div>
  </div>
</template>
<script>
  import errorImg from './errorImg'
  import noNews from '~/assets/img/latestNews.png'

  export default {
    components: {
      errorImg
    },
    props: {
      noticeData: Array,
      noMoreData: {
        type: Boolean,
        default: false
      },
      noData: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        noNews
      }
    },
    methods: {
      goArticleDetail ({ NoticeId, NoticeTitle }) {
        this.$router.push({ name: 'messageDetail', query: { Id: NoticeId, title: NoticeTitle } })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .notice_list_component {
    .news_item {
      padding: toRem(20px) toRem(30px);
      @extend %clearFix;
      background-color: $fill-base;
      border-bottom: 1px solid $border-color-base;
    }

    .news_img {
      @extend %pull-left;
      position: relative;
      width: toRem(240px);

      img {
        width: 100%;
        height: toRem(145px);
        border-radius: toRem(10px);
      }

      .tip {
        position: absolute;
        right: toRem(5px);
        top: toRem(5px);
        @include wh(50px, 27px);
      }
    }

    .news_desc {
      position: relative;
      @extend %pull-left;
      width: toRem(440px);
      height: toRem(145px);
      padding-left: toRem(15px);
    }

    .news_name {
      @include ellipsis_two(2);
      font-size: 15px;
      font-weight: 500;
      height: toRem(85px);

      .is_important {
        margin-left: toRem(20px);
        position: relative;
        top: toRem(-4px);
        display: inline-block;
        border-radius: toRem(6px);
        padding: 0 toRem(20px);
        height: toRem(30px);
        font-size: toRem(20px);
        line-height: toRem(30px);
        background: linear-gradient(to right, #fd751f, #fd3519);
        color: #fff;

        &:before {
          position: absolute;
          left: toRem(-12px);
          top: toRem(11px);
          content: '';
          display: block;
          border-top: toRem(4px) solid transparent;
          border-bottom: toRem(4px) solid transparent;
          border-right: toRem(12px) solid #fd751f;
        }
      }
    }

    .news_info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-left: toRem(20px);
      color: $color-text-thirdly;

      .news_time {
        @extend %pull-left;

      }

      .news_count {
        @extend %pull-right;

        img {
          margin-right: toRem(10px);
          @include wh(30px, 18px);
        }
      }
    }
  }
</style>
