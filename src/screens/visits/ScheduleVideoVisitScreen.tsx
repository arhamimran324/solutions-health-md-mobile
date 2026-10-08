import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, Chip, InputField } from '../../components/UI';
import { CalendarIcon, VideoIcon } from '../../components/Icons';

export const ScheduleVideoVisitScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedDay, setSelectedDay] = useState('Mon, Oct 8');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [reason, setReason] = useState('Routine 4-week GLP-1 weight titration check-in');

  const days = ['Mon, Oct 8', 'Tue, Oct 9', 'Wed, Oct 10', 'Thu, Oct 11'];
  const times = ['9:00 AM', '10:30 AM', '1:15 PM', '2:45 PM', '4:00 PM'];

  return (
    <ScreenWrapper scrollable={true} screenCode="04-02" screenTitle="Schedule Video Visit">
      <ScreenHeader
        title="Schedule Visit"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Clinician Card */}
        <Card className="flex-row items-center p-4">
          <View className="w-12 h-12 rounded-full bg-emerald-100 items-center justify-center mr-3">
            <Text className="text-sm font-bold text-brand-green">SL</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-brand-dark">Dr. Sarah Lin, MD</Text>
            <Text className="text-xs text-brand-muted">Board Certified · Internal Medicine</Text>
            <Text className="text-xs text-brand-green font-semibold mt-0.5">Licensed in Florida</Text>
          </View>
        </Card>

        {/* Date Selector */}
        <View>
          <Text className="text-sm font-bold text-brand-dark mb-2">Select Date</Text>
          <View className="flex-row flex-wrap">
            {days.map((d) => (
              <Chip
                key={d}
                label={d}
                selected={selectedDay === d}
                onPress={() => setSelectedDay(d)}
              />
            ))}
          </View>
        </View>

        {/* Time Selector */}
        <View>
          <Text className="text-sm font-bold text-brand-dark mb-2">Available Time Slots</Text>
          <View className="flex-row flex-wrap">
            {times.map((t) => (
              <Chip
                key={t}
                label={t}
                selected={selectedTime === t}
                onPress={() => setSelectedTime(t)}
              />
            ))}
          </View>
        </View>

        <InputField
          label="Reason for Visit"
          value={reason}
          onChangeText={setReason}
          multiline
          numberOfLines={3}
          placeholder="Briefly describe what you'd like to discuss"
        />

        <View className="pt-2">
          <Button
            label="Confirm & Book Appointment"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('04-03-VideoPrejoinCheck')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ScheduleVideoVisitScreen;
