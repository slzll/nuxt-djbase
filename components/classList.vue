/**
* 培训班列表
*/
<template>
  <div class="class_list">
    <ul>
      <li v-for="(item) in data" :key="item.Id" class="clearFix" @click="goDetail(item.Id)">
        <div class="class_ico"><img src="~/assets/img/class_logo.png" alt=""></div>
        <div class="class_right">
          <p class="class_title"><a>{{item.Name}}</a><span>({{item.UserCount}}人报名)</span></p>
          <p>培训时间：{{item.StartDate | dateFilter}} ~ {{item.EndDate | dateFilter}}</p>
          <p>报名时间：截止到{{item.SignEndDate | dateFilter}}</p>
          <p>培训地点：{{item.Address}}</p>
          <mb-tag v-if="item.Status == 'UnJoin'" type="error">未报名</mb-tag>
          <mb-tag v-if="item.Status == 'Join'" type="success">已报名</mb-tag>
          <mb-tag v-if="item.Status == 'UnAudit'" type="info">审核中</mb-tag>
        </div>
      </li>
    </ul>
    <div class="noDataBg" v-if="noDataBg"></div>
  </div>
</template>
<script>
  import mbTag from './mbTag'

  export default {
    components: {
      mbTag
    },
    props: {
      data: Array,
      noDataBg: Boolean
    },
    methods: {
      goDetail (Id) {
        this.$router.push({ path: 'classDetail', query: { Id } })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .class_list {
    li {
      background: $fill-base;
      padding: toRem(20px) toRem(30px);
    }

    .class_ico {
      width: toRem(92px);
      height: toRem(240px);
      @extend %pull-left;

      img {
        width: toRem(64px);
      }
    }

    .class_right {
      @extend %pull-right;
      position: relative;
      width: toRem(590px);

      p {
        color: $color-text-secondary;
        margin-bottom: toRem(30px);
      }

      .class_title {
        font-size: 14px;
        font-weight: bold;

        span {
          color: $color-text-thirdly;
        }
      }
    }

    .mb_tag {
      position: absolute;
      right: 0;
      bottom: toRem(20px);
    }
  }
</style>
