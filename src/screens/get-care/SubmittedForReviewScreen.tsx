import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Button, Card, Badge } from '../../components/UI';
import { CheckCircleIcon, ClockIcon } from '../../components/Icons';

export const SubmittedForReviewScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} bg="bg-white" screenCode="02-10" screenTitle="Submitted For Review">
      <View className="p-6 justify-between flex-1">
        <View className="items-center pt-8">
          <View className="w-20 h-20 rounded-full bg-emerald-50 items-center justify-center mb-5">
            <CheckCircleIcon size={44} color="#4B9B44" />
          </View>

          <Text className="text-2xl font-bold text-brand-dark text-center mb-2">
            Intake Submitted!
          </Text>
          <Text className="text-sm text-brand-muted text-center leading-relaxed px-2 mb-6">
            Your health history and verification photos have been routed to our medical team.
          </Text>

          <Card className="w-full mb-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xs font-bold text-brand-muted uppercase">Assigned Clinician</Text>
              <Badge label="IN QUEUE" variant="green" />
            </View>
            <Text className="text-base font-bold text-brand-dark">Dr. Sarah Lin, MD</Text>
            <Text className="text-xs text-brand-muted mt-0.5">Internal Medicine & Obesity Specialist</Text>
            <View className="h-px bg-slate-100 my-3" />
            <View className="flex-row items-center">
              <ClockIcon size={16} color="#64748B" />
              <Text className="text-xs text-brand-muted ml-2">
                Expected review time: <Text className="font-semibold text-brand-dark">Under 4 hours</Text>
              </Text>
            </View>
          </Card>

          <View className="bg-emerald-50 p-4 rounded-2xl w-full border border-emerald-100">
            <Text className="text-xs font-bold text-brand-green mb-1">What happens next?</Text>
            <Text className="text-xs text-brand-dark leading-relaxed">
              Once Dr. Lin approves your treatment, the prescription is transmitted immediately to the dispensing pharmacy for cold-chain pack and shipment.
            </Text>
          </View>
        </View>

        <View className="pt-8">
          <Button
            label="Go to Home Dashboard"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('MainTabs')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SubmittedForReviewScreen;
