import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StatusBar,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { ScreenSwitcherSheet } from './ScreenSwitcherSheet';

export interface ScreenWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
  bg?: string;
  screenCode?: string;
  screenTitle?: string;
  statusBarStyle?: 'light-content' | 'dark-content';
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  scrollable = true,
  bg = 'bg-brand-bg',
  screenCode,
  screenTitle,
  statusBarStyle,
  edges,
  contentContainerStyle,
  style,
}) => {
  const [switcherVisible, setSwitcherVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const tabBarHeight = React.useContext(BottomTabBarHeightContext);
  const isInsideTabBar = tabBarHeight !== undefined;

  const applyTop = !edges || edges.includes('top');
  const applyBottom = edges ? edges.includes('bottom') : !isInsideTabBar;
  const applyLeft = !edges || edges.includes('left');
  const applyRight = !edges || edges.includes('right');

  const topInset = applyTop
    ? Math.max(insets.top, Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0)
    : 0;
  const bottomInset = applyBottom ? insets.bottom : 0;
  const leftInset = applyLeft ? insets.left : 0;
  const rightInset = applyRight ? insets.right : 0;

  const isDarkBg =
    bg?.includes('brand-green') ||
    bg?.includes('brand-dark') ||
    bg?.includes('bg-black');
  const activeBarStyle =
    statusBarStyle || (isDarkBg ? 'light-content' : 'dark-content');

  return (
    <View
      className={`flex-1 ${bg}`}
      style={[
        {
          paddingTop: topInset,
          paddingLeft: leftInset,
          paddingRight: rightInset,
        },
        style,
      ]}
    >
      <StatusBar barStyle={activeBarStyle} />

      {/* Screen code indicator & Quick switch button */}
      {screenCode ? (
        <View className="bg-white/90 border-b border-brand-border px-4 py-1.5 flex-row items-center justify-between z-10">
          <View className="flex-row items-center">
            <View className="bg-emerald-100 rounded px-1.5 py-0.5 mr-2">
              <Text className="text-[10px] font-bold text-brand-green">{screenCode}</Text>
            </View>
            <Text className="text-xs font-medium text-brand-dark" numberOfLines={1}>
              {screenTitle || ''}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setSwitcherVisible(true)}
            activeOpacity={0.8}
            className="bg-brand-green/10 px-2 py-0.5 rounded-full"
          >
            <Text className="text-[11px] font-semibold text-brand-green">⚡ All Screens</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {scrollable ? (
        <ScrollView
          className="flex-1"
          contentContainerStyle={[
            {
              paddingBottom: 40 + (isInsideTabBar ? 24 : Math.max(bottomInset, 20)),
            },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          className="flex-1"
          style={{
            paddingBottom: isInsideTabBar ? 0 : Math.max(bottomInset, 16),
          }}
        >
          {children}
        </View>
      )}

      {/* Floating launcher trigger if no screenCode header */}
      {!screenCode && (
        <TouchableOpacity
          onPress={() => setSwitcherVisible(true)}
          activeOpacity={0.85}
          style={{
            bottom: (isInsideTabBar ? 64 : Math.max(bottomInset, 16)) + 12,
          }}
          className="absolute right-4 bg-brand-dark px-3 py-2 rounded-full shadow-lg flex-row items-center border border-white/20 z-50"
        >
          <Text className="text-xs font-bold text-white">📱 55 Screens</Text>
        </TouchableOpacity>
      )}

      <ScreenSwitcherSheet
        visible={switcherVisible}
        onClose={() => setSwitcherVisible(false)}
      />
    </View>
  );
};
