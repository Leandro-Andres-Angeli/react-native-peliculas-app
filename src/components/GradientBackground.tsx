/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
interface Props extends PropsWithChildren {}
const GradientBackground = ({ children }: Props) => {
  return (
    // <View style={{ flex: 1, backgroundColor: '#084F6A' }}>{children}</View>
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.7, y: 0.7 }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default GradientBackground;
