import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

const Index = () => {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页'
}
export default Index