import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import app from '../../store/app'
import './index.scss'

const OoAa = () => {
  const [state, actions] = app.useStore()
  return (
    <View className="oo-test" onClick={() => actions.setInit({ navHeight: 32 })}>
      hello,OoTest，这是来自远方的{state.navHeight}
    </View>
  )
}

OoAa.config = {
  navigationBarTitleText: 'OoAa'
}

OoAa.options = {
  addGlobalClass: true
}

export default OoAa

