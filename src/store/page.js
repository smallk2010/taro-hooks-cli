import Taro, { useState } from '@tarojs/taro'
import cf from '../api/config'

export default () => {
    const [loading, setLoading] = useState(false)
    const [msgs, setMsgs] = useState(['1','2','3'])
    const jumpTo = (route, params = {}, jumpType = 0) => {
        if (loading) return
        setLoading(true)
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
                    setLoading(false)
                }
            })
        } else {
            Taro.reLaunch({
                url: cf.homePage,
                complete () {
                    setLoading(false)
                }
            })
        }
    }
    const backTo = (delta = 1) => {
        if (loading) return
        setLoading(false)
        let _pages = getCurrentPages()
        if (_pages.length > 1) {
            Taro.navigateBack({
                delta: delta,
                complete () {
                    setLoading(false)
                }
            })
        } else {
            Taro.reLaunch({
                url: cf.homePage,
                complete () {
                    setLoading(false)
                }
            })
        }
    }
    return {
        loading,
        setLoading,
        msgs,
        setMsgs,
        jumpTo,
        backTo
    }
}