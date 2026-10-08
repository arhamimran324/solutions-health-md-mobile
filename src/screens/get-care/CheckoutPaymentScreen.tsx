import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, InputField, Badge } from '../../components/UI';
import { CreditCardIcon, ShieldIcon, LockIcon } from '../../components/Icons';

export const CheckoutPaymentScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [expiry, setExpiry] = useState('12 / 28');
  const [cvc, setCvc] = useState('•••');
  const [zip, setZip] = useState('32801');

  return (
    <ScreenWrapper scrollable={true} screenCode="02-06" screenTitle="Checkout Payment">
      <ScreenHeader
        title="Checkout"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Order Summary Card */}
        <Card>
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-brand-dark">Order Summary</Text>
            <Badge label="FSA / HSA ELIGIBLE" variant="blue" />
          </View>

          <View className="flex-row justify-between py-1.5 border-b border-slate-100">
            <Text className="text-sm text-brand-dark">Compounded Semaglutide (1 Mo)</Text>
            <Text className="text-sm font-semibold text-brand-dark">$199.00</Text>
          </View>

          <View className="flex-row justify-between py-1.5 border-b border-slate-100">
            <Text className="text-sm text-brand-muted">Clinical Provider Review</Text>
            <Text className="text-sm font-semibold text-brand-green">Free ($0.00)</Text>
          </View>

          <View className="flex-row justify-between py-1.5 border-b border-slate-100">
            <Text className="text-sm text-brand-muted">Cold-Chain Temperature Shipping</Text>
            <Text className="text-sm font-semibold text-brand-green">Free ($0.00)</Text>
          </View>

          <View className="flex-row justify-between pt-3">
            <Text className="text-base font-bold text-brand-dark">Total Due Today</Text>
            <Text className="text-xl font-black text-brand-green">$199.00</Text>
          </View>
        </Card>

        {/* Payment Card Information */}
        <Card>
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-brand-dark">Payment Method</Text>
            <View className="flex-row items-center">
              <LockIcon size={14} color="#64748B" />
              <Text className="text-[11px] text-brand-muted ml-1">256-bit Encrypted</Text>
            </View>
          </View>

          <InputField
            label="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="4242 •••• •••• ••••"
            icon={<CreditCardIcon size={18} color="#64748B" />}
          />

          <View className="flex-row gap-3">
            <View className="flex-1">
              <InputField
                label="Expires"
                value={expiry}
                onChangeText={setExpiry}
                placeholder="MM/YY"
              />
            </View>
            <View className="flex-1">
              <InputField
                label="CVC"
                value={cvc}
                onChangeText={setCvc}
                placeholder="123"
              />
            </View>
            <View className="flex-1">
              <InputField
                label="ZIP"
                value={zip}
                onChangeText={setZip}
                placeholder="32801"
              />
            </View>
          </View>
        </Card>

        {/* Guarantee Banner */}
        <View className="flex-row items-center bg-emerald-50 p-3 rounded-xl border border-emerald-100">
          <ShieldIcon size={16} color="#4B9B44" />
          <Text className="text-xs text-brand-dark ml-2 flex-1">
            <Text className="font-bold">100% Refund Guarantee:</Text> If our doctor determines you cannot safely take this medication, you are immediately refunded in full.
          </Text>
        </View>

        {/* CTA */}
        <Button
          label="Pay $199 & Start Medical Intake"
          size="lg"
          fullWidth
          onPress={() => navigation.navigate('02-07-IntakeMedicalHistory')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default CheckoutPaymentScreen;
