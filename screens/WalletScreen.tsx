import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'tailwind-rn';
import Balance from '../components/Balance';
import Header from '../components/Header';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import TransactionCard from '../components/TransactionCard';

const data = [
    {
        id: 1,
        name: 'John Doe',
        amount: -34.39 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 2,
        name: 'John Doe',
        amount: 304.45 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 3,
        name: 'John Doe',
        amount: 1209.34 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 4,
        name: 'John Doe',
        amount: -1234.39 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 5,
        name: 'John Doe',
        amount: 334.23 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 6,
        name: 'John Doe',
        amount: 56.93 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 7,
        name: 'John Doe',
        amount: -24.11 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 8,
        name: 'John Doe',
        amount: -77.19 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 9,
        name: 'John Doe',
        amount: 12.58 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 10,
        name: 'John Doe',
        amount: 44.39 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
    {
        id: 11,
        name: 'John Doe',
        amount: -62.79 ,
        date: '18 Nov 2021',
        image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
        symbol: '$'

    },
]

const WalletScreen = () => {
    const headerLabel = 'Wallet'
    return (
        <SafeAreaView style={tw("flex-1 bg-gray-900")}>
            <Header title={headerLabel} /> 
            <Balance />
            {/* filter */}
            <View style={tw("w-full py-4 bg-black justify-center")}>
            <View style={tw("flex-row justify-between mx-3 ")}>
                    <View style={tw("flex-row")}>
                        <TouchableOpacity  activeOpacity={0.4}>
                            <Text style={tw("text-white text-lg ml-2 mr-4 font-semibold")}>Income</Text>
                         </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.4}>
                           <Text style={tw("text-gray-500 text-lg font-semibold")}>Expenditure</Text>
                         </TouchableOpacity>  
                    </View>

                    <TouchableOpacity activeOpacity={0.4} style={tw("flex-row items-center")}>
                        <Text style={tw("text-gray-500 text-lg mx-1 font-semibold")}>Sort by</Text>
                        <AntDesign  name="caretdown" size={14} color="gray" />
                    </TouchableOpacity>
                    </View>
                   </View>
                 {/* transactions */}
                
                    <ScrollView>
                       {data.map((item, index) => (
                            <TransactionCard key={index} {...item} />
                       ))}
                    </ScrollView>
                  

                    
        </SafeAreaView>
    )
}

export default WalletScreen
