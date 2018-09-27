import React, {Component} from 'react';
import { StyleSheet,View , Text ,TextInput,Image,KeyboardAvoidingView,TouchableOpacity,StatusBar,FlatList, ActivityIndicator ,Alert,Button,navigationOptions,TouchableHighlight,ImageBackground,ListView,Linking } 
from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Video from 'react-native-af-video-player';
import Video, { ScrollView, Container } from 'react-native-af-video-player'
 
 


  

export default class KMAppPage_Detail extends Component{


  constructor(props) {
    super(props);
    this.state ={ 
      

    }
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      header: null,
      tabBarVisible,
    }
    
  }
 

  onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    })
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
      const user_running = navigation.getParam('user_running');
      const employeeID = navigation.getParam('employeeID');


      const url = 'http://resume-online.mono.co.th/API_React/VDO_TEST.mp4';


      const logo =  'https://your-url.com/placeholder.png';
      const placeholder = 'https://your-url.com/placeholder.png';
      const title = 'My video title';


      // let ContactImage1 = { uri: 'http://esc.monotechnology.com/images/emp/807_อนุชา_อ้นบุญมี.jpg' };
      // let ContactImage2 = { uri: 'http://esc.monotechnology.com/images/emp/สอง.JPG' };

      let URL_Thumbnail1=require('./image/km_thumb_demo/1.jpg');
      let URL_Thumbnail2=require('./image/km_thumb_demo/2.jpg');
      let URL_Thumbnail3=require('./image/km_thumb_demo/3.jpg');

      return (

        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}>

        
 <Video
          url={url}
          logo={logo}
          placeholder={placeholder}
          onFullScreen={status => this.onFullScreen(status)}
          rotateToFullScreen
        />



<ScrollView>


  

   
       


 


<View style={{
   flex: 1, 
   flexDirection: 'column',
   justifyContent: 'space-between',
   paddingLeft:10,
   paddingRight:10,
   paddingTop:10,
   marginBottom:10
}}>







       <View style={styles.BoxListContact}>
       <Image resizeMethod="resize"  style={styles.ContactImage}  source={URL_Thumbnail1} /> 
       <View style={styles.Contact_Detail_Area}>
        <Text style={styles.Contact_Detail_1}>Warangkana Tippayachon</Text>
        <Text style={styles.Contact_Detail_2}>Position :	HR Development Officer</Text>
        <Text style={styles.Contact_Detail_2}>Department : Human Resources</Text>
        <Text style={styles.Contact_Detail_2}>Email : warangkana.t@mono.co.th</Text>
        <Text style={styles.Contact_Detail_2}>Phone Number : 085-818-4555</Text>
        <Text style={styles.Contact_Detail_2}>Internal : #7778</Text>
        <Text style={styles.Contact_Detail_2}>     Content : In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.  Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed. </Text>
        <Text style={styles.Contact_Detail_2}>     Content : In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.  Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed. In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.  Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed.In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.  Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed.In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.  Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed.In descriptive writing, the author does not tell the reader what was seen, felt, tested, smelled, or heard.  Rather, he describes something that he experienced and, through his choice of words, makes it seem real. In other words, descriptive writing is vivid, colorful, and detailed.</Text>
        
      </View>
      </View>
      
 
  



      <View style={styles.BoxListContact}>
      <View style={styles.Contact_Detail_Area}>
      <TextInput style={styles.input_Contact} placeholder="Write a comment ..." placeholderTextColor="gray" autoCapitalize="none" multiline={true} editable={true} onChangeText={(text)=>this.updateValue(text,'training_message')} clearButtonMode="always"/>
    
       <TouchableOpacity style={styles.buttonContainer_Contact} onPress={()=>this.Send_Message()}>
       <Icon name='comment' size={17} color='white' style={{textAlign:'center'}}> 
              <Text style={styles.buttonRegister}>  Comment </Text>
              </Icon>
      </TouchableOpacity>
      </View>
      </View>

  


      <View style={styles.BoxListContact}>
      <View style={styles.Contact_Detail_Area}>
    
       <TouchableOpacity style={styles.buttonContainer_Back} onPress={() => this.props.navigation.navigate('KMAppPage')}>
       <Icon name='arrow-left' size={17} color='white' style={{textAlign:'center'}}> 
              <Text style={styles.buttonRegister}>  Back  </Text>
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







class KMAppPage2 extends Component{
  

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















class KMAppPage3 extends Component{

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








class KMAppPage4 extends Component{

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

      let ContactImage1 = { uri: 'http://esc.monotechnology.com/images/emp/807_อนุชา_อ้นบุญมี.jpg' };
      let ContactImage2 = { uri: 'http://esc.monotechnology.com/images/emp/สอง.JPG' };
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
        <Text style={styles.Contact_Detail_1}>Anucha Lastname</Text>
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
        <Text style={styles.Contact_Detail_1}>Warangkana Lastname</Text>
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
    //  fontWeight:"bold",
      paddingLeft:12,
      paddingRight:10,
      marginBottom:5,
      paddingTop:7,
      fontFamily: 'Kanit-Medium'
    },
    Contact_Detail_2:{
      fontSize: 11,
      paddingLeft:12,
      paddingRight:10,
      marginBottom:4,
      fontFamily: 'Kanit-Light'
  
    },
    input_Contact:{
      backgroundColor:'rgba(255,255,255,0.6)',
      color:'black',
      paddingHorizontal:10,
      alignSelf: 'stretch',
      flex: 1,
      height:50,
      fontFamily: 'Kanit-Light'
      
    },
    buttonContainer_Contact:{
      backgroundColor:'#0596f699',  
      paddingVertical:10,
      justifyContent:"center",
      textAlign:"center",
      fontFamily: 'Kanit-Light'
    },
    container: {
      flex: 1
    },
    videoContainer: {
      margin: 10
    },
    buttonContainer_Back:{
      backgroundColor:'rgba(178, 190, 195, 0.64)',  
      paddingVertical:10,
      justifyContent:"center",
      textAlign:"center",
      fontFamily: 'Kanit-Light'
    },
    buttonRegister:{

      fontFamily: 'Kanit-Light'
    }

});





// export default createBottomTabNavigator(
//   {
//     KM1: KMAppPage,
//     KM2: KMAppPage2,
//     KM3: KMAppPage3,
//     KM4: KMAppPage4,
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName;

//       if (routeName === 'KM1') {
//           iconName = 'edit';
//          } else if (routeName === 'KM2') {
//           iconName = 'book';
//         } else if (routeName === 'KM3') {
//           iconName = 'history';
//         } else if (routeName === 'KM4') {
//           iconName = 'user';
//         } 

//       return  <Icon name={iconName}  size={26} color={tintColor} />;
//     },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#279af3',
//       inactiveTintColor: 'gray',
//       labelStyle: { fontSize: 12 },
//     }
    
//   }
// );



