/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import useMovies from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-reanimated-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
// import { useSharedValue } from 'react-native-reanimated';

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', marginTop: top }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Carousel
          width={Dimensions.get('window').width * 0.8}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: Dimensions.get('window').height * 0.65,
          }}
          data={nowPlaying}
          loop={true}
          snapEnabled={true}
          pagingEnabled={true}
          renderItem={({ item, index }) => (
            <MoviePoster key={index} movie={item} />
          )}
        />
        <HorizontalSlider title={'Populares'} movies={popular} />
        <HorizontalSlider title={'Top Rated'} movies={topRated} />
        <HorizontalSlider title={'Upcoming'} movies={upcoming} />
        {/* <HorizontalSlider title={'En cine'} movies={peliculasEnCine} /> */}

        {/* 
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('Details')}
      /> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
