import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card } from '../../components/UI';
import { CloseIcon } from '../../components/Icons';

export const CartScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="05-05" screenTitle="Cart">
      <ScreenHeader
        title="Your Cart"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Item 1 */}
        <Card className="flex-row items-center p-3.5">
          <View className="w-14 h-14 rounded-xl bg-slate-50 items-center justify-center mr-3">
            <Text className="text-2xl">💧</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-brand-dark">NAD+ Sublingual Drops</Text>
            <Text className="text-xs text-brand-muted">Qty: 1 · 30 ml bottle</Text>
            <Text className="text-sm font-extrabold text-brand-dark mt-1">$89.00</Text>
          </View>
          <TouchableOpacity className="p-1">
            <CloseIcon size={18} color="#94A3B8" />
          </TouchableOpacity>
        </Card>

        {/* Item 2 */}
        <Card className="flex-row items-center p-3.5">
          <View className="w-14 h-14 rounded-xl bg-slate-50 items-center justify-center mr-3">
            <Text className="text-2xl">💊</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-brand-dark">MIC B12 Lipotropic</Text>
            <Text className="text-xs text-brand-muted">Qty: 1 · 60 capsules</Text>
            <Text className="text-sm font-extrabold text-brand-dark mt-1">$65.00</Text>
          </View>
          <TouchableOpacity className="p-1">
            <CloseIcon size={18} color="#94A3B8" />
          </TouchableOpacity>
        </Card>

        {/* Order Summary */}
        <Card className="p-4">
          <Text className="text-sm font-bold text-brand-dark mb-2">Order Summary</Text>
          <View className="flex-row justify-between py-1 border-b border-slate-100">
            <Text className="text-xs text-brand-muted">Subtotal</Text>
            <Text className="text-xs font-semibold text-brand-dark">$154.00</Text>
          </View>
          <View className="flex-row justify-between py-1 border-b border-slate-100">
            <Text className="text-xs text-brand-muted">Shipping</Text>
            <Text className="text-xs font-semibold text-brand-green">FREE</Text>
          </View>
          <View className="flex-row justify-between pt-2">
            <Text className="text-sm font-bold text-brand-dark">Total</Text>
            <Text className="text-base font-extrabold text-brand-green">$154.00</Text>
          </View>
        </Card>

        <View className="pt-2">
          <Button
            label="Place Order · $154.00"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('05-06-MyOrders')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default CartScreen;
