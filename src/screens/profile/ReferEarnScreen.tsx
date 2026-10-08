import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button } from '../../components/UI';

export const ReferEarnScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const referralCode = 'UMAIR50';

  return (
    <ScreenWrapper scrollable={true} screenCode="07-12" screenTitle="Refer & Earn">
      <ScreenHeader
        title="Refer & Earn"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Hero Card */}
        <Card className="bg-brand-green border-0 p-5 items-center text-center">
          <Text className="text-4xl mb-2">🎁</Text>
          <Text className="text-white text-xl font-bold text-center">
            Give $50, Get $50
          </Text>
          <Text className="text-emerald-100 text-xs text-center mt-1 leading-relaxed px-2">
            Share Solutions Health MD with friends or family. They save $50 on their first month, and you receive a $50 credit on your next renewal.
          </Text>
        </Card>

        {/* Code Box */}
        <Card className="p-4 items-center">
          <Text className="text-xs text-brand-muted uppercase font-bold">Your Unique Code</Text>
          <View className="bg-slate-100 border border-dashed border-slate-300 rounded-xl px-6 py-3 my-2">
            <Text className="text-2xl font-black text-brand-dark tracking-widest">{referralCode}</Text>
          </View>
          <Text className="text-[11px] text-brand-green font-semibold">Tap to copy link</Text>
        </Card>

        <Card className="p-4">
          <Text className="text-sm font-bold text-brand-dark mb-1">Your Referral Stats</Text>
          <View className="flex-row justify-between py-2 border-b border-slate-100">
            <Text className="text-xs text-brand-muted">Friends Joined</Text>
            <Text className="text-xs font-bold text-brand-dark">3</Text>
          </View>
          <View className="flex-row justify-between pt-2">
            <Text className="text-xs text-brand-muted">Total Credits Earned</Text>
            <Text className="text-xs font-bold text-brand-green">$150.00</Text>
          </View>
        </Card>

        <View className="pt-2">
          <Button
            label="Share Referral Link"
            size="lg"
            fullWidth
            onPress={() => {}}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ReferEarnScreen;
