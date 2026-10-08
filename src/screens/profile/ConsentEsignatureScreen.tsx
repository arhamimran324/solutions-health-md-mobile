import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, CheckboxOption, InputField } from '../../components/UI';

export const ConsentEsignatureScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [agreed, setAgreed] = useState(false);
  const [fullName, setFullName] = useState('Umair Akram');

  return (
    <ScreenWrapper scrollable={true} screenCode="07-09" screenTitle="Consent E-Signature">
      <ScreenHeader
        title="E-Signature Form"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Document Scrollbox */}
        <Card className="p-4 max-h-72">
          <Text className="text-sm font-bold text-brand-dark mb-2">
            Telemedicine Informed Consent Agreement
          </Text>
          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator>
            <Text className="text-xs text-brand-muted leading-relaxed">
              1. I understand that telemedicine involves the delivery of healthcare services using electronic communications, information technology, or other means between a healthcare provider and a patient who are not in the same physical location.{'\n\n'}
              2. I understand that the healthcare provider will determine whether telemedicine is appropriate for my medical condition and that I may be referred for an in-person examination if necessary.{'\n\n'}
              3. I agree that my electronic signature below has the same legal binding force and effect as a handwritten signature.
            </Text>
          </ScrollView>
        </Card>

        <CheckboxOption
          label="I have read and agree to all terms of this Telehealth Consent"
          checked={agreed}
          onToggle={() => setAgreed(!agreed)}
        />

        <InputField
          label="Type Full Legal Name (Signature)"
          value={fullName}
          onChangeText={setFullName}
          placeholder="First and Last Legal Name"
        />

        <View className="pt-2">
          <Button
            label="Submit Electronic Signature"
            size="lg"
            fullWidth
            disabled={!agreed}
            onPress={() => navigation.navigate('07-08-DocumentsForms')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ConsentEsignatureScreen;
