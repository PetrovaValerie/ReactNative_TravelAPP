import React, {useLayoutEffect} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useNavigation} from "@react-navigation/native";
import {Avatar} from "../assets/images";

const Discover = () => {

    const navigation = useNavigation();

    useLayoutEffect( () => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <SafeAreaView className={"flex-1 bg-white relative"}>
            <View className={"flex-row items-center justify-between px-8"}>
                <View>
                    <Text className={"text-[40px] text-[#0B646B] font-bold"}> Discover </Text>
                    <Text className={"text-[#527283] text-[28px]"}> new places to visit </Text>
                </View>
                <View className={"w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg"}>
                    <Image
                        source={Avatar}
                        className={"w-full h-full rounded-md object-cover"}
                    />
                </View>
            </View>


            <View className={"flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4"}>
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: 'AIzaSyCzCXqNlAkU-Jv0wQX3zXtAcV-eg8CmvFM',
                        language: 'en',
                    }}
                    // requestUrl={{
                    //     useOnPlatform: "all",
                    //     url:
                    //         'http://localhost:19006/https://maps.googleapis.com/maps/api'
                    //
                    //     }}

                />

            </View>
        </SafeAreaView>
    );
}

export default Discover;