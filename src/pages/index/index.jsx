import Taro, { useDidShow, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import OoHeader from '../../components/oo-header'
import OoCommon from '../../components/oo-common'
import usePage from '../../store/page'
import './index.scss'

const Index = () => {
  useDidShow(() => {
    console.log('componentDidShow')
  })
  const {
    loading,
    setLoading,
    msgs,
    setMsgs,
    jumpTo,
    backTo } = usePage()
  const setMsgsEvt = (msg) => {
    setMsgs([...msgs, msg])
    console.log(msgs)
  }
  const aniedFn = () => {
    setMsgs([])
  }
  return (
    <View className='index'>
      <OoHeader home title={'首页'}></OoHeader>
      <View onClick={() => setMsgsEvt('xxs')}>ddd{loading}</View>
      <OoCommon loading={loading} msgs={msgs} aniedFn={aniedFn}></OoCommon>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页'
}
export default Index