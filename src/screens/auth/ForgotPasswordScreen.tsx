import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, InputField, Button } from '../../components/UI';
import { MailIcon } from '../../components/Icons';

export const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('umair@email.com');
  const [sent, setSent] = useState(false);

  return (
    <ScreenWrapper scrollable={true} bg="bg-white" screenCode="01-07" screenTitle="Forgot Password">
      <ScreenHeader
        title=""
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-6 justify-between flex-1">
        <View>
          <Text className="text-2xl font-bold text-brand-dark mb-1">Reset password</Text>
          <Text className="text-sm text-brand-muted mb-6">
            Enter your account email and we'll send you a secure link to reset your credentials.
          </Text>

          <InputField
            label="Email address"
            value={email}
            onChangeText={setEmail}
            placeholder="your@email.com"
            icon={<MailIcon size={18} color="#64748B" />}
          />

          {sent ? (
            <View className="bg-emerald-50 border border-brand-green/30 rounded-xl p-4 mt-4">
              <Text className="text-sm font-semibold text-brand-green">
                Reset link sent!
              </Text>
              <Text className="text-xs text-brand-muted mt-1">
                Please check your inbox (and spam folder) for further instructions.
              </Text>
            </View>
          ) : null}
        </View>

        <View className="mt-8 gap-3">
          <Button
            label={sent ? 'Back to Log in' : 'Send reset link'}
            size="lg"
            fullWidth
            onPress={() => {
              if (!sent) {
                setSent(true);
              } else {
                navigation.navigate('01-05-LogIn');
              }
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPasswordScreen;
