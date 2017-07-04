import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  NativeModules,
  TouchableHighlight
} from 'react-native'

import Timer from './../components/timer'
import Day from './../components/day'

import Dimensions from 'Dimensions'
const {width, height} = Dimensions.get('window')

export default class Forum extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listShow: true,
      weekNum: [],
      ad: 'https://atths.jzb.com/website/fe/pub_images/scores/link.png',
      cycle: 3,  //当前处于第 周期
      day: 5,    //签到总天数
      sign_continue: 5, //已签到天数
      total_score: 23, //用户元宝数
      today_score: 3,//获得元宝数
      reward: 1
    }
  }

  componentWillMount () {
    NativeModules.RNBridgeModule.getOauthToken((events) => {
      this.setState({
        tokenTxt: events
      })
      console.log(events)
    })
  }

  componentDidMount () {
    let week = [[1, 2, 2, 2, 2, 2, 5], [2, 2, 2, 2, 2, 2, 6], [2, 2, 2, 2, 2, 2, 7], [2, 2, 2, 2, 2, 2, 8]]
    let cycle = this.state.cycle - 1 > 3 ? 3 : this.state.cycle - 1
    let tip = ['分享帖子，可额外获得2个元宝', '参与回帖，可额外获得1个元宝', '分享问答，可额外获得2个元宝', '在学校写点评，获取额外1个元宝', '参与群聊，有机会获取元宝红包']
    this.setState({
      listShow: this.state.sign_continue % 7,
      weekNum: week[cycle],
      tip: tip[Math.abs(parseInt(Math.random() * tip.length))]
    })
  }

  componentWillUnmount () {} //当组件要被从界面上移除时的钩子函数

  // componentWillReceiveProps (nextProps, nextState) {}
  _backView () {
    NativeModules.RNBridgeModule.RNOpenVC('back')
  }

  _gotoNext() {
    this.props.navigator.push({
      id: 'ListPage',
      name: '元宝记录'
    })
  }

  _gotothread() {
    NativeModules.RNBridgeModule.RNOpenVC('thread_4699410')
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('./../../images/headBg.jpg')}>
          <View style={styles.overlay}>
            <View style={styles.overlayHeader}>
              <View style={styles.back}>
                <Text style={styles.backStyle} onPress={this._backView.bind(this)}>后退</Text>
              </View>
              <View style={styles.title}>
                <Text style={styles.titStyle}>签到</Text>
              </View>
              <View style={styles.record}>
                <Text style={styles.reStyle} onPress={this._gotoNext.bind(this)}>元宝记录</Text>
              </View>
            </View>
            <View style={styles.ru}>
              <View style={styles.ruBox}>
                <Text style={styles.txt1}>已签到</Text>
                <View style={styles.line}></View>
                <Text style={styles.txt2}><Text style={styles.txt3}>+{this.state.today_score}</Text>元宝</Text>
              </View>
            </View>
            <Text style={{fontSize: 14, lineHeight: 25, color: '#fff'}}>元宝: {this.state.total_score}</Text>
          </View>  
        </Image>
        {(() => {
          if (this.state.listShow) {
            return (
              <View>
                <Text style={{color: '#6a6a6a', fontSize: 14, lineHeight: 35, textAlign: 'center'}}>已连续签到<Text style={styles.or}>{this.state.sign_continue}</Text>天，再签<Text style={styles.or}>{7-this.state.day}</Text>天领取额外奖励</Text>
                <Day ind={this.state.listShow} weekNum={this.state.weekNum}></Day>
              </View>
            )
          } else {
            return (
              <View>
                <Text style={{color: '#6a6a6a', fontSize: 14, lineHeight: 35, textAlign: 'center'}}>连续签到{this.state.sign_continue}天，奖励{this.state.today_score}个元宝{this.state.reward?'可用来兑换大礼包':''}</Text>
                <View style={{alignItems: 'center'}}>
                  <Image style={styles.backgroundImage} style={{width: 240, height:240}} source={{uri: 'http://fe.jzb.com/pub_images/scores/e443483ab4bda08833f425fa2f8b9544.png'}}>
                    <Text style={{color: '#6a3811', fontSize: 26, fontWeight: '700', textAlign: 'center', marginTop: 175, backgroundColor: 'rgba(0,0,0,0)', lineHeight: 40}}>+{this.state.today_score}元宝</Text>
                  </Image>
                </View>
              </View>
            )
          }
        })()}
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{flex: 1, backgroundColor: '#ff8625', color: '#fff', fontSize: 14, width: 50, height: 20, textAlign: 'center', borderRadius: 20, lineHeight: 16}}>小提示</Text>
          <Text style={{flex: 1, color: '#6b6b6b', fontSize: 12, lineHeight:16, marginLeft: 5}}>{this.state.tip}</Text>
        </View>
        <View style={styles.ad}>
          <TouchableHighlight onPress={this._gotothread.bind(this)}>
            <Image style={{width: width, height: 77}} source={{uri: this.state.ad}}></Image>
          </TouchableHighlight>
        </View>
        <Timer token={this.state.tokenTxt} />
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
  },
  backgroundImage: {
    width: width,
    height: 220,
    resizeMode: 'stretch'
  },
  overlay: {
     backgroundColor: 'rgba(0,0,0,0)',
     alignItems: 'center'
  },
  overlayHeader: {
    width: width,
    height: 40,
    marginTop: 20,
    flexDirection: 'row'
  },
  back: {
    flex: 1
  },
  backStyle: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 25,
    marginLeft: 15
  },
  title: {
    flex: 1,
    alignItems: 'center'
  },
  titStyle: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 27
  },
  record: {
    flex: 1
  },
  reStyle: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 25,
    textAlign: 'right',
    paddingRight: 15
  },
  ru: {
    width: 106,
    height: 106,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 53,
    marginTop: 20
  },
  ruBox: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: '#53c4ee',
    margin: 6
  },
  txt1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderTopColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0)',
    marginTop: 20
  },
  line: {
    backgroundColor: '#fff',
    height: 2,
    marginTop: 6,
    width: 80,
    marginLeft: 7
  },
  txt2: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    backgroundColor: 'rgba(255,255,255,0)'
  },
  txt3: {
    color: '#ffc64a'
  },
  or: {
    color: '#ff6c2c'
  },
  ad: {
    width: width,
    backgroundColor: '#c00',
    position: 'absolute',
    bottom: 0,
    left: 0
  }
})