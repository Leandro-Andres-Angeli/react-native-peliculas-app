/* eslint-disable react-native/no-inline-styles */
import { Animated, StyleSheet, View } from 'react-native';
import React, { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { GardientContext } from '../context/GardientContext';
import useFade from '../hooks/useFade';
interface Props extends PropsWithChildren {}
const GradientBackground = ({ children }: Props) => {
  const { colors, prevColors, setPreviousColors } = useContext(GardientContext);
  const { opacity, fadeIn, fadeOut } = useFade();
  const fadeInRef = useRef(fadeIn);
  const setPreviousColorsRef = useRef(setPreviousColors);
  const fadeOutRef = useRef(fadeOut);
  useEffect(() => {
    console.log('render');
    fadeInRef.current(() => {
      setPreviousColorsRef.current(colors);
      fadeOutRef.current();
    });
  }, [colors]);

  return (
    // <View style={{ flex: 1, backgroundColor: '#084F6A' }}>{children}</View>
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.lightVibrant, prevColors.darkVibrant, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.7, y: 0.7 }}
      >
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
          <LinearGradient
            colors={[colors.lightVibrant, colors.darkVibrant, 'white']}
            style={{ ...StyleSheet.absoluteFillObject }}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.7, y: 0.7 }}
          >
            {children}
          </LinearGradient>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default GradientBackground;
