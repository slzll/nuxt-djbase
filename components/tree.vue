/**
* 树
*/
<template>
  <ul class="tree_container">
    <tree-node v-for="(item,index) in data"
               :data-list="item"
               @itemClick="selectedNode"
               :on-select="onSelect"
               :option="option || defaultOption"
               :selected-id="selectedId"
               :floor="1"
               :key="index">
    </tree-node>
  </ul>
</template>
<script>
  import treeNode from './treeNode'

  export default {
    components: {
      treeNode
    },
    props: {
      data: {
        type: Array,
        required: true
      },
      onSelect: Function,
      selectedId: [String, Number],
      option: Object
    },
    data () {
      return {
        defaultOption: {
          name: 'name',
          nodes: 'nodes',
          Id: 'Id'
        }
      }
    },
    methods: {
      selectedNode (data) {
        this.onSelect(data)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
