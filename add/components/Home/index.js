/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
} from 'react-native'

import styles from './styles'


class Home extends Component {
  state={username:"", password: ""}

  static navigationOptions ={
    header: null
  }
  checkLogin() {
    const{ username, password}= this.state
    if(username == 'admin' && password =='admin'){
      console.warn('login is ok')
      this.props.navigation.navigate('Dashboard')
    //  redirect is something wrong
    //   fetch('http://localhost:3306', {method: 'POST', body:JSON.stringify({username,password})})
    //   .then(res => {                                   //////'username=${username}&password=${password}'})
    //     return res.text()
    //   })
    //   .then(res =>{if(res === '1'){
    //       this.props.navigation.navigate('dashboard')
    //   }else{
    //     Alert.alert('this is good connect but', 'Username/Password mismatch', [{text: 'Okay'}])
    //
    //   }
    //
    //
    // })
  }else{
      Alert.alert('what??', 'Username/Password mismatch', [{text: 'Okay'}])
      //something wrong
    }
}

  render() {
    const{ heading, input, parent} = styles
    return (
      <View style={parent}>
        <Text style={heading}>Login into the application</Text>
        <TextInput style={input} placeholder="Username" onChangeText={text => this.setState({username: text})}/>

        <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={ text => this.setState({password : text})}/>

        <Button  title={"Login"} onPress={()=>this.checkLogin()}/>
      </View>
    )
  }
}


/// capital attention onChangeText!!! et  username은 text로 받는다

export default Home
