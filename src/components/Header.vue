<template>
  <header>{{label}}</header>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        label: 'Simple Text Editor'
      }
    }
  }
</script>

<style scoped>
    header {
    display: block;
    height: 40px;
    padding-left: 15px;
    padding-top: 15px;
    font-size: 24px;
    border-bottom: 4px solid #ffa500;
    background-color: rgba(33,33,33,0.5);
    color: #fff;
    }
</style>
