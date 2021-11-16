import React from 'react'
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import tw from 'tailwind-rn';
import Header from '../components/Header';
import Card from '../components/Card';

const data = [
    {
        name: 'Goal',
        value: '1184.08',
        currency: 'USD',  
        symbol: '$'
    },
    {
        name: 'Available',
        value: '233.34',
        currency: 'USD',
        symbol: '$'
    },
    {
        name: 'Savings',
        value: '-498.22',
        currency: 'USD',
        symbol: '$'
    },
    {
        name: 'Portolio',
        value: '3451.13',
        currency: 'USD',
        symbol: '$'
    },

    
]


const HomeScreen = () => {
    const headerLabel = 'Home'
    return (
        <SafeAreaView style={tw(" flex-1 bg-gray-900")}>
           <Header title={headerLabel} />
            <View>
                <ScrollView >
                    {data.map(({name, value, currency, symbol}, index) => (
                        <Card key={index} name={name} value={value} currency={currency} symbol={symbol} />
                    ))}
                </ScrollView>
            </View>
          
        </SafeAreaView>
    )
}

export default HomeScreen
