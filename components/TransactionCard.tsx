import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'tailwind-rn';

interface Props {
    name: string;
    amount: any;
    date: string;
    image: string;
    symbol: string;
}

const TransactionCard = ({name, amount, date, image, symbol}: Props) => {
    return (
        <View style={tw("flex-row justify-between mx-3 py-3 items-center px-4 bg-gray-800 rounded-2xl mt-4")}>
            <View>
                <Image source={{ uri: image }} style={tw('h-12 w-12 rounded-full')} />
            </View>

           
            <View style={tw("-ml-16")}>
                <Text style={tw("text-yellow-100 text-lg font-semibold")}>{name}</Text>
                <Text style={tw("text-gray-400")}>{date}</Text>
            </View>

            <View style={tw("")}>
                <Text style={[tw(" text-xl font-semibold"),{color: amount > 0 ? "green" : "red"}]}>{symbol} {amount}</Text>
            </View>

            </View>
     
    )
}

export default TransactionCard
