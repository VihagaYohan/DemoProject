import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const MapViewScreen = () => {
  const origin = { latitude: 37.3317876, longitude: -122.0054812 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = "AIzaSyD92nOOpFCjHziEt1vagl9n38yjs8sMraw";

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE = 37.771707;
  const LONGITUDE = -122.4053769;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  {
    /* <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView> */
  }

  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        /* initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} */
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="red"
          optimizeWaypoints={true}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});

export default MapViewScreen;
