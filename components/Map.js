import React from "react";
import { StyleSheet,Text,View,SafeAreaView,Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView,{Marker} from 'react-native-maps';
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () =>{
    const origin = useSelector(selectOrigin);
    return(
        <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 12.972442,
          longitude: 77.580643,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        >
        {/* {origin?location && (
            <Marker 
                coordinate={{
                    latitude:origin.location.lat,
                    longitude:origin.location.lng,
                }}
            />
        )}; */}

        </MapView>
       
    )
}
const styles = StyleSheet.create({

});

export default Map;
