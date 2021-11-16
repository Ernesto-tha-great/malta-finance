import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import tw from 'tailwind-rn';

interface Props {
    title: string
}

const Header = ({title}: Props) => {
    return (
            <View style={tw("flex-row justify-between mx-4 mb-2")}>

                <TouchableOpacity  activeOpacity={0.4}>
                <FontAwesome name="user" size={30} color="white" />
                </TouchableOpacity>

                <Text style={tw("text-white text-2xl font-bold mb-2")}>  {title}  </Text>

                <TouchableOpacity activeOpacity={0.4}>
                <AntDesign name="setting" size={30} color="white" />
                </TouchableOpacity>
            </View>
       
    )
}

export default Header
