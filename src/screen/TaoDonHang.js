import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import { Container, Header, Content, Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

const { width } = Dimensions.get('window');

class TaoDonHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button onPress={() => this.props.navigation.navigate({routeName: 'GooglePlacesAutocomplete'})} >
                        <Text>Add</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(TaoDonHang);

const styles = StyleSheet.create({

})
