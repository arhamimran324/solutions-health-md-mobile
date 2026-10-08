import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Badge } from '../../components/UI';
import { FileTextIcon, ChevronRight } from '../../components/Icons';

export const DocumentsFormsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="07-08" screenTitle="Documents Forms">
      <ScreenHeader
        title="Documents & Forms"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Needs Signature Card */}
        <Card className="border-red-200 bg-red-50/30 p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-xs font-bold text-brand-danger uppercase">Requires Signature</Text>
            <Badge label="ACTION NEEDED" variant="red" />
          </View>
          <Text className="text-base font-bold text-brand-dark mt-1">
            State Telehealth Consent 2026
          </Text>
          <Text className="text-xs text-brand-muted mt-0.5 mb-3">
            Updated annual telehealth policy disclosure mandated by state board.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('07-09-ConsentEsignature')}
            className="flex-row items-center justify-between bg-brand-green py-2 px-3.5 rounded-full"
          >
            <Text className="text-xs font-bold text-white">Review & E-Sign Document</Text>
            <ChevronRight size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </Card>

        {/* Signed Documents */}
        <Text className="text-sm font-bold text-brand-dark">Signed Documents</Text>

        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-sm font-bold text-brand-dark">GLP-1 Medication Informed Consent</Text>
            <Badge label="SIGNED" variant="green" />
          </View>
          <Text className="text-xs text-brand-muted">Signed Sep 3, 2026 · IP Verified</Text>
        </Card>

        <Card className="p-4">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-sm font-bold text-brand-dark">Notice of Privacy Practices (HIPAA)</Text>
            <Badge label="SIGNED" variant="green" />
          </View>
          <Text className="text-xs text-brand-muted">Signed Sep 3, 2026</Text>
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default DocumentsFormsScreen;
