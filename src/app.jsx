import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'
import './font.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {
    let _isIpx = false
    const _system = Taro.getSystemInfoSync()
    if (_system.model.indexOf('iPhone X') != -1 || _system.model.indexOf('unknown<iPhone') != -1 || _system.model.indexOf(
      'iPhone 11') != -1) {
      _isIpx = true
    }
    let _designWidth = 750 // 设计稿尺寸
    let _scale = _designWidth / _system.screenWidth
    let _ipxBottomH = 34 // px
    let _navHeight = _system.statusBarHeight + 44 // px
    this.globalData.navHeight = _scale * _navHeight // rpx
    this.globalData.ipxBottomH = _isIpx ? (_scale * _ipxBottomH) : 0 // rpx
    this.globalData.statusBarHeight = _scale * _system.statusBarHeight // rpx
  }

  componentDidShow () { }

  componentDidHide () { }

  componentDidCatchError () { }
  globalData = {
    navHeight: 88, // 顶部菜单的高度
    ipxBottomH: 0, // IPX底部的高度
    statusBarHeight: 40 // 状态栏的高度
  }
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '示例',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
