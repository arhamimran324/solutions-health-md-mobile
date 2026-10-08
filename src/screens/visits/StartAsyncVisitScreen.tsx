import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, InputField, RadioOption } from '../../components/UI';
import { MessageIcon } from '../../components/Icons';

export const StartAsyncVisitScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [concern, setConcern] = useState('refill');
  const [symptoms, setSymptoms] = useState('');

  return (
    <ScreenWrapper scrollable={true} screenCode="04-06" screenTitle="Start Async Visit">
      <ScreenHeader
        title="Message-Based Visit"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Card className="bg-blue-50/60 border-blue-100 p-4">
          <View className="flex-row items-center mb-1">
            <MessageIcon size={20} color="#0F6396" />
            <Text className="text-sm font-bold text-brand-blue ml-2">No video required</Text>
          </View>
          <Text className="text-xs text-brand-dark leading-relaxed">
            Answer questions at your own pace. A licensed physician reviews your medical request and responds within 24 hours.
          </Text>
        </Card>

        <Text className="text-sm font-bold text-brand-dark">What is the visit for?</Text>
        <RadioOption
          label="Prescription Refill / Titration"
          sublabel="Request regular refill or dosage adjustment"
          selected={concern === 'refill'}
          onSelect={() => setConcern('refill')}
        />
        <RadioOption
          label="Side Effects or Symptoms"
          sublabel="Report nausea, fatigue, or injection site reaction"
          selected={concern === 'side-effects'}
          onSelect={() => setConcern('side-effects')}
        />
        <RadioOption
          label="General Medical Question"
          sublabel="Discuss diet, exercise, or protocol changes"
          selected={concern === 'general'}
          onSelect={() => setConcern('general')}
        />

        <InputField
          label="Describe your current symptoms or request"
          value={symptoms}
          onChangeText={setSymptoms}
          multiline
          numberOfLines={4}
          placeholder="Include any changes in your health, current weight, or how you've been feeling..."
        />

        <View className="pt-2">
          <Button
            label="Submit Consultation Request"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('04-07-AsyncVisitStatus')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default StartAsyncVisitScreen;
