<template>
  <div class="home_index container_bottom">

    <header-fix>
      <template slot="left"><img class="home_logo" src="~/assets/img/home_logo.png" alt=""></template>
      <template slot="right">
        <img class="home_credit_text" src="~/assets/img/home_credit_text.png" alt="">
        <span class="home_credit">{{userInfo.TotalCredit||0}}</span>
        <a>
          <error-img class="home_avator" :src="userInfo.UserPhoto" :error-src="noAvatar">
          </error-img>
        </a>
      </template>
    </header-fix>
    <div class="container">
      <div class="home-search">
        <nuxt-link slot="right" to="/message" class="message_icon">
          <div class="message_con">
            <img src="~/assets/img/email_icon.png" alt="">
            <span v-if="messageHas">{{messageNums}}</span>
          </div>
        </nuxt-link>
        <div class="search_container">
          <input type="text"
                 v-model="keyword"
                 @focus="search"
                 placeholder="关键词搜索"/>
          <img class="search_icon" src="~/assets/img/search.png" alt="">
        </div>
      </div>
      <mt-swipe class="header_swipe" :auto="4000">
        <mt-swipe-item v-for="item in swipeData" :key="item.Id">
          <a @click="judgeUrl(item)">
            <error-img :src="item.Icon"></error-img>
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <section class="guide_list">
        <div class="guide_container">
          <div class="guide_item" v-for="item in selectedIconList" :key="item.id">
            <nuxt-link :to="item.link">
              <img :src="item.icon" :alt="item.name">
              <p>{{item.name}}</p>
            </nuxt-link>
          </div>
          <div class="guide_item">
            <a @click="toggleIconList">
              <img src="~/assets/img/hq-home-more.png" alt="更多">
              <p>更多</p>
            </a>
          </div>
        </div>
      </section>
      <section class="important_notice">
        <div class="important_notice_title">
          <nuxt-link :to="{name: 'notice', query: {}}">
            <img src="~/assets/img/home_import_notice_icon.png" alt="重要通知">
          </nuxt-link>
        </div>
        <div class="important_notice_con">
          <ul class="marquee_list" :class="{marquee_top:animate}">
            <li v-for="item in importantNewsData" :key="item.NoticeId" @click="goNoticeDetail(item)">
              <div class="time">{{item.NoticeCreatedate | dateFilter('MM-dd') }}</div>
              <a>{{item.NoticeTitle | wordLimit(40)}}</a>
            </li>
          </ul>
        </div>
      </section>
      <div class="boundary"></div>
      <section class="news_container">
        <div class="container_header">
          <div class="header_title">资讯</div>
          <img class="news_arrow_img" src="~/assets/img/home_arrow.png" alt="">
          <span class="header_text">让你第一时间掌控</span>
          <nuxt-link class="header_more" :to="{name: 'newsCenter'}">更多+</nuxt-link>
        </div>
        <ul class="home_news_list">
          <li class="news_item" v-for="item in newsList" :key="item.ArticleId"
              :class="{'has_img': !!item.ArticleImg}">
            <nuxt-link :to="{name: 'newsCenter-newsDetails', query: {id: item.ArticleId}}">
              <div class="item_info">
                <div class="item_title">{{item.ArticleTitle | wordLimit(30)}}</div>
                <div class="item_type_and_time">
                  <span class="item_type">政策文件</span>
                  <span class="item_time">{{item.ArticleCreateDate | dateFilter('yyyy-MM-dd')}}</span>
                </div>
              </div>
              <error-img v-if="item.ArticleImg" class="news_img" :src="item.ArticleImg" :error-src="noCourse"/>
            </nuxt-link>
          </li>
        </ul>
        <div v-if="newsParams.noData" class="no-meet-data">沒有相关数据</div>
      </section>
    </div>
    <footer-fix selected="home"></footer-fix>
    <mt-popup class="icon_list_popup fixed_top" v-model="isShowIconList" position="right">
      <header-fix title="更多" fixed>
        <i slot="left" class="webapp webapp-left" @click="toggleIconList"></i>
      </header-fix>
      <div class="icon_list_container" :class="{'is-edit': isEditIcons}">
        <div class="home_icons icons_block" ref="fixedBlock" :class="{fixed_block: isFixedBlock}">
          <div class="icon_list_title">
            <span>首页应用</span>
            <a class="icon_action" @click="toggleEditIcons">{{isEditIcons?'完成':'编辑'}}</a>
          </div>
          <ul class="icon_list" v-if="selectedIconList.length>0">
            <li class="icon_item" v-for="item in selectedIconList" :key="item.id"
                @click="operateIcon(item)">
              <img class="icon_img" :src="item.icon" alt="">
              <p>{{item.name}}</p>
              <img class="btn remove_btn" src="~/assets/img/hq-btn-delete.png" alt="delete"/>
            </li>
          </ul>
        </div>
        <div class="icons_block" :class="{margin_block: isFixedBlock}"
             :ref="index==0?'marBlock':''"
             v-for="(iconObj,index) in iconList"
             :key="index">
          <div class="icon_list_title">
            <span>{{iconObj.title}}</span>
          </div>
          <ul class="icon_list">
            <li class="icon_item" v-for="item in iconObj.list" :key="item.id"
                v-show="!item.forAdmin || userInfo.IsAdmin"
                @click="operateIcon(item)">
              <img class="icon_img" :src="item.icon" alt="">
              <p>{{item.name}}</p>
              <img v-if="selectedIcons.includes(item.id)" class="btn remove_btn" src="~/assets/img/hq-btn-delete.png"
                   alt="delete"/>
              <img v-else class="btn add_btn" src="~/assets/img/hq-btn-add.png" alt="add"/>
            </li>
          </ul>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { Toast } from 'mint-ui'
  import { iconList } from '~/service/iconList'
  import { headerFix, footerFix, errorImg } from '~/components/index'
  import noNews from '~/assets/img/latestNews.png'
  import noCourse from '~/assets/img/noCourse.png'
  import noAvatar from '~/assets/img/hq-head-portrait@2x.png'

  export default {
    head: {
      title: '浙江中医药大学党建--首页'
    },
    components: {
      headerFix,
      footerFix,
      errorImg
    },
    data () {
      return {
        userInfo: {},
        noAvatar,
        showModel: false,
        swipeData: [],
        noNews,
        noCourse,
        importantNewsData: [],
        code: '',
        animate: false,
        keyword: '',
        isShowIconList: false,
        isEditIcons: false,
        iconList: iconList,
        selectedIcons: [],
        selectedIconList: [],
        isShowPartyPeople: false,
        isRemindParty: { flag: true, date: String(+new Date()) },
        isShowJoinParty: false,
        isRemindJoin: { flag: true, date: String(+new Date()) },
        partyPeopleData: {},
        djCount: 0,
        isFixedBlock: false
      }
    },
    computed: {
      ...mapState(['defaultIcons'])
    },
    async asyncData ({ app, req, params }) {
      // 未读信息
      const { $proxyUrl } = app

      let messageHas = false
      let messageNums = 0
      await app.$axios.$post(`${$proxyUrl}/api/wechat/GetMessageUnreadCount`).then((msgRes) => {
        if (msgRes.Type === 1) {
          messageHas = msgRes.Data.UnreadCount > 0
          messageNums = msgRes.Data.UnreadCount
        }
      })

      // 新闻列表
      let newsList = []
      let newsParams = { noData: false }
      await app.$axios.$post(`${$proxyUrl}/api/wechat/GetArticleInfoList`, {
        Page: 1,
        Rows: 6
      }).then(articleRes => {
        if (articleRes.IsSuccess) {
          let list = articleRes.Data.List
          if (list.length === 0) {
            newsParams.noData = true
          }
          newsList = list
        }
      })

      // 重要通知
      let importantNewsData = []
      await app.$axios.$post(`${$proxyUrl}/api/wechat/GetNoticeInfoList`, {
        NoticeCategoryCode: 'zytz',
        Rows: 5
      }).then(noticeRes => {
        if (noticeRes.IsSuccess) {
          importantNewsData = noticeRes.Data.List
        }
      })

      // 轮播信息
      let swipeData = []
      await app.$axios.$post(`${$proxyUrl}/api/mobile/GetLink`, { LinkType: 'IndexBannerList' }).then(linkRes => {
        if (linkRes.IsSuccess) {
          swipeData = linkRes.Data
        }
      })

      return {
        messageHas,
        messageNums,
        newsList,
        newsParams,
        importantNewsData,
        swipeData
      }
    },
    created () {
      this.setIcons()
    },
    mounted () {
      setInterval(this.showMarquee, 5000)
    },
    methods: {
      // 设置首页显示的快捷入口图标
      setIcons () {
        this.selectedIcons = this.defaultIcons.slice()
        for (let i = 0; i < iconList.length; i++) {
          let iconsObj = iconList[i]
          for (let j = 0; j < iconsObj.list.length; j++) {
            let iconItem = iconsObj.list[j]
            if (this.selectedIcons.includes(iconItem.id)) {
              let index = this.selectedIcons.indexOf(iconItem.id)
              this.selectedIconList[index] = iconItem
            }
          }
        }
      },
      // 打开/关闭 更多列表
      toggleIconList () {
        this.isShowIconList = !this.isShowIconList
      },
      // 编辑/完成 切换
      toggleEditIcons () {
        this.isEditIcons = !this.isEditIcons
        this.isFixedBlock = !this.isFixedBlock
        if (!this.isEditIcons) {
          this.setMargin(false)
          if (process.client) {
            const { getStore, setStore } = require('~/plugins/utils')
            let store = getStore('selectedIcons') || {}
            store[this.userInfo.UserAccount] = this.selectedIcons
            setStore('selectedIcons', store)
          }
        } else {
          this.setMargin(true)
        }
      },
      setMargin (isFixed) {
        // 通过isFixed判断当前是否是fixed状态
        const fixedBlock = this.$refs.fixedBlock
        const marBlock = this.$refs.marBlock[0]
        let fixedHeight = 0
        if (isFixed) {
          fixedHeight = fixedBlock.clientHeight
        }
        marBlock.style.marginTop = fixedHeight + 'px'
      },
      operateIcon (item) {
        if (this.isEditIcons) {
          if (this.selectedIcons.includes(item.id)) {
            let index = this.selectedIcons.indexOf(item.id)
            this.selectedIcons.splice(index, 1)
            this.selectedIconList.splice(index, 1)
          } else {
            if (this.selectedIcons.length === 9) {
              Toast({ message: '首页应用最多添加9个', position: 'bottom' })
              return
            }
            this.selectedIcons.push(item.id)
            this.selectedIconList.push(item)
          }
          this.$nextTick(() => {
            this.setMargin(true)
          })
        } else {
          this.$router.push(item.link)
        }
      },
      showMarquee () {
        this.animate = true
        setTimeout(() => {
          this.importantNewsData.push(this.importantNewsData[0])
          this.importantNewsData.shift()
          this.animate = false
        }, 500)
      },
      judgeUrl (item) {
        switch (item.Type) {
          case 'Common':
            break
          case 'Article':
            this.$router.push({ name: 'newsDetail', query: { Id: item.Url } })
            break
          case 'ArticleList':
            this.$router.push({ name: 'newsList', query: { categoryId: item.Url } })
            break
          case 'Course':
            this.$router.push({ name: 'playMp4' })
            break
          case 'CourseList':
            this.$router.push({ name: '' })
            break
          default:
            break
        }
      },
      search () {
        this.$router.push('/newsSearch')
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~assets/scss/mixin";

  .home_index {
    background: url("~assets/img/home_bg.png") no-repeat top center, #fff;
    background-size: 100vw toRem(444px);

    .header {
      justify-content: flex-start;
      padding: 0 toRem(30px);
      background-color: transparent;

      & /deep/ {
        .header_title {
          flex: 0;
        }
      }

      .home_logo {
        @include wh(369px, 43px)
      }

      .home_credit_text {
        @include wh(87px, 33px);
      }

      .home_credit {
        color: #fff;
        padding: 0 toRem(29px) 0 toRem(22px);
      }

      .home_avator {
        @include square(60px);
        border-radius: 50%;
      }
    }

    .home-search {
      @include flex();
      padding: toRem(10px) toRem(30px) toRem(20px);

      .message_icon {
        height: toRem(59px);
        width: 100%;
        @include flex(left);
        align-items: center;

        .message_con {
          width: toRem(46px);
          height: toRem(35px);
          position: relative;

          img {
            display: block;
            width: toRem(46px);
            height: toRem(35px);
            position: absolute;
            top: 0;
            right: 0;
          }

          span {
            @include square(24px);
            position: absolute;
            right: toRem(-12px);
            top: toRem(-12px);
            background: #fff;
            border-radius: 50%;
            font-size: toRem(12px);
            color: $brand-primary;
            text-align: center;
            line-height: toRem(24px);
          }
        }
      }

      .search_container {
        position: relative;

        input {
          @include wh(610px, 59px);
          padding: 0 toRem(20px) 0 toRem(85px);
          background: rgba(255, 255, 255, 0.6);
          font-size: toRem(20px);
          color: #fff;
          border-radius: toRem(30px);

          &::-webkit-input-placeholder {
            color: #fff;
          }
        }

        .search_icon {
          position: absolute;
          left: toRem(30px);
          top: 50%;
          transform: translateY(-50%);
          @include square(39px);
        }
      }
    }

    .info_content {
      background: url(~assets/img/info_bg.png) no-repeat center bottom;
      background-size: toRem(571px) toRem(345px);
      height: toRem(533px);

      .info_layer_avatar {
        text-align: center;
        line-height: toRem(60px);
        font-size: 12px;
      }

      .avatar {
        margin-top: toRem(18px);
        @include square(117px);
      }

      .info_detail {
        text-align: center;
        padding: toRem(100px) toRem(10px) 0 toRem(10px);

        h4 {
          font-size: 14px;
        }

        p {
          margin-top: toRem(40px);
          color: $color-text-secondary;
          font-size: 13px;
        }
      }
    }

    .header_swipe {
      height: toRem(380px);
      padding: 0 toRem(30px);

      img {
        width: 100%;
        height: toRem(340px);
        border-radius: toRem(6px);
      }

      & /deep/ {
        .mint-swipe-indicators {
          bottom: 0;

          .mint-swipe-indicator {
            &.is-active {
              width: toRem(72px);
              background-color: $brand-primary;
            }

            height: toRem(16px);
            border-radius: toRem(8px);
            transition: all 0.3s linear;
          }
        }
      }
    }

    .guide_list {
      width: 100%;
      min-height: toRem(140px);
      max-height: toRem(430px);
      padding-bottom: toRem(50px);
      border-bottom: 1px solid $border-color-base;

      .guide_container {
        width: 100%;
        text-align: center;
        @include flex(flex-start);
        flex-wrap: wrap;
      }

      .guide_item {
        margin-top: toRem(50px);
        width: 20%;
        max-width: 20%;
        height: toRem(140px);
        @include flex(center);
        align-items: center;
        overflow: hidden;

        p {
          margin-top: toRem(20px);
          line-height: 1;
        }

        img {
          @include square(90px);
        }
      }
    }

    .important_notice {
      display: flex;
      height: toRem(137px);
      padding: toRem(22px) toRem(30px) 0 toRem(30px);

      .important_notice_title {
        width: toRem(100px);
        height: toRem(117px);

        img {
          display: block;
          margin: 0 auto;
          width: toRem(100px);
          height: toRem(117px);
        }
      }

      .important_notice_con {
        position: relative;
        margin-left: toRem(30px);
        display: block;
        overflow: hidden;
        width: toRem(625px);
        height: toRem(117px);

        ul {
          li {
            height: toRem(117px);
            width: toRem(560px);
            @extend %ellipsis;

            .time {
              font-size: toRem(24px);
              color: $brand-primary;
            }

            a {
              margin-top: toRem(16px);
              width: 100%;
              color: #333;
              font-size: toRem(26px);
              display: block;
              line-height: toRem(37px);
              white-space: pre-wrap;
              word-break: break-all;
            }
          }
        }

        .marquee_list {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }

        .marquee_top {
          transition: all 0.5s;
          margin-top: toRem(-117px);
        }
      }
    }

    .news_container {
      .container_header {
        position: relative;
        padding: 0 toRem(30px);
        border-bottom: 1px solid $border-color-base;
        height: toRem(96px);
        @include flex(left);
        align-items: center;

        .header_title {
          color: #333;
          font-size: toRem(34px);
          font-weight: bold;
          font-family: "苹方 粗体", sans-serif;
        }

        .news_arrow_img {
          margin: 0 toRem(7px) 0 toRem(19px);
          @include square(30px);
        }

        .header_text {
          color: #ca0015;
        }

        .header_more {
          position: absolute;
          right: toRem(30px);
          color: #989898;
          font-size: toRem(24px);
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .home_news_list {
        .news_item {
          a {
            padding: toRem(30px);
            @include flex();
            height: toRem(201px);
            border-bottom: 1px solid $border-color-base;

            .item_title {
              font-size: toRem(30px);
              font-family: "萍方", sans-serif;
              color: #333;
            }

            .item_info {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;

              .item_type_and_time {
                color: #989898;
                font-size: toRem(24px);

                .item_type {
                  margin-right: toRem(30px);
                }
              }
            }
          }

          &.has_img {
            a {
              height: toRem(240px);

              .news_img {
                @include wh(240px, 180px);
                border-radius: toRem(6px);
              }

              .item_title {
                width: toRem(390px);
              }
            }
          }
        }
      }

      .no-data {
        background-color: #e8eaeb;
      }
    }

    .icon_list_popup {
      width: 100vw;
      height: 100vh;
      overflow-y: scroll;

      &.fixed_top {
        padding-top: toRem(92px);

        .header {
          padding: 0 toRem(20px);

          .header_left, .header_right {
            flex: 1;
          }
        }
      }

      .icon_list_container {
        height: 100%;
        overflow-y: scroll;

        .icons_block {
          padding: toRem(30px);

          & + .icons_block {
            border-top: toRem(20px) solid $border-color-base;
          }

          &.fixed_block {
            position: fixed;
            top: toRem(92px);
            left: 0;
            right: 0;
            background-color: #fff;
            z-index: 1005;
            border-bottom: 1px solid $border-color-base;
          }

          &.margin_block {

          }

          .icon_list_title {
            font-size: toRem(34px);
            font-weight: bold;

            .icon_action {
              float: right;
              color: #fd961f;
              font-size: toRem(30px);
            }
          }

          .icon_list {
            @include flex(flex-start);
            align-items: center;
            flex-wrap: wrap;

            .icon_item {
              position: relative;
              margin-top: toRem(50px);
              width: 25%;
              text-align: center;

              .icon_img {
                @include square(90px);
              }

              p {
                margin-top: toRem(40px);
                line-height: 1;
              }

              .btn {
                display: none;
                position: absolute;
                top: toRem(-14px);
                right: 0;
                @include square(28px);
              }
            }
          }
        }

        &.is-edit {
          .icon_list {
            .icon_item {
              .btn {
                display: block;
              }
            }
          }
        }

      }

    }

    .commemorate_popup {
      background-color: transparent;
      text-align: center;
      max-height: 100vh;
      overflow-y: scroll;

      .close_btn {
        position: absolute;
        top: 0;
        right: 0;

        img {
          @include square(90px);
        }
      }

      .commemorate_container {
        @include wh(615px, 677px);
        line-height: 1.5;
        text-align: left;

        &.party_people_container {
          background: url("~assets/img/party-people-bg@2x.png") no-repeat top center;
          background-size: toRem(615px) toRem(677px);
          padding: toRem(200px) toRem(135px);
          font-size: toRem(32px);
        }

        &.join_party_container {
          background: url("~assets/img/join-party-bg@2x.png") no-repeat top center;
          background-size: toRem(615px) toRem(677px);
          padding: toRem(190px) toRem(135px);
          font-size: toRem(30px);
        }

        .highlight {
          font-size: toRem(35px);
        }
      }

      .commemorate_btn {
        @include wh(240px, 72px);
      }

      .no_remind_block {
        color: #fff;
        @include flex(center);
        align-items: center;

        img {
          @include square(34px);
          margin-right: toRem(10px);
        }
      }
    }
  }
</style>
