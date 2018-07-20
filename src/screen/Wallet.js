import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity
} from 'react-native';

export default class Wallet extends Component{
    render(){
        const {navigation} = this.props;
        return(
            <View>
                <TouchableOpacity onPress={() => navigation.dispatch({ type: 'Back' })}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>Hello Wallet Screen</Text>
            </View>
        )
    }
}