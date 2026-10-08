import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { CheckIcon, ChevronLeft } from './Icons';

// --- CARD ---
export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}> = ({ children, className = '', style, onPress }) => {
  const content = (
    <View
      className={`bg-white rounded-2xl border border-brand-border p-4 shadow-sm ${className}`}
      style={style}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }
  return content;
};

// --- BUTTON ---
export interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  iconRight,
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-white border-2 border-brand-green';
      case 'ghost':
        return 'bg-transparent';
      case 'danger':
        return 'bg-brand-danger';
      case 'dark':
        return 'bg-brand-dark';
      case 'primary':
      default:
        return 'bg-brand-green';
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'secondary':
      case 'ghost':
        return 'text-brand-green font-semibold';
      case 'primary':
      case 'danger':
      case 'dark':
      default:
        return 'text-white font-semibold';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'py-2 px-3 text-xs';
      case 'lg':
        return 'py-3.5 px-6 text-base';
      case 'md':
      default:
        return 'py-2.5 px-4 text-sm';
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      className={`rounded-full flex-row items-center justify-center ${getVariantStyles()} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50' : ''} ${className}`}
      style={{
        paddingVertical: size === 'sm' ? 8 : size === 'lg' ? 14 : 11,
        paddingHorizontal: size === 'sm' ? 14 : size === 'lg' ? 24 : 18,
      }}
    >
      {icon ? <View className="mr-2">{icon}</View> : null}
      <Text className={`${getTextStyles()} ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}`}>
        {label}
      </Text>
      {iconRight ? <View className="ml-2">{iconRight}</View> : null}
    </TouchableOpacity>
  );
};

// --- BADGE ---
export const Badge: React.FC<{
  label: string;
  variant?: 'green' | 'blue' | 'red' | 'amber' | 'gray';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}> = ({ label, variant = 'green', size = 'sm', icon }) => {
  const getBadgeColors = () => {
    switch (variant) {
      case 'blue':
        return { bg: 'bg-[#EAF3FA]', text: 'text-[#0F6396]' };
      case 'red':
        return { bg: 'bg-[#FEE2E2]', text: 'text-[#DC2626]' };
      case 'amber':
        return { bg: 'bg-[#FEF3C7]', text: 'text-[#D97706]' };
      case 'gray':
        return { bg: 'bg-slate-100', text: 'text-slate-600' };
      case 'green':
      default:
        return { bg: 'bg-[#ECF6EA]', text: 'text-[#4B9B44]' };
    }
  };

  const { bg, text } = getBadgeColors();

  return (
    <View
      className={`flex-row items-center rounded-full px-2.5 py-0.5 ${bg}`}
      style={{ alignSelf: 'flex-start' }}
    >
      {icon ? <View className="mr-1">{icon}</View> : null}
      <Text className={`font-semibold text-xs ${text}`}>{label}</Text>
    </View>
  );
};

// --- CHIP ---
export const Chip: React.FC<{
  label: string;
  selected?: boolean;
  onPress?: () => void;
}> = ({ label, selected = false, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`rounded-full px-4 py-2 border mr-2 mb-2 ${
        selected ? 'bg-brand-green border-brand-green' : 'bg-white border-brand-border'
      }`}
    >
      <Text
        className={`text-xs font-semibold ${
          selected ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// --- INPUT FIELD ---
export const InputField: React.FC<{
  label?: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  hint?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  multiline?: boolean;
  numberOfLines?: number;
}> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  hint,
  icon,
  rightIcon,
  multiline = false,
  numberOfLines = 1,
}) => {
  return (
    <View className="mb-3 w-full">
      {label ? (
        <Text className="text-xs font-semibold text-brand-dark mb-1.5">{label}</Text>
      ) : null}
      <View
        className={`flex-row items-center bg-white border border-brand-border rounded-xl px-3.5 ${
          multiline ? 'py-2.5 min-h-[96px] items-start' : 'h-12'
        }`}
      >
        {icon ? <View className="mr-2">{icon}</View> : null}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          className="flex-1 text-sm text-brand-dark p-0"
          style={{ textAlignVertical: multiline ? 'top' : 'center' }}
        />
        {rightIcon ? <View className="ml-2">{rightIcon}</View> : null}
      </View>
      {hint ? <Text className="text-xs text-brand-muted mt-1">{hint}</Text> : null}
    </View>
  );
};

// --- TOGGLE SWITCH ---
export const ToggleSwitch: React.FC<{
  checked: boolean;
  onToggle: () => void;
}> = ({ checked, onToggle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
      className={`w-11 h-6 rounded-full justify-center px-0.5 ${
        checked ? 'bg-brand-green' : 'bg-slate-300'
      }`}
    >
      <View
        className={`w-5 h-5 rounded-full bg-white shadow-sm transition-all ${
          checked ? 'self-end' : 'self-start'
        }`}
      />
    </TouchableOpacity>
  );
};

// --- RADIO OPTION ---
export const RadioOption: React.FC<{
  label: string;
  sublabel?: string;
  selected: boolean;
  onSelect: () => void;
  price?: string;
}> = ({ label, sublabel, selected, onSelect, price }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onSelect}
      className={`flex-row items-center p-3.5 rounded-xl border mb-2.5 ${
        selected
          ? 'bg-[#F6FBF5] border-brand-green'
          : 'bg-white border-brand-border'
      }`}
    >
      <View
        className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-3 ${
          selected ? 'border-brand-green' : 'border-slate-300'
        }`}
      >
        {selected ? (
          <View className="w-2.5 h-2.5 rounded-full bg-brand-green" />
        ) : null}
      </View>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-brand-dark">{label}</Text>
        {sublabel ? (
          <Text className="text-xs text-brand-muted mt-0.5">{sublabel}</Text>
        ) : null}
      </View>
      {price ? (
        <Text className="text-sm font-bold text-brand-green">{price}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

// --- CHECKBOX OPTION ---
export const CheckboxOption: React.FC<{
  label: string;
  sublabel?: string;
  checked: boolean;
  onToggle: () => void;
}> = ({ label, sublabel, checked, onToggle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
      className={`flex-row items-start p-3.5 rounded-xl border mb-2.5 ${
        checked
          ? 'bg-[#F6FBF5] border-brand-green'
          : 'bg-white border-brand-border'
      }`}
    >
      <View
        className={`w-5 h-5 rounded-md border-2 items-center justify-center mr-3 mt-0.5 ${
          checked ? 'bg-brand-green border-brand-green' : 'border-slate-300 bg-white'
        }`}
      >
        {checked ? <CheckIcon size={12} color="#FFFFFF" /> : null}
      </View>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-brand-dark">{label}</Text>
        {sublabel ? (
          <Text className="text-xs text-brand-muted mt-0.5">{sublabel}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

// --- PROGRESS BAR ---
export const ProgressBar: React.FC<{
  progress: number; // 0 to 1
  height?: number;
  color?: string;
  bgColor?: string;
}> = ({ progress, height = 6, color = '#4B9B44', bgColor = '#E2E8F0' }) => {
  const percentage = Math.min(Math.max(progress, 0), 1) * 100;
  return (
    <View
      style={{ height, backgroundColor: bgColor, borderRadius: height / 2 }}
      className="w-full overflow-hidden"
    >
      <View
        style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: height / 2,
        }}
      />
    </View>
  );
};

// --- STEPPER ---
export const Stepper: React.FC<{
  steps: string[];
  currentStep: number;
}> = ({ steps, currentStep }) => {
  return (
    <View className="flex-row items-center w-full my-3 px-1">
      {steps.map((step, index) => {
        const isDone = index < currentStep;
        const isCur = index === currentStep;

        return (
          <React.Fragment key={index}>
            <View className="items-center">
              <View
                className={`w-7 h-7 rounded-full items-center justify-center ${
                  isDone
                    ? 'bg-brand-green'
                    : isCur
                    ? 'bg-brand-dark'
                    : 'bg-slate-200'
                }`}
              >
                {isDone ? (
                  <CheckIcon size={14} color="#FFFFFF" />
                ) : (
                  <Text
                    className={`text-xs font-bold ${
                      isCur ? 'text-white' : 'text-slate-500'
                    }`}
                  >
                    {index + 1}
                  </Text>
                )}
              </View>
              <Text
                className={`text-[10px] mt-1 font-medium ${
                  isCur ? 'text-brand-dark font-bold' : isDone ? 'text-brand-green' : 'text-slate-400'
                }`}
                numberOfLines={1}
              >
                {step}
              </Text>
            </View>
            {index < steps.length - 1 ? (
              <View
                className={`flex-1 h-0.5 mx-1.5 mb-3.5 ${
                  isDone ? 'bg-brand-green' : 'bg-slate-200'
                }`}
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </View>
  );
};

// --- SCREEN HEADER ---
export const ScreenHeader: React.FC<{
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  bgWhite?: boolean;
}> = ({ title, subtitle, onBack, rightAction, bgWhite = false }) => {
  return (
    <View
      className={`px-4 pt-3 pb-3 flex-row items-center justify-between border-b border-brand-border ${
        bgWhite ? 'bg-white' : 'bg-brand-bg'
      }`}
    >
      <View className="flex-row items-center flex-1 pr-2">
        {onBack ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onBack}
            className="w-9 h-9 rounded-xl bg-white border border-brand-border items-center justify-center mr-3 shadow-xs"
          >
            <ChevronLeft size={18} color="#04152A" />
          </TouchableOpacity>
        ) : null}
        <View className="flex-1">
          <Text className="text-lg font-bold text-brand-dark" numberOfLines={1}>
            {title}
          </Text>
          {subtitle ? (
            <Text className="text-xs text-brand-muted mt-0.5" numberOfLines={1}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>
      {rightAction ? <View>{rightAction}</View> : null}
    </View>
  );
};
