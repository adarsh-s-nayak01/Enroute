import React from "react";
import { StyleSheet,Text,View,SafeAreaView,Image, FlatList,TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"

const data =[
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papereact.com/3pn",
        screen :""
    },
   
];

const NavOptions = ({navigation}) =>{

    // const navigation = duseNavigation();

    return (
        <View>
            {/* <TouchableOpacity 
                 onPress={()=>navigation.navigate('MapScreen')}
            style={tw`bg-gray-200 p-2 pl-6 pb-8 m-2 w-40`}>
                <View>
                    <Image 
                        style={{width:120,height:120,resizeMode:"contain"}}
                        source={require('../assets/car.webp')}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>Get a ride</Text>

                    <Icon 
                    style={tw`p-2 bg-black w-10 mt-4 rounded-full`}
                    name="arrowright" color="white" type="antdesign" />
                </View>


            </TouchableOpacity>      */}
        </View>
    )
}
const styles = StyleSheet.create({

});

export default NavOptions;
