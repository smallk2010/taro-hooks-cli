import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default OoFooter = () => {
  
  return (
    <View className="oo-footer" >
      footer
    </View>
  )
}

OoFooter.config = {
  navigationBarTitleText: 'footer'
}

OoFooter.options = {
    addGlobalClass: true
  }