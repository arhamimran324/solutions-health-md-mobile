import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button, Badge, Chip } from '../../components/UI';
import { VideoIcon, MessageIcon, ChevronRight } from '../../components/Icons';

export const VisitsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [tab, setTab] = useState<'upcoming' | 'async' | 'past'>('upcoming');

  return (
    <ScreenWrapper scrollable={true} screenCode="04-01" screenTitle="Visits">
      <ScreenHeader
        title="Visits"
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Filter Chips */}
        <View className="flex-row gap-2">
          <Chip label="Upcoming" selected={tab === 'upcoming'} onPress={() => setTab('upcoming')} />
          <Chip label="Async" selected={tab === 'async'} onPress={() => setTab('async')} />
          <Chip label="Past" selected={tab === 'past'} onPress={() => setTab('past')} />
        </View>

        {/* Upcoming Visit Card */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-base font-bold text-brand-dark">Upcoming Live Visit</Text>
            <Badge label="In 2 days" variant="blue" />
          </View>
          <View className="flex-row items-center my-2">
            <View className="w-12 h-12 rounded-full bg-emerald-100 items-center justify-center mr-3">
              <Text className="text-sm font-bold text-brand-green">SL</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-brand-dark">Dr. Sarah Lin, MD</Text>
              <Text className="text-xs text-brand-muted">Weight-loss follow-up · Video</Text>
              <Text className="text-xs font-semibold text-brand-dark mt-0.5">Mon, Oct 8 · 10:30 AM</Text>
            </View>
          </View>
          <View className="flex-row gap-3 mt-2">
            <Button
              label="Join video"
              size="md"
              icon={<VideoIcon size={16} color="#FFFFFF" />}
              onPress={() => navigation.navigate('04-03-VideoPrejoinCheck')}
            />
            <Button
              label="Reschedule"
              variant="secondary"
              size="md"
              onPress={() => navigation.navigate('04-02-ScheduleVideoVisit')}
            />
          </View>
        </Card>

        {/* Message-based Visits Card */}
        <Card className="p-4">
          <Text className="text-base font-bold text-brand-dark mb-2">Message-based visits</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('04-08-AsyncMoreInfoNeeded')}
            className="flex-row items-center py-2.5 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-blue-50 items-center justify-center mr-3">
              <MessageIcon size={18} color="#0F6396" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-brand-dark">Refill review</Text>
              <Text className="text-xs text-brand-muted">Submitted Oct 1</Text>
            </View>
            <Badge label="Info needed" variant="amber" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('04-07-AsyncVisitStatus')}
            className="flex-row items-center py-2.5"
          >
            <View className="w-9 h-9 rounded-xl bg-emerald-50 items-center justify-center mr-3">
              <MessageIcon size={18} color="#4B9B44" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-brand-dark">Initial consultation</Text>
              <Text className="text-xs text-brand-muted">Sep 2</Text>
            </View>
            <Badge label="Approved" variant="green" />
          </TouchableOpacity>
        </Card>

        {/* Start a new visit shortcuts */}
        <Text className="text-base font-bold text-brand-dark">Start a new visit</Text>
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={() => navigation.navigate('04-02-ScheduleVideoVisit')}
            className="w-[48%] bg-white rounded-2xl border border-brand-border p-4 shadow-xs"
          >
            <View className="w-10 h-10 rounded-xl bg-emerald-50 items-center justify-center mb-2">
              <VideoIcon size={20} color="#4B9B44" />
            </View>
            <Text className="text-sm font-bold text-brand-dark">Video visit</Text>
            <Text className="text-xs text-brand-muted mt-0.5">Schedule a time</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('04-06-StartAsyncVisit')}
            className="w-[48%] bg-white rounded-2xl border border-brand-border p-4 shadow-xs"
          >
            <View className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center mb-2">
              <MessageIcon size={20} color="#0F6396" />
            </View>
            <Text className="text-sm font-bold text-brand-dark">Message visit</Text>
            <Text className="text-xs text-brand-muted mt-0.5">Reply in ~24 hrs</Text>
          </TouchableOpacity>
        </View>

        {/* Past visits */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-base font-bold text-brand-dark">Past visits</Text>
            <Text className="text-xs font-semibold text-brand-green">All</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('04-05-VisitSummaryNotes')}
            className="flex-row items-center py-2.5 border-b border-slate-100"
          >
            <View className="w-8 h-8 rounded-full bg-emerald-100 items-center justify-center mr-3">
              <Text className="text-xs font-bold text-brand-green">SL</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Video follow-up</Text>
              <Text className="text-xs text-brand-muted">Sep 8 · Notes available</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('04-09-RateProviderPharmacy')}
            className="flex-row items-center py-2.5"
          >
            <View className="w-8 h-8 rounded-full bg-emerald-100 items-center justify-center mr-3">
              <Text className="text-xs font-bold text-brand-green">SL</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Rate Doctor & Pharmacy</Text>
              <Text className="text-xs text-brand-muted">Provide feedback</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default VisitsScreen;
