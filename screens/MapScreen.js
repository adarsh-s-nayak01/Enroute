import React from "react";
import { StyleSheet,Text,View,SafeAreaView,Image,ScrollView, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from 'react-native-maps';

const MapScreen = () =>{
    return(
        <View>
            <View style={tw`h-4/6`}>
                <Map />
            </View>
            <View style={tw`h-2/6`}>
                <ScrollView
                    horizontal
                    style={tw`bg-white p-4`}
                >

                    <TouchableOpacity style={tw`bg-gray-400 border-green-600 border-b p-5 m-1 rounded `}>
                            <Text style={tw`text-gray-100 text-center leading-9`}>Banshankari</Text>
                            <Text style={tw``}>Distance from your location : </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-gray-400 border-green-600 border-b p-5 m-1 rounded `}>
                            <Text style={tw`text-gray-100 text-center leading-9`}>Majestic</Text>
                            <Text style={tw``}>Distance from your location : </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-gray-400 border-green-600 border-b p-5 m-1 rounded `}>
                            <Text style={tw`text-gray-100 text-center leading-9`}>HSR Layout</Text>
                            <Text style={tw``}>Distance from your location : </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-gray-400 border-green-600 border-b p-5 m-1 rounded `}>
                            <Text style={tw`text-gray-100 text-center leading-9`}>Vijayanagar</Text>
                            <Text style={tw``}>Distance from your location : </Text>
                    </TouchableOpacity>
                   

                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
});

export default MapScreen;
