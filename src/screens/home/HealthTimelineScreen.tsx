import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Badge } from '../../components/UI';
import { CareIcon, VideoIcon, LabFlaskIcon, CheckCircleIcon } from '../../components/Icons';

export const HealthTimelineScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const events = [
    {
      date: 'Oct 3, 2026',
      title: 'Monthly Weight Check-in',
      desc: 'Logged 198 lbs (-12 lbs total). Dosage adjusted to 0.5mg.',
      icon: <CheckCircleIcon size={18} color="#4B9B44" />,
      bg: 'bg-emerald-50',
    },
    {
      date: 'Sep 25, 2026',
      title: 'Lab Results Reviewed',
      desc: 'A1C decreased from 6.1% to 5.7%. Kidney and liver panels normal.',
      icon: <LabFlaskIcon size={18} color="#0F6396" />,
      bg: 'bg-blue-50',
    },
    {
      date: 'Sep 10, 2026',
      title: 'Follow-Up Telehealth Visit',
      desc: '15-min video call with Dr. Sarah Lin. Patient reports reduced appetite.',
      icon: <VideoIcon size={18} color="#D97706" />,
      bg: 'bg-amber-50',
    },
    {
      date: 'Aug 20, 2026',
      title: 'Initial Rx Delivered',
      desc: 'Semaglutide 0.25mg starter kit delivered via cold-chain UPS.',
      icon: <CareIcon size={18} color="#4B9B44" />,
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="03-02" screenTitle="Health Timeline">
      <ScreenHeader
        title="Care Timeline"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-bold text-brand-dark">Clinical Milestones</Text>
          <Badge label="4 Records" variant="gray" />
        </View>

        {events.map((ev, i) => (
          <Card key={i} className="p-4">
            <View className="flex-row items-center mb-2">
              <View className={`w-8 h-8 rounded-lg ${ev.bg} items-center justify-center mr-2.5`}>
                {ev.icon}
              </View>
              <View className="flex-1">
                <Text className="text-xs text-brand-muted">{ev.date}</Text>
                <Text className="text-sm font-bold text-brand-dark">{ev.title}</Text>
              </View>
            </View>
            <Text className="text-xs text-brand-dark leading-relaxed pl-10">
              {ev.desc}
            </Text>
          </Card>
        ))}
      </View>
    </ScreenWrapper>
  );
};

export default HealthTimelineScreen;
