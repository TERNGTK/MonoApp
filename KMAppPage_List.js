import React, {Component} from 'react';
import { StyleSheet,View , Text ,TextInput,Image,KeyboardAvoidingView,TouchableOpacity,StatusBar,FlatList, ActivityIndicator ,Alert,Button,ScrollView,navigationOptions,TouchableHighlight,ImageBackground,ListView,Linking } 
from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Video from 'react-native-af-video-player';
// import Video, { ScrollView, Container } from 'react-native-af-video-player'
 
 


  

export default class KMAppPage_List extends Component{

  static navigationOptions = {
    title: 'List Content',
    headerStyle: {
      backgroundColor: '#f1f2f6',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerLeft:null
  };

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
     


<View style={{
   flex: 1, 
   flexDirection: 'column',
   justifyContent: 'space-between',
   paddingLeft:10,
   paddingRight:10,
   paddingTop:10,
   marginBottom:10
}}>



<Text style={styles.TitleTypeContent} >Technology</Text>

<TouchableHighlight onPress={() => this.props.navigation.navigate('KMAppPage_Detail'
, {           
       user_running: user_running,
        employeeID: employeeID,           
                  })} >  
       <View style={styles.BoxListContent}>
       <Image resizeMethod="resize"  style={styles.ContentImage}  source={URL_Thumbnail3} /> 
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
       <Image resizeMethod="resize"   style={styles.ContentImage}  source={URL_Thumbnail2} /> 
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
       <Image resizeMethod="resize"  style={styles.ContentImage}  source={URL_Thumbnail1} /> 
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
       <Image resizeMethod="resize"   style={styles.ContentImage}  source={URL_Thumbnail3} /> 
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
       <Image resizeMethod="resize"  style={styles.ContentImage}  source={URL_Thumbnail2} /> 
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
       <Image resizeMethod="resize"  style={styles.ContentImage}  source={URL_Thumbnail1} /> 
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
       <Image resizeMethod="resize"  style={styles.ContentImage}  source={URL_Thumbnail2} /> 
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
       <Image resizeMethod="resize"  style={styles.ContentImage}  source={URL_Thumbnail1} /> 
       <View style={styles.Content_Detail_Area}>
       <Text style={styles.Contact_Detail_1}>เทคโนโลยี Blockchain สำหรับองค์กร</Text>
     
      </View>
      </View>
      </TouchableHighlight>


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
      height:50
      
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
      fontWeight:"bold",
      marginTop:7,
      paddingLeft:10,

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
      fontWeight:"bold",
      paddingLeft:7,
      paddingRight:7,
      paddingTop:7
    },



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



