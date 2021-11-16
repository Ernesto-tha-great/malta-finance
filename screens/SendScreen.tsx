import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import tw from 'tailwind-rn';
import Balance from '../components/Balance';
import ContactCard from '../components/ContactCard';
import Header from '../components/Header';
import TransactionCard from '../components/TransactionCard';
import { data } from '../constants/Dummy';

const data2 = [
    {
        image: "https://cdn.pixabay.com/photo/2015/09/03/06/59/man-920083__480.jpg",
        firstName: "Christopher ",
        lastName: "McCarthy"
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg",
        firstName: "Warren ",
        lastName: "Norman"
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg",
        firstName: "Shawn ",
        lastName: "Decker"
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg",
        firstName: "Emily ",
        lastName: "McBright"
    },
    {
        image: "https://cdn.pixabay.com/photo/2018/03/12/20/57/woman-3220835__340.jpg",
        firstName: "Cecillia ",
        lastName: "Jones"
    },
    {
        image: "https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734__340.jpg",
        firstName: "Mark ",
        lastName: "Burnes"
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/10/27/15/52/jaguar-2894706__340.jpg",
       firstName: "Stanley ",
        lastName: "Asokings"
    },
    
]

const SendScreen = () => {
    const headerLabel = 'Send Money';
    return (
        <SafeAreaView style={tw("flex-1 bg-gray-900")}>
            <Header title={headerLabel} /> 
            <Balance />

            <View style={tw("bg-black px-4")}>
                <Text style={tw("text-gray-300 text-lg font-semibold  ")}>Send money to</Text>
            </View>

            <View>
            <ScrollView horizontal style={tw("mb-2")}>
                {data2.map((item, index) => (
                    <ContactCard key={index} {...item} />
                ))}
            </ScrollView>
            </View>

            <View style={tw("bg-black px-4 mt-2 items-center")}>
                <Text style={tw("text-gray-300 text-lg font-semibold")}>Last transactions</Text>
            </View>

            <ScrollView>
                {data.map((item, index) => (
                    <TransactionCard key={index} {...item} />
                ))}
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default SendScreen
