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

export default class Day extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hi: [0, 0, 0, 0, 0, 0 , 0]
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps, nextState) {
    let nHi = [0, 0, 0, 0, 0, 0 , 0]
    for (let i = 0; i < nextProps.ind; i++) {
      nHi[i] = 1
    }
    this.setState({
      hi: nHi
    })
  }

  render () {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.flBox}>
          <View style={styles.fl}>
            <Text style={this.state.hi[0]?styles.flTxtR:styles.flTxtN}>一天</Text>
            <View style={this.state.hi[0]?styles.signR:styles.signN}>
              <Text style={this.state.hi[0]?styles.signTexR:styles.signTexN}>+{this.props.weekNum[0]}</Text>
              {(() => {
                if (this.state.hi[1]) {
                  return (
                    <View style={styles.okBox}>
                      <Text style={styles.okTxt}>ok</Text>
                    </View>
                  )
                }
              })()}
            </View>
          </View>
          <View style={styles.fl}>
            <Text style={this.state.hi[1]?styles.flTxtR:styles.flTxtN}>二天</Text>
            <View style={this.state.hi[1]?styles.signR:styles.signN}>
              <Text style={this.state.hi[1]?styles.signTexR:styles.signTexN}>+{this.props.weekNum[1]}</Text>
              {(() => {
                if (this.state.hi[1]) {
                  return (
                    <View style={styles.okBox}>
                      <Text style={styles.okTxt}>ok</Text>
                    </View>
                  )
                }
              })()}
            </View>
          </View>
          <View style={styles.fl}>
            <Text style={this.state.hi[2]?styles.flTxtR:styles.flTxtN}>三天</Text>
            <View style={this.state.hi[2]?styles.signR:styles.signN}>
              <Text style={this.state.hi[2]?styles.signTexR:styles.signTexN}>+{this.props.weekNum[2]}</Text>
              {(() => {
                if (this.state.hi[1]) {
                  return (
                    <View style={styles.okBox}>
                      <Text style={styles.okTxt}>ok</Text>
                    </View>
                  )
                }
              })()}
            </View>
          </View>
          <View style={styles.fl}>
            <Text style={this.state.hi[3]?styles.flTxtR:styles.flTxtN}>四天</Text>
            <View style={this.state.hi[3]?styles.signR:styles.signN}>
              <Text style={this.state.hi[3]?styles.signTexR:styles.signTexN}>+{this.props.weekNum[3]}</Text>
              {(() => {
                if (this.state.hi[3]) {
                  return (
                    <View style={styles.okBox}>
                      <Text style={styles.okTxt}>ok</Text>
                    </View>
                  )
                }
              })()}
            </View>
          </View>
        </View>
        <View style={styles.flBox2}>
          <View style={styles.fl}>
            <Text style={this.state.hi[4]?styles.flTxtR:styles.flTxtN}>五天</Text>
            <View style={this.state.hi[4]?styles.signR:styles.signN}>
              <Text style={this.state.hi[4]?styles.signTexR:styles.signTexN}>+{this.props.weekNum[4]}</Text>
              {(() => {
                if (this.state.hi[4]) {
                  return (
                    <View style={styles.okBox}>
                      <Text style={styles.okTxt}>ok</Text>
                    </View>
                  )
                }
              })()}
            </View>
          </View>
          <View style={styles.fl}>
            <Text style={this.state.hi[5]?styles.flTxtR:styles.flTxtN}>六天</Text>
            <View style={this.state.hi[5]?styles.signR:styles.signN}>
              <Text style={this.state.hi[5]?styles.signTexR:styles.signTexN}>+{this.props.weekNum[5]}</Text>
              {(() => {
                if (this.state.hi[5]) {
                  return (
                    <View style={styles.okBox}>
                      <Text style={styles.okTxt}>ok</Text>
                    </View>
                  )
                }
              })()}
            </View>
          </View>
          <View style={styles.fl}>
            <Text style={this.state.hi[6]?styles.flTxtR:styles.flTxtN}>七天</Text>
            <View style={this.state.hi[6]?styles.signR:styles.signN}>
              <Image style={{width: 25, height: 25, marginTop: 5}} source={require('../../images/7icon.png')}></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flBox: {
    width: width * .9,
    marginTop: 20,
    flexDirection: 'row'
  },
  flBox2: {
    width: width * .65,
    marginTop: 10,
    flexDirection: 'row'
  },
  fl: {
    height: 90,
    flex: 1,
    marginLeft: -3,
    borderWidth: 3,
    borderColor: '#c9eafe',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  flTxtR: {
    textAlign: 'center',
    color: '#ff621d',
    lineHeight: 25
  },
  flTxtN: {
    textAlign: 'center',
    color: '#a9a9a9',
    lineHeight: 25
  },
  signR: {
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#ffc64a',
    borderColor: '#ff9c0e',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 6
  },
  signN: {
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#dcdcdc',
    borderColor: '#cdcdcd',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 6
  },
  signTexR: {
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#fff',
    lineHeight: 26,
    fontWeight: '600',
    fontSize: 16,
    shadowOffset: { width:0, height:0 },
    shadowColor: '#c00',
    shadowOpacity: 1,
    shadowRadius: 1
  },
  signTexN: {
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#fff',
    lineHeight: 26,
    fontWeight: '600',
    fontSize: 16,
    shadowOffset: { width:0, height:0 },
    shadowColor: '#8e8e8e',
    shadowOpacity: 1,
    shadowRadius: 1
  },
  okBox: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ff7437',
    marginLeft: 25
  },
  okTxt: {
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#fff',
    fontSize: 9,
    textAlign: 'center',
    lineHeight: 13,
    transform: [{rotateZ: '-30deg'}]
  }
})