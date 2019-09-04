/**
 * @desc 检查是否是移动端（Mobile）、ipad、iphone、微信、QQ等
 * @date 2018-02-10 16:01:21
 * @return {Object}  返回browser对象
 */
export const userAgent = u => ({
  trident: u.includes('Trident'), // IE内核
  presto: u.includes('Presto'), // opera内核
  webKit: u.includes('AppleWebKit'), // 苹果、谷歌内核
  gecko: u.includes('Gecko') && !u.includes('KHTML'), // 火狐内核
  mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
  android: u.includes('Android') || u.includes('Adr'), // android终端
  iPhone: u.includes('iPhone'), // 是否为iPhone或者QQHD浏览器
  iPad: u.includes('iPad'), // 是否iPad
  webApp: !u.includes('Safari'), // 是否web应该程序，没有头部与底部
  weixin: u.includes('MicroMessenger'), // 是否微信 （2015-01-22新增）
  qq: u.match(/\sQQ/i) === ' qq' // 是否QQ
})

/**
 * @desc 微信授权页面
 * @date 2018-02-10 15:35:52
 * @return {string} 微信授权页面地址
 * @param url
 * @param origin
 * @param pathname
 */
export const getWXUrl = (url, origin, pathname) => {
  url = `${origin}/${pathname}/${url}`
  let appid = 'ww6ad9dc3f981c1421'
  let redirectUri = url && encodeURIComponent(url)
  let responseType = 'code'
  let scope = 'snsapi_base'
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}#wechat_redirect`
}
