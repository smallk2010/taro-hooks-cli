import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const OoSkeleton = () => {
  
  return (
    <View className="oo-skeleton" >
      hello,OoSkeleton
    </View>
  )
}

OoSkeleton.config = {
  navigationBarTitleText: 'OoSkeleton'
}

OoSkeleton.options = {
  addGlobalClass: true
}

export default OoSkeleton

