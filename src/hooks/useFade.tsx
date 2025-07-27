import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(callback ? callback() : null);
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeInRef = useRef(fadeIn);
  useEffect(() => {
    fadeInRef.current();
  }, []);
  return { fadeIn, fadeOut, opacity };
};

export default useFade;
