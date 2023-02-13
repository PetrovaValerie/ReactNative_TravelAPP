import React, {useLayoutEffect} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {AvatarImg} from "../assets";

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
                        source={AvatarImg}
                        className={"w-full h-full rounded-md object-cover"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Discover;