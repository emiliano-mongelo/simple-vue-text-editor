const isValidURL = string => {
  const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

export default {
  label: 'Img',
  apply: function() {
    console.info(`[Plugin::apply] Image`);
    const imageUrl = prompt("Please enter the image url", "");
    if (isValidURL(imageUrl)) {
      document.execCommand("InsertImage", false, imageUrl);
    }
  }
}
