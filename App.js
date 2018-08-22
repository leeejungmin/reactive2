

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button} from 'react-native'
// import { DrawerNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation'
import Home from'./add/components/Home'
import Dashboard from'./add/components/Dashboard'
// import Sidebar from './add/components/Sidebar'
// localhost

// class App extends Component{
//   render(){
//     return(
//       <AppStack/>
//     )
//   }
// }
// const AppStack = DrawerNavigator({
//     home: {screen: Home},
//     Dashboard: {screen: Dashboard}
//   },{
//     contentComponent: Sidebar
//   }
// )




// export default App




export default createStackNavigator({
    home: Home,
    Dashboard: Dashboard,
}

  //({navigation})=><Siderbar/>
)
// // what is that?
