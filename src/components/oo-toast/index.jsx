import Taro, { useRef, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const OoToast = ({ msgs = [], aniedFn }) => {
  const [aniCount,setCount ]= useState(0)
  const aniedEvt = () => {
    setCount(aniCount + 1)

    console.log(aniCount)
  }
  return (
    <View className="oo-toast" onClick={() => aniedEvt(0)}>
      {msgs.map((msg, index) => {
        return <View className='oo-toast-cont oo-ani' onAnimationend={() => aniedEvt()} key={String(index)}>{msg}</View>
      })}
    </View>
  )
}


OoToast.options = {
  addGlobalClass: true
}

export default OoToast

