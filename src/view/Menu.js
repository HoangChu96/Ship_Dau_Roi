import React, { Component } from 'react';
import {
  View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';

const { width } = Dimensions.get('window');

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {container, wrapper,txtList, txtName, wrapLeft, wapperContent} = styles;
    return (
      <View style={container} >
        <View style={{justifyContent:'center', alignItems: 'center'}} >
          <Image
            source={require('../../media/icon/profile.png')}
            style={styles.profile}
          />
          <Text style={txtName} >Hoàng</Text>
        </View>

        <View style={wrapper} >
          <TouchableOpacity style={wrapLeft} >
            <Icon name='star' style={{ color: 'red' }} />
            <Text>Chưa có nhận xét nào</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='pie' style={{ color: 'orange' }} />
            <Text>0 Xu</Text>
          </TouchableOpacity>
        </View> 

        <ScrollView>
          <TouchableOpacity style={wapperContent} >
            <Icon name='paper' style={{ color: 'gray' }} />
            <Text style={txtList} >Tìm Đơn Hàng</Text>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity style={wapperContent} >
            <Icon name='cart' style={{ color: 'gray' }} />
            <Text style={txtList}>Đơn Đã Nhận</Text>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity style={wapperContent} >
            <Icon name='notifications' style={{ color: 'gray' }} />
            <Text style={txtList}>Thông Báo</Text>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity style={wapperContent} >
            <Icon type="FontAwesome" name='bitcoin' style={{ color: 'gray' }} />
            <Text style={txtList}>Tài Khoản</Text>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity style={wapperContent} >
            <Icon name='person' style={{ color: 'gray' }} />
            <Text style={txtList}>Trang Cá Nhân</Text>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity style={wapperContent} >
            <Icon type="Octicons" name='issue-opened' style={{ color: 'gray' }} />
            <Text style={txtList}>Hướng Dẫn Sử Dụng</Text>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity style={wapperContent} >
            <Icon name='settings' style={{ color: 'gray' }} />
            <Text style={txtList}>Cài Đặt</Text>
            <Text />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  profile: {
    width: 100,
    height: 100,
    borderColor: "#34B089",
    borderWidth: 1,
    borderRadius: 60,
    marginVertical: 10
  },
  wapperContent:{
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  txtList:{
    // paddingVertical: 15,
    paddingHorizontal: 30
  },
  wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: "#34B089",
    marginVertical: 20,
    padding: 10
  },
  wrapLeft:{
    borderRightWidth: 1,
    borderColor: "#34B089" ,
    justifyContent: 'center',
    paddingRight: 10
  },
  txtName:{
    fontWeight: 'bold',
    fontSize: 24,
    color: "#34B089"
  }
})
