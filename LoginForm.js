import React, {Component} from 'react';
import { StyleSheet,View , Text ,TextInput,TouchableOpacity,StatusBar,FlatList, ActivityIndicator ,Alert} from 'react-native';


export default class LoginForm extends Component{

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
       Login_Result: Response_Login['Login']['Login_Result'],
       
       });
       

    console.warn('Success:',Response_Login['Login']);
    //console.warn('Login Status : ',Response_Login['Login'][0]['Login_Result']);
    //Alert.alert(' Login Status : '+Response_Login['Login'][0]['Login_Result']);

    if( Response_Login['Login'][0]['Login_Result'] == 'YES' ){
  
      Alert.alert("Login Success");
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





render(){

 
    return(
<View style={styles.container}>

<FlatList style={{ marginBottom:30 }} data={this.state.dataSource}
          renderItem={
            ({item}) => 
          <Text>{item.id} , {item.title}, {item.releaseYear}</Text>
        }
        keyExtractor={(item, index) => index.toString()} />

{/* 
Show 1 Record
<Text style={{ marginBottom:30 }} >{this.state.dataSource2}</Text> */}

<FlatList style={{ marginBottom:30 }} data={this.state.dataSource2}
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
        
        />

        

      <StatusBar barStyle="light-content"/>
     <TextInput style={styles.input} placeholder="Username" placeholderTextColor="black" returnKeyType="next" 
     onSubmitEditing={()=>this.passwordInput.focus()} autoCapitalize="none" autoCorrect={false}
     onChangeText={(text)=>this.updateValue(text,'username')} />

     <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" returnKeyType="go" 
     ref={(input)=>this.passwordInput=input} secureTextEntry
     onChangeText={(text)=>this.updateValue(text,'password')} />

     <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.Login()} >
       <Text style={styles.buttonText}>Login</Text>
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


      </View>
    );
  }
}










const styles = StyleSheet.create({
  container:{
    padding:20
  },
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
  }
});


