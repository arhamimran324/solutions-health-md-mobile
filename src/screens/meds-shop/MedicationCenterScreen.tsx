import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button, Badge, Chip, ProgressBar } from '../../components/UI';
import { CareIcon, RefreshIcon, VideoIcon, CheckCircleIcon } from '../../components/Icons';

export const MedicationCenterScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [symptom, setSymptom] = useState('Nausea');

  const symptoms = ['Nausea', 'Constipation', 'Fatigue', 'Injection site', 'None'];

  return (
    <ScreenWrapper scrollable={true} screenCode="05-01" screenTitle="Medication Center">
      <ScreenHeader
        title="Medication Center"
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Active Rx Card */}
        <Card className="p-4">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center flex-1 mr-2">
              <View className="w-12 h-12 rounded-xl bg-emerald-50 items-center justify-center mr-3">
                <CareIcon size={24} color="#4B9B44" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-bold text-brand-dark">Semaglutide + B12</Text>
                <Text className="text-xs text-brand-muted">0.5 mg · once weekly subcutaneous</Text>
              </View>
            </View>
            <Badge label="ACTIVE" variant="green" />
          </View>

          {/* 4 Stat Tiles */}
          <View className="flex-row flex-wrap justify-between my-2">
            <View className="w-[48%] bg-slate-50 p-2.5 rounded-xl mb-2">
              <Text className="text-[11px] text-brand-muted">Next dose</Text>
              <Text className="text-sm font-bold text-brand-dark mt-0.5">Sun, Oct 7</Text>
            </View>
            <View className="w-[48%] bg-slate-50 p-2.5 rounded-xl mb-2">
              <Text className="text-[11px] text-brand-muted">Supply left</Text>
              <Text className="text-sm font-bold text-brand-dark mt-0.5">2 doses</Text>
              <View className="mt-1.5">
                <ProgressBar progress={0.5} height={5} color="#F9AC2C" />
              </View>
            </View>
            <View className="w-[48%] bg-slate-50 p-2.5 rounded-xl">
              <Text className="text-[11px] text-brand-muted">Refill eligible</Text>
              <Text className="text-sm font-bold text-amber-600 mt-0.5">Oct 20</Text>
            </View>
            <View className="w-[48%] bg-slate-50 p-2.5 rounded-xl">
              <Text className="text-[11px] text-brand-muted">Dispensing</Text>
              <Text className="text-sm font-bold text-brand-dark mt-0.5">Partner 503A</Text>
            </View>
          </View>

          <View className="flex-row gap-2.5 mt-2">
            <Button
              label="Request refill"
              size="md"
              icon={<RefreshIcon size={16} color="#FFFFFF" />}
              onPress={() => navigation.navigate('05-02-RefillRequest')}
            />
            <Button
              label="How to inject"
              variant="secondary"
              size="md"
              icon={<VideoIcon size={16} color="#4B9B44" />}
            />
          </View>
        </Card>

        {/* This Week Dose Tracker */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-brand-dark">Dose Schedule</Text>
            <Text className="text-xs font-bold text-brand-green">Log dose</Text>
          </View>

          <View className="flex-row items-center py-2 border-b border-slate-100">
            <CheckCircleIcon size={18} color="#4B9B44" />
            <View className="flex-1 ml-2.5">
              <Text className="text-xs font-bold text-brand-dark">Week 4 · 0.5 mg</Text>
              <Text className="text-[11px] text-brand-muted">Sep 30</Text>
            </View>
            <Badge label="Taken" variant="green" />
          </View>

          <View className="flex-row items-center py-2">
            <View className="w-4.5 h-4.5 rounded-full border-2 border-slate-300" />
            <View className="flex-1 ml-2.5">
              <Text className="text-xs font-bold text-brand-dark">Week 5 · 0.5 mg</Text>
              <Text className="text-[11px] text-brand-muted">Oct 7</Text>
            </View>
            <Badge label="Upcoming" variant="blue" />
          </View>
        </Card>

        {/* How Are You Feeling? */}
        <Card className="p-4">
          <Text className="text-base font-bold text-brand-dark mb-2">How are you feeling?</Text>
          <View className="flex-row flex-wrap mb-2">
            {symptoms.map((s) => (
              <Chip
                key={s}
                label={s}
                selected={symptom === s}
                onPress={() => setSymptom(s)}
              />
            ))}
          </View>
          <Button
            label="Send symptoms update to provider"
            variant="secondary"
            size="sm"
            onPress={() => navigation.navigate('06-02-SecureChat')}
          />
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default MedicationCenterScreen;
