import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button } from '../../components/UI';
import { ShieldIcon, LockIcon } from '../../components/Icons';

export const OtpVerificationScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [digits, setDigits] = useState(['8', '6', '5', '4', '', '']);

  const handleDigitChange = (index: number, val: string) => {
    const updated = [...digits];
    updated[index] = val;
    setDigits(updated);
  };

  return (
    <ScreenWrapper scrollable={true} bg="bg-white" screenCode="01-06" screenTitle="OTP Verification MFA">
      <ScreenHeader
        title=""
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-6 justify-between flex-1">
        <View>
          <View className="w-16 h-16 rounded-2xl bg-emerald-50 items-center justify-center mb-5">
            <ShieldIcon size={30} color="#4B9B44" />
          </View>

          <Text className="text-2xl font-bold text-brand-dark mb-1">Verify it's you</Text>
          <Text className="text-sm text-brand-muted mb-8">
            Enter the 6-digit code we sent to{' '}
            <Text className="text-brand-dark font-semibold">+1 (407) ••• 0142</Text>
          </Text>

          {/* 6 Digit Inputs */}
          <View className="flex-row gap-2 justify-between mb-6">
            {digits.map((digit, i) => (
              <View
                key={i}
                className={`flex-1 h-14 rounded-xl border-2 bg-white items-center justify-center ${
                  i === 4 ? 'border-brand-green' : 'border-slate-200'
                }`}
              >
                <TextInput
                  value={digit}
                  onChangeText={(val) => handleDigitChange(i, val)}
                  keyboardType="number-pad"
                  maxLength={1}
                  className="text-2xl font-bold text-brand-dark text-center p-0"
                />
              </View>
            ))}
          </View>

          <Text className="text-xs text-brand-muted text-center mb-8">
            Didn't get a code? <Text className="text-brand-green font-bold">Resend in 0:24</Text>
          </Text>

          {/* Security Notice Box */}
          <View className="bg-blue-50/70 p-3.5 rounded-xl flex-row items-center">
            <LockIcon size={16} color="#0F6396" />
            <Text className="text-xs text-brand-blue ml-2.5 flex-1 leading-relaxed">
              Two-factor authentication protects your health information and prescriptions.
            </Text>
          </View>
        </View>

        {/* CTA */}
        <View className="mt-10">
          <Button
            label="Verify & Continue"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('MainTabs')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default OtpVerificationScreen;
