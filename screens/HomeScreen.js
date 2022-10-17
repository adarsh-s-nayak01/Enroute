import React from "react";
import { StyleSheet,Text,View,SafeAreaView,Image ,TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames"
import NavOptions from "../components/NavOptions";
import {Icon} from "react-native-elements"
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";

const HomeScreen = ({navigation}) =>{
    const dispatch = useDispatch();


    return (
        <SafeAreaView style={tw`bg-white h-full`}>
       
           <View style={tw`p-5`}>
                    <Image 
                       source={require('../assets/enroute_logo.jpg')}
                        style={{
                            width:100,
                            height:100,
                            resizeMode:'contain',
                        }} 
                    />
            


            <GooglePlacesAutocomplete 

                placeholder="where from?"
                styles={{
                    container:{
                        flex:0,
                    },
                    textInput:{
                        fontSize:18,
                    },
                    
                }}
                onPress={(data, details = null) =>{
                    // console.log(data);
                    // console.log(details);
                    dispatch(
                        setOrigin({
                        location:details.geometry.location,
                        description: data.description,
                    })
                    );
                    dispatch(setDestination(null));
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                minLength={2}
                query = {{
                    key: GOOGLE_MAPS_APIKEY,
                    language:"en",
                    
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />

                {/* <NavOptions /> */}

            <TouchableOpacity 
                        onPress={()=>navigation.navigate('MapScreen')}
                        style={tw`bg-gray-200 p-2 pl-6 pb-8 m-2 w-40`}>
                        <View>
                            <Image 
                                
                                style={{width:120,height:120,resizeMode:"contain"}}
                                source={require('../assets/car.webp')}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>Charge up my battery!</Text>

                                <Icon 
                                style={tw`p-2 bg-black w-10 mt-4 rounded-full`}
                                name="arrowright" color="white" type="antdesign" />
                        </View>
            </TouchableOpacity>     
            
            
            

           </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

});

export default HomeScreen;
