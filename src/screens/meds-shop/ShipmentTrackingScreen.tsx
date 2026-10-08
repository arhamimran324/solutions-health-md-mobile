import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Badge, Stepper } from '../../components/UI';
import { TruckIcon, ShieldIcon } from '../../components/Icons';

export const ShipmentTrackingScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="05-07" screenTitle="Shipment Tracking">
      <ScreenHeader
        title="Tracking Details"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Tracking Header Card */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-xs font-bold text-brand-muted uppercase">UPS Next Day Air</Text>
            <Badge label="ON SCHEDULE" variant="green" />
          </View>
          <Text className="text-lg font-bold text-brand-dark">Tracking: 1Z84A9024810</Text>
          <Text className="text-xs text-brand-muted mt-0.5">Estimated Delivery: Friday, Oct 5 by 7:00 PM</Text>

          <View className="my-4">
            <Stepper
              steps={['Order Placed', 'Packed', 'In Transit', 'Delivered']}
              currentStep={2}
            />
          </View>
        </Card>

        {/* Cold-Chain Temperature Assurance */}
        <Card className="border-emerald-200 bg-emerald-50/40 p-4">
          <View className="flex-row items-center mb-1">
            <ShieldIcon size={18} color="#4B9B44" />
            <Text className="text-sm font-bold text-brand-dark ml-2">
              Cold-Chain Temperature Assured
            </Text>
          </View>
          <Text className="text-xs text-brand-dark leading-relaxed">
            Current package sensor reading: <Text className="font-bold text-brand-green">38°F</Text> (Target range 36°F - 46°F). Packed in pharmaceutical grade vacuum insulation with gel packs.
          </Text>
        </Card>

        {/* Destination Address */}
        <Card className="p-4">
          <Text className="text-xs font-bold text-brand-muted uppercase mb-1">Shipping Destination</Text>
          <Text className="text-sm font-bold text-brand-dark">Umair Akram</Text>
          <Text className="text-xs text-brand-muted mt-0.5">
            1204 Biscayne Blvd, Apt 14B{'\n'}
            Miami, FL 33132
          </Text>
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default ShipmentTrackingScreen;
