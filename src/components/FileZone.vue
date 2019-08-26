<template>
  <div id="file-zone">
    <div id="file">
      <p ref="content" class="content" contenteditable></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileZone",
  mounted() {
    this.$refs.content.focus();
  }
};
</script>

<style scoped>
#file-zone {
  background-color: #f1f0f0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

#file {
  width: 600px;
  flex-grow: 1;
  background-color: #fff;
  border: 1px solid #e4dede;
  padding: 20px;
}

#file .content {
  width: 100%;
  height: 100%;
  outline: none;
}
</style>
