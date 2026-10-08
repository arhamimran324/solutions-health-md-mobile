import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button } from '../../components/UI';
import { SearchIcon, ChevronRight, MessageIcon, PhoneIcon } from '../../components/Icons';

export const HelpCenterScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');

  const faqs = [
    { q: 'How long does medication delivery take?', a: 'Standard orders ship via cold-chain courier within 24-48 hours of physician approval.' },
    { q: 'Can I use my FSA or HSA card?', a: 'Yes! All physician consultations and compounded medications are 100% FSA/HSA eligible.' },
    { q: 'What if I miss an injection dose?', a: 'Take the missed dose as soon as you remember, unless it is within 2 days of your next scheduled dose.' },
    { q: 'How do I request a dosage titration?', a: 'Submit a refill request from the Meds tab or message your provider directly.' },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="07-15" screenTitle="Help Center">
      <ScreenHeader
        title="Help Center & FAQs"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Search Input */}
        <View className="flex-row items-center bg-white rounded-full px-4 h-12 border border-brand-border">
          <SearchIcon size={18} color="#94A3B8" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search FAQs & health topics"
            placeholderTextColor="#94A3B8"
            className="flex-1 ml-2 text-sm text-brand-dark"
          />
        </View>

        <Text className="text-sm font-bold text-brand-dark">Frequently Asked Questions</Text>

        {faqs.map((f, i) => (
          <Card key={i} className="p-4">
            <Text className="text-sm font-bold text-brand-dark mb-1">{f.q}</Text>
            <Text className="text-xs text-brand-muted leading-relaxed">{f.a}</Text>
          </Card>
        ))}

        {/* Contact Care Team */}
        <Card className="p-4 bg-emerald-50/70 border-emerald-200">
          <Text className="text-sm font-bold text-brand-dark mb-1">Still need assistance?</Text>
          <Text className="text-xs text-brand-muted mb-3">
            Our US-based patient care team is available 7 days a week.
          </Text>
          <View className="flex-row gap-2.5">
            <Button
              label="Chat with Care Team"
              size="sm"
              icon={<MessageIcon size={16} color="#FFFFFF" />}
              onPress={() => navigation.navigate('06-01-MessagesInbox')}
            />
            <Button
              label="Call (800) 555-CARE"
              variant="secondary"
              size="sm"
              icon={<PhoneIcon size={14} color="#4B9B44" />}
            />
          </View>
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default HelpCenterScreen;
