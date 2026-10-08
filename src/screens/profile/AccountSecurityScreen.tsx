import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, ToggleSwitch, Button } from '../../components/UI';
import { LockIcon, ShieldIcon } from '../../components/Icons';

export const AccountSecurityScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [mfa, setMfa] = useState(true);
  const [faceId, setFaceId] = useState(true);

  return (
    <ScreenWrapper scrollable={true} screenCode="07-14" screenTitle="Account Security">
      <ScreenHeader
        title="Account & Security"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Security Status Card */}
        <Card className="bg-emerald-50/60 border-emerald-200 p-4">
          <View className="flex-row items-center mb-1">
            <ShieldIcon size={18} color="#4B9B44" />
            <Text className="text-sm font-bold text-brand-dark ml-2">Account is Secure</Text>
          </View>
          <Text className="text-xs text-brand-dark leading-relaxed">
            Two-factor authentication and biometric verification are active, safeguarding your sensitive health records.
          </Text>
        </Card>

        <Text className="text-sm font-bold text-brand-dark">Authentication Preferences</Text>

        <Card className="p-3">
          <View className="flex-row items-center justify-between p-2 border-b border-slate-100">
            <View className="flex-1 mr-3">
              <Text className="text-sm font-semibold text-brand-dark">Biometric Sign-In</Text>
              <Text className="text-xs text-brand-muted">Use Face ID or Touch ID to log in</Text>
            </View>
            <ToggleSwitch checked={faceId} onToggle={() => setFaceId(!faceId)} />
          </View>

          <View className="flex-row items-center justify-between p-2">
            <View className="flex-1 mr-3">
              <Text className="text-sm font-semibold text-brand-dark">Two-Factor SMS Verification</Text>
              <Text className="text-xs text-brand-muted">Require 6-digit code on new device sign-ins</Text>
            </View>
            <ToggleSwitch checked={mfa} onToggle={() => setMfa(!mfa)} />
          </View>
        </Card>

        <Card className="p-4">
          <Text className="text-sm font-bold text-brand-dark mb-1">Password</Text>
          <Text className="text-xs text-brand-muted mb-3">Last changed 30 days ago</Text>
          <Button
            label="Change Password"
            variant="secondary"
            size="sm"
            onPress={() => navigation.navigate('01-07-ForgotPassword')}
          />
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default AccountSecurityScreen;
