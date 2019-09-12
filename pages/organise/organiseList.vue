<template>
  <div class="organiseList container_top">
    <!--头部-->
    <header-fix :title="organiseTitle" fixed>
      <i class="webapp webapp-left" @click.stop="goBack" slot="left"></i>
    </header-fix>
    <section class="zsListc" v-infinite-scroll="getGroupListc"
             infinite-scroll-immediate-check="immediate"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
      <ul>
        <li v-for="item in groupListc" :key="item.UserId">
          <router-link :to="{name: 'partyMemberFile', query: {Id: item.UserId}}">
            <div class="text-top">
              <div class="text-ns">
                <p class="text-name">姓名: <span>{{item.UserName}}</span></p>
                <p class="text-sex">性别:<span>{{item.Sex || '暂无数据'}}</span></p>
              </div>
              <div class="text-zw">
                <p>职务: <span>{{item.UserZW || '无'}}</span></p>
              </div>
            </div>
            <div class="text-bottom">
              <p class="text-dep">所属支部: <span>{{item.GroupName}}</span></p>
              <p class="text-time" v-if="item.JoinPartyDate">入党时间: <span>{{item.JoinPartyDate | dateFilter('yyyy.MM.dd')}}</span>
              </p>
              <p class="text-time" v-else>入党时间: <span>暂无数据</span></p>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="noDataBg" v-if="noDataBg"></div>
      <div class="no-data" v-if="noData">没有更多内容了...</div>
    </section>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import { headerFix } from '~/components'
  import { goBack } from '~/service/mixins'
  import { GetUserListByGroupId } from '~/service/getData'

  export default {
    components: {
      headerFix
    },
    mixins: [goBack],
    data () {
      return {
        organiseTitle: '',
        groupListc: [],
        groupId: '',
        noData: false,
        page: 1,
        noDataBg: false,
        loading: false,
        immediate: false
      }
    },
    created () {
      this.groupId = this.$route.query.id
      this.organiseTitle = this.$route.query.UserGroupName
    },
    mounted () {
      this.getGroupListc()
    },
    methods: {
      // 获取单位列表
      async getGroupListc () {
        if ((this.page > 1 && this.noData) || this.loading) {
          return
        }
        Indicator.open()
        this.loading = true
        let data = await GetUserListByGroupId({ GroupId: this.groupId, Page: this.page, Rows: 10 })
        this.loading = false
        Indicator.close()
        if (data.Type == 1) {
          let list = data.Data.rows
          if (list.length == 0 && this.page > 1) {
            this.noData = true
            return
          }
          if (list.length == 0 && this.page == 1) {
            this.noDataBg = true
            return
          }
          this.page += 1
          this.groupListc = this.groupListc.concat(list)
        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .organiseList {
    background: $fill-body;
    padding-left: toRem(30px);

    .zsListc {

      ul {
        li {
          margin-top: toRem(20px);
          padding-bottom: toRem(20px);
          /*height: toRem(182px);*/
          height: auto;
          border-left: 5px solid #da1006;
          background: #fff;

          .text-top {
            margin-left: toRem(33px);
            border-bottom: 1px solid #dcdcdc;
            height: toRem(123px);

            .text-ns {
              padding-top: toRem(18px);
              color: #333;
              font-size: 15px;
              @extend %clearFix;

              .text-name {
                @extend %pull-left;
              }

              .text-sex {
                @extend %pull-left;
                margin-left: toRem(100px);
              }
            }

            .text-zw {
              margin-top: toRem(15px)
            }
          }

          .text-bottom {
            margin-left: toRem(33px);
            padding-top: toRem(15px);
            @extend %clearFix;
            color: #989898;

            .text-dep {
              @extend %pull-left;
              max-width: 50%;
            }

            .text-time {
              @extend %pull-left;
              max-width: 50%;
              margin-left: toRem(60px);
            }
          }

        }
      }
    }
  }
</style>
