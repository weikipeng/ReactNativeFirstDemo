import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
  } from 'react-native'

import {Navigator} from 'react-native-deprecated-custom-components'

import Dimensions from 'Dimensions'
const {width, height} = Dimensions.get('window')

export default class List extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {} //当组件要被从界面上移除时的钩子函数

  _gotoBack() {
    const nav = this.props.navigator;
    const routers = nav.getCurrentRoutes()
    if (routers.length > 1) {
      nav.pop()
    }
  }

  // componentWillReceiveProps (nextProps, nextState) {}

  render () {
    return (
      <View style={styles.container}>
      <Text>123</Text>
      <Text onPress={this._gotoBack.bind(this)}>back</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#dbf1fe',
    alignItems: 'center'
  }
})
