import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn';

const Balance = () => {
    return (
        <View style={tw("items-center bg-gray-800 py-6 rounded-xl mb-3")}>

            <View style={tw("items-center")}>
            <Text style={tw("text-lg text-gray-400 mb-3 -mt-3")}>Available</Text>
            <Text style={tw("text-4xl  text-white font-semibold mb-1")}>$233.34</Text>
            </View>

            <View style={tw("bg-gray-900  px-2 rounded-3xl items-center")}>
            <Text style={tw("font-semibold text-lg text-white")}>USD</Text>
            </View>

        </View>
    )
}

export default Balance
