/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Image, View, TouchableOpacity, Alert, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var i = 0;
var SampleNameArray = [require('../images/number_two.png'), require('../images/number_one.png')];

export default class App extends Component<{}> {
 
    constructor(props) {
    super(props);

    this.state = {
      mainBackgroundColor : 'pink',
      btnTrueColor : 'red',
      btnFalseColor : 'red',
      imgTrueButton : require('../images/img_true.png'),
      imgFalseButton : require('../images/img_false.png'),
      imgMainSection: require('../images/number_one.png'),
    }
    this.onTrue = this.onTrue.bind(this);
        this.onFalse = this.onFalse.bind(this);
        
  }
    changeImage = () => {
        if (i == 2)
            i = 0;
        this.setState({ imgMainSection: SampleNameArray[i] });
        i++;
    }
   
  render() {
    return (
      <View style = {{flex:1,marginTop:20,marginBottom:20,marginLeft:7,marginRight:7}}>
        <View style = {{flex:2, backgroundColor:this.state.mainBackgroundColor}}>
          <Image style = {{flex:1, height: undefined, width: undefined, alignContent: "center"}} source={this.state.imgMainSection}/>
        </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Button
                    onPress={() => this.changeImage()}
                    title="Değiştir"
                />
            </View>
        <View style = {{flex:1, flexDirection:'row'}}>
          <TouchableOpacity onPress = {this.onTrue} 
                            style = {{flex:2, backgroundColor:this.state.btnTrueColor}}>
            <Image source={this.state.imgTrueButton} />    
          </TouchableOpacity>
          <View style = {{flex:1, backgroundColor:'black'}}>
            
          </View>
          <TouchableOpacity onPress = {this.onFalse} 
                            style = {{flex:2, backgroundColor:this.state.btnFalseColor}}>
            <Image source={this.state.imgFalseButton} />    
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onTrue(){
    this.setState({mainBackgroundColor:'green'});
    setTimeout(() => {
      this.setState({mainBackgroundColor:'pink'});
    }, 200);

    /*Alert.alert(
      'Teb',
      'Tebrikler',
      null,
      { cancelable: false }
    );*/
  }

  onFalse(){
    this.setState({mainBackgroundColor:'red'});
    setTimeout(() => {
      this.setState({mainBackgroundColor:'pink'});
    }, 500);
  }
 
}
const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },

    countText: {
        color: '#FF00FF'
    }
})