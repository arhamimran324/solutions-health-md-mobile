import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, Badge, Stepper } from '../../components/UI';
import { CheckCircleIcon, ClockIcon } from '../../components/Icons';

export const AsyncVisitStatusScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="04-07" screenTitle="Async Visit Status">
      <ScreenHeader
        title="Visit Status"
        onBack={() => navigation.navigate('04-01-Visits')}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Status Card */}
        <Card className="p-5">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-xs font-bold text-brand-muted uppercase">Visit #AS-9821</Text>
            <Badge label="IN REVIEW" variant="amber" />
          </View>
          <Text className="text-xl font-bold text-brand-dark">Semaglutide Refill Request</Text>
          <Text className="text-xs text-brand-muted mt-1">Submitted Today at 9:15 AM</Text>

          <View className="h-px bg-slate-100 my-4" />

          {/* Stepper Status */}
          <Stepper
            steps={['Submitted', 'Doctor Review', 'Rx Sent', 'Shipped']}
            currentStep={1}
          />
        </Card>

        {/* Assigned Provider */}
        <Card className="p-4">
          <Text className="text-xs font-bold text-brand-muted uppercase mb-2">Reviewing Clinician</Text>
          <View className="flex-row items-center">
            <View className="w-11 h-11 rounded-full bg-emerald-100 items-center justify-center mr-3">
              <Text className="text-sm font-bold text-brand-green">SL</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-brand-dark">Dr. Sarah Lin, MD</Text>
              <Text className="text-xs text-brand-muted">Typically replies within 4 hours</Text>
            </View>
          </View>
        </Card>

        <View className="pt-2 gap-3">
          <Button
            label="View Action Needed Demo"
            variant="secondary"
            size="md"
            fullWidth
            onPress={() => navigation.navigate('04-08-AsyncMoreInfoNeeded')}
          />
          <Button
            label="Back to Visits"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('04-01-Visits')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AsyncVisitStatusScreen;
