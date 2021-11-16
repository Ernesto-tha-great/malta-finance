import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import tw from 'tailwind-rn';
import Balance from '../components/Balance';
import Header from '../components/Header';

const SendScreen = () => {
    const headerLabel = 'Send Money';
    return (
        <SafeAreaView style={tw("flex-1 bg-gray-900")}>
            <Header title={headerLabel} /> 
            <Balance />
        </SafeAreaView>
    )
}

export default SendScreen
