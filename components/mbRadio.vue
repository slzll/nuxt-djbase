<template>
  <div class="mbRadio" @change="$emit('change', currentValue)">
    <div class="radioList" v-for="(option,index) in options" :key="index"
         :class="{
           radio_checked:option.ThemeItemFlag == currentValue,
           radio_checked1:option.ItemFlag == currentValue
         }"
    >
      <label class="mint-radiolist-label">
        <span class="mint-radio">
          <input
            class="mint-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="isDisabled||option.disabled"
            :value="option.ThemeItemFlag || option || option.ItemFlag"/>
        </span>
        <span class="mint-radio-label" v-text="(option.ThemeItemFlag || option.ItemFlag) +'.'"></span>
        <span class="mint-radio-label label_title" v-text="option.ThemeItemTitle || option.Name"></span>
      </label>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      isDisabled: {
        required: false,
        type: Boolean,
        default: false
      },
      value: String
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      },
      currentValue (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '~assets/scss/mixin';

  .mbRadio {
    .radioList {
      @extend %border-base;
      @include borderRadius(10px);
      background-color: $fill-grey;
      margin-bottom: toRem(30px);

      .radio-input:focus {
        outline: none;
      }

      .mint-radiolist-label {
        display: block;
        padding: toRem(21px) toRem(20px);
        font-size: 15px;
      }

      padding: 0 toRem(20px);
    }

    .radio_checked {
      border: 1px solid $brand-primary;
      background-color: $fill-base;
      color: $brand-primary;
    }

    .radio_checked1 {
      border: 1px solid #0dc57e;
      background-color: #0dc57e;
      color: #fff;
    }

    .label_title {
      word-break: break-all;
    }
  }

</style>
