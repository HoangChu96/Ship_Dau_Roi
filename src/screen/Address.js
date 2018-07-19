import React, { Component } from 'react';
import {
  View, StyleSheet, Dimensions, Text
} from 'react-native';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { width } = Dimensions.get('window');
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data);
        console.log(details);
      }}

      getDefaultValue={() => ''}

      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyBkPdhl2UmIHxIDKJ4AVatbluz-KU7n94Q',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}

      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
    // renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
}

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>Holahe</Text>
        <MapView
          style={{ width: width - 20, height: 250, marginTop: 10}}
          initialRegion={{
            latitude: 20.980605,
            longitude: 105.787895,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 20.980605, longitude: 105.787895 }}
            title="PTIT"
            description="Học Viện Công Nghệ Bưu Chính Viễn Thông"
          />
        </MapView>
      </View>
    );
  }
}

export default Address;

const styles = StyleSheet.create({
 
})
