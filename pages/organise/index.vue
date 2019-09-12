<template>
  <div class="organise container_both">
    <!--头部-->
    <header-fix :title="title" fixed>
      <i v-if="parentId!=0" slot="left" class="webapp webapp-left" @click="backGroupList"></i>
    </header-fix>
    <div class="zsList">
      <ul>
        <li v-for="item in groupList" :key="item.UserGroupId"
            @click="changeRoute(item)">
          <img class="listImg" src="~/assets/img/hq-tip-icon.png" alt="">
          <span class="listTitle">{{item.UserGroupName}}</span>
          <span class="listIcon" @click.stop="getChildrenGroup(item)"><i></i></span>
        </li>
      </ul>
    </div>
    <footer-fix :selected="'orangize'"></footer-fix>
  </div>
</template>
<script>
  import { goBack } from '~/service/mixins'
  import { GetGroupList } from '~/service/getData'
  import { headerFix, footerFix } from '~/components'

  export default {
    components: {
      headerFix,
      footerFix
    },
    mixins: [goBack],
    data () {
      return {
        groupIdStack: [], // 记录部门的Id的栈
        groupListStack: {}, // 存储已获取的部门列表
        groupList: [], // 部门列表
        parentId: '0',
        title: '组织机构'
      }
    },
    mounted () {
      this.getGroupList({ UserGroupId: '0', UserGroupName: '组织机构' })
      this.groupIdStack.push('0')
    },
    methods: {
      async getGroupList () {
        let res = await GetGroupList({ ParentId: this.parentId })
        if (res.IsSuccess) {
          let list = res.Data.GroupInfoList
          if (list && list.length > 0) {
            this.groupList = list
            this.groupListStack[this.parentId] = { ...this.groupListStack[this.parentId], list }
          }
          if (this.parentId == 0) {
            this.groupListStack[this.parentId] = { ...this.groupListStack[this.parentId], title: '组织机构' }
          }
        }
      },
      backGroupList () {
        this.groupIdStack.pop() // 移除堆栈末尾
        this.$nextTick(() => {
          let len = this.groupIdStack.length
          let Id = this.groupIdStack[len - 1]
          this.parentId = Id
          this.groupList = this.groupListStack[Id].list
          this.title = this.groupListStack[Id].title
        })
      },
      getChildrenGroup (item) {
        let ParentId = item.UserGroupId
        let title = item.UserGroupName
        if (item.ChildCount == 0) {
          this.$router.push({
            name: 'organise-organiseList',
            query: { id: item.UserGroupId, UserGroupName: item.UserGroupName }
          })
          return
        }
        this.title = title
        this.parentId = ParentId
        this.groupIdStack.push(ParentId) // 将parentId推入栈
        if (this.groupListStack[ParentId]) {
          this.groupList = this.groupListStack[ParentId].list
        } else if (ParentId == 0 || item.ChildCount > 0) {
          this.groupListStack[ParentId] = { ...this.groupListStack[ParentId], title }
          this.getGroupList()
        }
      },
      changeRoute (item) {
        this.$router.push({
          name: 'organise-organiseList',
          query: { id: item.UserGroupId, UserGroupName: item.UserGroupName }
        })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~assets/scss/mixin";

  .organise {
    background: $fill-body;

    .zsList {
      background: #fff;
      margin-top: toRem(20px);

      ul {
        li {
          position: relative;
          @include flex(flex-start);
          align-items: center;
          padding: toRem(20px) 0;
          min-height: toRem(88px);
          line-height: toRem(88px);
          border-bottom: 1px solid #ddd;

          .listImg {
            margin-left: toRem(30px);
            @include wh(20px, 21px);
          }

          .listTitle {
            margin-left: toRem(40px);
            width: toRem(580px);
            color: #333;
            font-size: 15px;
            line-height: toRem(50px);
          }

          .listIcon {
            position: absolute;
            top: 50%;
            right: toRem(40px);
            transform: translateY(-50%);

            i {
              &:after {
                border: solid 2px #c8c8cd;
                border-bottom-width: 0;
                border-left-width: 0;
                content: " ";
                top: 50%;
                position: absolute;
                @include wh(20px, 20px);
                -webkit-transform: translateY(-50%) rotate(45deg);
                -ms-transform: translateY(-50%) rotate(45deg);
                transform: translateY(-50%) rotate(45deg);
              }
            }
          }
        }
      }
    }
  }
</style>
