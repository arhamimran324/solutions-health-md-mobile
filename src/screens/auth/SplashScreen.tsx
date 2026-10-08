import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { Logo } from '../../components/Logo';
import { ShieldIcon } from '../../components/Icons';
import { ScreenWrapper } from '../../components/ScreenWrapper';

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={false} bg="bg-brand-green" screenCode="01-01" screenTitle="Splash">
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={() => navigation.navigate('01-02-Onboarding')}
        className="flex-1 justify-between items-center py-12 px-6"
      >
        <View />

        {/* Central Brand Box */}
        <View className="items-center">
          <View className="bg-white rounded-3xl p-6 shadow-2xl items-center justify-center mb-6">
            <Logo width={160} height={58} />
          </View>
          <Text className="text-white text-2xl font-bold italic tracking-wide text-center">
            Healthcare Where You Are.
          </Text>
          <Text className="text-emerald-100 text-xs mt-3">
            Tap anywhere to proceed
          </Text>
        </View>

        {/* Bottom HIPAA Tag */}
        <View className="flex-row items-center bg-white/10 px-4 py-2 rounded-full border border-white/20">
          <ShieldIcon size={14} color="#DCFCE7" />
          <Text className="text-emerald-100 text-xs font-medium ml-2">
            Licensed providers · HIPAA secure
          </Text>
        </View>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default SplashScreen;
