import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn';

interface Props {
    name: string;
    value: string;
    currency: string;
}

const Card = ({name, value, currency}: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={tw("mx-4 py-14 bg-gray-600 rounded-xl mb-6 mt-2   ")} >
            <View style={tw("-mt-12 px-4 ")}>
            <Text style={tw("text-gray-400 font-medium mb-3 ")}>{name}</Text>
            <Text style={tw("text-4xl text-white mb-1")}>{value}</Text>
            </View>

            <View style={tw("bg-gray-800 w-14 mx-4 items-center px-3 rounded-2xl py-2")}>
            <Text style={tw("text-white font-semibold")}>{currency}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card
