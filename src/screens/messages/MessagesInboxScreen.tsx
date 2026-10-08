import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Chip } from '../../components/UI';
import { SearchIcon } from '../../components/Icons';

export const MessagesInboxScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filter, setFilter] = useState<'all' | 'clinical' | 'orders' | 'billing'>('all');
  const [search, setSearch] = useState('');

  const conversations = [
    {
      id: 'dr-lin',
      name: 'Dr. Sarah Lin',
      role: 'Clinical Provider',
      tag: 'Clinical',
      preview: 'Please upload a current photo of your scale...',
      time: '2h',
      unread: true,
      initials: 'SL',
      bg: 'bg-emerald-100',
      color: '#4B9B44',
    },
    {
      id: 'care-team',
      name: 'Care Coordination Team',
      role: 'Order #SH-10482',
      tag: 'Orders',
      preview: 'Your medication package has been packed with cold-chain gel...',
      time: '1d',
      unread: true,
      initials: 'CT',
      bg: 'bg-blue-100',
      color: '#0F6396',
    },
    {
      id: 'pharmacy',
      name: 'Partner Compounding Rx',
      role: 'Prescription Dispense',
      tag: 'Orders',
      preview: 'Prescription received and verified by our pharmacist...',
      time: '2d',
      unread: false,
      initials: 'PP',
      bg: 'bg-amber-100',
      color: '#D97706',
    },
    {
      id: 'billing',
      name: 'Membership & Billing Support',
      role: 'Subscription',
      tag: 'Billing',
      preview: 'Receipt for Month 2 subscription is available in your profile...',
      time: '2d',
      unread: false,
      initials: 'BS',
      bg: 'bg-red-100',
      color: '#DC2626',
    },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="06-01" screenTitle="Messages Inbox">
      <ScreenHeader
        title="Messages"
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Search */}
        <View className="flex-row items-center bg-white rounded-full px-4 h-11 border border-brand-border">
          <SearchIcon size={18} color="#94A3B8" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search messages"
            placeholderTextColor="#94A3B8"
            className="flex-1 ml-2 text-sm text-brand-dark"
          />
        </View>

        {/* Filter chips */}
        <View className="flex-row flex-wrap">
          <Chip label="All" selected={filter === 'all'} onPress={() => setFilter('all')} />
          <Chip label="Clinical" selected={filter === 'clinical'} onPress={() => setFilter('clinical')} />
          <Chip label="Orders" selected={filter === 'orders'} onPress={() => setFilter('orders')} />
          <Chip label="Billing" selected={filter === 'billing'} onPress={() => setFilter('billing')} />
        </View>

        {/* Conversations List */}
        <Card className="p-2">
          {conversations.map((c, i) => (
            <TouchableOpacity
              key={c.id}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('06-02-SecureChat', { providerName: c.name })}
              className={`flex-row items-center p-3 ${
                i < conversations.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              <View className={`w-11 h-11 rounded-full ${c.bg} items-center justify-center mr-3`}>
                <Text className="text-xs font-bold" style={{ color: c.color }}>
                  {c.initials}
                </Text>
              </View>
              <View className="flex-1 mr-2">
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm font-bold text-brand-dark">{c.name}</Text>
                  <Text className="text-[11px] text-brand-muted">{c.time}</Text>
                </View>
                <Text className="text-[11px] font-semibold text-brand-green mt-0.5">{c.tag}</Text>
                <Text className="text-xs text-brand-dark mt-0.5" numberOfLines={1}>
                  {c.preview}
                </Text>
              </View>
              {c.unread ? (
                <View className="w-2.5 h-2.5 rounded-full bg-brand-green" />
              ) : null}
            </TouchableOpacity>
          ))}
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default MessagesInboxScreen;
