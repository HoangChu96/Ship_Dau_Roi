import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions
} from 'react-native';
import { Container, Content, Button, Text } from 'native-base';


class TaoDonHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Content>
                    <Button onPress={() => navigation.dispatch({ type: 'Place' })} >
                        <Text>Add</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default TaoDonHang;

const styles = StyleSheet.create({

})
