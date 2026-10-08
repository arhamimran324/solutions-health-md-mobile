import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Card, Badge, Button, ProgressBar } from '../../components/UI';
import {
  BellIcon,
  RefreshIcon,
  MessageIcon,
  LabFlaskIcon,
  TargetIcon,
  AlertCircleIcon,
  CreditCardIcon,
  FileTextIcon,
  VideoIcon,
  TruckIcon,
  ChevronRight,
} from '../../components/Icons';

export const HomeActionRequiredScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper scrollable={true} screenCode="03-01" screenTitle="Home Action Required">
      {/* Top Greeting Bar */}
      <View className="px-4 pt-3 pb-2 flex-row items-center justify-between bg-white border-b border-brand-border">
        <View className="flex-row items-center">
          <View className="w-11 h-11 rounded-full bg-brand-green items-center justify-center mr-3">
            <Text className="text-white font-bold text-sm">UA</Text>
          </View>
          <View>
            <Text className="text-xs text-brand-muted">Good morning</Text>
            <Text className="text-lg font-bold text-brand-dark">Umair 👋</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('03-05-NotificationCenter')}
          className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 items-center justify-center relative"
        >
          <BellIcon size={20} color="#04152A" />
          <View className="absolute -top-1 -right-1 bg-brand-danger rounded-full px-1.5 py-0.5">
            <Text className="text-white text-[9px] font-bold">3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="p-4 gap-4">
        {/* Active Program Card */}
        <Card className="bg-brand-green border-0 p-5">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-[11px] font-extrabold text-emerald-100 uppercase tracking-wider">
              Active Program
            </Text>
            <Badge label="Month 2 of 6" variant="green" />
          </View>
          <Text className="text-white text-xl font-bold mt-1">Medical Weight Loss</Text>
          <View className="my-3">
            <ProgressBar progress={0.34} height={8} color="#F9AC2C" bgColor="rgba(255,255,255,0.3)" />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-white font-semibold">-12 lbs so far</Text>
            <Text className="text-xs text-emerald-100">Refill Oct 20</Text>
            <Text className="text-xs text-emerald-100">Bill Oct 15</Text>
          </View>
        </Card>

        {/* 4 Quick Action Shortcuts */}
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={() => navigation.navigate('05-02-RefillRequest')}
            className="items-center w-[22%]"
          >
            <View className="w-13 h-13 rounded-2xl bg-[#ECF6EA] items-center justify-center mb-1.5">
              <RefreshIcon size={22} color="#4B9B44" />
            </View>
            <Text className="text-xs font-semibold text-brand-dark">Refill</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('06-01-MessagesInbox')}
            className="items-center w-[22%]"
          >
            <View className="w-13 h-13 rounded-2xl bg-[#EAF3FA] items-center justify-center mb-1.5">
              <MessageIcon size={22} color="#0F6396" />
            </View>
            <Text className="text-xs font-semibold text-brand-dark">Message</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('03-03-LabResultsTrends')}
            className="items-center w-[22%]"
          >
            <View className="w-13 h-13 rounded-2xl bg-[#FEF3C7] items-center justify-center mb-1.5">
              <LabFlaskIcon size={22} color="#D97706" />
            </View>
            <Text className="text-xs font-semibold text-brand-dark">Labs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('03-04-HealthGoals')}
            className="items-center w-[22%]"
          >
            <View className="w-13 h-13 rounded-2xl bg-[#ECF6EA] items-center justify-center mb-1.5">
              <TargetIcon size={22} color="#4B9B44" />
            </View>
            <Text className="text-xs font-semibold text-brand-dark">Goals</Text>
          </TouchableOpacity>
        </View>

        {/* Action Required Section */}
        <Card>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-base font-bold text-brand-dark">What do I do next?</Text>
            <Badge label="4 to do" variant="red" />
          </View>

          {/* Action 1 */}
          <View className="flex-row items-center p-3 rounded-xl border border-brand-border mb-2.5">
            <View className="w-10 h-10 rounded-xl bg-red-100 items-center justify-center mr-3">
              <AlertCircleIcon size={20} color="#DC2626" />
            </View>
            <View className="flex-1 mr-2">
              <Text className="text-xs font-bold text-brand-dark">Provider needs info</Text>
              <Text className="text-[11px] text-brand-muted">Upload photo for refill</Text>
            </View>
            <Button
              label="Respond"
              size="sm"
              onPress={() => navigation.navigate('04-08-AsyncMoreInfoNeeded')}
            />
          </View>

          {/* Action 2 */}
          <View className="flex-row items-center p-3 rounded-xl border border-brand-border mb-2.5">
            <View className="w-10 h-10 rounded-xl bg-red-100 items-center justify-center mr-3">
              <CreditCardIcon size={20} color="#DC2626" />
            </View>
            <View className="flex-1 mr-2">
              <Text className="text-xs font-bold text-brand-dark">Payment failed</Text>
              <Text className="text-[11px] text-brand-muted">Update card ending 4242</Text>
            </View>
            <Button
              label="Update"
              size="sm"
              onPress={() => navigation.navigate('07-06-PaymentMethods')}
            />
          </View>

          {/* Action 3 */}
          <View className="flex-row items-center p-3 rounded-xl border border-brand-border mb-2.5">
            <View className="w-10 h-10 rounded-xl bg-amber-100 items-center justify-center mr-3">
              <FileTextIcon size={20} color="#D97706" />
            </View>
            <View className="flex-1 mr-2">
              <Text className="text-xs font-bold text-brand-dark">Monthly check-in</Text>
              <Text className="text-[11px] text-brand-muted">3 min · due Oct 7</Text>
            </View>
            <Button
              label="Start"
              variant="secondary"
              size="sm"
              onPress={() => navigation.navigate('03-02-HealthTimeline')}
            />
          </View>

          {/* Action 4 */}
          <View className="flex-row items-center p-3 rounded-xl border border-brand-border">
            <View className="w-10 h-10 rounded-xl bg-blue-100 items-center justify-center mr-3">
              <LabFlaskIcon size={20} color="#0F6396" />
            </View>
            <View className="flex-1 mr-2">
              <Text className="text-xs font-bold text-brand-dark">Labs required</Text>
              <Text className="text-[11px] text-brand-muted">A1C + CMP before Oct 18</Text>
            </View>
            <Button
              label="Find lab"
              variant="secondary"
              size="sm"
              onPress={() => navigation.navigate('03-03-LabResultsTrends')}
            />
          </View>
        </Card>

        {/* Next Appointment Card */}
        <Card>
          <View className="flex-row items-center mb-3">
            <View className="w-11 h-11 rounded-xl bg-blue-50 items-center justify-center mr-3">
              <VideoIcon size={22} color="#0F6396" />
            </View>
            <View className="flex-1">
              <Text className="text-xs text-brand-muted">Next appointment</Text>
              <Text className="text-sm font-bold text-brand-dark">Mon, Oct 8 · 10:30 AM</Text>
              <Text className="text-xs text-brand-muted">Video with Dr. Sarah Lin</Text>
            </View>
          </View>
          <Button
            label="Join video visit"
            size="md"
            fullWidth
            icon={<VideoIcon size={16} color="#FFFFFF" />}
            onPress={() => navigation.navigate('04-03-VideoPrejoinCheck')}
          />
        </Card>

        {/* Medication Shipment Card */}
        <Card
          className="flex-row items-center"
          onPress={() => navigation.navigate('05-07-ShipmentTracking')}
        >
          <View className="w-11 h-11 rounded-xl bg-emerald-50 items-center justify-center mr-3">
            <TruckIcon size={22} color="#16A34A" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-brand-dark">Medication on the way</Text>
            <Text className="text-xs text-brand-muted">UPS 1Z84A9 · Arrives Fri, Oct 5</Text>
          </View>
          <ChevronRight size={18} color="#94A3B8" />
        </Card>
      </View>
    </ScreenWrapper>
  );
};

export default HomeActionRequiredScreen;
