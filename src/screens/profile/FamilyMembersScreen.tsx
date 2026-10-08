import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button, Badge } from '../../components/UI';
import { UserIcon, ChevronRight } from '../../components/Icons';

export const FamilyMembersScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const members = [
    { name: 'Umair Akram', role: 'Primary Account Holder', age: '35 yrs', badge: 'PRIMARY' },
    { name: 'Sarah Akram', role: 'Spouse · Dermatology Care', age: '33 yrs', badge: 'DEPENDENT' },
    { name: 'Zayn Akram', role: 'Child · Pediatric Wellness', age: '6 yrs', badge: 'MINOR' },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="07-10" screenTitle="Family Members">
      <ScreenHeader
        title="Family Members"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Text className="text-sm font-bold text-brand-dark">Linked Family Profiles</Text>

        {members.map((m, i) => (
          <Card key={i} className="flex-row items-center p-4">
            <View className="w-11 h-11 rounded-full bg-emerald-50 items-center justify-center mr-3">
              <UserIcon size={20} color="#4B9B44" />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center">
                <Text className="text-sm font-bold text-brand-dark mr-2">{m.name}</Text>
                <Badge label={m.badge} variant={m.badge === 'PRIMARY' ? 'green' : 'blue'} />
              </View>
              <Text className="text-xs text-brand-muted mt-0.5">{m.role} · {m.age}</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </Card>
        ))}

        <View className="pt-2">
          <Button
            label="+ Add Family Member"
            variant="secondary"
            size="md"
            fullWidth
            onPress={() => navigation.navigate('07-11-AddFamilyMember')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default FamilyMembersScreen;
