<template>
  <div>
    <ul class="attach_list_component" v-if="attachList && attachList.length">
      <li class="attach_list_item" v-for="item in attachList" :key="item.Id">
        <a class="attach_item_link" :href="item.Url" :download="item.Name" target="_blank">
          <i class="filetype" :class="'filetype-'+getFileType(item.Name)"></i>
          <div class="attach_info">
            <span class="attach_name">{{item.Name}}</span>
            <span class="attach_size">{{item.Size}}</span>
          </div>
        </a>
      </li>
    </ul>
    <p v-else>暂无附件</p>
  </div>
</template>

<script>
  let getFileType
  if (process.client) {
    getFileType = require('~/plugins/utils')
  }

  export default {
    props: {
      attachList: {
        type: Array
      }
    },
    methods: {
      getFileType (name) {
        let arr = name.split('.')
        let type = arr.pop()
        return getFileType(type)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/mixin";

  .attach_list_component {
    .attach_item_link {
      margin-top: toRem(20px);
      border: 1px solid $border-color-base;
      border-radius: toRem(10px);
      padding: toRem(25px);
      @include flex(flex-start);

      .filetype {
        font-size: toRem(65px);
        color: #fe8f46;
      }

      .attach_info {
        max-width: toRem(570px);
        padding-left: toRem(20px);

        .attach_name {
          display: block;
          width: 100%;
          @extend %ellipsis;
          font-size: toRem(30px);
          line-height: 1.5;
        }

        .attach_size {
          display: block;
          color: $color-text-thirdly;
        }
      }
    }
  }
</style>
