import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, InputField } from '../../components/UI';
import { StarIcon } from '../../components/Icons';

export const RateProviderPharmacyScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [docRating, setDocRating] = useState(5);
  const [pharmRating, setPharmRating] = useState(5);
  const [comment, setComment] = useState('Dr. Lin was super thoughtful and answered all my questions regarding titration!');

  const renderStars = (rating: number, onRate: (r: number) => void) => (
    <View className="flex-row gap-2 my-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => onRate(star)}>
          <StarIcon size={32} color="#F59E0B" filled={star <= rating} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScreenWrapper scrollable={true} screenCode="04-09" screenTitle="Rate Provider Pharmacy">
      <ScreenHeader
        title="Rate Experience"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Clinician Rating */}
        <Card className="p-4 items-center">
          <View className="w-12 h-12 rounded-full bg-emerald-100 items-center justify-center mb-2">
            <Text className="text-sm font-bold text-brand-green">SL</Text>
          </View>
          <Text className="text-base font-bold text-brand-dark">Dr. Sarah Lin, MD</Text>
          <Text className="text-xs text-brand-muted">How was your doctor consultation?</Text>
          {renderStars(docRating, setDocRating)}
        </Card>

        {/* Pharmacy Rating */}
        <Card className="p-4 items-center">
          <Text className="text-base font-bold text-brand-dark">Dispensing Compounding Pharmacy</Text>
          <Text className="text-xs text-brand-muted">Packaging, cold-chain ice packs, and delivery speed</Text>
          {renderStars(pharmRating, setPharmRating)}
        </Card>

        <InputField
          label="Detailed Feedback"
          value={comment}
          onChangeText={setComment}
          multiline
          numberOfLines={3}
          placeholder="Share your thoughts..."
        />

        <View className="pt-2">
          <Button
            label="Submit Review"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('04-01-Visits')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default RateProviderPharmacyScreen;
