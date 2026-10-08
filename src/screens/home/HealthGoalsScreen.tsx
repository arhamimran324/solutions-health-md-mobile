import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button, ProgressBar } from '../../components/UI';
import { TargetIcon } from '../../components/Icons';

export const HealthGoalsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="03-04" screenTitle="Health Goals">
      <ScreenHeader
        title="Health Goals"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Goal 1: Target Weight */}
        <Card className="p-4">
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 rounded-xl bg-emerald-50 items-center justify-center mr-3">
              <TargetIcon size={20} color="#4B9B44" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-brand-dark">Weight Goal</Text>
              <Text className="text-xs text-brand-muted">Target: 185 lbs</Text>
            </View>
            <Text className="text-lg font-black text-brand-green">198 lbs</Text>
          </View>
          <ProgressBar progress={0.48} height={8} />
          <View className="flex-row justify-between mt-2">
            <Text className="text-[11px] text-brand-muted">Start: 210 lbs</Text>
            <Text className="text-[11px] font-bold text-brand-green">-12 lbs achieved</Text>
            <Text className="text-[11px] text-brand-muted">Target: 185 lbs</Text>
          </View>
        </Card>

        {/* Goal 2: Weekly Activity */}
        <Card className="p-4">
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center mr-3">
              <TargetIcon size={20} color="#0F6396" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-brand-dark">Cardio & Resistance</Text>
              <Text className="text-xs text-brand-muted">Target: 150 min / week</Text>
            </View>
            <Text className="text-lg font-black text-brand-blue">120 min</Text>
          </View>
          <ProgressBar progress={0.8} height={8} color="#0F6396" />
          <View className="flex-row justify-between mt-2">
            <Text className="text-[11px] text-brand-muted">30 min remaining this week</Text>
            <Text className="text-[11px] font-bold text-brand-blue">80%</Text>
          </View>
        </Card>

        {/* Goal 3: Hydration */}
        <Card className="p-4">
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 rounded-xl bg-emerald-50 items-center justify-center mr-3">
              <TargetIcon size={20} color="#4B9B44" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-brand-dark">Daily Hydration</Text>
              <Text className="text-xs text-brand-muted">Target: 80 oz / day</Text>
            </View>
            <Text className="text-lg font-black text-brand-green">64 oz</Text>
          </View>
          <ProgressBar progress={0.8} height={8} />
        </Card>

        <Button
          label="Log Weight or Activity"
          size="lg"
          fullWidth
          onPress={() => navigation.navigate('03-01-HomeActionRequired')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HealthGoalsScreen;
