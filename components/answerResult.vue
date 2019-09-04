/**
* 抢答结果
*/
<template>
  <div class="rushAnserResult">
    <div class="title">
      <img src="~/assets/img/hq-hq-response-text.png" alt="">
    </div>
    <div class="rushAnserResult-con">
      <ul>
        <li v-for="(item,index) in data" :key="item.id">
          <div class="rushAnserResult-photo"
               :class="{photoBg1:index==0,photoBg2:index==1,photoBg3:index==2}"
          >
            <img src="~/assets/img/person_cener_avatar.png" alt="头像">
          </div>
          <div class="rushAnserResult-tt"
               :class="{answerListMod1:index<3,answerListMod2: index>=3}"
          >
            <div class="rushAnserResult-nt">
              <p class="rushAnserResult-name">{{item.UserName}}</p>
              <p class="rushAnserResult-time">抢答时间：{{item.CreateDate | dateFilter('yyyy-MM-dd hh:mm')}}</p>
            </div>
            <div class="rushAnserResult-text">
              {{item.AnswerContent}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array,
      noDataBg: Boolean
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .rushAnserResult {
    margin-top: toRem(105px);

    .title {
      width: 100%;
      text-align: center;

      img {
        display: block;
        width: toRem(300px);
        height: toRem(32px);
        margin: 0 auto;
      }
    }

    .rushAnserResult-con {
      width: 100%;
      margin-top: toRem(35px);

      ul {
        li {
          margin-bottom: toRem(60px);
          @extend %clearFix;

          .rushAnserResult-photo {
            @extend %pull-left;
            width: toRem(90px);
            height: toRem(125px);

            img {
              width: toRem(90px);
              height: toRem(90px);
              margin-top: toRem(33px);
            }
          }

          .photoBg1 {
            background: url(~assets/img/hq-response-rank01.png) no-repeat center top;
            background-size: toRem(40px) toRem(33px);
          }

          .photoBg2 {
            background: url(~assets/img/hq-response-rank02.png) no-repeat center top;
            background-size: toRem(40px) toRem(33px);
          }

          .photoBg3 {
            background: url(~assets/img/hq-response-rank03.png) no-repeat center top;
            background-size: toRem(40px) toRem(33px);
          }

          .rushAnserResult-tt {
            @extend %pull-right;
            width: toRem(570px);
            margin-left: toRem(30px);
            position: relative;

            .rushAnserResult-nt {
              @extend %clearFix;
              padding: toRem(20px);

              .rushAnserResult-name {
                @extend %pull-left;
                color: #333;
                font-size: 16px;
                font-weight: bold;
              }

              .rushAnserResult-time {
                @extend %pull-right;
                color: #fd961f;
                font-size: 12px;
              }
            }

            .rushAnserResult-text {
              color: #333;
              line-height: toRem(40px);
              padding: 0 toRem(20px) toRem(40px);
              font-size: 12px;
            }
          }

          .answerListMod1 {
            background: #fffaf4;

            :before {
              content: "";
              border-left: toRem(10px) solid transparent;
              border-right: toRem(10px) solid transparent;
              border-top: 0px solid transparent;
              border-bottom: toRem(10px) solid transparent;
              border-right-color: #fffaf4;
              position: absolute;
              left: toRem(-20px);
              top: 0px;
              margin-top: 0px;
            }
          }

          .answerListMod2 {
            background: #eef1f6;

            :before {
              content: "";
              border-left: toRem(10px) solid transparent;
              border-right: toRem(10px) solid transparent;
              border-top: 0px solid transparent;
              border-bottom: toRem(10px) solid transparent;
              border-right-color: #eef1f6;
              position: absolute;
              left: toRem(-20px);
              top: 0px;
              margin-top: 0px;
            }
          }

        }
      }
    }
  }
</style>
