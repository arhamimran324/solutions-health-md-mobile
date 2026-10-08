import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card } from '../../components/UI';
import { AlertCircleIcon, PhoneIcon } from '../../components/Icons';

export const NotEligibleScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="02-05" screenTitle="Not Eligible">
      <ScreenHeader
        title="Eligibility Status"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-6 justify-between flex-1">
        <View className="items-center pt-6">
          <View className="w-16 h-16 rounded-2xl bg-amber-50 items-center justify-center mb-5">
            <AlertCircleIcon size={32} color="#D97706" />
          </View>

          <Text className="text-2xl font-bold text-brand-dark text-center mb-2">
            Safety First: We Cannot Prescribe This Online
          </Text>
          <Text className="text-sm text-brand-muted text-center leading-relaxed mb-6">
            Based on your medical answers, GLP-1 medications may not be safe for your current profile due to clinical contraindications.
          </Text>

          <Card className="w-full bg-slate-50 border-slate-200 p-4 mb-4">
            <Text className="text-xs font-bold text-brand-dark mb-1">Recommended next steps:</Text>
            <Text className="text-xs text-brand-muted leading-relaxed">
              • Speak with your primary physician for in-person metabolic testing{'\n'}
              • Explore our lifestyle wellness and nutritional coaching tracks{'\n'}
              • Request a one-on-one telehealth consultation with a doctor
            </Text>
          </Card>
        </View>

        <View className="gap-3 mt-8">
          <Button
            label="Explore other programs"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('02-01-GetCarePrograms')}
          />
          <Button
            label="Speak with care team"
            variant="secondary"
            size="lg"
            fullWidth
            icon={<PhoneIcon size={16} color="#4B9B44" />}
            onPress={() => navigation.navigate('06-01-MessagesInbox')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default NotEligibleScreen;
