let callback = ''
console.log('被引用')
const wy = {
  chooseImage: function (conf) {
    callback = conf.success
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.chooseImage()
    } else { // ios
      location.hash = 'chooseImage'
    }
  },
  readContact: function (conf) {
    callback = conf.success
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.readContact()
    } else { // ios
      location.hash = 'readContact'
    }
  },
  portalBack: function (conf) {
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.back()
    } else { // ios
      location.hash = 'portalBack'
    }
  },
  addContact: function (conf) {
    callback = conf.success
    let userName = conf.userName
    let mobileNo = conf.mobileNo
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.addContact(userName, mobileNo)
    } else { // ios
      let jsonObj = {
        userName: userName,
        mobileNo: mobileNo
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'addContact=' + jsonObj
    }
  },
  getDeviceId: function (conf) {
    callback = conf.success
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.getDeviceId()
    } else { // ios
      location.hash = 'getDeviceId'
    }
  },
  getUserInfo: function (conf) {
    callback = conf.success
    let loginFlg = conf.loginFlg
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.getUserInfo(loginFlg)
    } else { // ios
      let jsonObj = {
        loginFlg: loginFlg
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'getUserInfo=' + jsonObj
    }
  },
  getOrgInfo: function (conf) {
    callback = conf.success
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.getOrgInfo()
    } else { // ios
      location.hash = 'getOrgInfo'
    }
  },
  openLocation: function (conf) {
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.openLocation()
    } else { // ios
      location.hash = 'openLocation'
    }
  },
  previewImage: function (conf) {
    let current = conf.current
    let urls = conf.urls
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.previewImage(current, urls)
    } else { // ios
      let jsonObj = {
        current: current,
        urls: urls
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'previewImage=' + jsonObj
    }
  },
  sendBluetooth: function (conf) {
    callback = conf.success
    let beginChar = 'wySendBluetoothBegin'
    let endChar = 'wySendBluetoothEnd'
    let dataArray = conf.dataArray

    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.sendBluetooth(dataArray.join(''))
    } else { // ios
      for (let i = 0; i < dataArray.length; i++) {
        location.hash = 'sendBluetoothing=' + beginChar + dataArray[i] + endChar
      }
      location.hash = 'sendBluetoothEnd=true'
    }
  },
  onMenuShare: function (conf) {
    // callback = conf.success;
    let shareContent = conf.shareContent
    let targetUrl = conf.targetUrl
    let title = conf.title
    let shareImage = conf.shareImage
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.onMenuShare(shareContent, targetUrl, title, shareImage)
    } else { // ios
      let jsonObj = {
        shareContent: shareContent,
        targetUrl: targetUrl,
        title: title,
        shareImage: shareImage
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'onMenuShare=' + jsonObj
    }
  },
  uploadImage: function (conf) {
    callback = conf.success
    let isShowProgressTips = conf.isShowProgressTips
    let localId = conf.localId
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.uploadImage(isShowProgressTips, localId)
    } else { // ios
      let jsonObj = {
        isShowProgressTips: isShowProgressTips,
        localId: localId
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'uploadImage=' + jsonObj
    }
  },
  uploadVoice: function (conf) {
    callback = conf.success
    let isShowProgressTips = conf.isShowProgressTips
    let localId = conf.localId
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.uploadVoice(isShowProgressTips, localId)
    } else { // ios
      let jsonObj = {
        isShowProgressTips: isShowProgressTips,
        localId: localId
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'uploadVoice=' + jsonObj
    }
  },
  location: function (conf) {
    callback = conf.success
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.location()
    } else { // ios
      location.hash = 'location'
    }
  },
  networkType: function (conf) {
    callback = conf.success
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.networkType()
    } else { // ios
      location.hash = 'networkType'
    }
  },
  scanQRCode: function (conf) {
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.scanQRCode()
    } else { // ios
      location.hash = 'scanQRCode'
    }
  },
  startRecord: function (conf) {
    callback = conf.success
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.startRecord()
    } else { // ios
      location.hash = 'startRecord'
    }
  },
  playVoice: function (conf) {
    callback = conf.success
    let localId = conf.localId
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.playVoice(localId)
    } else { // ios
      let jsonObj = {
        localId: localId
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'playVoice=' + jsonObj
    }
  },
  pauseVoice: function (conf) {
    callback = conf.success
    let localId = conf.localId
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.pauseVoice(localId)
    } else { // ios
      let jsonObj = {
        localId: localId
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'pauseVoice=' + jsonObj
    }
  },
  stopVoice: function (conf) {
    callback = conf.success
    let localId = conf.localId
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.stopVoice(localId)
    } else { // ios
      let jsonObj = {
        localId: localId
      }
      jsonObj = JSON.stringify(jsonObj)
      location.hash = 'stopVoice=' + jsonObj
    }
  },
  scanQRCode1: function (conf) {
    callback = conf.success
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.scanQRCode1()
    } else { // ios
      location.hash = 'scanQRCode1'
    }
  },
  stopRecord: function (conf) {
    callback = conf.success
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.stopRecord()
    } else { // ios
      location.hash = 'stopRecord'
    }
  },
  endEditing: function (conf) {
    // 打开app
    // android
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
      window.demo.endEditing()
    } else { // ios
      location.hash = 'endEditing'
    }
  }
}
export default wy
