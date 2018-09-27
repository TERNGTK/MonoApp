import React, {Component} from 'react';
import { StyleSheet,View , Text ,TextInput,Image,KeyboardAvoidingView,TouchableOpacity,StatusBar,FlatList, ActivityIndicator ,Alert,Button,ScrollView,navigationOptions,TouchableHighlight,ImageBackground,ListView,Linking } 
from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Video from 'react-native-af-video-player';
// import Video, { ScrollView, Container } from 'react-native-af-video-player'
 
 


  

class KMAppPage extends Component{


  constructor(props) {
    super(props);
    this.state ={ 
      

    }
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


      // let URL_Thumbnail1 = { uri: 'http://km.mono.co.th/online/2018/01/km_pc_1000000089_1516863954_thumb.jpg' };
      // let URL_Thumbnail2 = { uri: 'http://km.mono.co.th/online/2018/02/km_pc_1000000092_1517476162_thumb.jpg' };
      // let URL_Thumbnail3 = { uri: 'http://km.mono.co.th/online/2018/07/km_pc_1000000150_1531996513_thumb.jpg' };
      
      let URL_Thumbnail1=require('./image/km_thumb_demo/1.jpg');
      let URL_Thumbnail2=require('./image/km_thumb_demo/2.jpg');
      let URL_Thumbnail3=require('./image/km_thumb_demo/3.jpg');
       
      return (

        <ImageBackground source={require('./image/wallpaper/white_gradient.jpg')} style={{flex:1,padding:0}}>

   


<ScrollView>
     

<Text style={styles.TitleTypeContent} >Recommended</Text>
<ScrollView horizontal={true} style={styles.ScrollViewHorizontal}>
<View style={styles.Container_Content}>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
<View style={styles.ListBox_Content}>
       <Image resizeMethod="resize" style={styles.Thumb_Image_Content}  source={URL_Thumbnail2} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

        <Text style={styles.Title_Content}>ผู้นำแบบ "Engaging Leader"</Text>

      </View>
    </View>
 </TouchableHighlight>

    <View style={styles.ListBox_Content}>
       <Image resizeMethod="resize"  style={styles.Thumb_Image_Content}   source={URL_Thumbnail3} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

        <Text style={styles.Title_Content}>งานสัมมนาหัวข้อ "Essential Digital Marketing"</Text>

      </View>
    </View>
 
    <View style={styles.ListBox_Content}>
       <Image resizeMethod="resize" style={styles.Thumb_Image_Content}   source={URL_Thumbnail1} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

        <Text style={styles.Title_Content}>เทคโนโลยี Blockchain สำหรับองค์กร</Text>

      </View>
    </View>
 

</View>
</ScrollView>




<Text style={styles.TitleTypeContent} >New Content</Text>
<ScrollView horizontal={true} style={styles.ScrollViewHorizontal}>
<View style={styles.Container_Content}>


<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
<View style={styles.ListBox_Content}>
       <Image  resizeMethod="resize" style={styles.Thumb_Image_Content}  source={URL_Thumbnail3} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

         <Text style={styles.Title_Content}>เทคโนโลยี Blockchain สำหรับองค์กร</Text>

      </View>
    </View>
 </TouchableHighlight>


    <View style={styles.ListBox_Content}>
       <Image resizeMethod="resize" style={styles.Thumb_Image_Content}   source={URL_Thumbnail1} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

         <Text style={styles.Title_Content}>ผู้นำแบบ "Engaging Leader"</Text>

      </View>
    </View>
 
    <View style={styles.ListBox_Content}>
       <Image resizeMethod="resize" style={styles.Thumb_Image_Content}   source={URL_Thumbnail2} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

         <Text style={styles.Title_Content}>งานสัมมนาหัวข้อ "Essential Digital Marketing"</Text>

      </View>
    </View>
 

</View>
</ScrollView>





<Text style={styles.TitleTypeContent} >Top Rate</Text>
<ScrollView horizontal={true} style={styles.ScrollViewHorizontal}>
<View style={styles.Container_Content}>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
  <View style={styles.ListBox_Content}>
       <Image resizeMethod="resize" style={styles.Thumb_Image_Content}   source={URL_Thumbnail1} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

         <Text style={styles.Title_Content}>งานสัมมนาหัวข้อ "Essential Digital Marketing"</Text>

      </View>
    </View>
 </TouchableHighlight>

    <View style={styles.ListBox_Content}>
       <Image  resizeMethod="resize" style={styles.Thumb_Image_Content}  source={URL_Thumbnail2} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

         <Text style={styles.Title_Content}>เทคโนโลยี Blockchain สำหรับองค์กร</Text>

      </View>
    </View>
 
    <View style={styles.ListBox_Content}>
       <Image  resizeMethod="resize" style={styles.Thumb_Image_Content}   source={URL_Thumbnail3} /> 

       <View style={{ flex: 1, 
         flexDirection: 'column',
        or:'blue'}}>

        <Text style={styles.Title_Content}>ผู้นำแบบ "Engaging Leader"</Text>

      </View>
    </View>
 

</View>
</ScrollView>





{/* <View style={{
   flex: 1, 
   flexDirection: 'column',
   justifyContent: 'space-between',
   paddingLeft:10,
   paddingRight:10,
   paddingTop:10,
   marginBottom:10
}}>



<Text style={styles.TitleTypeContent} >Recommended</Text>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
       <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail3} /> 
       <View style={styles.Content_Detail_Area}>
        <Text style={styles.Contact_Detail_1}>ผู้นำแบบ "Engaging Leader"</Text>
  
      </View>
      </View>
      </TouchableHighlight>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
          <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail2} /> 
       <View style={styles.Content_Detail_Area}>
        <Text style={styles.Contact_Detail_1}>งานสัมมนาหัวข้อ "Essential Digital Marketing"</Text>
   
      </View>
      </View>
      </TouchableHighlight>

  <TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >      
          <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail1} /> 
       <View style={styles.Content_Detail_Area}>
        <Text style={styles.Contact_Detail_1}>เทคโนโลยี Blockchain สำหรับองค์กร</Text>
  
      </View>
      </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
      <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail3} /> 
       <View style={styles.Content_Detail_Area}>
       <Text style={styles.Contact_Detail_1}>ผู้นำแบบ "Engaging Leader"</Text>
    
      </View>
      </View>
      </TouchableHighlight>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
          <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail2} /> 
       <View style={styles.Content_Detail_Area}>
       <Text style={styles.Contact_Detail_1}>งานสัมมนาหัวข้อ "Essential Digital Marketing"</Text>
    
      </View>
      </View>
      </TouchableHighlight>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
          <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail1} /> 
       <View style={styles.Content_Detail_Area}>
       <Text style={styles.Contact_Detail_1}>เทคโนโลยี Blockchain สำหรับองค์กร</Text>
     
      </View>
      </View>
      </TouchableHighlight>



<Text style={styles.TitleTypeContent}  >New Content</Text>
<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
          <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail2} /> 
       <View style={styles.Content_Detail_Area}>
       <Text style={styles.Contact_Detail_1}>งานสัมมนาหัวข้อ "Essential Digital Marketing"</Text>
    
      </View>
      </View>
      </TouchableHighlight>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
          <View style={styles.BoxListContent}>
       <Image  style={styles.ContentImage}  source={URL_Thumbnail1} /> 
       <View style={styles.Content_Detail_Area}>
       <Text style={styles.Contact_Detail_1}>เทคโนโลยี Blockchain สำหรับองค์กร</Text>
     
      </View>
      </View>
      </TouchableHighlight>


</View> */}


  </ScrollView>
  </ImageBackground>
      );
    }
}





  class KMAppPage2 extends Component{

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
        
       
        const user_running = navigation.getParam('user_running');
        const employeeID = navigation.getParam('employeeID');
 
  
        // let Technology_Image = { uri: 'https://thebookofkindle.com/wp-content/uploads/2018/07/Global-Big-Data-Technology-and-Services-Market.png' };
        // let Language_Image = { uri: 'https://user-images.githubusercontent.com/18658299/29040017-d3563bb0-7bad-11e7-99e6-7702e6e1e76c.png' };
        // let Financial_Image = { uri: 'https://cdn2.iconfinder.com/data/icons/business-icons-3-2/256/Investment-512.png' };

        // let Marketing_Image = { uri: 'https://banner2.kisspng.com/20180903/gjv/kisspng-content-marketing-marketing-strategy-digital-marke-virtually-perfect-real-world-digital-solutions-5b8cb38a2f8807.1296508615359476581947.jpg' };
        // let HR_Image = { uri: 'http://www.myiconfinder.com/uploads/iconsets/256-256-1212c621ce692baa01da50e2c57235db-management.png' };
        // let Legal_Image = { uri: 'https://cdn.website.thryv.com/6e6e2f14e6c64ca998ed26759bc3bc4e/MOBILE/jpg/967.jpg' };
        // let ETC_Image = { uri: 'http://www.joharsgroup.com/wp-content/uploads/2015/01/others-icon.png' };
     
        

        let Technology_Image=require('./image/km_category/technology.png');
        let Language_Image=require('./image/km_category/language.png');
        let Financial_Image=require('./image/km_category/financial.png');
        let Marketing_Image=require('./image/km_category/marketing.png');
        let HR_Image=require('./image/km_category/hr.png');
        let Legal_Image=require('./image/km_category/legal.jpg');
        let ETC_Image=require('./image/km_category/etc.png');

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
  
  <TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_List'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
      <View style={styles.BoxListCategory}>
      <Image  style={styles.BannerImage}  source={Technology_Image} /> 
      <View style={styles.Contact_Detail_Area}>
          <Text style={styles.Contact_Detail_1}>Technology</Text>
          <Text style={styles.Contact_Detail_2}>Description About Technology Content Category</Text>
          </View>
        </View>
    </TouchableHighlight>
         <View style={styles.BoxListCategory}>
         <Image  style={styles.BannerImage}  source={Language_Image} /> 
         <View style={styles.Contact_Detail_Area}>
          <Text style={styles.Contact_Detail_1}>Language</Text>
          <Text style={styles.Contact_Detail_2}>Description About Language Content Category</Text>
        </View></View>

         <View style={styles.BoxListCategory}>
         <Image  style={styles.BannerImage}  source={Financial_Image} /> 
         <View style={styles.Contact_Detail_Area}>
          <Text style={styles.Contact_Detail_1}>Financial</Text>
          <Text style={styles.Contact_Detail_2}>Description About Financial Category</Text>
        </View></View>
        

      <View style={styles.BoxListCategory}>
      <Image  style={styles.BannerImage}  source={Marketing_Image} /> 
      <View style={styles.Contact_Detail_Area}>
          <Text style={styles.Contact_Detail_1}>Marketing</Text>
          <Text style={styles.Contact_Detail_2}>Description About Marketing Content Category</Text>
          </View>
        </View>
    
         <View style={styles.BoxListCategory}>
         <Image  style={styles.BannerImage}  source={HR_Image} /> 
         <View style={styles.Contact_Detail_Area}>
          <Text style={styles.Contact_Detail_1}>Management & HR</Text>
          <Text style={styles.Contact_Detail_2}>Description About Management Content Category</Text>
        </View></View>

         <View style={styles.BoxListCategory}>
         <Image  style={styles.BannerImage}  source={Legal_Image} /> 
         <View style={styles.Contact_Detail_Area}>
          <Text style={styles.Contact_Detail_1}>Legal</Text>
          <Text style={styles.Contact_Detail_2}>Description About Legal Content Category</Text>
        </View></View>

              <View style={styles.BoxListCategory}>
      <Image  style={styles.BannerImage}  source={ETC_Image} /> 
      <View style={styles.Contact_Detail_Area}>
          <Text style={styles.Contact_Detail_1}>ETC</Text>
          <Text style={styles.Contact_Detail_2}>Description About etc. Content Category</Text>
          </View>
        </View>
    
        {/* <View style={styles.BoxListContact}>
        <View style={styles.Contact_Detail_Area}>
        <TextInput style={styles.input_Contact} placeholder="Your Message" placeholderTextColor="gray" autoCapitalize="none" multiline={true} editable={true} onChangeText={(text)=>this.updateValue(text,'training_message')} clearButtonMode="always"/>
      
         <TouchableOpacity style={styles.buttonContainer_Contact} onPress={()=>this.Send_Message()}>
         <Icon name='envelope' size={17} color='white' style={{textAlign:'center'}}> 
                <Text style={styles.buttonRegister}>  Send Message</Text>
                </Icon>
        </TouchableOpacity>
        </View>
        </View> */}
  
  
  
  
  
  
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
  buttonShow_ListContent:{ 
    paddingVertical:7,
    justifyContent:"center",
    textAlign:"center",
    marginTop:7,
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
    BoxListCategory:{
      backgroundColor:'rgba(255,255,255,0.4)',  
          borderWidth: 1.5,
          borderColor: '#d6d7da',
          justifyContent: 'space-between',
         marginBottom:5,
         flex: 1, 
         flexDirection: 'row',
         paddingLeft:7,
         paddingTop:4,
         paddingBottom:4,
    },
    BannerImage:{
      width:60,
      height:60
    },
    Contact_Detail_Area:{
      flex: 1, 
      flexDirection: 'column'
    },
    Contact_Detail_1:{
      fontSize: 13,
      //fontWeight:"bold",
      paddingLeft:12,
      paddingRight:10,
      marginBottom:5,
      paddingTop:7,
      fontFamily: 'Kanit-Medium',
    },
    Contact_Detail_2:{
      fontSize: 11,
      paddingLeft:12,
      paddingRight:10,
      marginBottom:4,
      fontFamily: 'Kanit-Light',
  
    },
    input_Contact:{
      backgroundColor:'rgba(255,255,255,0.6)',
      color:'black',
      paddingHorizontal:10,
      alignSelf: 'stretch',
      flex: 1,
      height:50,
      fontFamily: 'Kanit-Light',
      
    },
    buttonContainer_Contact:{
      backgroundColor:'#0596f699',  
      paddingVertical:10,
      justifyContent:"center",
      textAlign:"center",
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
    },
    BoxListContent:{
      backgroundColor:'rgba(255,255,255,0.4)',  
          borderWidth: 1.5,
          borderColor: '#d6d7da',
          justifyContent: 'space-between',
         marginBottom:12,
         flex: 1, 
         flexDirection: 'column'
    },
    ContentImage:{
      width:352,
   height:200
    },
    Content_Detail_Area:{
      flex: 1, 
      flexDirection: 'column'
    },
    TitleTypeContent:{
      fontSize:20
      ,color:'#74b9ff',
   //   fontWeight:"bold",
      marginTop:7,
      paddingLeft:10,
      fontFamily: 'Kanit-Medium'

    },
    ScrollViewHorizontal:{
      height:210,
    },
    Container_Content:{
      flex: 1, 
      flexDirection: 'row',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:10,
      paddingBottom:10,
      paddingBottom:10,

    },
    ListBox_Content:{
      backgroundColor:'rgba(255,255,255,0.4)',  
      height:190,
      width:255,
            borderWidth: 1.5,
            borderColor: '#d6d7da',
            justifyContent: 'space-between',
           flex: 1, 
           flexDirection: 'column'
           ,marginRight:15
    },
    Thumb_Image_Content:{
      width:252,
      height:150

    },

    Title_Content:{
      fontSize: 13,
   //   fontWeight:"bold",
      paddingLeft:7,
      paddingRight:7,
      paddingTop:7,
      fontFamily: 'Kanit-Light'
    },



});


// static navigationOptions = {
//   title: 'List Content',
//   headerStyle: {
//     backgroundColor: '#f1f2f6',
//   },
//   headerTintColor: 'black',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
//   //headerLeft:null
// };



export default createBottomTabNavigator(
  
  {
    Home: KMAppPage,
    Category: KMAppPage2,
    YourContent: KMAppPage,
  },
  {


    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      if (routeName === 'Home') {
          iconName = 'home';
         } else if (routeName === 'Category') {
          iconName = 'list';
        } else if (routeName === 'YourContent') {
          iconName = 'user';
        }

      return  <Icon name={iconName}  size={26} color={tintColor} />;
    },
    }),
    tabBarOptions: {
      activeTintColor: '#279af3',
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 12 ,fontFamily: 'Kanit-Light', },
    }
    
  }
);



