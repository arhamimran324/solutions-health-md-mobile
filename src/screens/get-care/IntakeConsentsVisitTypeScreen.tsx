import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Stepper, RadioOption, CheckboxOption } from '../../components/UI';

export const IntakeConsentsVisitTypeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [visitType, setVisitType] = useState<'async' | 'video'>('async');
  const [consentTelehealth, setConsentTelehealth] = useState(true);
  const [consentCompound, setConsentCompound] = useState(true);
  const [consentEsign, setConsentEsign] = useState(true);

  return (
    <ScreenWrapper scrollable={true} screenCode="02-09" screenTitle="Intake Consents Visit Type">
      <ScreenHeader
        title="Consents & Visit Type"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Stepper
          steps={['Medical', 'Photos & ID', 'Consents']}
          currentStep={2}
        />

        <Text className="text-base font-bold text-brand-dark">Preferred Consultation Format</Text>
        <RadioOption
          label="Message-Based Async Review"
          sublabel="Doctor reviews your chart within 24 hours. Fastest option."
          selected={visitType === 'async'}
          onSelect={() => setVisitType('async')}
        />
        <RadioOption
          label="Live Telehealth Video Visit"
          sublabel="Schedule a 15-minute 1-on-1 video call with a licensed clinician."
          selected={visitType === 'video'}
          onSelect={() => setVisitType('video')}
        />

        <Text className="text-base font-bold text-brand-dark mt-2">Required Patient Consents</Text>
        <CheckboxOption
          label="Telehealth Informed Consent"
          sublabel="I agree to receive medical diagnosis and treatment recommendations via electronic means."
          checked={consentTelehealth}
          onToggle={() => setConsentTelehealth(!consentTelehealth)}
        />
        <CheckboxOption
          label="Compounded Medication Disclosure"
          sublabel="I acknowledge that compounded medications are prepared by licensed 503A pharmacies."
          checked={consentCompound}
          onToggle={() => setConsentCompound(!consentCompound)}
        />
        <CheckboxOption
          label="Electronic Signature Agreement"
          sublabel="I certify that all medical and identity details submitted are true and accurate."
          checked={consentEsign}
          onToggle={() => setConsentEsign(!consentEsign)}
        />

        <View className="pt-2">
          <Button
            label="Submit for Doctor Review"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('02-10-SubmittedForReview')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default IntakeConsentsVisitTypeScreen;
