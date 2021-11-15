import React from 'react'
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import tw from 'tailwind-rn';
import Header from '../components/Header';
import Card from '../components/Card';

const data = [
    {
        name: 'Goal',
        value: '$1,184.08',
        currency: 'USD'
    },
    {
        name: 'Available',
        value: '$1,432.35',
        currency: 'USD'
    },
    {
        name: 'Savings',
        value: '$498.22',
        currency: 'USD'
    },
    {
        name: 'Portolio',
        value: '$3,451.13',
        currency: 'USD'
    },

    
]


const HomeScreen = () => {
    const headerLabel = 'Home'
    return (
        <SafeAreaView style={tw(" flex-1 bg-gray-900")}>
           <Header title={headerLabel} />
            <View>
                <ScrollView >
                    {data.map(({name, value, currency}, index) => (
                        <Card key={index} name={name} value={value} currency={currency} />
                    ))}
                </ScrollView>
            </View>
          
        </SafeAreaView>
    )
}

export default HomeScreen
