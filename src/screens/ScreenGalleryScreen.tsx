import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ALL_SCREENS_METADATA, ScreenMeta } from '../navigation/types';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ScreenHeader, Chip } from '../components/UI';
import { SearchIcon, ChevronRight } from '../components/Icons';

export const ScreenGalleryScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [query, setQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  const sections = [
    { num: 1, name: '1. Auth' },
    { num: 2, name: '2. Care' },
    { num: 3, name: '3. Home' },
    { num: 4, name: '4. Visits' },
    { num: 5, name: '5. Meds' },
    { num: 6, name: '6. Messages' },
    { num: 7, name: '7. Profile' },
  ];

  const filtered = ALL_SCREENS_METADATA.filter((s) => {
    const matchesQuery =
      query === '' ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.code.includes(query) ||
      s.category.toLowerCase().includes(query.toLowerCase());
    const matchesSection = selectedSection === null || s.section === selectedSection;
    return matchesQuery && matchesSection;
  });

  return (
    <ScreenWrapper scrollable={false} bg="bg-white">
      <ScreenHeader
        title="App Screen Gallery"
        subtitle="55 Screens · Complete iOS & Android patient app"
        bgWhite
      />

      <View className="p-4 flex-1">
        {/* Search Input */}
        <View className="flex-row items-center bg-slate-100 rounded-xl px-3.5 h-11 mb-3">
          <SearchIcon size={18} color="#94A3B8" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search by name, number (e.g. 02-01), or category"
            placeholderTextColor="#94A3B8"
            className="flex-1 ml-2 text-sm text-brand-dark"
          />
        </View>

        {/* Section Filters */}
        <View className="flex-row flex-wrap gap-1.5 mb-3">
          <TouchableOpacity
            onPress={() => setSelectedSection(null)}
            className={`px-3 py-1.5 rounded-full ${
              selectedSection === null ? 'bg-brand-green' : 'bg-slate-100'
            }`}
          >
            <Text
              className={`text-xs font-semibold ${
                selectedSection === null ? 'text-white' : 'text-slate-600'
              }`}
            >
              All (55)
            </Text>
          </TouchableOpacity>
          {sections.map((s) => (
            <TouchableOpacity
              key={s.num}
              onPress={() => setSelectedSection(selectedSection === s.num ? null : s.num)}
              className={`px-3 py-1.5 rounded-full ${
                selectedSection === s.num ? 'bg-brand-green' : 'bg-slate-100'
              }`}
            >
              <Text
                className={`text-xs font-semibold ${
                  selectedSection === s.num ? 'text-white' : 'text-slate-600'
                }`}
              >
                {s.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Screens Grid/List */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.code}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                // @ts-ignore
                navigation.navigate(item.id);
              }}
              className="flex-row items-center justify-between p-3.5 bg-white border border-brand-border rounded-xl mb-2 shadow-xs"
            >
              <View className="flex-row items-center flex-1 pr-2">
                <View className="bg-emerald-50 px-2.5 py-1 rounded-md mr-3">
                  <Text className="text-xs font-bold text-brand-green">{item.code}</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-bold text-brand-dark">{item.name}</Text>
                  <Text className="text-[11px] text-brand-muted">{item.category}</Text>
                </View>
              </View>
              <ChevronRight size={18} color="#94A3B8" />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};
