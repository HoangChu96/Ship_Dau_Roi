import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions, Text
} from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import App from '../screen/App';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };

    render() {
        const { navigation } = this.props;
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                type="overlay"
                content={
                    <Menu navigation={navigation} />
                }
                tapToClose={true}
                openDrawerOffset={0.2} //còn lại 20% về phía bên phải
                panCloseMask={0.2}
                closeDrawerOffset={-3}
                styles={drawerStyles}

                //giảm opacity của màn hình chính sau khi mở sidemenu
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
            >
                <App open={this.openControlPanel.bind(this)} navigation={navigation} />
            </Drawer>
        );
    }
}

export default Home;

const drawerStyles = {
    drawer: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 3
    }
}
