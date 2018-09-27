import React, {Component} from 'react';
import { StyleSheet,View , Text ,TextInput,Image,KeyboardAvoidingView,TouchableOpacity,StatusBar,FlatList, ActivityIndicator ,Alert,Button,navigationOptions,ImageBackground,Platform } from 'react-native';
// import LoginForm from './LoginForm';
import { createStackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';


import MainPage from './MainPage';
import TrainingAppPage from './TrainingAppPage';
import KMAppPage from './KMAppPage';
import KMAppPage_Detail from './KMAppPage_Detail';
import KMAppPage_List from './KMAppPage_List';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return <RootStack />;
  }
}









class Login extends Component{

  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#ecf0f1',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    header:null
  };

  
  constructor(props){
    super(props);
    this.state ={
     }
  }



  updateValue(text,field){
    if(field=='username'){
      this.setState({username:text,})
    }
  else if(field=='password'){
    this.setState({ password:text, })
  }
  
  }  // UpdateValue Function
  
  
  
  Login(){
    let collection={}
    collection.username=this.state.username,
    collection.password=this.state.password
  
  
    // console.warn(collection);
    // console.warn(this.state.username);
    // console.warn(this.state.password);
  
    fetch('http://resume-online.mono.co.th/API_React/Login.php?username_login='+this.state.username+'&password_login='+this.state.password)
    .then(res => res.json())
      .then((Response_Login) => { 
      
        this.setState({
         Data_Login: Response_Login['Login'],
         Login_Result: Response_Login['Login']['Login_Result']
         });
         
  
      // console.warn('Success:',Response_Login['Login']);

      //console.warn('Login Status : ',Response_Login['Login'][0]['Login_Result']);
      //Alert.alert(' Login Status : '+Response_Login['Login'][0]['Login_Result']);
  
      if( Response_Login['Login'][0]['Login_Result'] == 'YES' ){
    
        //Alert.alert("Login Success");
        this.props.navigation.navigate('MainPage'
        , {           user_running: Response_Login['Login'][0]['user_running'],
                      employeeID: Response_Login['Login'][0]['employeeID'],
                      name: Response_Login['Login'][0]['name'],
                      surname: Response_Login['Login'][0]['surname'],
                      nickName: Response_Login['Login'][0]['nickName'],
                      eName: Response_Login['Login'][0]['eName'],
                      eSurname: Response_Login['Login'][0]['eSurname'],
                      enickName: Response_Login['Login'][0]['enickName'],
                      email: Response_Login['Login'][0]['email'],
                      picPath: Response_Login['Login'][0]['picPath'],
                      departmentID: Response_Login['Login'][0]['departmentID'],
                      departmentName: Response_Login['Login'][0]['departmentName'],
                      positionID: Response_Login['Login'][0]['positionID'],
                      positonName: Response_Login['Login'][0]['positonName'],
                      companyID: Response_Login['Login'][0]['companyID'],
                      companyCode_X: Response_Login['Login'][0]['companyCode_X'],
                      gender: Response_Login['Login'][0]['gender'],
                      username_login: Response_Login['Login'][0]['username_login'],
                      status: Response_Login['Login'][0]['status']
                  
                 
                   }
                 )
      }
      else{
    
        Alert.alert("Login Failed")
   
      }
  
      })
  
  } // Login Function
  
  
  API_Facebook(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  API_Mono(){
  //  return fetch('https://facebook.github.io/react-native/movies.json')
   return fetch('http://resume-online.mono.co.th/API/Training/List_Training_For_React.php?employeeID=2806')
    .then((response2) => response2.json())
    .then((responseJson2) => {
      this.setState({
        isLoading: false,
  // Show 1 Record
  //     dataSource2: responseJson2.title,
  //     dataSource2: responseJson2.Train_Name,
  dataSource2: responseJson2.Training,
      }, function(){
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }
  
  
  
  API_Mono_Param(){
  
      var Data_Post = {
        Param1:'2747',
        Param2:'Value_2'
      };
  
      fetch('http://resume-online.mono.co.th/API/Training/List_Training_For_React.php?employeeID='+Data_Post.Param1)
      .then(res => res.json())
        .then((responseJson3) => { 
      //    console.warn('Success:',responseJson3)
          this.setState({
            isLoading: false,
      dataSource3: responseJson3.Training,
          }, function(){
          });
  
        })
         .catch(error => console.warn('Error:',error));
  }
  
  


  render() {
    let LogoImage = {
      uri: 'https://vignette.wikia.nocookie.net/cardfight/images/4/4f/Cardfight-Vanguard.png/revision/latest?cb=20180314195324'
    };

    return(
      
      <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={styles.container}>

      <KeyboardAvoidingView behavior="padding" style={{flex:1}} >

        <View style={styles.logoContainer}>
        {/* <Image  style={styles.logo}  source={LogoImage}  /> */}
        <Image  style={styles.logoMono}  source={require('./image/Logo.png')} />
          <Text style={styles.title}>Application for Employee X {"\n"}ทดสอบภาษาไทย</Text>
        </View>
  

        <View>
          {/* <LoginForm /> */}


<FlatList style={{ marginBottom:30 }} data={this.state.dataSource}
          renderItem={
            ({item}) => 
          <Text>{item.id} , {item.title}, {item.releaseYear}</Text>
        }
        keyExtractor={(item, index) => index.toString()} />

{/* 
Show 1 Record
<Text style={{ marginBottom:30 }} >{this.state.dataSource2}</Text> */}

{/* <FlatList style={{ marginBottom:30 }} data={this.state.dataSource2}
          renderItem={
            ({item}) => 
          <Text>{item.Train_ID} , {item.Train_Name}</Text>
        }   keyExtractor={(item, index) => index.toString()} />


   <FlatList style={{ marginBottom:30 }} data={this.state.dataSource3}
          renderItem={
            ({item}) => 
          <Text>{item.Train_ID} , {item.Train_Name}</Text>
        }  
        keyExtractor={(item, index) => index.toString()}
        />



   <FlatList style={{ marginBottom:30 }} data={this.state.Data_Login}
          renderItem={
            ({item}) => 
          <Text>Login Status : {item.Login_Result}  {item.name}</Text>

        }  
        keyExtractor={(item, index) => index.toString()}
        
        /> */}

        

      <StatusBar barStyle="light-content"/>
     <TextInput style={styles.input} placeholder="Username" placeholderTextColor="black" returnKeyType="next" 
     onSubmitEditing={()=>this.passwordInput.focus()} autoCapitalize="none" autoCorrect={false}
     onChangeText={(text)=>this.updateValue(text,'username')} />

     <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" returnKeyType="go" 
     ref={(input)=>this.passwordInput=input} secureTextEntry
     onChangeText={(text)=>this.updateValue(text,'password')} />
 
     <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.Login()} >
     <Icon name='sign-in' size={20} color='white' style={{textAlign:'center'}}> 
       <Text style={styles.buttonText}>  Alpha X Login</Text>
       </Icon>
     </TouchableOpacity> 

     {/* <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.API_Facebook()} >
       <Text style={styles.buttonText}>Call API Facebook</Text>
     </TouchableOpacity>

 <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.API_Mono()} >
       <Text style={styles.buttonText}>Call API Mono</Text>
     </TouchableOpacity>

<TouchableOpacity style={styles.buttonContainer} onPress={()=>this.API_Mono_Param()} >
       <Text style={styles.buttonText}>Call API w PARAM</Text>
     </TouchableOpacity> */}




 {/* <Button title="Go to Main"  onPress={() => this.props.navigation.navigate('MainPage')}   />
 */}

 {/* <Button title="Go to KM Page"  onPress={() => this.props.navigation.navigate('KMAppPage')}   />  */}
        </View>
     
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}




{/* <MainPage />  */}


const RootStack = createStackNavigator(
  {
    Login: Login,
    MainPage: MainPage,
    TrainingAppPage : TrainingAppPage,
    KMAppPage : KMAppPage,
    KMAppPage_Detail : KMAppPage_Detail,
    KMAppPage_List : KMAppPage_List,
  },
  { 
    initialRouteName: 'Login',
       navigationOptions: {
          title: '',
        //  header:null
         }
  }
  
);




const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:'#ffffff',
    padding:20,
    
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
    opacity:0.9,

    fontFamily: 'Kanit',
  }
  ,
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.5)',
    //backgroundColor:'#ecf0f1',
    
    marginBottom:10,
    color:'black',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'#0596f699',  
    //backgroundColor:'#7f8c8d',  
    marginBottom:10,
    paddingVertical:15
  },
  buttonText:{
    textAlign:'center',
    color:'white',
  fontWeight:'bold',
    fontSize:17,
  }
});