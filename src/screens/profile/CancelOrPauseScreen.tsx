import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, RadioOption } from '../../components/UI';

export const CancelOrPauseScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [action, setAction] = useState('pause-1');

  return (
    <ScreenWrapper scrollable={true} screenCode="07-05" screenTitle="Cancel Or Pause">
      <ScreenHeader
        title="Pause or Cancel"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Card className="bg-amber-50/70 border-amber-200 p-4">
          <Text className="text-sm font-bold text-brand-dark mb-1">
            Need to take a break?
          </Text>
          <Text className="text-xs text-brand-muted leading-relaxed">
            You can pause shipments for 1 to 2 months without losing your assigned doctor or prescription titration status.
          </Text>
        </Card>

        <RadioOption
          label="Pause for 1 month"
          sublabel="Next billing & delivery resumes in 30 days"
          selected={action === 'pause-1'}
          onSelect={() => setAction('pause-1')}
        />

        <RadioOption
          label="Pause for 2 months"
          sublabel="Next billing & delivery resumes in 60 days"
          selected={action === 'pause-2'}
          onSelect={() => setAction('pause-2')}
        />

        <RadioOption
          label="Cancel membership completely"
          sublabel="Discontinue all future doctor reviews and refills"
          selected={action === 'cancel'}
          onSelect={() => setAction('cancel')}
        />

        <View className="pt-4 gap-3">
          <Button
            label={action === 'cancel' ? 'Confirm Cancellation' : 'Confirm Pause'}
            variant={action === 'cancel' ? 'danger' : 'primary'}
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('07-03-MembershipBilling')}
          />
          <Button
            label="Keep Subscription Active"
            variant="secondary"
            size="md"
            fullWidth
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default CancelOrPauseScreen;
