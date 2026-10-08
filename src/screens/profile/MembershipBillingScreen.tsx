import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button, Badge } from '../../components/UI';
import { AlertCircleIcon, CreditCardIcon } from '../../components/Icons';

export const MembershipBillingScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="07-03" screenTitle="Membership Billing">
      <ScreenHeader
        title="Membership & Billing"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Payment Warning Card */}
        <Card className="border-red-200 bg-red-50/40 p-4">
          <View className="flex-row items-center mb-1">
            <AlertCircleIcon size={18} color="#DC2626" />
            <Text className="text-sm font-bold text-brand-dark ml-2">Action Required: Payment Failed</Text>
          </View>
          <Text className="text-xs text-brand-dark leading-relaxed mb-3">
            We were unable to charge your card ending in 4242 for this month's renewal ($199.00). Update your payment details to avoid shipping delays.
          </Text>
          <Button
            label="Update Payment Method"
            size="sm"
            onPress={() => navigation.navigate('07-06-PaymentMethods')}
          />
        </Card>

        {/* Current Plan Card */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-xs font-bold text-brand-muted uppercase">Current Program</Text>
            <Badge label="MONTH 2 OF 6" variant="blue" />
          </View>
          <Text className="text-xl font-black text-brand-dark">Semaglutide Weight Loss</Text>
          <Text className="text-sm font-extrabold text-brand-green mt-1">$199.00 / month</Text>
          <Text className="text-xs text-brand-muted mt-2">
            Includes clinician care, lab review, medications, and cold packaging.
          </Text>

          <View className="h-px bg-slate-100 my-4" />

          <View className="flex-row gap-3">
            <Button
              label="Change Plan"
              variant="secondary"
              size="md"
              onPress={() => navigation.navigate('07-04-ChangePlan')}
            />
            <Button
              label="Pause or Cancel"
              variant="ghost"
              size="md"
              onPress={() => navigation.navigate('07-05-CancelOrPause')}
            />
          </View>
        </Card>

        <Card className="p-4">
          <Text className="text-sm font-bold text-brand-dark mb-1">Billing Inquiries</Text>
          <Text className="text-xs text-brand-muted mb-3">
            Solutions Health MD subscriptions are FSA and HSA card approved.
          </Text>
          <Button
            label="View Past Invoices"
            variant="secondary"
            size="sm"
            onPress={() => navigation.navigate('07-07-InvoicesReceipts')}
          />
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default MembershipBillingScreen;
