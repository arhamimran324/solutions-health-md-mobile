import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, ProgressBar, RadioOption } from '../../components/UI';

export const AssessmentBranchingScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedGoal, setSelectedGoal] = useState('lose-20');

  const options = [
    { id: 'lose-20', label: 'Lose 20 to 50 lbs', sublabel: 'Sustainable weight reduction' },
    { id: 'lose-50-plus', label: 'Lose 50+ lbs', sublabel: 'Significant metabolic transformation' },
    { id: 'manage-appetite', label: 'Manage hunger & cravings', sublabel: 'Reduce food noise and snacking' },
    { id: 'maintain', label: 'Maintain current progress', sublabel: 'Transitioning or tapering dosage' },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="02-03" screenTitle="Assessment Branching">
      <ScreenHeader
        title="Weight Loss Assessment"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 flex-1 justify-between">
        <View>
          {/* Progress bar */}
          <View className="mb-4">
            <View className="flex-row justify-between mb-1">
              <Text className="text-xs font-semibold text-brand-dark">Question 2 of 5</Text>
              <Text className="text-xs text-brand-muted">40% complete</Text>
            </View>
            <ProgressBar progress={0.4} />
          </View>

          <Text className="text-xl font-bold text-brand-dark mb-1">
            What is your primary weight management goal?
          </Text>
          <Text className="text-xs text-brand-muted mb-6">
            Our medical team uses this to formulate your personalized dosing roadmap.
          </Text>

          {/* Options */}
          {options.map((opt) => (
            <RadioOption
              key={opt.id}
              label={opt.label}
              sublabel={opt.sublabel}
              selected={selectedGoal === opt.id}
              onSelect={() => setSelectedGoal(opt.id)}
            />
          ))}
        </View>

        <View className="pt-6">
          <Button
            label="Continue"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('02-04-YouQualifyChoosePlan')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AssessmentBranchingScreen;
