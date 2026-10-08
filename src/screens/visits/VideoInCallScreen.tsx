import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { MicIcon, PhoneOffIcon, VideoIcon, ShieldIcon } from '../../components/Icons';

export const VideoInCallScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);

  return (
    <ScreenWrapper scrollable={false} bg="bg-brand-dark" screenCode="04-04" screenTitle="Video In Call">
      <View className="flex-1 justify-between p-4">
        {/* Top Floating Overlay */}
        <View className="flex-row items-center justify-between bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full">
          <View className="flex-row items-center">
            <View className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-2" />
            <Text className="text-white text-xs font-bold">Dr. Sarah Lin, MD</Text>
            <Text className="text-slate-400 text-xs ml-2">12:45</Text>
          </View>
          <View className="flex-row items-center bg-white/10 px-2 py-0.5 rounded-full">
            <ShieldIcon size={12} color="#DCFCE7" />
            <Text className="text-emerald-200 text-[10px] ml-1">Encrypted</Text>
          </View>
        </View>

        {/* Doctor Video Center Feed */}
        <View className="flex-1 items-center justify-center my-6">
          <View className="w-36 h-36 rounded-full bg-emerald-700/60 items-center justify-center border-4 border-emerald-500/30">
            <Text className="text-white text-4xl font-extrabold">SL</Text>
          </View>
          <Text className="text-white text-lg font-bold mt-4">Dr. Sarah Lin, MD</Text>
          <Text className="text-emerald-300 text-xs">Speaking...</Text>

          {/* Picture-in-picture User Self View */}
          <View className="absolute bottom-4 right-4 w-28 h-40 bg-slate-800 rounded-2xl border-2 border-slate-600 items-center justify-center shadow-2xl">
            <Text className="text-white text-xs font-bold">You</Text>
            <Text className="text-slate-400 text-[10px] mt-0.5">1080p HD</Text>
          </View>
        </View>

        {/* Bottom Floating Control Bar */}
        <View className="flex-row items-center justify-center gap-5 bg-black/50 p-4 rounded-3xl mb-4">
          {/* Mute Button */}
          <TouchableOpacity
            onPress={() => setMuted(!muted)}
            className={`w-14 h-14 rounded-full items-center justify-center ${
              muted ? 'bg-red-500' : 'bg-slate-700'
            }`}
          >
            <MicIcon size={22} color="#FFFFFF" />
          </TouchableOpacity>

          {/* Camera Button */}
          <TouchableOpacity
            onPress={() => setCameraOff(!cameraOff)}
            className={`w-14 h-14 rounded-full items-center justify-center ${
              cameraOff ? 'bg-red-500' : 'bg-slate-700'
            }`}
          >
            <VideoIcon size={22} color="#FFFFFF" />
          </TouchableOpacity>

          {/* End Call Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('04-05-VisitSummaryNotes')}
            className="w-16 h-14 rounded-full bg-brand-danger items-center justify-center"
          >
            <PhoneOffIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default VideoInCallScreen;
