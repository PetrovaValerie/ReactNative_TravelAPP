import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import {HeroImage} from "../assets";

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect( () => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className={"bg-blue-100 flex-1 relative"}>
        {/*First Section*/}
            <View className={"flex-row px-6 mt-8 items-center space-x-2"}>
                <View className={"w-16 h-16 bg-black rounded-full items-center justify-center"}>
                    <Text className={"text-[#00BCC9] text-3xl font-semibold"}>Go</Text>
                </View>
                <Text className={"text-[#2A2B4B] text-3xl font-semibold"}>Travel</Text>
            </View>
            {/*2nd Section*/}
            <View className={"px-6 mt-8 space-y-3"}>
                <Text className={"text-[#3C6072] text-[42px]"}>
                    Enjoy the trip with
                </Text>
                <Text className={"text-[#00BCC9] text-[38px] font-bold"}>
                    Good Moments
                </Text>
                <Text className={"text-[#3C6072] text-base"}>
                    We created the travel agency to combine our passion for travel with our desire
                    to assist leisure, business or group travelers enhance the value of their travel experiences.
                </Text>
            </View>
            {/*Circle Section*/}
            <View className={"w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"}>
            </View>
            <View className={"w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"}>
            </View>
            {/*Image Container*/}
            <View className={"flex-1 relative items-center justify-center"}>
                <Image
                    source={HeroImage} className={"w-full h-full object-cover mt-20"}
                />
            </View>

            <View className={absolute}>
                <View>
                    <Text>
                        Go
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen;