/**
* 个人中心
*/
<template>
  <div class="personalCenter container_bottom">
    <header-fix title="个人中心"></header-fix>
    <div class="person_top">
      <div class="person_top1">
        <error-img
          class="user_avatar"
          :src="userInfo.UserPhoto"
          :error-src="noPhoto"
          alt="头像"
        ></error-img>
        <h4>{{ userInfo.Username }}</h4>
      </div>
      <div class="my_info">
        <div class="my_info_job">
          <h2>{{ userInfo.UserZW || '无' }}</h2>
          <p>我的职务</p>
        </div>
        <div class="my_info_score">
          <h2>{{ userInfo.TotalCredit }}</h2>
          <p>我的学分</p>
        </div>
      </div>
    </div>
    <div class="person-link">
      <ul>
        <li>
          <nuxt-link :to="{ name: 'personalCenter-myCourse' }">
            <img class="w_60_h_60" src="~/assets/img/person_my_course.png" alt="我的课程"/>
            <p>我的课程</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'personalCenter-myAppointment'}">
            <img class="w_55_h_56" src="~/assets/img/person_my_yuyue.png" alt="我的预约"/>
            <p>我的预约</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'personalCenter-myExam'}">
            <img class="w_60_h_60" src="~/assets/img/person_my_exam.png" alt="我的考试"/>
            <p>我的考试</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'personalCenter-myLibrary'}">
            <img class="w_60_h_60" src="~/assets/img/person_my_jieyue.png" alt="我的借阅"/>
            <p>我的借阅</p>
          </nuxt-link>
        </li>
        <li>
          <div class="qrcode" @click="toggleModel">
            <img class="w_55_h_56" src="~/assets/img/person_erweima.png" alt="APP二维码"/>
            <p>二维码</p>
          </div>
        </li>
        <li>
          <nuxt-link to="/personalCenter/setting">
            <img class="w_55_h_56" src="~/assets/img/person_more_setting.png" alt="更多设置"/>
            <p>更多设置</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="exit">
      <mt-button
        v-if="userAgent.weixin && isAllowWeiXin"
        @click.native="exit"
        type="primary"
        size="large"
      >解除微信绑定
      </mt-button
      >
      <mt-button v-else @click.native="exit" type="primary" size="large"
      >安全退出
      </mt-button
      >
    </div>
    <footer-fix selected="personalCenter"></footer-fix>
    <mb-model :isShow.sync="showModel">
      <img class="app_code" src="~/assets/img/app_code.png" alt="app二维码"/>
    </mb-model>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import noPhoto from '~/assets/img/user_avatar.png'
  import { errorImg, footerFix, headerFix, mbModel } from '~/components'
  import { LoginOut, DelBind } from '~/service/getData'
  import { goBack } from '~/service/mixins'

  export default {
    head: {
      title: '个人中心'
    },
    components: {
      footerFix,
      headerFix,
      errorImg,
      mbModel
    },
    mixins: [goBack],
    data () {
      return {
        showModel: false,
        noPhoto
      }
    },
    computed: {
      ...mapState(['userInfo', 'userAgent', 'wxLoginUrl'])
    },
    mounted () {
      this.getUserInformation()
    },
    methods: {
      ...mapActions(['getUserInformation', 'saveUserInfo']),
      async exit () {
        let data
        if (this.userAgent.weixin && this.isAllowWeiXin) {
          data = await DelBind()
        } else {
          data = await LoginOut()
        }
        if (data.IsSuccess) {
          this.saveUserInfo({})
          window.localStorage.removeItem('ASPXAUTH')
          if (this.userAgent.weixin && this.isAllowWeiXin) {
            window.location.href = this.wxLoginUrl
          } else {
            this.$router.push('/login')
          }
        }
      },
      toggleModel () {
        this.showModel = !this.showModel
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~assets/scss/mixin";

  .personalCenter {
    background: url("~assets/img/hq-personal-bg.png") no-repeat center top, #fff;
    background-size: 100vw toRem(358px);

    .header {
      width: 100%;
      background: transparent;

      /deep/ {
        .webapp-left {
          font-size: 22px;
          color: #fff;
        }

        .header_title {
          color: #fff;
        }
      }
    }

    .person_top {
      width: toRem(698px);
      height: toRem(401px);
      margin: 0 auto;
      padding-top: toRem(34px);
      align-items: center;
      background: url(~assets/img/hq-personal-shinebg.png) center top;
      background-size: toRem(698px) toRem(401px);

      .person_top1 {
        .user_avatar {
          @include square(150px);
          border-radius: 50%;
          display: block;
          margin: 0 auto;
        }

        h4 {
          text-align: center;
          color: #333;
          font-size: 20px;
          margin-top: toRem(15px);
        }
      }

      .my_info {
        @extend %clearFix;
        margin-top: toRem(25px);

        .my_info_job {
          @extend %pull-left;
          margin-left: toRem(80px);
          text-align: center;

          h2 {
            color: #333;
            font-size: 18px;
            height: 24px;
            line-height: 24px;
          }

          p {
            color: #999;
            font-size: 14px;
          }
        }

        .my_info_score {
          @extend %pull-right;
          margin-right: toRem(80px);
          text-align: center;

          h2 {
            color: #333;
            font-size: 18px;
            height: 24px;
            line-height: 24px;
          }

          p {
            color: #999;
            font-size: 14px;
          }
        }
      }
    }

    .person-link {
      ul {
        @include flex(space-around);
        flex-wrap: wrap;

        li {
          @include flex();
          flex-direction: column;
          width: 33%;
          height: toRem(110px);
          text-align: center;
          margin-top: toRem(87px);
          margin-bottom: toRem(33px);

          img {
            &.w_60_h_60 {
              @include wh(60px, 60px);
            }

            &.w_55_h_56 {
              @include wh(55px, 56px);
            }
          }

          p {
            color: #333;
            font-size: 14px;
            margin-top: toRem(25px);
          }
        }
      }
    }

    .exit {
      margin-bottom: toRem(20px);

      .mint-button--large {
        width: toRem(690px);
        margin: toRem(80px) auto 0;
        height: toRem(80px);
        line-height: toRem(80px);
        background-image: linear-gradient(to right, #de371b, #b61412);
        border-radius: toRem(40px);
      }
    }

    .webapp {
      font-size: toRem(32px);
    }

    .mb-model_container {
      .app_code {
        margin: 0 auto;
        display: block;
        @include square(256px);
      }
    }
  }
</style>
