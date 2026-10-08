import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, InputField } from '../../components/UI';

export const PersonalInformationScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [firstName, setFirstName] = useState('Umair');
  const [lastName, setLastName] = useState('Akram');
  const [email, setEmail] = useState('umair@email.com');
  const [phone, setPhone] = useState('+1 (407) 555-0142');
  const [address, setAddress] = useState('1204 Biscayne Blvd, Apt 14B');
  const [city, setCity] = useState('Miami');
  const [state, setState] = useState('FL');
  const [zip, setZip] = useState('33132');

  return (
    <ScreenWrapper scrollable={true} screenCode="07-02" screenTitle="Personal Information">
      <ScreenHeader
        title="Personal Information"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-3">
        <View className="flex-row gap-3">
          <View className="flex-1">
            <InputField label="First Name" value={firstName} onChangeText={setFirstName} />
          </View>
          <View className="flex-1">
            <InputField label="Last Name" value={lastName} onChangeText={setLastName} />
          </View>
        </View>

        <InputField label="Email Address" value={email} onChangeText={setEmail} />
        <InputField label="Phone Number" value={phone} onChangeText={setPhone} />
        <InputField label="Street Address" value={address} onChangeText={setAddress} />

        <View className="flex-row gap-3">
          <View className="flex-2">
            <InputField label="City" value={city} onChangeText={setCity} />
          </View>
          <View className="flex-1">
            <InputField label="State" value={state} onChangeText={setState} />
          </View>
          <View className="flex-1">
            <InputField label="ZIP" value={zip} onChangeText={setZip} />
          </View>
        </View>

        <View className="pt-4">
          <Button
            label="Save Changes"
            size="lg"
            fullWidth
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PersonalInformationScreen;
