/**
* 党员档案
*/
<template>
  <div class="partyMemberFile">
    <!-- 头部 -->
    <header-fix title="党员档案">
      <i class="webapp webapp-left" @click.stop="goBack" slot="left"></i>
    </header-fix>
    <div class="person_top">
      <div class="person_img">
        <error-img :src="info.UserPhoto" :error-src="noPhoto" alt="头像"></error-img>
        <h4 class="user_name"> {{info.UserName || info.Username}}</h4>
      </div>
      <div class="person_info">
        <ul>
          <li>
            <p class="person_info_title1">性别</p>
            <p class="person_info_text">{{info.Sex}}</p>
          </li>
          <li>
            <p class="person_info_title1">籍贯</p>
            <p class="person_info_text">{{info.From || '暂无'}}</p>
          </li>
          <li>
            <p class="person_info_title1">学历</p>
            <p class="person_info_text">{{info.DegreeName || '暂无'}}</p>
          </li>
        </ul>
      </div>
      <div class="person_party_info">
        <ul>
          <li>
            <span class="title">所在支部</span> <span class="text">{{info.DepartmentName || '暂无'}}</span>
          </li>
          <li>
            <span class="title">入党时间</span> <span class="text">{{info.JoinPartyDate||'暂无'}}</span>
          </li>
          <li>
            <span class="title">转正时间</span> <span class="text">{{info.CorrectionDate||'暂无'}}</span>
          </li>
        </ul>
      </div>
      <div class="person_basic_info">
        <div class="person_basic_info_title">
          <div class="it-con">
            <h5>基本信息</h5>
          </div>
        </div>
        <ul>
          <li>
            <i><img src="~/assets/img/hq-my-files-iphone.png" alt="电话号码" class="img1"></i>
            <span>{{info.Tel||'暂无'}}</span>
          </li>
          <li>
            <i><img src="~/assets/img/hq-my-files-ID-number.png" alt="身份证" class="img2"></i>
            <span>{{info.IdCard||'暂无'}}</span>
          </li>
          <li>
            <i><img src="~/assets/img/hq-my-files-post.png" alt="职务" class="img3"></i>
            <span>{{info.UserZW||'暂无'}}</span>
          </li>
          <li>
            <i><img src="~/assets/img/hq-my-files-location.png" alt="地区" class="img4"></i>
            <span>{{info.HomeAddress||'暂无'}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { goBack } from '~/service/mixins'
  import noPhoto from '~/assets/img/user_avatar.png'
  import { GetUserInfoById } from '~/service/getData'
  import { headerFix, errorImg } from '~/components'

  export default {
    components: {
      headerFix,
      errorImg
    },
    mixins: [goBack],
    data () {
      return {
        noPhoto,
        info: {}
      }
    },
    computed: {
      ...mapState(['userInfo', 'userAgent'])
    },
    mounted () {
      let Id = this.$route.query.Id
      if (Id) {
        this.getUserInfoById(Id)
      } else {
        this.info = this.userInfo
      }
    },
    methods: {
      async getUserInfoById (Id) {
        let res = await GetUserInfoById({ Id })
        if (res.IsSuccess) {
          this.info = res.Data
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .partyMemberFile {
    background-color: #fff;
    background-image: url("~assets/img/hq-my-files-bg.png");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 10rem toRem(340px);

    .header {
      width: 100%;
      background: transparent;

      .webapp-left {
        font-size: 22px;
        color: #fff;
      }

      .header_title {
        color: #fff;
      }
    }

    .person_top {
      padding-top: toRem(110px);

      .person_img {
        img {
          width: toRem(150px);
          height: toRem(150px);
          border-radius: 50%;
          display: block;
          margin: 0 auto;
        }

        .user_name {
          margin-top: toRem(20px);
          font-size: 16px;
          color: #333;
          text-align: center;
        }
      }
    }

    .person_info {
      margin-top: toRem(30px);

      ul {
        @include flex();

        li {
          flex: 1;
          border-right: 1px solid #dcdcdc;
          height: toRem(80px);
          text-align: center;

          .person_info_title1 {
            font-size: 16px;
            color: #db1101;
            line-height: toRem(40px);
          }

          .person_info_text {
            color: #333;
            margin-top: toRem(5px);
            font-size: 14px;
            line-height: toRem(40px);
          }
        }
      }
    }

    .person_party_info {
      margin-top: toRem(20px);

      ul {
        li {
          margin: 0 toRem(30px);
          height: toRem(88px);
          line-height: toRem(88px);
          border-bottom: 1px solid #ccc;
          font-size: 14px;

          .title {
            color: #989898;
          }

          .text {
            color: #333333;
            margin-left: 40px;
          }

          &:nth-child(3) {
            border-bottom: none;
          }
        }
      }
    }

    .person_basic_info {
      border-top: toRem(20px) solid #eef1f6;
      background: #fff;

      .person_basic_info_title {
        height: toRem(80px);
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #fff;

        .it-con {
          margin-top: toRem(25px);
          height: toRem(30px);
          line-height: toRem(30px);
          border-left: toRem(5px) solid #db1101;

          h5 {
            font-size: 15px;
            color: #333;
            font-weight: bold;
            text-indent: toRem(25px);
          }
        }
      }

      ul {
        li {
          height: toRem(88px);
          line-height: toRem(88px);
          padding: 0 toRem(30px);

          i {
            width: toRem(46px);
            height: toRem(46px);
            text-align: center;
            display: inline-block;

            .img1 {
              width: toRem(36px);
              height: toRem(44px);
            }

            .img2 {
              width: toRem(46px);
              height: toRem(36px);
            }

            .img3 {
              width: toRem(44px);
              height: toRem(38px);
            }

            .img4 {
              width: toRem(38px);
              height: toRem(46px);
            }
          }

          span {
            color: #333;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
