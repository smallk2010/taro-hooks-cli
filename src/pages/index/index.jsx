import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import OoHeader from '../../components/oo-header'
import OoFooter from '../../components/oo-footer'
import OoTest from '../../components/oo-test'
import OoAa from '../../components/oo-aa'
import app from '../../store/app'
import './index.scss'

const Index = () => {
  const [state, actions] = app.useStore()
  return (
    <View className='index'>
      <OoHeader></OoHeader>
      <Text>Hello world!{state.navHeight}</Text>
      <Button onClick={() => actions.setInit({ navHeight: 110 })}>设置名字</Button>
      <OoTest></OoTest>
      <OoAa></OoAa>
      <OoFooter></OoFooter>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页'
}
export default Index