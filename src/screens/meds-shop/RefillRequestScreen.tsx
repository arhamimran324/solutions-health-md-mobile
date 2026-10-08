import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, RadioOption, InputField } from '../../components/UI';

export const RefillRequestScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [doseOption, setDoseOption] = useState('titrate');
  const [currentWeight, setCurrentWeight] = useState('198 lbs');
  const [sideEffects, setSideEffects] = useState('None currently');

  return (
    <ScreenWrapper scrollable={true} screenCode="05-02" screenTitle="Refill Request">
      <ScreenHeader
        title="Request Refill"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Card className="p-4">
          <Text className="text-sm font-bold text-brand-dark mb-1">Medication</Text>
          <Text className="text-base font-extrabold text-brand-green">Compounded Semaglutide + B12</Text>
          <Text className="text-xs text-brand-muted mt-0.5">Current dosage: 0.5 mg subcutaneous weekly</Text>
        </Card>

        <Text className="text-sm font-bold text-brand-dark">Dosage Preference for Month 3</Text>
        <RadioOption
          label="Increase dosage to 1.0 mg (Titration)"
          sublabel="Standard protocol if 0.5mg is well-tolerated without persistent nausea"
          selected={doseOption === 'titrate'}
          onSelect={() => setDoseOption('titrate')}
        />
        <RadioOption
          label="Remain on current 0.5 mg"
          sublabel="Maintain steady progress with minimal side effects"
          selected={doseOption === 'stay'}
          onSelect={() => setDoseOption('stay')}
        />

        <InputField
          label="Current Weight Check-in"
          value={currentWeight}
          onChangeText={setCurrentWeight}
          placeholder="e.g. 198 lbs"
        />

        <InputField
          label="Recent side effects or notes for Dr. Lin"
          value={sideEffects}
          onChangeText={setSideEffects}
          multiline
          numberOfLines={3}
        />

        <View className="pt-2">
          <Button
            label="Submit Refill Request"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('04-07-AsyncVisitStatus')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default RefillRequestScreen;
