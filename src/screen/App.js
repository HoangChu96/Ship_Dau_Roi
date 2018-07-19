import React , {Component} from 'react';
import {
  View, StyleSheet,  Dimensions, Text
} from 'react-native';
import Header from '../component/Header';
import TaoDonHang from './TaoDonHang';
import Address from './Address';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';

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
    const {navigation} = this.props;
    return(
        <View style={{flex:1}} >
            <Header onOpen={this.openMenu.bind(this)}/>
            {/* <GooglePlacesAutocomplete /> */}
            {/* <Address /> */}
            <TaoDonHang navigation={navigation} />
        </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
 
})
