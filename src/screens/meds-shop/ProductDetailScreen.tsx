import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { ScreenHeader, Button, Card, Badge } from '../../components/UI';
import { CheckCircleIcon, ShoppingBagIcon } from '../../components/Icons';

export const ProductDetailScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [qty, setQty] = useState(1);

  return (
    <ScreenWrapper scrollable={true} screenCode="05-04" screenTitle="Product Detail">
      <ScreenHeader
        title="Product Details"
        onBack={() => navigation.goBack()}
        bgWhite
      />

      <View className="p-4 gap-4">
        {/* Product Image Stage */}
        <View className="h-60 rounded-3xl bg-slate-50 items-center justify-center border border-slate-200">
          <Text className="text-6xl">💧</Text>
        </View>

        <View>
          <Badge label="CELLULAR LONGEVITY" variant="amber" />
          <Text className="text-2xl font-bold text-brand-dark mt-2">NAD+ Sublingual Drops</Text>
          <Text className="text-xl font-extrabold text-brand-green mt-1">$89.00</Text>
          <Text className="text-xs text-brand-muted mt-2 leading-relaxed">
            Pharmaceutical-grade Nicotinamide Adenine Dinucleotide formulated for optimal sublingual absorption to support mitochondrial ATP generation and DNA repair.
          </Text>
        </View>

        <Card className="p-4">
          <Text className="text-sm font-bold text-brand-dark mb-2">Supplement Facts</Text>
          <View className="flex-row items-center mb-1.5">
            <CheckCircleIcon size={16} color="#4B9B44" />
            <Text className="text-xs text-brand-dark ml-2">500mg active NAD+ per serving</Text>
          </View>
          <View className="flex-row items-center mb-1.5">
            <CheckCircleIcon size={16} color="#4B9B44" />
            <Text className="text-xs text-brand-dark ml-2">Fast sublingual mucosal delivery</Text>
          </View>
          <View className="flex-row items-center">
            <CheckCircleIcon size={16} color="#4B9B44" />
            <Text className="text-xs text-brand-dark ml-2">Third-party tested for purity</Text>
          </View>
        </Card>

        <View className="pt-2 gap-3">
          <Button
            label="Add to Cart · $89.00"
            size="lg"
            fullWidth
            icon={<ShoppingBagIcon size={18} color="#FFFFFF" />}
            onPress={() => navigation.navigate('05-05-Cart')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProductDetailScreen;
