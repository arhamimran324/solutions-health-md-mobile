import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, InputField, Button, CheckboxOption } from '../../components/UI';
import { MailIcon, PhoneIcon, CalendarIcon, LockIcon } from '../../components/Icons';

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [firstName, setFirstName] = useState('Umair');
  const [lastName, setLastName] = useState('Akram');
  const [email, setEmail] = useState('umair@email.com');
  const [phone, setPhone] = useState('+1 (407) 555-0142');
  const [dob, setDob] = useState('04 / 12 / 1991');
  const [password, setPassword] = useState('Password123!');
  const [agree, setAgree] = useState(true);

  return (
    <ScreenWrapper scrollable={true} bg="bg-white" screenCode="01-04" screenTitle="Sign Up">
      <ScreenHeader
        title=""
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-6">
        <Text className="text-2xl font-bold text-brand-dark mb-1">Create your account</Text>
        <Text className="text-sm text-brand-muted mb-6">It takes less than a minute.</Text>

        {/* First & Last name */}
        <View className="flex-row gap-3 mb-1">
          <View className="flex-1">
            <InputField
              label="First name"
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First name"
            />
          </View>
          <View className="flex-1">
            <InputField
              label="Last name"
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last name"
            />
          </View>
        </View>

        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="your@email.com"
          icon={<MailIcon size={18} color="#64748B" />}
        />

        <InputField
          label="Mobile number"
          value={phone}
          onChangeText={setPhone}
          placeholder="+1 (555) 000-0000"
          hint="We'll text a code to verify"
          icon={<PhoneIcon size={18} color="#64748B" />}
        />

        <InputField
          label="Date of birth"
          value={dob}
          onChangeText={setDob}
          placeholder="MM / DD / YYYY"
          icon={<CalendarIcon size={18} color="#64748B" />}
        />

        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
          hint="10+ characters with a number"
          icon={<LockIcon size={18} color="#64748B" />}
        />

        <View className="my-2">
          <CheckboxOption
            label="I agree to the Terms, Privacy Policy and Telehealth Consent"
            checked={agree}
            onToggle={() => setAgree(!agree)}
          />
        </View>

        {/* Divider */}
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-slate-200" />
          <Text className="text-xs text-brand-muted mx-3">or continue with</Text>
          <View className="flex-1 h-px bg-slate-200" />
        </View>

        {/* Social auth */}
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity className="flex-1 py-3 border border-slate-200 rounded-full items-center justify-center bg-white">
            <Text className="text-sm font-semibold text-brand-dark">Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-3 border border-slate-200 rounded-full items-center justify-center bg-white">
            <Text className="text-sm font-semibold text-brand-dark">Google</Text>
          </TouchableOpacity>
        </View>

        {/* CTA */}
        <Button
          label="Create account"
          size="lg"
          fullWidth
          onPress={() => navigation.navigate('01-06-OtpVerification')}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('01-05-LogIn')}
          className="items-center mt-4"
        >
          <Text className="text-sm text-brand-muted">
            Already a member? <Text className="text-brand-green font-bold">Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;
