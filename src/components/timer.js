/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

import Dimensions from 'Dimensions'
const {width, height} = Dimensions.get('window')

export default class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mark: false,
      timer: '-1',
      cState: [[styles.li], [styles.li], [styles.li], [styles.li], [styles.li], [styles.li]]
    }
  }

  componentWillMount () {
    fetch('https://m-dev.jzb.com/user/info/signremind', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'OAuth': this.props.token
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((json) => {
      if (json.res) {
        this.getCurrent(json.res.time.toString())
      }
    })
  }

  componentDidMount () {
    this.getCurrent('12')
  }

  componentWillUnmount () {}

  timerFn (f) {
    this.setState({
      mark: f
    })
  }

  getCurrent (val) {
    let cState = [[styles.li], [styles.li], [styles.li], [styles.li], [styles.li], [styles.li]]
    let num = 0
    switch (val) {
      case '8': 
        num = 0
        break
      case '10': 
        num = 1
        break
      case '12': 
        num = 2
        break
      case '14': 
        num = 3
        break
      case '20': 
        num = 4
        break
      default: 
        num = 5
        break
    }
    cState[num] = [styles.li, styles.bg]
    this.setState({
      cState: cState,
      timer: val
    })
  }

  submit () {
    this.timerFn(false)
    fetch(`https://m-dev.jzb.com/user/info/signremind?rtime=${this.state.timer}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'OAuth': this.props.token
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((json) => {
      console.log(json)
    })
  }

  render () {
    let mark = (
      <Text></Text>
    )
    if (this.state.mark) {
      mark = (
        <View style={styles.markBox}>
          <Text style={styles.mark} onPress={this.timerFn.bind(this, false)}></Text>
          <View style={styles.timer}>
            <Text style={{textAlign: 'center', marginTop: 10, lineHeight: 20, fontSize: 18, color: '#333'}}>设置签到时间</Text>
            <Text style={{textAlign: 'left', paddingLeft: 20, lineHeight: 30, fontSize: 14, color: '#f6a21c', marginBottom: 5}}>不再担心错过签到，设置每天提醒时间</Text>
            <View style={styles.liBox}>
              <Text style={this.state.cState[0]} onPress={this.getCurrent.bind(this, '8')}>8:00</Text>
              <Text style={this.state.cState[1]} onPress={this.getCurrent.bind(this, '10')}>10:00</Text>
              <Text style={this.state.cState[2]} onPress={this.getCurrent.bind(this, '12')}>12:00</Text>
            </View>
            <View style={styles.liBox}>
              <Text style={this.state.cState[3]} onPress={this.getCurrent.bind(this, '14')}>14:00</Text>
              <Text style={this.state.cState[4]} onPress={this.getCurrent.bind(this, '20')}>20:00</Text>
              <Text style={this.state.cState[5]} onPress={this.getCurrent.bind(this, '-1')}>不提醒</Text>
            </View>
            <View style={{backgroundColor: '#0a8cdd', height: 35,  borderRadius: 6, marginLeft: 20,marginRight: 20, marginTop: 10}}>
              <Text onPress={this.submit.bind(this)} style={{color: '#fff', lineHeight: 24, flex: 1, height: 35, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0)'}}>确认</Text>
            </View>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.ti}>
        <Text style={styles.butt} onPress={this.timerFn.bind(this, true)}>签到提醒</Text>
        {mark}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ti: {
    position: 'absolute',
    width: width,
    top: 75,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'flex-end'
  },
  butt: {
    marginRight: 15,
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    width: 66,
    height: 20,
    lineHeight: 15,
    textAlign: 'center',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  markBox: {
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height
  },
  mark: {
    position: 'absolute',
    top: -75,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  timer: {
    width: width * .8,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: height/2 - 200,
    left: width/2 - width*.8/2,
    borderRadius: 6
  },
  liBox: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 12,
    alignItems: 'center',
    flexDirection: 'row'
  },
  li: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cecece',
    textAlign: 'center',
    marginRight: 8,
    lineHeight: 20,
    height: 26,
    fontSize: 14
  },
  bg: {
    backgroundColor: '#cecece'
  }
})