import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, RadioOption } from '../../components/UI';

export const ChangePlanScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedPlan, setSelectedPlan] = useState('tirzepatide');

  return (
    <ScreenWrapper scrollable={true} screenCode="07-04" screenTitle="Change Plan">
      <ScreenHeader
        title="Change Subscription Plan"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Text className="text-sm font-bold text-brand-dark">Available Treatment Options</Text>

        <RadioOption
          label="Switch to Tirzepatide (Dual Agonist)"
          sublabel="Highest clinical efficacy for weight reduction"
          price="$299/mo"
          selected={selectedPlan === 'tirzepatide'}
          onSelect={() => setSelectedPlan('tirzepatide')}
        />

        <RadioOption
          label="Keep Compounded Semaglutide"
          sublabel="Maintain current single GLP-1 receptor therapy"
          price="$199/mo"
          selected={selectedPlan === 'semaglutide'}
          onSelect={() => setSelectedPlan('semaglutide')}
        />

        <RadioOption
          label="Oral GLP-1 Troche / Sublingual"
          sublabel="Needle-free daily dissolving alternative"
          price="$149/mo"
          selected={selectedPlan === 'oral'}
          onSelect={() => setSelectedPlan('oral')}
        />

        <View className="pt-4">
          <Button
            label="Confirm Plan Change"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('07-03-MembershipBilling')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ChangePlanScreen;
