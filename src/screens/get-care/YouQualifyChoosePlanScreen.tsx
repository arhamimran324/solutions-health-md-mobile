import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Badge, Card } from '../../components/UI';
import { CheckCircleIcon } from '../../components/Icons';

export const YouQualifyChoosePlanScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedPlan, setSelectedPlan] = useState<'semaglutide' | 'tirzepatide'>('semaglutide');

  return (
    <ScreenWrapper scrollable={true} screenCode="02-04" screenTitle="You Qualify Choose Plan">
      <ScreenHeader
        title="Plan Selection"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Celebration Banner */}
        <View className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
          <View className="flex-row items-center mb-1">
            <CheckCircleIcon size={20} color="#4B9B44" />
            <Text className="text-base font-bold text-brand-dark ml-2">
              You are pre-qualified!
            </Text>
          </View>
          <Text className="text-xs text-brand-muted leading-relaxed">
            Based on your answers, our clinicians can prescribe the following GLP-1 medications pending final provider sign-off.
          </Text>
        </View>

        {/* Plan 1: Semaglutide */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setSelectedPlan('semaglutide')}
          className={`p-4 rounded-2xl border-2 bg-white ${
            selectedPlan === 'semaglutide'
              ? 'border-brand-green bg-[#F6FBF5]'
              : 'border-brand-border'
          }`}
        >
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-base font-bold text-brand-dark">Compounded Semaglutide</Text>
            <Badge label="POPULAR" variant="green" />
          </View>
          <Text className="text-xs text-brand-muted mb-3">
            Active ingredient in Ozempic® & Wegovy®. Proven appetite suppression.
          </Text>
          <View className="flex-row items-baseline justify-between pt-2 border-t border-slate-100">
            <Text className="text-2xl font-extrabold text-brand-dark">$199<Text className="text-xs font-normal text-brand-muted"> / mo</Text></Text>
            <Text className="text-xs font-semibold text-brand-green">Doctor & Meds Included</Text>
          </View>
        </TouchableOpacity>

        {/* Plan 2: Tirzepatide */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setSelectedPlan('tirzepatide')}
          className={`p-4 rounded-2xl border-2 bg-white ${
            selectedPlan === 'tirzepatide'
              ? 'border-brand-green bg-[#F6FBF5]'
              : 'border-brand-border'
          }`}
        >
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-base font-bold text-brand-dark">Compounded Tirzepatide</Text>
            <Badge label="DUAL AGONIST" variant="blue" />
          </View>
          <Text className="text-xs text-brand-muted mb-3">
            Active ingredient in Mounjaro® & Zepbound®. Dual GIP/GLP-1 receptor action.
          </Text>
          <View className="flex-row items-baseline justify-between pt-2 border-t border-slate-100">
            <Text className="text-2xl font-extrabold text-brand-dark">$299<Text className="text-xs font-normal text-brand-muted"> / mo</Text></Text>
            <Text className="text-xs font-semibold text-brand-blue">Highest Efficacy</Text>
          </View>
        </TouchableOpacity>

        {/* CTA */}
        <View className="gap-2.5 pt-2">
          <Button
            label="Continue to checkout"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('02-06-CheckoutPayment')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('02-05-NotEligible')}
            className="items-center py-2"
          >
            <Text className="text-xs text-brand-muted">
              (Preview alternative outcome: <Text className="text-brand-dark underline">Not eligible screen</Text>)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default YouQualifyChoosePlanScreen;
