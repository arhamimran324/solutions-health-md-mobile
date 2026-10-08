import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Stepper, Card } from '../../components/UI';
import { CameraIcon, CheckCircleIcon, LockIcon } from '../../components/Icons';

export const IntakePhotosIdScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [idUploaded, setIdUploaded] = useState(true);
  const [bodyPhotoUploaded, setBodyPhotoUploaded] = useState(true);

  return (
    <ScreenWrapper scrollable={true} screenCode="02-08" screenTitle="Intake Photos ID">
      <ScreenHeader
        title="ID & Verification"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Stepper
          steps={['Medical', 'Photos & ID', 'Consents']}
          currentStep={1}
        />

        <Text className="text-base font-bold text-brand-dark">Identity & Baseline Photos</Text>
        <Text className="text-xs text-brand-muted">
          State telemedicine regulations require valid ID verification and physician baseline photos.
        </Text>

        {/* ID Upload Box */}
        <Card className="border-dashed border-2 p-5 items-center justify-center">
          <View className="w-12 h-12 rounded-full bg-emerald-50 items-center justify-center mb-2">
            {idUploaded ? (
              <CheckCircleIcon size={24} color="#4B9B44" />
            ) : (
              <CameraIcon size={24} color="#64748B" />
            )}
          </View>
          <Text className="text-sm font-bold text-brand-dark">Government-Issued Photo ID</Text>
          <Text className="text-xs text-brand-muted mt-0.5 text-center">
            {idUploaded ? 'Driver_license_FL_front.jpg attached' : 'Driver’s license, State ID, or Passport'}
          </Text>
          <TouchableOpacity
            onPress={() => setIdUploaded(!idUploaded)}
            className="mt-3 px-4 py-1.5 rounded-full bg-slate-100"
          >
            <Text className="text-xs font-semibold text-brand-dark">
              {idUploaded ? 'Replace Photo' : 'Upload ID'}
            </Text>
          </TouchableOpacity>
        </Card>

        {/* Full Body Photo Box */}
        <Card className="border-dashed border-2 p-5 items-center justify-center">
          <View className="w-12 h-12 rounded-full bg-emerald-50 items-center justify-center mb-2">
            {bodyPhotoUploaded ? (
              <CheckCircleIcon size={24} color="#4B9B44" />
            ) : (
              <CameraIcon size={24} color="#64748B" />
            )}
          </View>
          <Text className="text-sm font-bold text-brand-dark">Baseline Full-Body Photo</Text>
          <Text className="text-xs text-brand-muted mt-0.5 text-center">
            {bodyPhotoUploaded ? 'Full_body_baseline.jpg attached' : 'Stand in front of a mirror or have someone take a photo'}
          </Text>
          <TouchableOpacity
            onPress={() => setBodyPhotoUploaded(!bodyPhotoUploaded)}
            className="mt-3 px-4 py-1.5 rounded-full bg-slate-100"
          >
            <Text className="text-xs font-semibold text-brand-dark">
              {bodyPhotoUploaded ? 'Replace Photo' : 'Upload Photo'}
            </Text>
          </TouchableOpacity>
        </Card>

        {/* Security badge */}
        <View className="flex-row items-center bg-blue-50/70 p-3 rounded-xl">
          <LockIcon size={16} color="#0F6396" />
          <Text className="text-xs text-brand-blue ml-2 flex-1">
            HIPAA-Protected: Stored securely and only visible to your assigned physician.
          </Text>
        </View>

        <View className="pt-2">
          <Button
            label="Continue to Consents"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('02-09-IntakeConsentsVisitType')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default IntakePhotosIdScreen;
