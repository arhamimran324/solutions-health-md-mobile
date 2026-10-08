import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, ToggleSwitch } from '../../components/UI';

export const NotificationSettingsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [rxRefills, setRxRefills] = useState(true);
  const [doctorMessages, setDoctorMessages] = useState(true);
  const [shippingAlerts, setShippingAlerts] = useState(true);
  const [billingNotifs, setBillingNotifs] = useState(true);
  const [marketingEmail, setMarketingEmail] = useState(false);

  return (
    <ScreenWrapper scrollable={true} screenCode="07-13" screenTitle="Notification Settings">
      <ScreenHeader
        title="Notification Settings"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Text className="text-sm font-bold text-brand-dark">Clinical & Care Notifications</Text>

        <Card className="p-3">
          <View className="flex-row items-center justify-between p-2 border-b border-slate-100">
            <View className="flex-1 mr-3">
              <Text className="text-sm font-semibold text-brand-dark">Doctor Messages</Text>
              <Text className="text-xs text-brand-muted">Direct replies and consultation notes</Text>
            </View>
            <ToggleSwitch checked={doctorMessages} onToggle={() => setDoctorMessages(!doctorMessages)} />
          </View>

          <View className="flex-row items-center justify-between p-2 border-b border-slate-100">
            <View className="flex-1 mr-3">
              <Text className="text-sm font-semibold text-brand-dark">Refill Reminders</Text>
              <Text className="text-xs text-brand-muted">Upcoming dose renewals and lab deadlines</Text>
            </View>
            <ToggleSwitch checked={rxRefills} onToggle={() => setRxRefills(!rxRefills)} />
          </View>

          <View className="flex-row items-center justify-between p-2">
            <View className="flex-1 mr-3">
              <Text className="text-sm font-semibold text-brand-dark">Shipment Tracking</Text>
              <Text className="text-xs text-brand-muted">UPS out-for-delivery & delivery alerts</Text>
            </View>
            <ToggleSwitch checked={shippingAlerts} onToggle={() => setShippingAlerts(!shippingAlerts)} />
          </View>
        </Card>

        <Text className="text-sm font-bold text-brand-dark">Billing & Communications</Text>
        <Card className="p-3">
          <View className="flex-row items-center justify-between p-2 border-b border-slate-100">
            <View className="flex-1 mr-3">
              <Text className="text-sm font-semibold text-brand-dark">Billing Receipts</Text>
              <Text className="text-xs text-brand-muted">Monthly subscription charges & invoices</Text>
            </View>
            <ToggleSwitch checked={billingNotifs} onToggle={() => setBillingNotifs(!billingNotifs)} />
          </View>

          <View className="flex-row items-center justify-between p-2">
            <View className="flex-1 mr-3">
              <Text className="text-sm font-semibold text-brand-dark">Wellness Updates</Text>
              <Text className="text-xs text-brand-muted">New programs and healthy living articles</Text>
            </View>
            <ToggleSwitch checked={marketingEmail} onToggle={() => setMarketingEmail(!marketingEmail)} />
          </View>
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default NotificationSettingsScreen;
