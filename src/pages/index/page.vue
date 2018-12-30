<template>
    <d2-container>
        <img src="../../assets/image/HOME.jpg" style="width: 80vw;height: 80vh"/>
    </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn'
import D2Badge from './components/d2-badge'
export default {
  components: {
    D2HelpBtn,
    D2Badge
  },
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
