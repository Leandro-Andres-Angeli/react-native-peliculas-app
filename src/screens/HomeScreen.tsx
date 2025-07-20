/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import useMovies from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Screen1 = () => (
  <View>
    <Text>Screen 1</Text>
  </View>
);
const Screen2 = () => (
  <View>
    <Text>Screen 2</Text>
  </View>
);
const Drawer = createDrawerNavigator();
const HomeScreen = () => {
  const { peliculasEnCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  // const scrollOffsetValue = useSharedValue<number>(0);
  // const ref = React.useRef<ICarouselInstance>(null);

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', marginTop: top }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>HomeScreen</Text> */}
      <Carousel
        width={350}
        data={peliculasEnCine}
        renderItem={({ item, index }) => (
          <MoviePoster key={index} movie={item} />
        )}
      />

      {/* 
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
};

export default HomeScreen;
