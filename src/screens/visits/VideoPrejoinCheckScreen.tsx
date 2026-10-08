import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, Badge } from '../../components/UI';
import { VideoIcon, CheckCircleIcon, MicIcon } from '../../components/Icons';

export const VideoPrejoinCheckScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  return (
    <ScreenWrapper scrollable={true} screenCode="04-03" screenTitle="Video Prejoin Check">
      <ScreenHeader
        title="Waiting Room"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4 justify-between flex-1">
        <View className="gap-4">
          {/* Video Preview Box */}
          <View className="h-64 rounded-3xl bg-brand-navy items-center justify-center relative overflow-hidden border border-slate-700">
            <View className="w-20 h-20 rounded-full bg-brand-green/30 items-center justify-center mb-3">
              <Text className="text-white text-2xl font-bold">UA</Text>
            </View>
            <Text className="text-white text-sm font-semibold">Camera Ready</Text>
            <Text className="text-emerald-300 text-xs mt-1">High Definition 1080p</Text>

            {/* In-view micro indicators */}
            <View className="absolute bottom-3 left-3 bg-black/60 px-2.5 py-1 rounded-full flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5" />
              <Text className="text-white text-[11px]">Microphone working</Text>
            </View>
          </View>

          {/* Doctor Status Card */}
          <Card className="p-4 border-brand-green/30 bg-[#F6FBF5]">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-sm font-bold text-brand-dark">Dr. Sarah Lin, MD</Text>
              <Badge label="IN ROOM" variant="green" />
            </View>
            <Text className="text-xs text-brand-muted">
              Your provider is currently online and ready to begin your consultation.
            </Text>
          </Card>

          {/* Diagnostic Checks */}
          <Card className="p-4">
            <Text className="text-sm font-bold text-brand-dark mb-2">Device Checks</Text>
            <View className="flex-row items-center mb-2">
              <CheckCircleIcon size={16} color="#4B9B44" />
              <Text className="text-xs text-brand-dark ml-2">Camera permission granted</Text>
            </View>
            <View className="flex-row items-center mb-2">
              <CheckCircleIcon size={16} color="#4B9B44" />
              <Text className="text-xs text-brand-dark ml-2">Microphone input detected</Text>
            </View>
            <View className="flex-row items-center">
              <CheckCircleIcon size={16} color="#4B9B44" />
              <Text className="text-xs text-brand-dark ml-2">Fast WiFi connection (52 Mbps)</Text>
            </View>
          </Card>
        </View>

        <View className="pt-2">
          <Button
            label="Enter Video Visit"
            size="lg"
            fullWidth
            icon={<VideoIcon size={18} color="#FFFFFF" />}
            onPress={() => navigation.navigate('04-04-VideoInCall')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default VideoPrejoinCheckScreen;
