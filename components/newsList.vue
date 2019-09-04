/**
* 新闻列表
*/
<template>
  <div class="news_list">
    <div class="news_item" v-for="item in newsData" :key="item.ArticleId" @click="goArticleDetail(item.ArticleId)">
      <div class="news_img">
        <error-img :src="item.ArticleImg" :error-src="noNews"></error-img>
      </div>
      <div class="news_desc">
        <div class="news_name">
          {{item.ArticleTitle | wordLimit(20)}}
          <span class="is_new" v-if="item.isNew">new</span>
        </div>
        <div class="news_info">
          <span class="news_time">发布时间：{{item.ArticleCreateDate | dateFilter('yyyy.MM.dd')}}</span>
          <span class="news_count"><img src="~/assets/img/eye@2x.png" alt="">{{item.ClickCount}}</span>
        </div>
      </div>
    </div>
    <div class="noDataBg" v-if="noData"></div>
    <div class="no-data" v-if="noMoreData">没有更多内容了...</div>
  </div>
</template>
<script>
  import noNews from '~/assets/img/latestNews.png'
  import { errorImg } from '~/components'
  import { toPlay } from '~/service/mixins'

  export default {
    components: {
      errorImg
    },
    mixins: [toPlay],
    props: {
      newsData: Array,
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
      goArticleDetail (id) {
        this.$router.push({ path: 'newsDetails', query: { id } })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .news_list {
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
      font-size: toRem(30px);
      font-weight: 500;
      height: toRem(85px);

      .is_new {
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
          top: toRem(8px);
          content: '';
          display: block;
          border-top: toRem(7px) solid transparent;
          border-bottom: toRem(7px) solid transparent;
          border-right: toRem(14px) solid #fd751f;
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
