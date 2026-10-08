export type RootStackParamList = {
  // Main Tab Navigator
  MainTabs: { screen?: string } | undefined;

  // 01 Auth & Onboarding
  Splash: undefined;
  Onboarding: undefined;
  Welcome: undefined;
  SignUp: undefined;
  LogIn: undefined;
  OtpVerification: undefined;
  ForgotPassword: undefined;

  // 02 Get Care & Intake
  GetCarePrograms: undefined;
  ProgramDetail: { programId?: string } | undefined;
  AssessmentBranching: undefined;
  YouQualifyChoosePlan: undefined;
  NotEligible: undefined;
  CheckoutPayment: undefined;
  IntakeMedicalHistory: undefined;
  IntakePhotosId: undefined;
  IntakeConsentsVisitType: undefined;
  SubmittedForReview: undefined;

  // 03 Home & Health Dashboard
  HomeActionRequired: undefined;
  HealthTimeline: undefined;
  LabResultsTrends: undefined;
  HealthGoals: undefined;
  NotificationCenter: undefined;

  // 04 Visits & Telehealth
  Visits: undefined;
  ScheduleVideoVisit: undefined;
  VideoPrejoinCheck: undefined;
  VideoInCall: undefined;
  VisitSummaryNotes: undefined;
  StartAsyncVisit: undefined;
  AsyncVisitStatus: undefined;
  AsyncMoreInfoNeeded: undefined;
  RateProviderPharmacy: undefined;

  // 05 Meds & Store
  MedicationCenter: undefined;
  RefillRequest: undefined;
  ShopCatalog: undefined;
  ProductDetail: { productId?: string } | undefined;
  Cart: undefined;
  MyOrders: undefined;
  ShipmentTracking: undefined;

  // 06 Messages
  MessagesInbox: undefined;
  SecureChat: { providerName?: string } | undefined;

  // 07 Profile & Settings
  Profile: undefined;
  PersonalInformation: undefined;
  MembershipBilling: undefined;
  ChangePlan: undefined;
  CancelOrPause: undefined;
  PaymentMethods: undefined;
  InvoicesReceipts: undefined;
  DocumentsForms: undefined;
  ConsentEsignature: undefined;
  FamilyMembers: undefined;
  AddFamilyMember: undefined;
  ReferEarn: undefined;
  NotificationSettings: undefined;
  AccountSecurity: undefined;
  HelpCenter: undefined;

  // Directory Gallery Screen
  ScreenGallery: undefined;

  // Code Aliases for backward compatibility
  '01-01-Splash'?: undefined;
  '01-02-Onboarding'?: undefined;
  '01-03-Welcome'?: undefined;
  '01-04-SignUp'?: undefined;
  '01-05-LogIn'?: undefined;
  '01-06-OtpVerification'?: undefined;
  '01-07-ForgotPassword'?: undefined;
  '02-01-GetCarePrograms'?: undefined;
  '02-02-ProgramDetail'?: { programId?: string };
  '02-03-AssessmentBranching'?: undefined;
  '02-04-YouQualifyChoosePlan'?: undefined;
  '02-05-NotEligible'?: undefined;
  '02-06-CheckoutPayment'?: undefined;
  '02-07-IntakeMedicalHistory'?: undefined;
  '02-08-IntakePhotosId'?: undefined;
  '02-09-IntakeConsentsVisitType'?: undefined;
  '02-10-SubmittedForReview'?: undefined;
  '03-01-HomeActionRequired'?: undefined;
  '03-02-HealthTimeline'?: undefined;
  '03-03-LabResultsTrends'?: undefined;
  '03-04-HealthGoals'?: undefined;
  '03-05-NotificationCenter'?: undefined;
  '04-01-Visits'?: undefined;
  '04-02-ScheduleVideoVisit'?: undefined;
  '04-03-VideoPrejoinCheck'?: undefined;
  '04-04-VideoInCall'?: undefined;
  '04-05-VisitSummaryNotes'?: undefined;
  '04-06-StartAsyncVisit'?: undefined;
  '04-07-AsyncVisitStatus'?: undefined;
  '04-08-AsyncMoreInfoNeeded'?: undefined;
  '04-09-RateProviderPharmacy'?: undefined;
  '05-01-MedicationCenter'?: undefined;
  '05-02-RefillRequest'?: undefined;
  '05-03-ShopCatalog'?: undefined;
  '05-04-ProductDetail'?: { productId?: string };
  '05-05-Cart'?: undefined;
  '05-06-MyOrders'?: undefined;
  '05-07-ShipmentTracking'?: undefined;
  '06-01-MessagesInbox'?: undefined;
  '06-02-SecureChat'?: { providerName?: string };
  '07-01-Profile'?: undefined;
  '07-02-PersonalInformation'?: undefined;
  '07-03-MembershipBilling'?: undefined;
  '07-04-ChangePlan'?: undefined;
  '07-05-CancelOrPause'?: undefined;
  '07-06-PaymentMethods'?: undefined;
  '07-07-InvoicesReceipts'?: undefined;
  '07-08-DocumentsForms'?: undefined;
  '07-09-ConsentEsignature'?: undefined;
  '07-10-FamilyMembers'?: undefined;
  '07-11-AddFamilyMember'?: undefined;
  '07-12-ReferEarn'?: undefined;
  '07-13-NotificationSettings'?: undefined;
  '07-14-AccountSecurity'?: undefined;
  '07-15-HelpCenter'?: undefined;
};

export type ScreenMeta = {
  id: keyof RootStackParamList;
  code: string;
  name: string;
  category: string;
  section: number;
};

export const ALL_SCREENS_METADATA: ScreenMeta[] = [
  // 1. Onboarding & Sign-in (7 screens)
  { id: 'Splash', code: '01-01', name: 'Splash', category: 'Onboarding & Sign-in', section: 1 },
  { id: 'Onboarding', code: '01-02', name: 'Onboarding', category: 'Onboarding & Sign-in', section: 1 },
  { id: 'Welcome', code: '01-03', name: 'Welcome', category: 'Onboarding & Sign-in', section: 1 },
  { id: 'SignUp', code: '01-04', name: 'Sign Up', category: 'Onboarding & Sign-in', section: 1 },
  { id: 'LogIn', code: '01-05', name: 'Log In', category: 'Onboarding & Sign-in', section: 1 },
  { id: 'OtpVerification', code: '01-06', name: 'OTP Verification MFA', category: 'Onboarding & Sign-in', section: 1 },
  { id: 'ForgotPassword', code: '01-07', name: 'Forgot Password', category: 'Onboarding & Sign-in', section: 1 },

  // 2. Get Care · Purchase & Intake (10 screens)
  { id: 'GetCarePrograms', code: '02-01', name: 'Get Care Programs', category: 'Get Care & Intake', section: 2 },
  { id: 'ProgramDetail', code: '02-02', name: 'Program Detail', category: 'Get Care & Intake', section: 2 },
  { id: 'AssessmentBranching', code: '02-03', name: 'Assessment Branching', category: 'Get Care & Intake', section: 2 },
  { id: 'YouQualifyChoosePlan', code: '02-04', name: 'You Qualify Choose Plan', category: 'Get Care & Intake', section: 2 },
  { id: 'NotEligible', code: '02-05', name: 'Not Eligible', category: 'Get Care & Intake', section: 2 },
  { id: 'CheckoutPayment', code: '02-06', name: 'Checkout Payment', category: 'Get Care & Intake', section: 2 },
  { id: 'IntakeMedicalHistory', code: '02-07', name: 'Intake Medical History', category: 'Get Care & Intake', section: 2 },
  { id: 'IntakePhotosId', code: '02-08', name: 'Intake Photos ID', category: 'Get Care & Intake', section: 2 },
  { id: 'IntakeConsentsVisitType', code: '02-09', name: 'Intake Consents Visit Type', category: 'Get Care & Intake', section: 2 },
  { id: 'SubmittedForReview', code: '02-10', name: 'Submitted For Review', category: 'Get Care & Intake', section: 2 },

  // 3. Home & Health Record (5 screens)
  { id: 'HomeActionRequired', code: '03-01', name: 'Home Action Required', category: 'Home & Health Record', section: 3 },
  { id: 'HealthTimeline', code: '03-02', name: 'Health Timeline', category: 'Home & Health Record', section: 3 },
  { id: 'LabResultsTrends', code: '03-03', name: 'Lab Results Trends', category: 'Home & Health Record', section: 3 },
  { id: 'HealthGoals', code: '03-04', name: 'Health Goals', category: 'Home & Health Record', section: 3 },
  { id: 'NotificationCenter', code: '03-05', name: 'Notification Center', category: 'Home & Health Record', section: 3 },

  // 4. Visits & Telehealth (9 screens)
  { id: 'Visits', code: '04-01', name: 'Visits', category: 'Visits & Telehealth', section: 4 },
  { id: 'ScheduleVideoVisit', code: '04-02', name: 'Schedule Video Visit', category: 'Visits & Telehealth', section: 4 },
  { id: 'VideoPrejoinCheck', code: '04-03', name: 'Video Prejoin Check', category: 'Visits & Telehealth', section: 4 },
  { id: 'VideoInCall', code: '04-04', name: 'Video In Call', category: 'Visits & Telehealth', section: 4 },
  { id: 'VisitSummaryNotes', code: '04-05', name: 'Visit Summary Notes', category: 'Visits & Telehealth', section: 4 },
  { id: 'StartAsyncVisit', code: '04-06', name: 'Start Async Visit', category: 'Visits & Telehealth', section: 4 },
  { id: 'AsyncVisitStatus', code: '04-07', name: 'Async Visit Status', category: 'Visits & Telehealth', section: 4 },
  { id: 'AsyncMoreInfoNeeded', code: '04-08', name: 'Async More Info Needed', category: 'Visits & Telehealth', section: 4 },
  { id: 'RateProviderPharmacy', code: '04-09', name: 'Rate Provider Pharmacy', category: 'Visits & Telehealth', section: 4 },

  // 5. Medications, Shop & Orders (7 screens)
  { id: 'MedicationCenter', code: '05-01', name: 'Medication Center', category: 'Medications, Shop & Orders', section: 5 },
  { id: 'RefillRequest', code: '05-02', name: 'Refill Request', category: 'Medications, Shop & Orders', section: 5 },
  { id: 'ShopCatalog', code: '05-03', name: 'Shop Catalog', category: 'Medications, Shop & Orders', section: 5 },
  { id: 'ProductDetail', code: '05-04', name: 'Product Detail', category: 'Medications, Shop & Orders', section: 5 },
  { id: 'Cart', code: '05-05', name: 'Cart', category: 'Medications, Shop & Orders', section: 5 },
  { id: 'MyOrders', code: '05-06', name: 'My Orders', category: 'Medications, Shop & Orders', section: 5 },
  { id: 'ShipmentTracking', code: '05-07', name: 'Shipment Tracking', category: 'Medications, Shop & Orders', section: 5 },

  // 6. Messages (2 screens)
  { id: 'MessagesInbox', code: '06-01', name: 'Messages Inbox', category: 'Messages', section: 6 },
  { id: 'SecureChat', code: '06-02', name: 'Secure Chat', category: 'Messages', section: 6 },

  // 7. Profile & Account (15 screens)
  { id: 'Profile', code: '07-01', name: 'Profile', category: 'Profile & Account', section: 7 },
  { id: 'PersonalInformation', code: '07-02', name: 'Personal Information', category: 'Profile & Account', section: 7 },
  { id: 'MembershipBilling', code: '07-03', name: 'Membership Billing', category: 'Profile & Account', section: 7 },
  { id: 'ChangePlan', code: '07-04', name: 'Change Plan', category: 'Profile & Account', section: 7 },
  { id: 'CancelOrPause', code: '07-05', name: 'Cancel Or Pause', category: 'Profile & Account', section: 7 },
  { id: 'PaymentMethods', code: '07-06', name: 'Payment Methods', category: 'Profile & Account', section: 7 },
  { id: 'InvoicesReceipts', code: '07-07', name: 'Invoices Receipts', category: 'Profile & Account', section: 7 },
  { id: 'DocumentsForms', code: '07-08', name: 'Documents Forms', category: 'Profile & Account', section: 7 },
  { id: 'ConsentEsignature', code: '07-09', name: 'Consent E-Signature', category: 'Profile & Account', section: 7 },
  { id: 'FamilyMembers', code: '07-10', name: 'Family Members', category: 'Profile & Account', section: 7 },
  { id: 'AddFamilyMember', code: '07-11', name: 'Add Family Member', category: 'Profile & Account', section: 7 },
  { id: 'ReferEarn', code: '07-12', name: 'Refer Earn', category: 'Profile & Account', section: 7 },
  { id: 'NotificationSettings', code: '07-13', name: 'Notification Settings', category: 'Profile & Account', section: 7 },
  { id: 'AccountSecurity', code: '07-14', name: 'Account Security', category: 'Profile & Account', section: 7 },
  { id: 'HelpCenter', code: '07-15', name: 'Help Center', category: 'Profile & Account', section: 7 },
];
