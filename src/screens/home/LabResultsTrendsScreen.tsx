import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Badge, Button } from '../../components/UI';
import { LabFlaskIcon, FileTextIcon } from '../../components/Icons';

export const LabResultsTrendsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const labs = [
    { name: 'Hemoglobin A1C', value: '5.7%', range: 'Normal (< 5.7%)', change: '-0.4%', status: 'optimal' },
    { name: 'Fasting Glucose', value: '92 mg/dL', range: 'Normal (70-99)', change: '-14 mg/dL', status: 'optimal' },
    { name: 'Total Cholesterol', value: '185 mg/dL', range: 'Desirable (< 200)', change: '-22 mg/dL', status: 'optimal' },
    { name: 'Triglycerides', value: '130 mg/dL', range: 'Normal (< 150)', change: '-35 mg/dL', status: 'optimal' },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="03-03" screenTitle="Lab Results Trends">
      <ScreenHeader
        title="Lab Results & Trends"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Lab Overview Banner */}
        <Card className="bg-brand-dark border-0 p-4">
          <View className="flex-row items-center mb-1">
            <LabFlaskIcon size={20} color="#34D399" />
            <Text className="text-white font-bold text-sm ml-2">Quest Diagnostics Panel</Text>
          </View>
          <Text className="text-xs text-slate-300">Drawn Sep 22, 2026 · Reviewed by Dr. Sarah Lin</Text>
        </Card>

        <Text className="text-base font-bold text-brand-dark">Key Biomarkers</Text>

        {labs.map((item, idx) => (
          <Card key={idx} className="p-4">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm font-bold text-brand-dark">{item.name}</Text>
              <Badge label="OPTIMAL" variant="green" />
            </View>
            <View className="flex-row items-baseline justify-between mt-2">
              <Text className="text-2xl font-black text-brand-dark">{item.value}</Text>
              <Text className="text-xs font-bold text-brand-green">{item.change} vs baseline</Text>
            </View>
            <Text className="text-xs text-brand-muted mt-1">Reference: {item.range}</Text>
          </Card>
        ))}

        <View className="pt-2 gap-3">
          <Button
            label="Download Official Lab PDF"
            variant="secondary"
            size="md"
            fullWidth
            icon={<FileTextIcon size={16} color="#4B9B44" />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LabResultsTrendsScreen;
