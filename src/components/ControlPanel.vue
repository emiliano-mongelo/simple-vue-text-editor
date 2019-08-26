<template>
  <div id="control-panel">
    <div id="format-actions">
      <template v-for="plugin in plugins">
        <button class="format-action" type="button" @click="plugin.apply" v-html="plugin.label"></button>
      </template>
    </div>
  </div>
</template>

<script>
import * as availablePlugins from "../plugins";

export default {
  name: "ControlPanel",
  data() {
    return {
      plugins: availablePlugins
    };
  }
};
</script>
<style scoped>
#control-panel {
  background-color: #fff;
  height: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
}
#format-actions {
  width: 200px;
  margin-right: 400px;
}
</style>
