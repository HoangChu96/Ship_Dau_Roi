import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity
} from 'react-native';

export default class Manual extends Component{
    render(){
        const {navigation} = this.props;
        return(
            <View>
                <TouchableOpacity onPress={() => navigation.dispatch({ type: 'Back' })}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>Hello Manual Screen</Text>
            </View>
        )
    }
}