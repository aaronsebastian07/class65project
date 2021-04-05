import * as React from 'react';
import { Text, View, StyleSheet, Button,TextInput,Image } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }
  speak=()=> {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  };
  render() {
    return (
      <View style={styles.container}>
       <Header style={styles.headerBox}
      backgroundColor='teal'
      centerComponent={{
        text:'Text to Speech Converter',
        style:{color:'white', fontSize:14}
      }}
      />
      <Image style={styles.imageIcon}
      source={{
        uri:'https://miro.medium.com/max/3330/1*7HOERatJ83E1KkKr1SVAug.png'
      }}/>
        <Button title="Press to hear the text" style ={styles.button}onPress={this.speak} />
        <TextInput style={styles.inputBox} 
        onChangeText={(text)=>{
          this.setState({text:text});
        }}
        value={this.state.text}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  inputBox: {
    flex:0.2,
    marginTop: 25,
    marginBottom:100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
   container: {
    flex:1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageIcon:{
     width:250,
    height:110,
    marginLeft:20,
    marginBottom:25,
    marginTop:35
  }
  
});
