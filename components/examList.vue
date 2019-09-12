/**
* 考试列表
*/
<template>
  <div class="exam_list">
    <div class="exam_item" v-for="item in examData"
         :key="item.ExamId"
         @click.stop="checkAttempt1(item)"
    >
      <div class="exam_name">
        <p class="exam_name1">
          <span v-if="item.Status == 'UnFinish' && !item.hasFinish">未完成</span>
          <span v-if="item.Status == 'UnJoin' && !item.hasFinish">未考</span>
          <span v-if="item.Status == 'Finish' && !item.hasFinish">已完成</span>
          <span v-if="item.hasFinish">已结束</span>
        </p>
        <p class="exam_name2">{{item.ExamTitle}}</p>
      </div>
      <div class="exam_info">
        <div class="exam_date">考试截止时间：{{item.EndTime | dateFilter('yyyy.MM.dd')}}</div>
        <div class="exam_user_count">{{item.UserCount}}人参与</div>
      </div>
    </div>
    <div class="noDataBg" v-if="noDataBg"></div>
    <div class="no-data" v-if="noData">没有更多内容了...</div>
  </div>
</template>
<script>
  import { MessageBox, Toast } from 'mint-ui'

  let replaceTime
  if (process.client) {
    replaceTime = require('../plugins/utils').replaceTime
  }
  export default {
    props: {
      examData: Array,
      noDataBg: {
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
        message: ''
      }
    },
    watch: {
      examData: {
        handler: function (val) {
          if (val) {
            val.forEach((item) => {
              item.hasFinish = new Date(replaceTime(item.EndTime)).getTime() < new Date().getTime()
            })
          }
        },
        deep: true
      }
    },
    methods: {
      replaceTime (time) {
        return replaceTime(time)
      },
      checkAttempt1 (item) {
        let examId = item.ExamId
        let params = JSON.stringify(item)
        this.$router.push({ path: '/examInformation', query: { id: examId, data: params } })
      },
      checkAttempt (id, total, current, endTime) {
        endTime = replaceTime(endTime)
        var dateEnd = new Date(endTime).getTime()
        var dateNow = new Date().getTime()
        if (total > 0) {
          if (dateNow < dateEnd) {
            if (current < total) {
              let count = total - current
              MessageBox.confirm(`当前考试剩余${count}次考试机会，是否继续考试`).then(action => {
                this.$router.push({ path: '/exam', query: { id } })
              })
            } else {
              this.message = '考试次数已用完'
              Toast({ message: this.message, position: 'bottom' })
            }
          } else {
            this.message = '考试截止时间已过'
            Toast({ message: this.message, position: 'bottom' })
          }
        } else {
          MessageBox.confirm(`是否进入考试信息页面`).then(action => {
            this.$router.push({ path: '/examInformation', query: { id } })
          })
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~assets/scss/mixin";

  .exam_list {
    .exam_item {
      background-color: $fill-base;
      padding: toRem(30px);
      border-bottom: 1px solid $border-color-base;
      @extend %clearFix;
    }

    .exam_name {
      @extend %clearFix;

      .exam_name1 {
        float: left;
        display: inline-block;
        width: toRem(90px);
        height: toRem(40px);
        line-height: toRem(40px);
        font-size: 12px;
        text-align: center;
        color: #fff;
        background: $brand-primary;
      }

      .exam_name2 {
        float: left;
        margin-left: toRem(15px);
        @include ellipsis_two(2);
        font-size: toRem(30px);
        font-weight: 500;
        color: $color-text-base;
      }

    }

    .exam_date, .exam_user_count {
      color: #999;
      line-height: 1.5;
    }

    .exam_info {
      margin-top: toRem(30px);

      .exam_date {
        float: left;
      }

      .exam_user_count {
        float: right;
      }
    }
  }
</style>
