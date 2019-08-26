export default {
  label: '<i>I</i>',
  apply: function() {
    console.info(`[Plugin::apply] Italic`);
    document.execCommand("italic", false, null);
  }
}
