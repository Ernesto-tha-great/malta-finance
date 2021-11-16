import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn';

interface Props {
    firstName: string
    lastName: string
    image: string
}

const ContactCard = ({firstName, image, lastName}: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.4} style={tw("bg-gray-800 h-40 mx-3 w-32  rounded-lg py-4 mt-3")}>
        <View style={tw("items-center")}>
            <Image source={{uri: image}} style={tw('h-16 w-16 rounded-full mb-4')} />
            <Text style={tw("text-yellow-100 font-semibold ")}>{firstName}</Text>
            <Text style={tw("text-yellow-100 font-semibold")}>{lastName}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default ContactCard
