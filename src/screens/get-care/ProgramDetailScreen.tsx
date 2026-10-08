import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button, Badge } from '../../components/UI';
import { CheckCircleIcon, VideoIcon, CareIcon, TruckIcon, ShieldIcon } from '../../components/Icons';

export const ProgramDetailScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const benefits = [
    'Licensed physician evaluation & personalized dosage',
    'Compounded Semaglutide or Tirzepatide shipped monthly',
    'All needles, alcohol wipes & cold-pack supplies included',
    'Unlimited secure messaging with your provider',
    'Regular check-ins & metabolic monitoring',
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="02-02" screenTitle="Program Detail">
      <ScreenHeader
        title="Medical Weight Loss"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Hero Card */}
        <Card className="bg-brand-green border-0 p-5">
          <Badge label="MOST POPULAR" variant="amber" />
          <Text className="text-white text-2xl font-bold mt-2">
            Semaglutide & Tirzepatide Programs
          </Text>
          <Text className="text-emerald-100 text-sm mt-1">
            Lose an average of 15% body weight with once-weekly GLP-1 therapy overseen by US doctors.
          </Text>
          <View className="flex-row items-baseline mt-4">
            <Text className="text-white text-3xl font-extrabold">$199</Text>
            <Text className="text-emerald-100 text-xs ml-1">/ month · all inclusive</Text>
          </View>
        </Card>

        {/* What's Included */}
        <Card>
          <Text className="text-base font-bold text-brand-dark mb-3">What's Included</Text>
          {benefits.map((b, i) => (
            <View key={i} className="flex-row items-start mb-2.5">
              <View className="mt-0.5 mr-2.5">
                <CheckCircleIcon size={18} color="#4B9B44" />
              </View>
              <Text className="text-sm text-brand-dark flex-1 leading-snug">{b}</Text>
            </View>
          ))}
        </Card>

        {/* How It Works Steps */}
        <Card>
          <Text className="text-base font-bold text-brand-dark mb-3">How It Works</Text>
          <View className="gap-3">
            <View className="flex-row items-center">
              <View className="w-8 h-8 rounded-full bg-emerald-50 items-center justify-center mr-3">
                <Text className="text-xs font-bold text-brand-green">1</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-brand-dark">3-minute health assessment</Text>
                <Text className="text-xs text-brand-muted">Tell us about your health history and goals</Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-8 h-8 rounded-full bg-emerald-50 items-center justify-center mr-3">
                <Text className="text-xs font-bold text-brand-green">2</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-brand-dark">Provider review or video visit</Text>
                <Text className="text-xs text-brand-muted">A board-certified clinician reviews your chart</Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-8 h-8 rounded-full bg-emerald-50 items-center justify-center mr-3">
                <Text className="text-xs font-bold text-brand-green">3</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-brand-dark">Direct discreet delivery</Text>
                <Text className="text-xs text-brand-muted">Shipped in temperature-monitored packaging</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* CTA Button */}
        <View className="pt-2">
          <Button
            label="See if you qualify"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('02-03-AssessmentBranching')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProgramDetailScreen;
