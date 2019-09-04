<template>
  <img class="errorImg" :src="imageSrc" ref="img"/>
</template>
<script>
  import baseErrorSrc from '~/assets/img/notFound.jpg'

  export default {
    props: {
      src: String, errorSrc: String
    },
    data () {
      return {
        imageSrc: '',
        imgErrorSrc: this.errorSrc
      }
    },
    watch: {
      src (val) {
        this.imageSrc = val || this.imgErrorSrc || baseErrorSrc
      }
    },
    created () {
      const assetsOrigin = ''
      if (!this.src) {
        this.imageSrc = this.imgErrorSrc || baseErrorSrc
      } else {
        // eslint-disable-next-line unicorn/prefer-starts-ends-with
        let flag = /^http/.test(this.src)
        this.imageSrc = !flag ? assetsOrigin + this.src : this.src
      }
    },
    mounted () {
      this.$refs.img.onerror = () => {
        this.imageSrc = this.imgErrorSrc || baseErrorSrc
      }
    }
  }
</script>
