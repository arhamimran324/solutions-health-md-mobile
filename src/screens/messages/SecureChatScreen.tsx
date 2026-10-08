import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader } from '../../components/UI';
import { ShieldIcon, VideoIcon, CameraIcon, SendIcon } from '../../components/Icons';

export const SecureChatScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [inputText, setInputText] = useState('');

  const messages = [
    {
      id: '1',
      sender: 'doctor',
      text: 'Good morning Umair! I reviewed your 4-week check-in data. 12 lbs down is a wonderful start.',
      time: '9:30 AM',
    },
    {
      id: '2',
      sender: 'doctor',
      text: 'How has your energy level been, and did you experience any nausea after your last injection?',
      time: '9:31 AM',
    },
    {
      id: '3',
      sender: 'user',
      text: 'Hi Dr. Lin! Energy has been great. Mild nausea on day 2 after the shot, but taking it with food helped completely.',
      time: '10:15 AM',
    },
    {
      id: '4',
      sender: 'doctor',
      text: 'Glad to hear. Let’s proceed to titrate your dose to 0.5mg as planned. I have transmitted the renewal to our compounding pharmacy partner.',
      time: '10:45 AM',
    },
  ];

  return (
    <ScreenWrapper scrollable={false} screenCode="06-02" screenTitle="Secure Chat">
      <ScreenHeader
        title="Dr. Sarah Lin, MD"
        subtitle="Online · Internal Medicine"
        onBack={() => navigation.goBack()}
        bgWhite
        rightAction={
          <TouchableOpacity
            onPress={() => navigation.navigate('04-03-VideoPrejoinCheck')}
            className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 items-center justify-center"
          >
            <VideoIcon size={18} color="#4B9B44" />
          </TouchableOpacity>
        }
      />

      {/* HIPAA Banner */}
      <View className="bg-emerald-50/70 py-1.5 px-4 flex-row items-center justify-center border-b border-emerald-100">
        <ShieldIcon size={12} color="#4B9B44" />
        <Text className="text-[11px] text-brand-dark ml-1.5">
          End-to-end encrypted · HIPAA compliant medical messaging
        </Text>
      </View>

      {/* Messages Feed */}
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        {messages.map((m) => {
          const isUser = m.sender === 'user';
          return (
            <View
              key={m.id}
              className={`mb-3 max-w-[80%] ${isUser ? 'self-end' : 'self-start'}`}
            >
              <View
                className={`p-3.5 rounded-2xl ${
                  isUser
                    ? 'bg-brand-green rounded-tr-xs'
                    : 'bg-white border border-brand-border rounded-tl-xs'
                }`}
              >
                <Text className={`text-sm leading-relaxed ${isUser ? 'text-white' : 'text-brand-dark'}`}>
                  {m.text}
                </Text>
              </View>
              <Text
                className={`text-[10px] text-brand-muted mt-1 ${
                  isUser ? 'text-right' : 'text-left'
                }`}
              >
                {m.time}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      {/* Bottom Message Input Bar */}
      <View className="p-3 bg-white border-t border-brand-border flex-row items-center">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center mr-2">
          <CameraIcon size={20} color="#64748B" />
        </TouchableOpacity>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Message Dr. Lin..."
          placeholderTextColor="#94A3B8"
          className="flex-1 bg-slate-100 rounded-full px-4 h-11 text-sm text-brand-dark"
        />
        <TouchableOpacity
          onPress={() => setInputText('')}
          className="w-10 h-10 rounded-full bg-brand-green items-center justify-center ml-2"
        >
          <SendIcon size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default SecureChatScreen;
