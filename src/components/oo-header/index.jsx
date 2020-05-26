import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

const app = Taro.getApp()
const OoHeader = () => {
  
  return (
    <View className="oo-header" >
      33header{app.globalData.navHenght}
    </View>
  )
}

OoHeader.config = {
  navigationBarTitleText: 'header'
}

OoHeader.options = {
  addGlobalClass: true
}

export default OoHeader