import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Stepper, InputField, CheckboxOption } from '../../components/UI';

export const IntakeMedicalHistoryScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [height, setHeight] = useState(`5' 10"`);
  const [weight, setWeight] = useState('210 lbs');
  const [meds, setMeds] = useState('None');
  const [allergies, setAllergies] = useState('No known drug allergies (NKDA)');

  const [condThyroid, setCondThyroid] = useState(false);
  const [condHypertension, setCondHypertension] = useState(true);
  const [condDiabetes, setCondDiabetes] = useState(false);

  return (
    <ScreenWrapper scrollable={true} screenCode="02-07" screenTitle="Intake Medical History">
      <ScreenHeader
        title="Medical History"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Intake Stepper */}
        <Stepper
          steps={['Medical', 'Photos & ID', 'Consents']}
          currentStep={0}
        />

        <Text className="text-base font-bold text-brand-dark">Vitals & Current Stats</Text>

        <View className="flex-row gap-3">
          <View className="flex-1">
            <InputField
              label="Height"
              value={height}
              onChangeText={setHeight}
              placeholder="e.g. 5ft 10in"
            />
          </View>
          <View className="flex-1">
            <InputField
              label="Current Weight"
              value={weight}
              onChangeText={setWeight}
              placeholder="e.g. 210 lbs"
            />
          </View>
        </View>

        <InputField
          label="Current Daily Medications"
          value={meds}
          onChangeText={setMeds}
          placeholder="List all prescription or OTC medications"
        />

        <InputField
          label="Allergies to Medication"
          value={allergies}
          onChangeText={setAllergies}
          placeholder="List any medication allergies"
        />

        <Text className="text-sm font-bold text-brand-dark mt-2">Diagnosed Conditions</Text>
        <CheckboxOption
          label="High Blood Pressure / Hypertension"
          checked={condHypertension}
          onToggle={() => setCondHypertension(!condHypertension)}
        />
        <CheckboxOption
          label="Type 2 Diabetes"
          checked={condDiabetes}
          onToggle={() => setCondDiabetes(!condDiabetes)}
        />
        <CheckboxOption
          label="Thyroid Cancer or Family History of MTC"
          checked={condThyroid}
          onToggle={() => setCondThyroid(!condThyroid)}
        />

        <View className="pt-2">
          <Button
            label="Continue to Photos & ID"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('02-08-IntakePhotosId')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default IntakeMedicalHistoryScreen;
