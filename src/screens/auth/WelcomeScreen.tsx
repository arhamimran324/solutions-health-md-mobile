import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Logo } from '../../components/Logo';
import { Button, Card } from '../../components/UI';
import { ShieldIcon, LockIcon, VideoIcon, TruckIcon } from '../../components/Icons';

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} bg="bg-white" screenCode="01-03" screenTitle="Welcome">
      <View className="p-6 justify-between flex-1">
        <View className="items-center pt-8">
          <Logo width={159} height={57} />

          <Text className="text-2xl font-bold text-brand-dark text-center mt-6">
            Welcome to{'\n'}Solutions Health MD
          </Text>
          <Text className="text-sm text-brand-muted text-center mt-2 px-4">
            Weight loss, hormones, skin, mental health and everyday care — from home.
          </Text>

          {/* 4 Feature Value Tiles */}
          <View className="flex-row flex-wrap justify-between mt-8 w-full">
            <Card className="w-[48%] items-center mb-3 py-4">
              <View className="w-10 h-10 rounded-xl bg-emerald-50 items-center justify-center mb-2">
                <ShieldIcon size={20} color="#4B9B44" />
              </View>
              <Text className="text-xs font-bold text-brand-dark text-center">
                Licensed in 50 states
              </Text>
            </Card>

            <Card className="w-[48%] items-center mb-3 py-4">
              <View className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center mb-2">
                <LockIcon size={20} color="#0F6396" />
              </View>
              <Text className="text-xs font-bold text-brand-dark text-center">
                HIPAA secure
              </Text>
            </Card>

            <Card className="w-[48%] items-center mb-3 py-4">
              <View className="w-10 h-10 rounded-xl bg-amber-50 items-center justify-center mb-2">
                <VideoIcon size={20} color="#D97706" />
              </View>
              <Text className="text-xs font-bold text-brand-dark text-center">
                Video or message
              </Text>
            </Card>

            <Card className="w-[48%] items-center mb-3 py-4">
              <View className="w-10 h-10 rounded-xl bg-emerald-50 items-center justify-center mb-2">
                <TruckIcon size={20} color="#4B9B44" />
              </View>
              <Text className="text-xs font-bold text-brand-dark text-center">
                Home delivery
              </Text>
            </Card>
          </View>
        </View>

        {/* Buttons */}
        <View className="gap-3 mt-8">
          <Button
            label="Get started"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('01-04-SignUp')}
          />
          <Button
            label="I already have an account"
            variant="secondary"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('01-05-LogIn')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
