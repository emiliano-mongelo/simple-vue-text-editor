export default {
  label: '<b>B</b>',
  apply: function() {
    console.info(`[Plugin::apply] Bold`);
    document.execCommand("bold", false, null);
  }
}
