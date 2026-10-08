import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, Badge, InputField } from '../../components/UI';
import { CreditCardIcon, CheckIcon } from '../../components/Icons';

export const PaymentMethodsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedCard, setSelectedCard] = useState('card-1');

  return (
    <ScreenWrapper scrollable={true} screenCode="07-06" screenTitle="Payment Methods">
      <ScreenHeader
        title="Payment Methods"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Text className="text-sm font-bold text-brand-dark">Saved Payment Cards</Text>

        {/* Card 1: Primary Visa */}
        <TouchableOpacity
          onPress={() => setSelectedCard('card-1')}
          className={`p-4 rounded-2xl border-2 bg-white ${
            selectedCard === 'card-1' ? 'border-brand-green bg-emerald-50/20' : 'border-brand-border'
          }`}
        >
          <View className="flex-row justify-between items-center mb-1">
            <View className="flex-row items-center">
              <CreditCardIcon size={20} color="#04152A" />
              <Text className="text-sm font-bold text-brand-dark ml-2">Visa ending in 4242</Text>
            </View>
            <Badge label="DEFAULT" variant="green" />
          </View>
          <Text className="text-xs text-brand-muted mt-1">Expires 12/28 · Billing ZIP 33132</Text>
        </TouchableOpacity>

        {/* Card 2: HSA Card */}
        <TouchableOpacity
          onPress={() => setSelectedCard('card-2')}
          className={`p-4 rounded-2xl border-2 bg-white ${
            selectedCard === 'card-2' ? 'border-brand-green bg-emerald-50/20' : 'border-brand-border'
          }`}
        >
          <View className="flex-row justify-between items-center mb-1">
            <View className="flex-row items-center">
              <CreditCardIcon size={20} color="#0F6396" />
              <Text className="text-sm font-bold text-brand-dark ml-2">Mastercard HSA ending in 9812</Text>
            </View>
            <Badge label="HSA / FSA" variant="blue" />
          </View>
          <Text className="text-xs text-brand-muted mt-1">Expires 08/27 · Pre-tax Health Account</Text>
        </TouchableOpacity>

        <View className="pt-2">
          <Button
            label="+ Add New Card"
            variant="secondary"
            size="md"
            fullWidth
            onPress={() => {}}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PaymentMethodsScreen;
