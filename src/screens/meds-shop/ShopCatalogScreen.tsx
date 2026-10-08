import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Card, Button, Badge } from '../../components/UI';
import { ShoppingBagIcon, StarIcon } from '../../components/Icons';

export const ShopCatalogScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const products = [
    {
      id: 'nad-plus',
      name: 'NAD+ Sublingual Drops',
      desc: 'Cellular energy & longevity support',
      price: '$89.00',
      badge: 'POPULAR',
      variant: 'amber' as const,
    },
    {
      id: 'lipotropic-b12',
      name: 'MIC B12 Lipotropic',
      desc: 'Metabolism boost & liver support',
      price: '$65.00',
      badge: 'CLINICAL',
      variant: 'green' as const,
    },
    {
      id: 'glutathione',
      name: 'Glutathione 500mg',
      desc: 'Master antioxidant & detoxifier',
      price: '$79.00',
      badge: 'IMMUNITY',
      variant: 'blue' as const,
    },
    {
      id: 'electrolytes',
      name: 'Zero-Sugar Electrolytes',
      desc: '30-pack for GLP-1 hydration',
      price: '$34.00',
      badge: 'ESSENTIAL',
      variant: 'gray' as const,
    },
  ];

  return (
    <ScreenWrapper scrollable={true} screenCode="05-03" screenTitle="Shop Catalog">
      <ScreenHeader
        title="Wellness Shop"
        onBack={() => navigation.goBack()}
        bgWhite
        rightAction={
          <TouchableOpacity
            onPress={() => navigation.navigate('05-05-Cart')}
            className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 items-center justify-center relative"
          >
            <ShoppingBagIcon size={18} color="#04152A" />
            <View className="absolute -top-1 -right-1 bg-brand-green rounded-full px-1.5 py-0.2">
              <Text className="text-white text-[9px] font-bold">2</Text>
            </View>
          </TouchableOpacity>
        }
      />

      <View className="p-4 gap-4">
        <Text className="text-sm font-bold text-brand-dark">Doctor-Formulated Supplements</Text>

        <View className="flex-row flex-wrap justify-between">
          {products.map((p) => (
            <TouchableOpacity
              key={p.id}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('05-04-ProductDetail', { productId: p.id })}
              className="w-[48%] bg-white rounded-2xl border border-brand-border p-3.5 mb-3 shadow-xs justify-between"
            >
              <View>
                <View className="h-28 bg-slate-50 rounded-xl items-center justify-center mb-2">
                  <Text className="text-3xl">💊</Text>
                </View>
                <Badge label={p.badge} variant={p.variant} />
                <Text className="text-sm font-bold text-brand-dark mt-1.5" numberOfLines={1}>
                  {p.name}
                </Text>
                <Text className="text-[11px] text-brand-muted mt-0.5" numberOfLines={2}>
                  {p.desc}
                </Text>
              </View>
              <View className="flex-row items-baseline justify-between pt-2.5 mt-2 border-t border-slate-100">
                <Text className="text-sm font-extrabold text-brand-dark">{p.price}</Text>
                <Text className="text-xs font-bold text-brand-green">+ Add</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Button
          label="View Cart (2 Items · $154.00)"
          size="lg"
          fullWidth
          onPress={() => navigation.navigate('05-05-Cart')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ShopCatalogScreen;
