export default {
  label: '<u>U</u>',
  apply: function() {
    console.info(`[Plugin::apply] Underline`);
    document.execCommand("underline", false, null);
  }
}
