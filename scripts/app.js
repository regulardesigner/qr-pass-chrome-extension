function init() {
  getCurrentTabUrl()
}

function getCurrentTabUrl() {
  return chrome.tabs.getSelected(null, function(tab) {
    // generate option
    const options = {
      text: tab.url,
      colorDark : "#1b202b",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.L,
      logo: `${tab.favIconUrl}`,
      logoBackgroundColor: "#1b202b",
      logoWidth:32,
      logoHeight:32,
      quietZone: 14
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