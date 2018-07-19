import React , {Component} from 'react';
import {
  View, StyleSheet,  Dimensions, Text
} from 'react-native';
import Header from '../component/Header';

const { width } = Dimensions.get('window');

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  openMenu(){
    const {open} = this.props;
    open();
  }

  render(){
    return(
        <View style={{flex:1}} >
            <Header onOpen={this.openMenu.bind(this)}/>
            <Text>Hello App</Text>
        </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
 
})
