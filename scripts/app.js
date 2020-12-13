function init() {
  getCurrentTabUrl()
}

function getCurrentTabUrl() {
  return chrome.tabs.getSelected(null, function(tab) {
    // generate option
    const options = {
      text: tab.url,
      title: tab.title.slice(0,30),
      titleFont: "bold 14px Arial",
      titleHeight: 30, // height, including subTitle. default is 0
      titleTop: 20, // draws y coordinates. default is 30
      titleBackgroundColor: "#d5dce9",
      colorDark : "#000000",
      colorLight : "#d5dce9",
      correctLevel : QRCode.CorrectLevel.L,
    }
    const qrcode =  document.querySelector('.qrcode')
    // generate qr
    if (!tab.url.startsWith('chrome://')) {
      new QRCode(qrcode, options);
    } else {
      qrcode.innerHTML = 'Url non valide'
      qrcode.classList.add('error')
    }
  })
}

window.onload = init();