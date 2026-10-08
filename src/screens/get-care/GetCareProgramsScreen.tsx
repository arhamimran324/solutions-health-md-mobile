import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card } from '../../components/UI';
import { SearchIcon, ChevronRight, CareIcon, ShieldIcon, TargetIcon, UserIcon, HeartIcon } from '../../components/Icons';

export const GetCareProgramsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');

  const programs = [
    { id: 'weight-loss', name: 'Weight Loss', tag: 'GLP-1 · from $199/mo', bg: 'bg-[#ECF6EA]', color: '#4B9B44' },
    { id: 'mens-health', name: "Men's Health", tag: 'TRT · from $179/mo', bg: 'bg-[#EAF3FA]', color: '#0F6396' },
    { id: 'womens-health', name: "Women's Health", tag: 'HRT · from $179/mo', bg: 'bg-[#FEE2E2]', color: '#DC2626' },
    { id: 'peptides', name: 'Peptides', tag: 'Longevity · from $199/mo', bg: 'bg-[#ECF6EA]', color: '#4B9B44' },
    { id: 'dermatology', name: 'Dermatology', tag: 'Skin & hair · $79', bg: 'bg-[#EAF3FA]', color: '#0F6396' },
    { id: 'mental-health', name: 'Mental Health', tag: 'Faith-based · $99', bg: 'bg-[#FEF3C7]', color: '#D97706' },
    { id: 'urgent-care', name: 'Urgent Care', tag: 'Same day · $49/visit', bg: 'bg-[#FEE2E2]', color: '#DC2626' },
    { id: 'primary-care', name: 'Primary Care', tag: 'Membership · $89/mo', bg: 'bg-[#F1F6FA]', color: '#43474E' },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="02-01" screenTitle="Get Care Programs">
      <ScreenHeader title="Get Care" bgWhite />

      <View className="p-4 gap-4">
        {/* Search Input */}
        <View className="flex-row items-center bg-white rounded-full px-4 h-12 border border-brand-border">
          <SearchIcon size={18} color="#94A3B8" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search a symptom or treatment"
            placeholderTextColor="#94A3B8"
            className="flex-1 ml-2 text-sm text-brand-dark"
          />
        </View>

        {/* Quiz Banner Card */}
        <Card
          className="bg-brand-dark border-0 p-4"
          onPress={() => navigation.navigate('02-03-AssessmentBranching')}
        >
          <View className="flex-row items-center">
            <View className="w-11 h-11 rounded-xl bg-amber-100 items-center justify-center mr-3">
              <TargetIcon size={22} color="#D97706" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-sm">Not sure where to start?</Text>
              <Text className="text-slate-300 text-xs mt-0.5">Answer 3 questions, we'll suggest a program</Text>
            </View>
            <ChevronRight size={18} color="#FFFFFF" />
          </View>
        </Card>

        {/* Section Title */}
        <Text className="text-base font-bold text-brand-dark mt-1">Care Programs</Text>

        {/* 2-column Grid of Programs */}
        <View className="flex-row flex-wrap justify-between">
          {programs.map((p) => (
            <TouchableOpacity
              key={p.id}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('02-02-ProgramDetail', { programId: p.id })}
              className="w-[48%] bg-white rounded-2xl border border-brand-border p-4 mb-3 shadow-xs"
            >
              <View
                className={`w-11 h-11 rounded-xl ${p.bg} items-center justify-center mb-3`}
              >
                <CareIcon size={22} color={p.color} />
              </View>
              <Text className="text-sm font-bold text-brand-dark">{p.name}</Text>
              <Text className="text-xs text-brand-muted mt-1">{p.tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Prayer & Support Card */}
        <Card className="flex-row items-center">
          <View className="w-11 h-11 rounded-xl bg-emerald-50 items-center justify-center mr-3">
            <ShieldIcon size={22} color="#4B9B44" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-brand-dark">Prayer & Support</Text>
            <Text className="text-xs text-brand-muted mt-0.5">Always free · talk to our care team</Text>
          </View>
          <ChevronRight size={18} color="#94A3B8" />
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default GetCareProgramsScreen;
