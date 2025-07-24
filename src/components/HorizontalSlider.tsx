/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';
interface Props {
  title?: string;
  movies: Movie[];
}
const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ height: title ? 280 : 220 }}>
      {title && (
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        horizontal={true}
        renderItem={({ item }) => (
          <MoviePoster movie={item} height={250} width={150} />
        )}
        // horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default HorizontalSlider;
