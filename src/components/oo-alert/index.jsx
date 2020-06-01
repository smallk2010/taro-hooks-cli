import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const OoAlert = () => {
  
  return (
    <View className="oo-alert" >
      hello,OoAlert
    </View>
  )
}

OoAlert.config = {
  navigationBarTitleText: 'OoAlert'
}

OoAlert.options = {
  addGlobalClass: true
}

export default OoAlert

