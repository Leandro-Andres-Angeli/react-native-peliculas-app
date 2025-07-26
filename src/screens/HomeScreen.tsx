/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

import useMovies from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-reanimated-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import { getImagesColor } from '../getColores';
import LinearGradient from 'react-native-linear-gradient';
import GradientBackground from '../components/GradientBackground';
// import { useSharedValue } from 'react-native-reanimated';

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const [data, setData] = useState<any>({});
  const { top } = useSafeAreaInsets();
  console.log('home');

  const handleSnapToItem = async (idx: number) => {
    const uri = `https://image.tmdb.org/t/p/w500/${nowPlaying[idx].poster_path}`;
    setData((await getImagesColor(uri)).palette);
    // console.log('snap');
    // getPalette(uri)
    //   .then(res => console.log('res', res))
    //   .catch(err => console.log('err', err));
    // console.log('snap to item');
    // console.log(picAvgColor);
    // setData(picAvgColor);
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', marginTop: top }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
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
            onSnapToItem={async idx => await handleSnapToItem(idx)}
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
    </GradientBackground>
  );
};

export default HomeScreen;
