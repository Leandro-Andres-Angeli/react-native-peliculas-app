import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
interface Props {
  movie: Movie;
}
const MoviePoster = ({ movie }: Props) => {
  console.log('movie', movie);
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <View style={{ width: 300, height: 420 }}>
      <Text>MoviePoster</Text>

      <Image style={styles.image} src={uri} />
      {/* <Image /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});
export default MoviePoster;
