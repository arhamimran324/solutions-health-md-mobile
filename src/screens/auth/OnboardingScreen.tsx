import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Button, Card } from '../../components/UI';
import { VideoIcon, CareIcon, TruckIcon } from '../../components/Icons';

export const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: 'Real care from licensed providers',
      description:
        'Video or message visits, prescriptions when appropriate, and delivery to your door — all in one app.',
    },
    {
      title: 'Personalized treatment plans',
      description:
        'Clinically proven medications for weight loss, longevity, hormonal balance, and everyday wellness.',
    },
    {
      title: 'Discreet medication delivery',
      description:
        'Fast, temperature-controlled packaging shipped straight from verified US compounding pharmacies.',
    },
  ];

  const handleNext = () => {
    if (slide < slides.length - 1) {
      setSlide(slide + 1);
    } else {
      navigation.navigate('01-03-Welcome');
    }
  };

  return (
    <ScreenWrapper scrollable={false} bg="bg-white" screenCode="01-02" screenTitle="Onboarding">
      <View className="flex-1 justify-between p-6">
        {/* Top skip */}
        <View className="flex-row justify-end">
          <TouchableOpacity onPress={() => navigation.navigate('01-03-Welcome')}>
            <Text className="text-brand-green font-semibold text-sm">Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Illustrated Floating Cards Hero */}
        <View className="h-80 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-4 justify-center items-center relative overflow-hidden border border-emerald-100/50">
          <Card className="absolute top-6 left-4 w-52 shadow-md">
            <View className="flex-row items-center">
              <View className="w-9 h-9 rounded-lg bg-blue-50 items-center justify-center mr-2.5">
                <VideoIcon size={18} color="#0F6396" />
              </View>
              <View>
                <Text className="text-xs font-bold text-brand-dark">Video visit</Text>
                <Text className="text-[11px] text-brand-muted">Today 10:30 AM</Text>
              </View>
            </View>
          </Card>

          <Card className="absolute top-32 right-4 w-48 shadow-md">
            <View className="flex-row items-center">
              <View className="w-9 h-9 rounded-lg bg-emerald-50 items-center justify-center mr-2.5">
                <CareIcon size={18} color="#4B9B44" />
              </View>
              <View>
                <Text className="text-xs font-bold text-brand-dark">Rx approved</Text>
                <Text className="text-[11px] text-brand-muted">Ships tomorrow</Text>
              </View>
            </View>
          </Card>

          <Card className="absolute bottom-6 left-6 w-56 shadow-md">
            <View className="flex-row items-center">
              <View className="w-9 h-9 rounded-lg bg-amber-50 items-center justify-center mr-2.5">
                <TruckIcon size={18} color="#D97706" />
              </View>
              <View>
                <Text className="text-xs font-bold text-brand-dark">Delivered to door</Text>
                <Text className="text-[11px] text-brand-muted">Cold-chain packaging</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Content & Indicator */}
        <View className="items-center px-2">
          {/* Dot indicators */}
          <View className="flex-row items-center mb-6">
            {slides.map((_, i) => (
              <View
                key={i}
                className={`h-2 rounded-full mx-1 ${
                  i === slide ? 'w-6 bg-brand-green' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </View>

          <Text className="text-2xl font-bold text-brand-dark text-center mb-3">
            {slides[slide].title}
          </Text>
          <Text className="text-sm text-brand-muted text-center leading-relaxed">
            {slides[slide].description}
          </Text>
        </View>

        {/* CTA Button */}
        <View className="pt-4 border-t border-slate-100">
          <Button
            label={slide === slides.length - 1 ? 'Get Started' : 'Next'}
            size="lg"
            fullWidth
            onPress={handleNext}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default OnboardingScreen;
