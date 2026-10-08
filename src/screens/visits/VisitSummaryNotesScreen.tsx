import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, Badge } from '../../components/UI';
import { CheckCircleIcon, CareIcon, StarIcon } from '../../components/Icons';

export const VisitSummaryNotesScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="04-05" screenTitle="Visit Summary Notes">
      <ScreenHeader
        title="Visit Summary & Notes"
        onBack={() => navigation.navigate('04-01-Visits')}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Clinician Card */}
        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-sm font-bold text-brand-dark">Dr. Sarah Lin, MD</Text>
            <Badge label="COMPLETED" variant="green" />
          </View>
          <Text className="text-xs text-brand-muted">Video Visit · Mon, Oct 8 · 15 minutes</Text>
        </Card>

        {/* Clinical Assessment Card */}
        <Card className="p-4">
          <Text className="text-base font-bold text-brand-dark mb-2">Clinical Assessment</Text>
          <Text className="text-xs text-brand-dark leading-relaxed mb-3">
            Patient demonstrates excellent progress on initial 0.25mg Semaglutide with 12 lb weight loss over 4 weeks. Mild nausea resolved with increased hydration. Tolerating medication well.
          </Text>
          <View className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
            <Text className="text-xs font-bold text-brand-green mb-1">Plan & Prescriptions</Text>
            <Text className="text-xs text-brand-dark leading-relaxed">
              • Titrate Semaglutide to 0.5 mg subcutaneous injection once weekly{'\n'}
              • Refill order sent to compounding pharmacy for 30-day supply{'\n'}
              • Target minimum 80g dietary protein and 64oz water daily
            </Text>
          </View>
        </Card>

        {/* Buttons */}
        <View className="gap-3 pt-2">
          <Button
            label="Rate Doctor & Pharmacy"
            size="lg"
            fullWidth
            icon={<StarIcon size={18} color="#FFFFFF" />}
            onPress={() => navigation.navigate('04-09-RateProviderPharmacy')}
          />
          <Button
            label="Back to Visits"
            variant="secondary"
            size="md"
            fullWidth
            onPress={() => navigation.navigate('04-01-Visits')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default VisitSummaryNotesScreen;
