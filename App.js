import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Image ,TextInput , Button,Alert ,TouchableHighlight ,ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class First_Class extends Component {
  render() {
    return <RootStack />;
  }
}
 

// export default class App extends Component{
class App extends Component{
  constructor(props){

    super(props)
    this.state = { text : '' };

  this.state = { active : false };
   this.ClickToggle = this.ClickToggle.bind(this);

   
  }



 

clickMe(){
  Alert.alert("Thanks for Click!!");

}


LongClickMe(){
  Alert.alert("Long Click!!");

}


ClickToggle(){
Alert.alert("Toggle");

  this.setState(oldState=>{  
    return { active: !oldState.active }
    })
}

ClickArrowFunction =()=>{
  
  this.setState(oldState=>{  
    return { activex: !oldState.activex }
    })

}





render(){
 
  let pic = {
    uri: 'https://vignette.wikia.nocookie.net/cardfight/images/4/4f/Cardfight-Vanguard.png/revision/latest?cb=20180314195324'
  };

  return(
    <View style={{padding: 10 , flex:1 , flexDirection:'column' , justifyContent:'center'}}>
    

<TouchableHighlight onPress={this.clickMe} underlayColor='white' onLongPress={this.LongClickMe}>
  <Image resizeMode="center"
  source={pic} 
  // source={ require('./img,photo.png')}
  style={{width: '100%' , height: 150 , marginBottom:25}}
  />


</TouchableHighlight>

    
    <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={(text) => this.setState({text})}
    />
    <Text style={{padding: 10, fontSize: 42}}>
      {this.state.text}
    </Text> 




    <Button title="Register" onPress={this.clickMe} />


<Button title={ this.state.active ? 'Login' : 'Logout' } onPress={this.ClickToggle} />
<Button title={ this.state.activex ? 'Active' : 'InActive' } onPress={this.ClickArrowFunction} />


 <Button  title="Go to Details"  onPress={() => 
 this.props.navigation.navigate('Details'
 , {          Employee_ID: '1647',
              Employee_Name: 'Aekkasart Leawaraya',
            }
          )} />




     <Text  style={{fontSize: 27}}>  Login  </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <Button title={ 'Login' } onPress={this.ClickToggle} />




  </View>


  ) 

}
}



class DetailsScreen extends Component {
  render() {

    const { navigation } = this.props;
    const Employee_ID = navigation.getParam('Employee_ID');
    const Employee_Name = navigation.getParam('Employee_Name');

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Page</Text>
        <Text>Employee ID : {JSON.stringify(Employee_ID)}</Text>
        <Text>Employee Name : {JSON.stringify(Employee_Name)}</Text>

        <Button  title="Go to Home"  onPress={() => this.props.navigation.navigate('Home')} />
 
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: App,
    Details: DetailsScreen,
  },
  { 
    initialRouteName: 'Home',
       navigationOptions: {
          title: 'HrApp',
          header:null
         }

  }
);
