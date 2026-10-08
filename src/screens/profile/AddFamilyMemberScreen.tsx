import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, InputField, Chip } from '../../components/UI';

export const AddFamilyMemberScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('Akram');
  const [relation, setRelation] = useState('Spouse');
  const [dob, setDob] = useState('');

  const relations = ['Spouse', 'Child', 'Parent', 'Other'];

  return (
    <ScreenWrapper scrollable={true} screenCode="07-11" screenTitle="Add Family Member">
      <ScreenHeader
        title="Add Family Member"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        <Text className="text-sm font-bold text-brand-dark">Relationship</Text>
        <View className="flex-row flex-wrap">
          {relations.map((r) => (
            <Chip
              key={r}
              label={r}
              selected={relation === r}
              onPress={() => setRelation(r)}
            />
          ))}
        </View>

        <View className="flex-row gap-3">
          <View className="flex-1">
            <InputField
              label="First Name"
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First name"
            />
          </View>
          <View className="flex-1">
            <InputField
              label="Last Name"
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last name"
            />
          </View>
        </View>

        <InputField
          label="Date of Birth"
          value={dob}
          onChangeText={setDob}
          placeholder="MM / DD / YYYY"
        />

        <View className="pt-2">
          <Button
            label="Save & Link Profile"
            size="lg"
            fullWidth
            onPress={() => navigation.navigate('07-10-FamilyMembers')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddFamilyMemberScreen;
