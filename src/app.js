/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * - Navigator.SceneConfigs.PushFromRight (默认) 
 * - Navigator.SceneConfigs.FloatFromRight 
 * - Navigator.SceneConfigs.FloatFromLeft 
 * - Navigator.SceneConfigs.FloatFromBottom 
 * - Navigator.SceneConfigs.FloatFromBottomAndroid 
 * - Navigator.SceneConfigs.FadeAndroid 
 * - Navigator.SceneConfigs.HorizontalSwipeJump 
 * - Navigator.SceneConfigs.HorizontalSwipeJumpFromRight 
 * - Navigator.SceneConfigs.VerticalUpSwipeJump 
 * - Navigator.SceneConfigs.VerticalDownSwipeJump
 */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native'

import IndexPage from './view/index'
import ListPage from './view/list'

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Navigator
          initialRoute={{id: 'IndexPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          // configureScene={(route) => {
          //   return Navigator.SceneConfigs.PushFromRight
          // }}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.PushFromRight
          }} />
    )
  }
  renderScene (route, navigator) {
    var routeId = route.id;
    if (routeId === 'IndexPage') {
      return (
        <IndexPage navigator={navigator} />
      )
    }
    if (routeId === 'ListPage') {
      return (
        <ListPage navigator={navigator} />
      )
    }
    return this.noRoute(navigator)

  }
  noRoute (navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    )
  }
}