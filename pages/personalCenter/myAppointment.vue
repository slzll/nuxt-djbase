<template>
  <section class="my_appointment_page container_top">
    <header-fix title="我的预约" fixed>
      <i slot="left" class="webapp webapp-left" @click="goBack"></i>
    </header-fix>
    <section v-infinite-scroll="getList"
             infinite-scroll-immediate-check="listParams.immediate"
             infinite-scroll-disabled="listParams.loading"
             infinite-scroll-distance="10">
      <ul class="appoint_list">
        <li class="appoint_item" v-for="item in dataList" :key="item.Id">
          <nuxt-link :to="{name: 'appointmentDetail', query: {Id: item.Id}}">
            <error-img class="appoint_img" :src="item.PlacePhoto" :error-src="noImg"></error-img>
            <p class="appoint_location">
              <i class="webapp webapp-location"></i>
              <span>{{item.PlaceName}}</span>
            </p>
            <p class="appoint_time">
              <i class="webapp webapp-time"></i>
              <span>{{item.BeginTime | dateFilter('yyyy-MM-dd')}}</span>
              ~
              <span>{{item.EndTime | dateFilter('yyyy-MM-dd')}}</span>
            </p>
          </nuxt-link>
          <span v-if="item.Status == 2" class="status_block auditing">审核中</span>
          <span v-else-if="item.Status == 1" class="status_block auditing">未审核</span>
          <span v-else-if="item.Status == 3" class="status_block approve">已审核</span>
        </li>
      </ul>
      <div class="no-data" v-if="listParams.noMoreData">没有更多数据</div>
      <div class="no-meet-data" v-if="listParams.noData">暂无相关数据</div>
    </section>
  </section>
</template>
<script>
  import { goBack } from '~/service/mixins'
  import { PlaceReserve } from '~/service/getData'
  import noImg from '~/assets/img/noPhoto.png'
  import { headerFix, errorImg } from '~/components'

  export default {
    components: {
      headerFix,
      errorImg
    },
    mixins: [goBack],
    data () {
      return {
        noImg,
        listParams: {
          page: 1,
          loading: false,
          immediate: false,
          noData: false,
          noMoreData: false
        },
        dataList: []
      }
    },
    created () {
      this.getList()
    },
    methods: {
      async getList () {
        const { page, loading, noMoreData } = this.listParams
        if (page > 1 && noMoreData && !loading) {
          return
        }
        let res = await PlaceReserve({ Page: page })
        if (res.IsSuccess) {
          let list = res.Data.PlaceReserveInfoList
          if (page == 1 && list.length == 0) {
            this.listParams.noData = true
            return
          }
          if (page > 1 && list.length == 0) {
            this.listParams.noMoreData = true
            return
          }
          this.listParams.page++
          this.dataList = this.dataList.concat(list)
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/scss/mixin";

  .my_appointment_page {
    background-color: #fff;

    .header {
      background-color: $brand-primary;

      /deep/ {
        .header_title, .webapp {
          color: #fff;
        }
      }
    }

    .appoint_list {
      padding: 0 toRem(30px);

      .appoint_item {
        position: relative;
        margin-top: toRem(20px);

        .appoint_img {
          @include wh(690px, 340px);
          border-radius: toRem(10px);
        }

        .appoint_location {
          @extend %ellipsis;
          margin-top: toRem(30px);
          font-size: toRem(30px);
          color: #333333;

          .webapp {
            margin-right: toRem(20px);
            font-size: toRem(30px);
            color: #333333;
          }
        }

        .appoint_time {
          margin-top: toRem(20px);
          margin-bottom: toRem(50px);
          font-size: toRem(24px);
          color: #989898;

          .webapp {
            margin-right: toRem(20px);
            color: #989898;
            font-size: toRem(24px);
          }
        }

        .status_block {
          display: inline-block;
          position: absolute;
          top: toRem(27px);
          left: toRem(20px);
          width: toRem(90px);
          height: toRem(40px);
          line-height: toRem(40px);
          background-blend-mode: normal, normal;
          border-radius: 4px;
          color: #fff;
          font-size: toRem(22px);
          text-align: center;

          &.auditing {
            background-image: linear-gradient(90deg, #fd781f 0%, #fd3419 100%);
          }

          &.unaudit {
            background-image: linear-gradient(90deg, #d2d0ce 0%, #a1a1a1 100%);
          }

          &.approve {
            background-image: linear-gradient(90deg, #88ce19 0%, #1caf11 100%);
          }
        }
      }
    }
  }
</style>
