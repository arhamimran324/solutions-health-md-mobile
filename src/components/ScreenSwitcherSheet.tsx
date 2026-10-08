import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ALL_SCREENS_METADATA, RootStackParamList, ScreenMeta } from '../navigation/types';
import { CloseIcon, SearchIcon, ChevronRight } from './Icons';

export const ScreenSwitcherSheet: React.FC<{
  visible: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [query, setQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  const sections = [
    { num: 1, name: '1. Auth' },
    { num: 2, name: '2. Care' },
    { num: 3, name: '3. Home' },
    { num: 4, name: '4. Visits' },
    { num: 5, name: '5. Meds' },
    { num: 6, name: '6. Chat' },
    { num: 7, name: '7. Profile' },
  ];

  const filteredScreens = ALL_SCREENS_METADATA.filter((screen) => {
    const matchesQuery =
      query === '' ||
      screen.name.toLowerCase().includes(query.toLowerCase()) ||
      screen.code.includes(query) ||
      screen.category.toLowerCase().includes(query.toLowerCase());
    const matchesSection = selectedSection === null || screen.section === selectedSection;
    return matchesQuery && matchesSection;
  });

  const handleSelectScreen = (screen: ScreenMeta) => {
    onClose();
    // @ts-ignore
    navigation.navigate(screen.id);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/60 justify-end">
        <View
          className="bg-white rounded-t-3xl h-[85%] p-4 flex-col"
          style={{ paddingBottom: Math.max(insets.bottom, 24) }}
        >
          {/* Header */}
          <View className="w-10 h-1.5 bg-slate-300 rounded-full self-center mb-3" />
          <View className="flex-row items-center justify-between mb-3 px-1">
            <View>
              <Text className="text-lg font-bold text-brand-dark">Screen Directory</Text>
              <Text className="text-xs text-brand-muted">55 Screens · Tap any screen to preview</Text>
            </View>
            <TouchableOpacity
              onPress={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 items-center justify-center"
            >
              <CloseIcon size={18} color="#04152A" />
            </TouchableOpacity>
          </View>

          {/* Search Box */}
          <View className="flex-row items-center bg-slate-100 rounded-xl px-3 h-11 mb-3">
            <SearchIcon size={18} color="#94A3B8" />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search 55 screens..."
              placeholderTextColor="#94A3B8"
              className="flex-1 ml-2 text-sm text-brand-dark"
            />
          </View>

          {/* Section Filter Pills */}
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

          {/* Screens List */}
          <FlatList
            data={filteredScreens}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSelectScreen(item)}
                className="flex-row items-center justify-between p-3 border-b border-slate-100"
              >
                <View className="flex-row items-center flex-1 pr-2">
                  <View className="bg-emerald-50 px-2 py-1 rounded-md mr-3">
                    <Text className="text-xs font-bold text-brand-green">{item.code}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-brand-dark">{item.name}</Text>
                    <Text className="text-[11px] text-brand-muted">{item.category}</Text>
                  </View>
                </View>
                <ChevronRight size={18} color="#94A3B8" />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};
