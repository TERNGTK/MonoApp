import React, {Component} from 'react';
import { StyleSheet,View , Text ,TextInput,Image,KeyboardAvoidingView,TouchableOpacity,StatusBar,FlatList, ActivityIndicator ,Alert,Button,ScrollView,navigationOptions,TouchableHighlight,ImageBackground } 
from 'react-native';
import {DrawerNavigator} from 'react-navigation';


// export default class TrainingAppPage extends Component{
//   static navigationOptions = {
//     title: 'Training App',
//     headerStyle: {
//       backgroundColor: '#f1f2f6',
//     },
//     headerTintColor: 'black',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//     //headerLeft:null
//   };


  class TrainingAppPage extends Component{
  static navigationOptions = {
      drawerLabel :'Training App',
      drawerIcon :({tintColor}) => (
        <Image source={require('./image/app_icon/km.png')} 
        style={styles.icon}
        />

      ),
  };


  constructor(props) {
    super(props);
  }


    render() {

      const { navigation } = this.props;
      const user_running = navigation.getParam('user_running');
      const employeeID = navigation.getParam('employeeID');
      const name = navigation.getParam('name');
      const surname = navigation.getParam('surname');
      const nickName = navigation.getParam('nickName');
      const eName = navigation.getParam('eName');
      const eSurname = navigation.getParam('eSurname');
      const enickName = navigation.getParam('enickName');
      const email = navigation.getParam('email');
      const picPath = navigation.getParam('picPath');
      const departmentID = navigation.getParam('departmentID');
      const departmentName = navigation.getParam('departmentName');
      const positionID = navigation.getParam('positionID');
      const positonName = navigation.getParam('positonName');
      const companyID = navigation.getParam('companyID');
      const companyCode_X = navigation.getParam('companyCode_X');
      const username_login = navigation.getParam('username_login');
      const gender = navigation.getParam('gender');
      const status = navigation.getParam('status');
      
  
      let ProfileImage = {
        uri: 'http://esc.monotechnology.com/images/emp/'+navigation.getParam('picPath')
      };
  
      return (

        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}>
        <ScrollView>

  <Text>Main Screen</Text>
  
   <Image  style={styles.ProfileImage}  source={ProfileImage} /> 
  
  <Text>user_running : {JSON.stringify(user_running)}</Text>
  <Text>employeeID : {JSON.stringify(employeeID)}</Text>
  <Text>name : {JSON.stringify(name)}</Text>
  <Text>surname : {JSON.stringify(surname)}</Text>
  <Text>nickName : {JSON.stringify(nickName)}</Text>
  <Text>eName : {JSON.stringify(eName)}</Text>
  <Text>eSurname : {JSON.stringify(eSurname)}</Text>
  <Text>enickName : {JSON.stringify(enickName)}</Text>
  <Text>email : {JSON.stringify(email)}</Text>
  <Text>picPath : {JSON.stringify(picPath)}</Text>
  <Text>departmentID : {JSON.stringify(departmentID)}</Text>
  <Text>departmentName : {JSON.stringify(departmentName)}</Text>
  <Text>positionID : {JSON.stringify(positionID)}</Text>
  <Text>positonName : {JSON.stringify(positonName)}</Text>
  <Text>companyID : {JSON.stringify(companyID)}</Text>
  <Text>companyCode_X : {JSON.stringify(companyCode_X)}</Text>
  <Text>username_login : {JSON.stringify(username_login)}</Text>
  <Text>gender : {JSON.stringify(gender)}</Text>
  <Text>status : {JSON.stringify(status)}</Text>
  
  
  <Button  title="Back"  onPress={() => this.props.navigation.navigate('MainPage')} />
  <Button  title="Menu"  onPress={() => this.props.navigation.toggleDrawer()} />

  </ScrollView>
  </ImageBackground>
      );
    }
}








class TrainingAppPage2 extends Component{
  static navigationOptions = {
      drawerLabel :'Register',
      drawerIcon :({tintColor}) => (
        <Image source={require('./image/app_icon/km.png')} 
        style={styles.icon}
        />

      ),
  };


  constructor(props) {
    super(props);
  }


    render() {

      const { navigation } = this.props;
      const user_running = navigation.getParam('user_running');
      const picPath = navigation.getParam('picPath');
   
      
  
      let ProfileImage = {
        uri: 'http://esc.monotechnology.com/images/emp/'+navigation.getParam('picPath')
      };
  
      return (

        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}>
        <ScrollView>

  <Text>Second Screen</Text>
  
   <Image  style={styles.ProfileImage}  source={ProfileImage} /> 
  <Text>user_running : {JSON.stringify(user_running)}</Text>

  <Button  title="Back"  onPress={() => this.props.navigation.navigate('MainPage')} />  
  <Button  title="Menu"  onPress={() => this.props.navigation.openDrawer()} />

  </ScrollView>
  </ImageBackground>
      );
    }
}













const styles = StyleSheet.create({
  container:{
    flex:1,
   // backgroundColor:'#FFFFFF',
    padding:20
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo:{
    width:110,
    height:50,
    marginBottom:30
  },
  ProfileImage:{
    width:110,
    height:180,
    marginBottom:30
  },
  logoMono:{
    width:140,
    height:180
  },
  title:{
    color:'black',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9
  }
  ,
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.7)',
    marginBottom:10,
    color:'black',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'#7f8c8d',  
    marginBottom:10,
    paddingVertical:15
  },
  buttonText:{
    textAlign:'center',
    color:'white',
  
    fontWeight:'700'
  },
  ContainerBoxApp:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10
  },
  BoxApp:{
    width: 110, 
    height: 110, 
    backgroundColor: '#ecf0f1',   
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#d6d7da',
   justifyContent: 'center',alignItems:'center',
  },
  IconApp:{
    width: 70, 
    height: 70,
    marginBottom:7
  
  },
  TitleApp:{


  },
  icon:{
    width:24,
    height:24

  }
});

export default DrawerNavigator({
  TrainingAppPage:{
      screen: TrainingAppPage
    },
  TrainingAppPage2:{
      screen: TrainingAppPage2
    }
},
  {
      drawerPosition:'left',
      initialRouteName:'TrainingAppPage',
      drawerBackgroundColor:'white',
      drawerWidth:200,
  }
);
