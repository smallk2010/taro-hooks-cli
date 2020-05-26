import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

const OoFooter = () => {
  
  return (
    <View className="oo-header" >
      header
    </View>
  )
}

OoFooter.config = {
  navigationBarTitleText: 'header'
}

OoFooter.options = {
  addGlobalClass: true
}

export default OoFooter