/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  StyleSheet,
  DimensionValue,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
interface Props {
  movie: Movie;
  height?: DimensionValue;
  width?: DimensionValue;
}
const MoviePoster = ({ movie, height = '100%', width = '100%' }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', movie)}
      activeOpacity={0.7}
      style={{
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: 20,
      }}
    >
      <Image style={styles.image} src={uri} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    width: '90%',
    height: '95%',
    elevation: 14,
  },
});
export default MoviePoster;
