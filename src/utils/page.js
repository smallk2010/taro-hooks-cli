import Taro from '@tarojs/taro'
import ut from '../api/config'

export const jump = (route, params = {}, jumpType = 0) => {
    return new Promise((resolve, reject) => {
        let _pages = getCurrentPages()
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
                    resolve()
                }
            })
        } else {
            Taro.reLaunch({
                url: cf.homePage,
                complete () {
                    resolve()
                }
            })
        }
    })
}

export const back = (delta = 1) => {
    let _pages = getCurrentPages()
    if (_pages.length > 1) {
        Taro.navigateBack({
            delta: delta
        })
    } else {
        Taro.reLaunch({
            url: cf.homePage
        })
    }
}