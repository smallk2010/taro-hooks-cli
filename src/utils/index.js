import Taro from '@tarojs/taro'

let curRoute = ''
export const jump = (route, params = {}, jumpType = 0) => {
    if (curRoute == route) return
    curRoute = route
    let _pages = getCurrentPages()
    let _page = _pages[_pages.length - 1]
    if (route.indexOf(_page.route) != -1) return
    if (_pages.length < 10) {
        let _params = ''
        for (let o in params) {
            _params += o + '=' + params[o] + '&'
        }
        _params = _params.length > 0 ? ('?' + _params.substring(0, _params.length - 1)) : ''
        let _url = route + _params
        let _jumpApi = ['navigateTo', 'switchTab', 'redirectTo', 'reLaunch']
        Taro[_jumpApi[jumpType]] && Taro[_jumpApi[jumpType]]({
            url: _url,
            complete () {
                curRoute = ''
            }
        })
    } else {
        curRoute = cf.homePage
        Taro.reLaunch({
            url: curRoute,
            complete () {
                curRoute = ''
            }
        })
    }
}

export const back = (delta = 1) => {
    let _pages = getCurrentPages()
    if (_pages.length > 1) {
        Taro.navigateBack({
            delta: delta
        })
    } else {
        Taro.reLaunch({
            url: cf.homePage,
            complete () {
                curRoute = ''
            }
        })
    }
}

export let aa = 'aaa'
export const setAa = ()=>{
    aa = '123'
    console.log(aa)
}