import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity
} from 'react-native';

export default class Comment extends Component{
    render(){
        const {navigation} = this.props;
        return(
            <View>
                <TouchableOpacity onPress={() => navigation.dispatch({ type: 'Back' })}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>Hello Comment Screen</Text>
            </View>
        )
    }
}