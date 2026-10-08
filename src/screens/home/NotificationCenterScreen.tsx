import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Chip, Badge } from '../../components/UI';
import { BellIcon, TruckIcon, VideoIcon, CreditCardIcon, AlertCircleIcon } from '../../components/Icons';

export const NotificationCenterScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filter, setFilter] = useState<'all' | 'clinical' | 'orders' | 'billing'>('all');

  const notifications = [
    {
      id: '1',
      category: 'clinical',
      title: 'Provider needs photo for refill',
      desc: 'Dr. Sarah Lin requested a current weight photo before renewing dosage.',
      time: '15m ago',
      unread: true,
      icon: <AlertCircleIcon size={18} color="#DC2626" />,
      bg: 'bg-red-50',
    },
    {
      id: '2',
      category: 'orders',
      title: 'Medication Shipped: UPS 1Z84A9',
      desc: 'Your 30-day Semaglutide supply is en route and scheduled for Oct 5 delivery.',
      time: '2h ago',
      unread: true,
      icon: <TruckIcon size={18} color="#16A34A" />,
      bg: 'bg-emerald-50',
    },
    {
      id: '3',
      category: 'clinical',
      title: 'Upcoming Video Consultation',
      desc: 'Your routine check-in with Dr. Sarah Lin is scheduled for Mon, Oct 8 at 10:30 AM.',
      time: '1d ago',
      unread: false,
      icon: <VideoIcon size={18} color="#0F6396" />,
      bg: 'bg-blue-50',
    },
    {
      id: '4',
      category: 'billing',
      title: 'Monthly Subscription Renewed',
      desc: 'Invoice #8492 for $199.00 processed successfully. Receipt available in profile.',
      time: '3d ago',
      unread: false,
      icon: <CreditCardIcon size={18} color="#43474E" />,
      bg: 'bg-slate-100',
    },
  ];

  const filtered = notifications.filter(
    (n) => filter === 'all' || n.category === filter
  );

  return (
    <ScreenWrapper scrollable={true} screenCode="03-05" screenTitle="Notification Center">
      <ScreenHeader
        title="Notifications"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Filter Pills */}
        <View className="flex-row flex-wrap">
          <Chip label="All" selected={filter === 'all'} onPress={() => setFilter('all')} />
          <Chip label="Clinical" selected={filter === 'clinical'} onPress={() => setFilter('clinical')} />
          <Chip label="Orders" selected={filter === 'orders'} onPress={() => setFilter('orders')} />
          <Chip label="Billing" selected={filter === 'billing'} onPress={() => setFilter('billing')} />
        </View>

        {filtered.map((item) => (
          <Card
            key={item.id}
            className={`p-4 ${item.unread ? 'border-brand-green/40 bg-emerald-50/20' : ''}`}
          >
            <View className="flex-row items-center mb-1.5">
              <View className={`w-8 h-8 rounded-lg ${item.bg} items-center justify-center mr-2.5`}>
                {item.icon}
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-brand-dark">{item.title}</Text>
                <Text className="text-[11px] text-brand-muted">{item.time}</Text>
              </View>
              {item.unread ? (
                <View className="w-2.5 h-2.5 rounded-full bg-brand-green" />
              ) : null}
            </View>
            <Text className="text-xs text-brand-dark leading-relaxed pl-10">
              {item.desc}
            </Text>
          </Card>
        ))}
      </View>
    </ScreenWrapper>
  );
};

export default NotificationCenterScreen;
