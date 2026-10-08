import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, InputField, Button, ToggleSwitch } from '../../components/UI';
import { MailIcon, LockIcon } from '../../components/Icons';

export const LogInScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('umair@email.com');
  const [password, setPassword] = useState('••••••••••');
  const [useBiometrics, setUseBiometrics] = useState(true);

  return (
    <ScreenWrapper scrollable={true} bg="bg-white" screenCode="01-05" screenTitle="Log In">
      <ScreenHeader
        title=""
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-6">
        <Text className="text-2xl font-bold text-brand-dark mb-1">Welcome back</Text>
        <Text className="text-sm text-brand-muted mb-6">Log in to manage your care and prescriptions.</Text>

        <InputField
          label="Email or mobile number"
          value={email}
          onChangeText={setEmail}
          placeholder="your@email.com"
          icon={<MailIcon size={18} color="#64748B" />}
        />

        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
          icon={<LockIcon size={18} color="#64748B" />}
        />

        <View className="flex-row items-center justify-between my-2">
          <View className="flex-row items-center">
            <ToggleSwitch
              checked={useBiometrics}
              onToggle={() => setUseBiometrics(!useBiometrics)}
            />
            <Text className="text-xs text-brand-dark font-medium ml-2.5">Enable Face ID / Touch ID</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('01-07-ForgotPassword')}>
            <Text className="text-xs font-semibold text-brand-green">Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-slate-200" />
          <Text className="text-xs text-brand-muted mx-3">or log in with</Text>
          <View className="flex-1 h-px bg-slate-200" />
        </View>

        {/* Social auth */}
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity className="flex-1 py-3 border border-slate-200 rounded-full items-center justify-center bg-white">
            <Text className="text-sm font-semibold text-brand-dark">Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-3 border border-slate-200 rounded-full items-center justify-center bg-white">
            <Text className="text-sm font-semibold text-brand-dark">Google</Text>
          </TouchableOpacity>
        </View>

        {/* CTA */}
        <Button
          label="Log in"
          size="lg"
          fullWidth
          onPress={() => navigation.navigate('01-06-OtpVerification')}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('01-04-SignUp')}
          className="items-center mt-5"
        >
          <Text className="text-sm text-brand-muted">
            New patient? <Text className="text-brand-green font-bold">Create account</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default LogInScreen;
