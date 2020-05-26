import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

const OoHeader = () => {
  
  return (
    <View className="oo-header" >
      header
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