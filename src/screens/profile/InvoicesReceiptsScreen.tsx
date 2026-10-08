import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Badge } from '../../components/UI';
import { FileTextIcon, ChevronRight } from '../../components/Icons';

export const InvoicesReceiptsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const invoices = [
    { id: 'INV-8492', date: 'Oct 1, 2026', amount: '$199.00', status: 'Paid', plan: 'Semaglutide 1-Mo Renewal' },
    { id: 'INV-7319', date: 'Sep 1, 2026', amount: '$199.00', status: 'Paid', plan: 'Semaglutide Starter Kit' },
    { id: 'INV-6102', date: 'Aug 15, 2026', amount: '$49.00', status: 'Paid', plan: 'Metabolic Baseline Lab Panel' },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="07-07" screenTitle="Invoices Receipts">
      <ScreenHeader
        title="Invoices & Receipts"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Text className="text-sm font-bold text-brand-dark">Itemized Receipts</Text>

        {invoices.map((inv) => (
          <Card key={inv.id} className="p-4">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-xs font-bold text-brand-muted">{inv.id}</Text>
              <Badge label={inv.status} variant="green" />
            </View>
            <View className="flex-row justify-between items-baseline my-1">
              <Text className="text-sm font-bold text-brand-dark">{inv.plan}</Text>
              <Text className="text-base font-extrabold text-brand-dark">{inv.amount}</Text>
            </View>
            <View className="flex-row justify-between items-center pt-2 border-t border-slate-100">
              <Text className="text-xs text-brand-muted">{inv.date}</Text>
              <TouchableOpacity className="flex-row items-center">
                <FileTextIcon size={14} color="#4B9B44" />
                <Text className="text-xs font-bold text-brand-green ml-1">Download PDF</Text>
              </TouchableOpacity>
            </View>
          </Card>
        ))}
      </View>
    </ScreenWrapper>
  );
};

export default InvoicesReceiptsScreen;
