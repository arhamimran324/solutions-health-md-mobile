import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from './types';

// Section 1: Auth
import { SplashScreen } from '../screens/auth/SplashScreen';
import { OnboardingScreen } from '../screens/auth/OnboardingScreen';
import { WelcomeScreen } from '../screens/auth/WelcomeScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { LogInScreen } from '../screens/auth/LogInScreen';
import { OtpVerificationScreen } from '../screens/auth/OtpVerificationScreen';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen';

// Section 2: Get Care
import { GetCareProgramsScreen } from '../screens/get-care/GetCareProgramsScreen';
import { ProgramDetailScreen } from '../screens/get-care/ProgramDetailScreen';
import { AssessmentBranchingScreen } from '../screens/get-care/AssessmentBranchingScreen';
import { YouQualifyChoosePlanScreen } from '../screens/get-care/YouQualifyChoosePlanScreen';
import { NotEligibleScreen } from '../screens/get-care/NotEligibleScreen';
import { CheckoutPaymentScreen } from '../screens/get-care/CheckoutPaymentScreen';
import { IntakeMedicalHistoryScreen } from '../screens/get-care/IntakeMedicalHistoryScreen';
import { IntakePhotosIdScreen } from '../screens/get-care/IntakePhotosIdScreen';
import { IntakeConsentsVisitTypeScreen } from '../screens/get-care/IntakeConsentsVisitTypeScreen';
import { SubmittedForReviewScreen } from '../screens/get-care/SubmittedForReviewScreen';

// Section 3: Home
import { HomeActionRequiredScreen } from '../screens/home/HomeActionRequiredScreen';
import { HealthTimelineScreen } from '../screens/home/HealthTimelineScreen';
import { LabResultsTrendsScreen } from '../screens/home/LabResultsTrendsScreen';
import { HealthGoalsScreen } from '../screens/home/HealthGoalsScreen';
import { NotificationCenterScreen } from '../screens/home/NotificationCenterScreen';

// Section 4: Visits
import { VisitsScreen } from '../screens/visits/VisitsScreen';
import { ScheduleVideoVisitScreen } from '../screens/visits/ScheduleVideoVisitScreen';
import { VideoPrejoinCheckScreen } from '../screens/visits/VideoPrejoinCheckScreen';
import { VideoInCallScreen } from '../screens/visits/VideoInCallScreen';
import { VisitSummaryNotesScreen } from '../screens/visits/VisitSummaryNotesScreen';
import { StartAsyncVisitScreen } from '../screens/visits/StartAsyncVisitScreen';
import { AsyncVisitStatusScreen } from '../screens/visits/AsyncVisitStatusScreen';
import { AsyncMoreInfoNeededScreen } from '../screens/visits/AsyncMoreInfoNeededScreen';
import { RateProviderPharmacyScreen } from '../screens/visits/RateProviderPharmacyScreen';

// Section 5: Meds & Shop
import { MedicationCenterScreen } from '../screens/meds-shop/MedicationCenterScreen';
import { RefillRequestScreen } from '../screens/meds-shop/RefillRequestScreen';
import { ShopCatalogScreen } from '../screens/meds-shop/ShopCatalogScreen';
import { ProductDetailScreen } from '../screens/meds-shop/ProductDetailScreen';
import { CartScreen } from '../screens/meds-shop/CartScreen';
import { MyOrdersScreen } from '../screens/meds-shop/MyOrdersScreen';
import { ShipmentTrackingScreen } from '../screens/meds-shop/ShipmentTrackingScreen';

// Section 6: Messages
import { MessagesInboxScreen } from '../screens/messages/MessagesInboxScreen';
import { SecureChatScreen } from '../screens/messages/SecureChatScreen';

// Section 7: Profile
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { PersonalInformationScreen } from '../screens/profile/PersonalInformationScreen';
import { MembershipBillingScreen } from '../screens/profile/MembershipBillingScreen';
import { ChangePlanScreen } from '../screens/profile/ChangePlanScreen';
import { CancelOrPauseScreen } from '../screens/profile/CancelOrPauseScreen';
import { PaymentMethodsScreen } from '../screens/profile/PaymentMethodsScreen';
import { InvoicesReceiptsScreen } from '../screens/profile/InvoicesReceiptsScreen';
import { DocumentsFormsScreen } from '../screens/profile/DocumentsFormsScreen';
import { ConsentEsignatureScreen } from '../screens/profile/ConsentEsignatureScreen';
import { FamilyMembersScreen } from '../screens/profile/FamilyMembersScreen';
import { AddFamilyMemberScreen } from '../screens/profile/AddFamilyMemberScreen';
import { ReferEarnScreen } from '../screens/profile/ReferEarnScreen';
import { NotificationSettingsScreen } from '../screens/profile/NotificationSettingsScreen';
import { AccountSecurityScreen } from '../screens/profile/AccountSecurityScreen';
import { HelpCenterScreen } from '../screens/profile/HelpCenterScreen';

// Gallery
import { ScreenGalleryScreen } from '../screens/ScreenGalleryScreen';

// Icons
import {
  HomeIcon,
  CalendarIcon,
  CareIcon,
  MessageIcon,
  UserIcon,
} from '../components/Icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const bottomPadding = Math.max(insets.bottom, 10);

  return (
    <View
      style={{
        paddingBottom: bottomPadding,
        height: 54 + bottomPadding,
      }}
      className="bg-white border-t border-brand-border flex-row justify-around pt-2"
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? '#4B9B44' : '#94A3B8';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const renderIcon = () => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon size={22} color={color} />;
            case 'Visits':
              return <CalendarIcon size={22} color={color} />;
            case 'Care':
              return <CareIcon size={22} color={color} />;
            case 'Messages':
              return (
                <View className="relative">
                  <MessageIcon size={22} color={color} />
                  <View className="absolute -top-1 -right-2 bg-brand-danger rounded-full px-1 py-0.2">
                    <Text className="text-white text-[8px] font-bold">2</Text>
                  </View>
                </View>
              );
            case 'Profile':
              return <UserIcon size={22} color={color} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            className="items-center justify-center w-16"
          >
            {renderIcon()}
            <Text
              className={`text-[11px] mt-1 font-semibold ${
                isFocused ? 'text-brand-green' : 'text-slate-400'
              }`}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeActionRequiredScreen} />
      <Tab.Screen name="Visits" component={VisitsScreen} />
      <Tab.Screen name="Care" component={GetCareProgramsScreen} />
      <Tab.Screen name="Messages" component={MessagesInboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {/* Tab Root */}
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen name="ScreenGallery" component={ScreenGalleryScreen} />

      {/* 01 Auth */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

      {/* 02 Get Care */}
      <Stack.Screen name="GetCarePrograms" component={GetCareProgramsScreen} />
      <Stack.Screen name="ProgramDetail" component={ProgramDetailScreen} />
      <Stack.Screen name="AssessmentBranching" component={AssessmentBranchingScreen} />
      <Stack.Screen name="YouQualifyChoosePlan" component={YouQualifyChoosePlanScreen} />
      <Stack.Screen name="NotEligible" component={NotEligibleScreen} />
      <Stack.Screen name="CheckoutPayment" component={CheckoutPaymentScreen} />
      <Stack.Screen name="IntakeMedicalHistory" component={IntakeMedicalHistoryScreen} />
      <Stack.Screen name="IntakePhotosId" component={IntakePhotosIdScreen} />
      <Stack.Screen name="IntakeConsentsVisitType" component={IntakeConsentsVisitTypeScreen} />
      <Stack.Screen name="SubmittedForReview" component={SubmittedForReviewScreen} />

      {/* 03 Home */}
      <Stack.Screen name="HomeActionRequired" component={HomeActionRequiredScreen} />
      <Stack.Screen name="HealthTimeline" component={HealthTimelineScreen} />
      <Stack.Screen name="LabResultsTrends" component={LabResultsTrendsScreen} />
      <Stack.Screen name="HealthGoals" component={HealthGoalsScreen} />
      <Stack.Screen name="NotificationCenter" component={NotificationCenterScreen} />

      {/* 04 Visits */}
      <Stack.Screen name="Visits" component={VisitsScreen} />
      <Stack.Screen name="ScheduleVideoVisit" component={ScheduleVideoVisitScreen} />
      <Stack.Screen name="VideoPrejoinCheck" component={VideoPrejoinCheckScreen} />
      <Stack.Screen name="VideoInCall" component={VideoInCallScreen} />
      <Stack.Screen name="VisitSummaryNotes" component={VisitSummaryNotesScreen} />
      <Stack.Screen name="StartAsyncVisit" component={StartAsyncVisitScreen} />
      <Stack.Screen name="AsyncVisitStatus" component={AsyncVisitStatusScreen} />
      <Stack.Screen name="AsyncMoreInfoNeeded" component={AsyncMoreInfoNeededScreen} />
      <Stack.Screen name="RateProviderPharmacy" component={RateProviderPharmacyScreen} />

      {/* 05 Meds & Shop */}
      <Stack.Screen name="MedicationCenter" component={MedicationCenterScreen} />
      <Stack.Screen name="RefillRequest" component={RefillRequestScreen} />
      <Stack.Screen name="ShopCatalog" component={ShopCatalogScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="ShipmentTracking" component={ShipmentTrackingScreen} />

      {/* 06 Messages */}
      <Stack.Screen name="MessagesInbox" component={MessagesInboxScreen} />
      <Stack.Screen name="SecureChat" component={SecureChatScreen} />

      {/* 07 Profile */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
      <Stack.Screen name="MembershipBilling" component={MembershipBillingScreen} />
      <Stack.Screen name="ChangePlan" component={ChangePlanScreen} />
      <Stack.Screen name="CancelOrPause" component={CancelOrPauseScreen} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
      <Stack.Screen name="InvoicesReceipts" component={InvoicesReceiptsScreen} />
      <Stack.Screen name="DocumentsForms" component={DocumentsFormsScreen} />
      <Stack.Screen name="ConsentEsignature" component={ConsentEsignatureScreen} />
      <Stack.Screen name="FamilyMembers" component={FamilyMembersScreen} />
      <Stack.Screen name="AddFamilyMember" component={AddFamilyMemberScreen} />
      <Stack.Screen name="ReferEarn" component={ReferEarnScreen} />
      <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <Stack.Screen name="AccountSecurity" component={AccountSecurityScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />

      {/* Code aliases for backward compatibility */}
      <Stack.Screen name="01-01-Splash" component={SplashScreen} />
      <Stack.Screen name="01-02-Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="01-03-Welcome" component={WelcomeScreen} />
      <Stack.Screen name="01-04-SignUp" component={SignUpScreen} />
      <Stack.Screen name="01-05-LogIn" component={LogInScreen} />
      <Stack.Screen name="01-06-OtpVerification" component={OtpVerificationScreen} />
      <Stack.Screen name="01-07-ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="02-01-GetCarePrograms" component={GetCareProgramsScreen} />
      <Stack.Screen name="02-02-ProgramDetail" component={ProgramDetailScreen} />
      <Stack.Screen name="02-03-AssessmentBranching" component={AssessmentBranchingScreen} />
      <Stack.Screen name="02-04-YouQualifyChoosePlan" component={YouQualifyChoosePlanScreen} />
      <Stack.Screen name="02-05-NotEligible" component={NotEligibleScreen} />
      <Stack.Screen name="02-06-CheckoutPayment" component={CheckoutPaymentScreen} />
      <Stack.Screen name="02-07-IntakeMedicalHistory" component={IntakeMedicalHistoryScreen} />
      <Stack.Screen name="02-08-IntakePhotosId" component={IntakePhotosIdScreen} />
      <Stack.Screen name="02-09-IntakeConsentsVisitType" component={IntakeConsentsVisitTypeScreen} />
      <Stack.Screen name="02-10-SubmittedForReview" component={SubmittedForReviewScreen} />
      <Stack.Screen name="03-01-HomeActionRequired" component={HomeActionRequiredScreen} />
      <Stack.Screen name="03-02-HealthTimeline" component={HealthTimelineScreen} />
      <Stack.Screen name="03-03-LabResultsTrends" component={LabResultsTrendsScreen} />
      <Stack.Screen name="03-04-HealthGoals" component={HealthGoalsScreen} />
      <Stack.Screen name="03-05-NotificationCenter" component={NotificationCenterScreen} />
      <Stack.Screen name="04-01-Visits" component={VisitsScreen} />
      <Stack.Screen name="04-02-ScheduleVideoVisit" component={ScheduleVideoVisitScreen} />
      <Stack.Screen name="04-03-VideoPrejoinCheck" component={VideoPrejoinCheckScreen} />
      <Stack.Screen name="04-04-VideoInCall" component={VideoInCallScreen} />
      <Stack.Screen name="04-05-VisitSummaryNotes" component={VisitSummaryNotesScreen} />
      <Stack.Screen name="04-06-StartAsyncVisit" component={StartAsyncVisitScreen} />
      <Stack.Screen name="04-07-AsyncVisitStatus" component={AsyncVisitStatusScreen} />
      <Stack.Screen name="04-08-AsyncMoreInfoNeeded" component={AsyncMoreInfoNeededScreen} />
      <Stack.Screen name="04-09-RateProviderPharmacy" component={RateProviderPharmacyScreen} />
      <Stack.Screen name="05-01-MedicationCenter" component={MedicationCenterScreen} />
      <Stack.Screen name="05-02-RefillRequest" component={RefillRequestScreen} />
      <Stack.Screen name="05-03-ShopCatalog" component={ShopCatalogScreen} />
      <Stack.Screen name="05-04-ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="05-05-Cart" component={CartScreen} />
      <Stack.Screen name="05-06-MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="05-07-ShipmentTracking" component={ShipmentTrackingScreen} />
      <Stack.Screen name="06-01-MessagesInbox" component={MessagesInboxScreen} />
      <Stack.Screen name="06-02-SecureChat" component={SecureChatScreen} />
      <Stack.Screen name="07-01-Profile" component={ProfileScreen} />
      <Stack.Screen name="07-02-PersonalInformation" component={PersonalInformationScreen} />
      <Stack.Screen name="07-03-MembershipBilling" component={MembershipBillingScreen} />
      <Stack.Screen name="07-04-ChangePlan" component={ChangePlanScreen} />
      <Stack.Screen name="07-05-CancelOrPause" component={CancelOrPauseScreen} />
      <Stack.Screen name="07-06-PaymentMethods" component={PaymentMethodsScreen} />
      <Stack.Screen name="07-07-InvoicesReceipts" component={InvoicesReceiptsScreen} />
      <Stack.Screen name="07-08-DocumentsForms" component={DocumentsFormsScreen} />
      <Stack.Screen name="07-09-ConsentEsignature" component={ConsentEsignatureScreen} />
      <Stack.Screen name="07-10-FamilyMembers" component={FamilyMembersScreen} />
      <Stack.Screen name="07-11-AddFamilyMember" component={AddFamilyMemberScreen} />
      <Stack.Screen name="07-12-ReferEarn" component={ReferEarnScreen} />
      <Stack.Screen name="07-13-NotificationSettings" component={NotificationSettingsScreen} />
      <Stack.Screen name="07-14-AccountSecurity" component={AccountSecurityScreen} />
      <Stack.Screen name="07-15-HelpCenter" component={HelpCenterScreen} />
    </Stack.Navigator>
  );
};
