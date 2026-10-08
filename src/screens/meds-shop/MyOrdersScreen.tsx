import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Badge, Button } from '../../components/UI';
import { TruckIcon, CheckCircleIcon } from '../../components/Icons';

export const MyOrdersScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="05-06" screenTitle="My Orders">
      <ScreenHeader
        title="My Orders & Shipments"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Active In-Transit Order */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-xs font-bold text-brand-muted">Order #SH-8841</Text>
            <Badge label="IN TRANSIT" variant="green" />
          </View>
          <Text className="text-base font-bold text-brand-dark">Semaglutide + B12 (30-day supply)</Text>
          <Text className="text-xs text-brand-muted mt-0.5">Cold-chain insulated shipping · UPS 1Z84A9</Text>

          <View className="h-px bg-slate-100 my-3" />

          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-[11px] text-brand-muted">Expected Delivery</Text>
              <Text className="text-xs font-bold text-brand-dark">Friday, Oct 5 by 7:00 PM</Text>
            </View>
            <Button
              label="Track Package"
              size="sm"
              icon={<TruckIcon size={14} color="#FFFFFF" />}
              onPress={() => navigation.navigate('05-07-ShipmentTracking')}
            />
          </View>
        </Card>

        {/* Delivered Order */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-xs font-bold text-brand-muted">Order #SH-7210</Text>
            <Badge label="DELIVERED" variant="gray" />
          </View>
          <Text className="text-base font-bold text-brand-dark">Starter Kit: Semaglutide 0.25mg</Text>
          <Text className="text-xs text-brand-muted mt-0.5">Delivered Sep 3, 2026 · Signed by Umair</Text>

          <View className="h-px bg-slate-100 my-3" />

          <View className="flex-row items-center justify-between">
            <Text className="text-xs font-semibold text-brand-green">Delivered successfully</Text>
            <Button
              label="Order Details"
              variant="secondary"
              size="sm"
            />
          </View>
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default MyOrdersScreen;
