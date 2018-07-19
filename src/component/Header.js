import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions, Text, TouchableOpacity, Image
} from 'react-native';

const { width } = Dimensions.get('window');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../../media/icon/ic_menu.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Ship đâu rồi</Text>
                    <Text />
                </View>

                <View style={{ justifyContent: 'space-around' }}>
                    
                </View>

            </View>
        );
    }
}

export default Header;

const styles= StyleSheet.create({
    wrapper: {
        height: 45,
        backgroundColor:'#34B089',
        padding:10,
        flexDirection: 'row',
        justifyContent:'space-between'
      },
      row1:{
        width: width*7/8,
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      iconStyle: {
        width: 25,
        height: 25
      },
      titleStyle: {
        color:'#fff',
        fontSize: 18
      }
  })
