import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'tailwind-rn';
import Balance from '../components/Balance';
import Header from '../components/Header';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import TransactionCard from '../components/TransactionCard';
import { data } from '../constants/Dummy';

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
