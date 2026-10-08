import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Badge } from '../../components/UI';
import {
  UserIcon,
  ChevronRight,
  CreditCardIcon,
  ShoppingBagIcon,
  FileTextIcon,
  BellIcon,
  ShieldIcon,
  LockIcon,
} from '../../components/Icons';

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="07-01" screenTitle="Profile">
      <ScreenHeader
        title="Profile"
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* User Card */}
        <Card className="items-center p-5">
          <View className="w-18 h-18 rounded-full bg-brand-green items-center justify-center mb-2">
            <Text className="text-white text-2xl font-bold">UA</Text>
          </View>
          <Text className="text-lg font-bold text-brand-dark">Umair Akram</Text>
          <Text className="text-xs text-brand-muted">umair@email.com · Member since Sep 2026</Text>
          <View className="flex-row gap-2 mt-3">
            <Badge label="Weight Loss" variant="green" />
            <Badge label="Monthly · AutoPay" variant="blue" />
          </View>
        </Card>

        {/* Section: Account */}
        <Text className="text-xs font-bold text-brand-muted uppercase px-1">Account</Text>
        <Card className="p-2">
          <TouchableOpacity
            onPress={() => navigation.navigate('07-02-PersonalInformation')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-emerald-50 items-center justify-center mr-3">
              <UserIcon size={18} color="#4B9B44" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Personal Information</Text>
              <Text className="text-xs text-brand-muted">Name, address, DOB</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('07-10-FamilyMembers')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-blue-50 items-center justify-center mr-3">
              <UserIcon size={18} color="#0F6396" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Family Members</Text>
              <Text className="text-xs text-brand-muted">2 dependents</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('07-08-DocumentsForms')}
            className="flex-row items-center p-3"
          >
            <View className="w-9 h-9 rounded-xl bg-amber-50 items-center justify-center mr-3">
              <FileTextIcon size={18} color="#D97706" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Documents & Forms</Text>
              <Text className="text-xs text-brand-muted">1 required to sign</Text>
            </View>
            <Badge label="1" variant="red" />
            <View className="ml-2">
              <ChevronRight size={18} color="#94A3B8" />
            </View>
          </TouchableOpacity>
        </Card>

        {/* Section: Care & Billing */}
        <Text className="text-xs font-bold text-brand-muted uppercase px-1">Care & Billing</Text>
        <Card className="p-2">
          <TouchableOpacity
            onPress={() => navigation.navigate('07-03-MembershipBilling')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-emerald-50 items-center justify-center mr-3">
              <CreditCardIcon size={18} color="#4B9B44" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Membership & Billing</Text>
              <Text className="text-xs text-brand-muted">Payment failed · Update card</Text>
            </View>
            <Badge label="!" variant="red" />
            <View className="ml-2">
              <ChevronRight size={18} color="#94A3B8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('05-06-MyOrders')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-blue-50 items-center justify-center mr-3">
              <ShoppingBagIcon size={18} color="#0F6396" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">My Orders</Text>
              <Text className="text-xs text-brand-muted">1 in transit</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('07-07-InvoicesReceipts')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-slate-100 items-center justify-center mr-3">
              <FileTextIcon size={18} color="#43474E" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Invoices & Receipts</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('07-06-PaymentMethods')}
            className="flex-row items-center p-3"
          >
            <View className="w-9 h-9 rounded-xl bg-slate-100 items-center justify-center mr-3">
              <CreditCardIcon size={18} color="#43474E" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Payment Methods</Text>
              <Text className="text-xs text-brand-muted">Visa •• 4242</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>
        </Card>

        {/* Section: Settings */}
        <Text className="text-xs font-bold text-brand-muted uppercase px-1">Settings & Support</Text>
        <Card className="p-2">
          <TouchableOpacity
            onPress={() => navigation.navigate('07-13-NotificationSettings')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-blue-50 items-center justify-center mr-3">
              <BellIcon size={18} color="#0F6396" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Notification Settings</Text>
              <Text className="text-xs text-brand-muted">SMS, email, push</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('07-14-AccountSecurity')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-emerald-50 items-center justify-center mr-3">
              <ShieldIcon size={18} color="#4B9B44" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Account & Security</Text>
              <Text className="text-xs text-brand-muted">MFA active · Face ID</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('07-12-ReferEarn')}
            className="flex-row items-center p-3 border-b border-slate-100"
          >
            <View className="w-9 h-9 rounded-xl bg-amber-50 items-center justify-center mr-3">
              <Text className="text-sm">🎁</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Refer & Earn</Text>
              <Text className="text-xs text-brand-muted">Give $50, get $50</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('07-15-HelpCenter')}
            className="flex-row items-center p-3"
          >
            <View className="w-9 h-9 rounded-xl bg-slate-100 items-center justify-center mr-3">
              <Text className="text-sm">❓</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-brand-dark">Help Center & FAQs</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>
        </Card>

        {/* Log Out Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('01-05-LogIn')}
          className="items-center py-3"
        >
          <Text className="text-sm font-bold text-brand-danger">Log Out</Text>
        </TouchableOpacity>
        <Text className="text-center text-[11px] text-brand-muted pb-4">
          Solutions Health MD v1.0.0
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileScreen;
