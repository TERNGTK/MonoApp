import React, {Component} from 'react';
import { StyleSheet,View , Text ,TextInput,Image,KeyboardAvoidingView,TouchableOpacity,StatusBar,FlatList, ActivityIndicator ,Alert,Button,ScrollView,navigationOptions,TouchableHighlight,ImageBackground,ListView,Linking } 
from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
 
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
  

  constructor(props) {
    super(props);
    this.state ={ isLoading: true,
      
    }
  
  }




  API_Training(){

    const { navigation } = this.props;
    const employeeID = navigation.getParam('employeeID');

    return fetch('http://resume-online.mono.co.th/API_React/List_Training.php?employeeID='+employeeID)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data_Training: responseJson.Training,
         
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  API_Training_Register(Train_ID){
    const { navigation } = this.props;
    const employeeID = navigation.getParam('employeeID');
   
    // console.warn(Train_ID);
    // console.warn(employeeID);
   
    

    return fetch('http://resume-online.mono.co.th/API_React/Register_Training.php?employeeID='+employeeID+'&Train_ID='+Train_ID)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.warn('Register_Result:',responseJson.Register_Result)

        if (responseJson.Register_Result=='YES') {
          Alert.alert("Register Success")
          this.API_Training()

        } else {
          Alert.alert("Register Failed")
          this.API_Training()
        }

      })
      .catch((error) =>{
        console.error(error);
      });

  }

  API_Training_Register_Cancel(Train_ID){

    const { navigation } = this.props;
    const employeeID = navigation.getParam('employeeID');
   

    // console.warn(Train_ID);
    // console.warn(employeeID);
    //Alert.alert("Function Cancel")

    return fetch('http://resume-online.mono.co.th/API_React/Register_Training_Cancel.php?employeeID='+employeeID+'&Train_ID='+Train_ID)
    .then((response) => response.json())
    .then((responseJson) => {
    
      //console.warn('Register_Cancel_Result:',responseJson.Register_Cancel_Result)
 
      if (responseJson.Register_Cancel_Result=='YES') {
        Alert.alert("Unregister Success")
        this.API_Training()
      } else {
        Alert.alert("Unregister Failed")
        this.API_Training()
      }


    })
    .catch((error) =>{
      console.error(error);
    });

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

        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}
        onLoadEnd={()=>this.API_Training()}>

        <ScrollView>



  <View style={styles.ContainerBoxApp}>
 <FlatList style={{ marginBottom:30 }} data={this.state.data_Training}
           renderItem={ 
             ({item}) => 
             <View style={styles.BoxListTraining}>


          <View>
        <Text style={styles.Detail_1}>{item.Train_Name} </Text>
        <Text style={styles.Detail_2}>Location : {item.Train_Location}</Text>
        <Text style={styles.Detail_2}>Date : {item.Train_Date}</Text>
        </View> 

 
{item.Registed=='NO'? (
        <TouchableOpacity style={styles.buttonContainer_Register} 
        onPress={() => Alert.alert(
          'Confirmation',
          'You want to register this course ?',
          [
            {text: 'Yes', onPress: () => { var Train_ID = item.Train_ID  
               this.API_Training_Register(Train_ID)} },
            {text: 'No'},
          ],
          { cancelable: false }
        )} >
      <Icon name='user-plus' size={17} color='white' style={{textAlign:'center'}}> 
      <Text style={styles.buttonRegister}>  Register</Text>
      </Icon>
      </TouchableOpacity>
) : (
  <TouchableOpacity style={styles.buttonContainer_Cancel} 
          onPress={() => Alert.alert(
            'Confirmation',
            'You want to unregister this course ?',
            [
              {text: 'Yes', onPress: () => { var Train_ID = item.Train_ID  
                this.API_Training_Register_Cancel(Train_ID)} },
              {text: 'No'},
              
            ],
            { cancelable: false }
          )} >
          <Icon name='user-times' size={17} color='white' style={{textAlign:'center'}}> 
    <Text style={styles.buttonRegister}>  Unregister</Text>
    </Icon>
        </TouchableOpacity>
)}



 {/* <TouchableOpacity style={styles.buttonContainer_Register} 
      onPress={()=> { var Train_ID = item.Train_ID  
      this.API_Training_Register(Train_ID)}}>
              <Text style={styles.buttonRegister}>Register</Text>
      </TouchableOpacity> */}

  {/* <TouchableOpacity style={styles.buttonContainer_Cancel} 
        onPress={()=> { var Train_ID = item.Train_ID  
        this.API_Training_Register_Cancel(Train_ID)}}>
    <Text style={styles.buttonRegister}>Unregister</Text>
        </TouchableOpacity> */}



{/* No Icon , If else Inline
<TouchableOpacity style={styles.buttonContainer} 
onPress={()=> { var Train_ID = item.Train_ID  
 this.API_Training_Register(Train_ID)}}>
        <Text style={styles.buttonRegister}>
          {item.Registed=='NO'?'Register':'Cancel' }</Text>
 </TouchableOpacity>
*/}

{/* Have Icon
  <TouchableOpacity style={styles.buttonContainer} 
onPress={()=> {
  var Train_ID = item.Train_ID
  this.API_Training_Register(Train_ID)}}>
<Icon name='edit' size={15} color='white' style={{textAlign:'center'}}> 
      <Text style={styles.buttonRegister}>Register</Text>
       </Icon>
     </TouchableOpacity> */}


        </View>
        

         }
         keyExtractor={(item, index) => index.toString()}>
</FlatList>

</View>



    {/* <Text>Main Screen</Text>
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
  <Button  title="Back"  onPress={() => this.props.navigation.navigate('MainPage')} /> */}




  </ScrollView>
  </ImageBackground>
      );
    }
}







class TrainingAppPage2 extends Component{
  

  constructor(props) {
    super(props);
    this.state ={ isLoading: true,
      
    }
  
  }




  API_Training_Document(){

    const { navigation } = this.props;
    const employeeID = navigation.getParam('employeeID');

    return fetch('http://resume-online.mono.co.th/API_React/List_Training_Document.php?employeeID='+employeeID)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data_Training_Document: responseJson.Training_Document,
         
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  API_Download_Document(Train_Doc_URL){

    // var file_url='http://resume-online.mono.co.th/File_React/test_file.pdf';
    // var drive_url='https://drive.google.com/file/d/0B6fFPyfJabUDc3RhcnRlcl9maWxlX2Rhc2hlclYw/view?usp=sharing';

    var url=Train_Doc_URL;
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }


 

    render() {
     
      const { navigation } = this.props;
      const user_running = navigation.getParam('user_running');
      const employeeID = navigation.getParam('employeeID');
  
      


  
      let ProfileImage = {
        uri: 'http://esc.monotechnology.com/images/emp/'+navigation.getParam('picPath')
      };
  
      return (

        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}
        onLoadEnd={()=>this.API_Training_Document()}>

        <ScrollView>



  <View style={styles.ContainerBoxApp}>
 <FlatList style={{ marginBottom:30 }} data={this.state.data_Training_Document}
           renderItem={ 
             ({item}) => 
             <View style={styles.BoxListTraining}>


          <View>
        <Text style={styles.Detail_1}>{item.Train_Name} </Text>
        <Text style={styles.Detail_2}>Location : {item.Train_Location}</Text>
        <Text style={styles.Detail_2}>Date : {item.Train_Date}</Text>
        </View> 


        {/* <TouchableOpacity style={styles.buttonContainer_Register}  
        onPress={()=>this.API_Download_Document()}> */}

        <TouchableOpacity style={styles.buttonContainer_Register} 
onPress={()=> { var Train_Doc_URL = item.Train_Doc_URL  
 this.API_Download_Document(Train_Doc_URL)}}>
    <Icon name='cloud-download' size={17} color='white' style={{textAlign:'center'}}> 
              <Text style={styles.buttonRegister}>  Download</Text>
              </Icon>
 </TouchableOpacity>




        </View>
        

         }
         keyExtractor={(item, index) => index.toString()}>
</FlatList>

</View>



  </ScrollView>
  </ImageBackground>
      );
    }
}















class TrainingAppPage3 extends Component{

  constructor(props) {
    super(props);
    this.state ={ isLoading: true,
      
    }
  
  }

  API_Training_History(){

    const { navigation } = this.props;
    const employeeID = navigation.getParam('employeeID');

    return fetch('http://resume-online.mono.co.th/API_React/List_Training_History.php?employeeID='+employeeID)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data_Training_History: responseJson.Training_History,
         
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }


    render() {
     
      const { navigation } = this.props;
      const employeeID = navigation.getParam('employeeID');
   
  
  
      let ProfileImage = {
        uri: 'http://esc.monotechnology.com/images/emp/'+navigation.getParam('picPath')
      };
  
      return (

        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}
        onLoadEnd={()=>this.API_Training_History()}>

        <ScrollView>



  <View style={styles.ContainerBoxApp}>
 <FlatList style={{ marginBottom:30 }} data={this.state.data_Training_History}
           renderItem={ 
             ({item}) => 
             <View style={styles.BoxListHistory}>


          <View>
        <Text style={styles.Detail_1}>{item.Number_Record} : {item.Train_Name} </Text>
        <Text style={styles.Detail_2}>Location : {item.Train_Location}</Text>
        <Text style={styles.Detail_2}>Date : {item.Train_Date}</Text>
        </View> 

        </View>
         }
         keyExtractor={(item, index) => index.toString()}>
</FlatList>

</View>


  </ScrollView>
  </ImageBackground>
      );
    }
}








class TrainingAppPage4 extends Component{

  constructor(props) {
    super(props);
    this.state ={ 
      

    }
  }

  updateValue(text,field){
    if(field=='training_message'){
      this.setState({training_message:text,})
    }

  }  // UpdateValue Function
  


  
  Send_Message(){

  
     const { navigation } = this.props;
     const employeeID = navigation.getParam('employeeID');
    
  
    //   console.warn(" employeeID : ",employeeID);
    //  console.warn(" training_message : ",this.state.training_message);
  
    if(this.state.training_message!=undefined && employeeID!=undefined){

      return fetch('http://resume-online.mono.co.th/API_React/Training_Message.php?employeeID='+employeeID+'&training_message='+this.state.training_message)
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.Message_Result=='YES') 
        {  Alert.alert("Sent Message Success") 
       } 
        else {  Alert.alert("Empty Message. \n Please try again")  
       }
 
      })
      .catch((error) =>{
        console.error(error);
      });
  
    }else{
      Alert.alert("Empty Message. \n Please try again")  

    }
 
    
   
  } // Send_Message Function


 

    render() {
     
      const { navigation } = this.props;
      const employeeID = navigation.getParam('employeeID');

      // let ContactImage1 = { uri: 'http://esc.monotechnology.com/images/emp/807_อนุชา_อ้นบุญมี.jpg' };
      // let ContactImage2 = { uri: 'http://esc.monotechnology.com/images/emp/สอง.JPG' };
      let ContactImage1=require('./image/contact/ptong.jpg');
      let ContactImage2=require('./image/contact/s.jpg');
      return (
  
        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}>
<ScrollView>

<View style={{
   flex: 1, 
   flexDirection: 'column',
   justifyContent: 'space-between',
   paddingLeft:10,
   paddingRight:10,
   paddingTop:10
}}>

    <View style={styles.BoxListContact}>
    <Image  style={styles.ContactImage}  source={ContactImage1} /> 
    <View style={styles.Contact_Detail_Area}>
        <Text style={styles.Contact_Detail_1}>Anucha Anbunmee</Text>
        <Text style={styles.Contact_Detail_2}>Position : Assistant HRD Manager</Text>
        <Text style={styles.Contact_Detail_2}>Department : Human Resources</Text>
        <Text style={styles.Contact_Detail_2}>Email : anucha.a@mono.co.th</Text>
        <Text style={styles.Contact_Detail_2}>Phone Number : 081-755-9157</Text>
        <Text style={styles.Contact_Detail_2}>Internal : #7778</Text>
        </View>
      </View>
  



       <View style={styles.BoxListContact}>
       <Image  style={styles.ContactImage}  source={ContactImage2} /> 
       <View style={styles.Contact_Detail_Area}>
        <Text style={styles.Contact_Detail_1}>Warangkana Tippayachon</Text>
        <Text style={styles.Contact_Detail_2}>Position :	HR Development Officer</Text>
        <Text style={styles.Contact_Detail_2}>Department : Human Resources</Text>
        <Text style={styles.Contact_Detail_2}>Email : warangkana.t@mono.co.th</Text>
        <Text style={styles.Contact_Detail_2}>Phone Number : 085-818-4555</Text>
        <Text style={styles.Contact_Detail_2}>Internal : #7778</Text>
      </View></View>
      
  
      <View style={styles.BoxListContact}>
      <View style={styles.Contact_Detail_Area}>
      <TextInput style={styles.input_Contact} placeholder="Your Message" placeholderTextColor="gray" autoCapitalize="none" multiline={true} editable={true} onChangeText={(text)=>this.updateValue(text,'training_message')} clearButtonMode="always"/>
    
       <TouchableOpacity style={styles.buttonContainer_Contact} onPress={()=>this.Send_Message()}>
       <Icon name='envelope' size={17} color='white' style={{textAlign:'center'}}> 
              <Text style={styles.buttonRegister}>  Send Message</Text>
              </Icon>
      </TouchableOpacity>
      </View>
      </View>






</View>



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
  ProfileImage:{
    width:110,
    height:180,
    marginBottom:30
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.7)',
    marginBottom:10,
    color:'black',
    paddingHorizontal:10
  },
  ContainerBoxApp:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10
  },
  icon:{
    width:24,
    height:24

  },
  BoxListTraining:{
   // height: 120, 
    backgroundColor:'rgba(255,255,255,0.4)',  
//    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#d6d7da',
   // justifyContent: 'center',
    justifyContent: 'space-between',
  //alignItems:'center',
   marginBottom:12,
  //  paddingVertical:15,
   // textAlign:'left',
   paddingTop:7,

  },
  Detail_1:{
    fontSize: 13,
    fontWeight:"bold",
    paddingLeft:10,
    paddingRight:10,
    marginBottom:5
  },
  Detail_2:{
    fontSize: 11,
    paddingLeft:10,
    paddingRight:10,

  },
  buttonContainer_Register:{
    backgroundColor:'#0596f699',  
    paddingVertical:10,
    justifyContent:"center",
    textAlign:"center",
    marginTop:10,
  },
  buttonContainer_Cancel:{
    backgroundColor:'#ff00008a',  
    paddingVertical:10,
    justifyContent:"center",
    textAlign:"center",
    marginTop:10,
  },
  buttonRegister:{ 
    textAlign:'center',
    color:'white',
    fontWeight:"bold",
    fontSize:15,
},
  BoxListHistory:{
     // height: 120, 
      backgroundColor:'rgba(255,255,255,0.4)',  
  //    borderRadius: 8,
      borderWidth: 1.5,
      borderColor: '#d6d7da',
     // justifyContent: 'center',
      justifyContent: 'space-between',
    //alignItems:'center',
     marginBottom:12,
    //  paddingVertical:15,
     // textAlign:'left',
     paddingTop:7,
     paddingBottom:7,
  
    },
    BoxListContact:{
      backgroundColor:'rgba(255,255,255,0.4)',  
          borderWidth: 1.5,
          borderColor: '#d6d7da',
          justifyContent: 'space-between',
         marginBottom:12,
         flex: 1, flexDirection: 'row'

    },
    ContactImage:{
      width:100,
      height:160
    },
    Contact_Detail_Area:{
      flex: 1, 
      flexDirection: 'column'
    },
    Contact_Detail_1:{
      fontSize: 13,
      fontWeight:"bold",
      paddingLeft:12,
      paddingRight:10,
      marginBottom:5,
      paddingTop:7
    },
    Contact_Detail_2:{
      fontSize: 11,
      paddingLeft:12,
      paddingRight:10,
      marginBottom:4,
  
    },
    input_Contact:{
      backgroundColor:'rgba(255,255,255,0.6)',
      color:'black',
      paddingHorizontal:10,
      alignSelf: 'stretch',
      flex: 1,
      height:100
      
    },
    buttonContainer_Contact:{
      backgroundColor:'#0596f699',  
      paddingVertical:10,
      justifyContent:"center",
      textAlign:"center",
    },

});



export default createBottomTabNavigator(
  {
    Register: TrainingAppPage,
    Document: TrainingAppPage2,
    History: TrainingAppPage3,
    Contact: TrainingAppPage4,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      // if (routeName === 'Register') {
      //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // } else if (routeName === 'Document') {
      //   iconName = `ios-options${focused ? '' : '-outline'}`;
      // } else if (routeName === 'History') {
      //   iconName = `ios-options${focused ? '' : '-outline'}`;
      // } else if (routeName === 'Contact') {
      //   iconName = `ios-options${focused ? '' : '-outline'}`;
      // }
      //return <Ionicons name={iconName} size={25} color={tintColor} />;

      if (routeName === 'Register') {
          iconName = 'edit';
         } else if (routeName === 'Document') {
          iconName = 'book';
        } else if (routeName === 'History') {
          iconName = 'history';
        } else if (routeName === 'Contact') {
          iconName = 'user';
        } 

      return  <Icon name={iconName}  size={26} color={tintColor} />;
    },
    }),
    tabBarOptions: {
      activeTintColor: '#279af3',
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 12 },
    },
    
  }
);
