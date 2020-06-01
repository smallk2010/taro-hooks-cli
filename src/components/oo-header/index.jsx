import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { back, jump } from '../../utils/page'
import cf from '../../api/config'

import './index.scss'

const app = Taro.getApp()

const OoHeader = ({ home = false, title = '示例', color = '#333', bgColor = '#fff', jumpTo, backTo }) => {
  const backEvt = () => {
    backTo && backTo()
  }
  const jumpEvt = () => {
    jumpTo && jumpTo(cf.homePage, {}, 3)
  }
  return (
    <View className="oo-header">
      <View className='oo-header-wrap' style={`height:${Taro.pxTransform(app.globalData.navHeight)};padding-top:${Taro.pxTransform(app.globalData.statusBarHeight)};background-color:${bgColor};`}>
        <View className="oo-header-content">
          <View className="oo-header-title-wrap">
            <View className="oo-header-title" style={`color:${color}`}>{title}</View>
          </View>
          {!home &&
            <View className="oo-header-btns">
              <View className="btn-back" onClick={backEvt}>
                <View className="iconfont icon-back"></View>
              </View>
              <View className="btn-home" onClick={jumpEvt}>
                <View className="iconfont icon-home"></View>
              </View>
            </View>
          }
        </View>
      </View>
    </View>
  )
}
OoHeader.defaultProps = {}

OoHeader.options = {
  addGlobalClass: true
}
export default OoHeader

