import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, Badge, InputField } from '../../components/UI';
import { CameraIcon, CheckCircleIcon, AlertCircleIcon } from '../../components/Icons';

export const AsyncMoreInfoNeededScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [note, setNote] = useState('Weighed myself this morning before breakfast (198.2 lbs).');

  return (
    <ScreenWrapper scrollable={true} screenCode="04-08" screenTitle="Async More Info Needed">
      <ScreenHeader
        title="Action Required"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Clinician Request Card */}
        <Card className="border-red-200 bg-red-50/40 p-4">
          <View className="flex-row items-center mb-2">
            <AlertCircleIcon size={20} color="#DC2626" />
            <Text className="text-sm font-bold text-brand-dark ml-2">
              Message from Dr. Sarah Lin, MD
            </Text>
          </View>
          <Text className="text-xs text-brand-dark leading-relaxed">
            "Hi Umair, congratulations on the continued progress! Before renewing and titrating your dosage to 0.5mg, please upload a photo of your scale display showing today's weight."
          </Text>
        </Card>

        {/* Photo Upload Area */}
        <Card className="border-dashed border-2 p-5 items-center justify-center">
          <View className="w-12 h-12 rounded-full bg-emerald-50 items-center justify-center mb-2">
            {photoUploaded ? (
              <CheckCircleIcon size={24} color="#4B9B44" />
            ) : (
              <CameraIcon size={24} color="#64748B" />
            )}
          </View>
          <Text className="text-sm font-bold text-brand-dark">Photo of Scale Display</Text>
          <Text className="text-xs text-brand-muted mt-0.5 text-center">
            {photoUploaded ? 'Scale_oct3_198lbs.jpg attached' : 'Take a photo or choose from library'}
          </Text>
          <TouchableOpacity
            onPress={() => setPhotoUploaded(!photoUploaded)}
            className="mt-3 px-4 py-1.5 rounded-full bg-slate-100"
          >
            <Text className="text-xs font-semibold text-brand-dark">
              {photoUploaded ? 'Replace Photo' : 'Upload Scale Photo'}
            </Text>
          </TouchableOpacity>
        </Card>

        <InputField
          label="Optional Note to Provider"
          value={note}
          onChangeText={setNote}
          multiline
          numberOfLines={3}
        />

        <View className="pt-2">
          <Button
            label="Send to Dr. Lin"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('04-07-AsyncVisitStatus')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AsyncMoreInfoNeededScreen;
