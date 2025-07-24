/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParms } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import useMovieDetails from '../hooks/useMovieDetails';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieDetails from '../components/MovieDetails';

const height = Dimensions.get('window').height;
interface Props extends StackScreenProps<RootStackParms, 'Details'> {}
const DetailScreen = ({ navigation, route: { params } }: Props) => {
  const movie = params;
  const { cast, movieFull, isLoading } = useMovieDetails(movie.id);

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <ScrollView style={styles.movieDetails}>
      <View style={styles.imageContainer}>
        <Image src={uri} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        {isLoading || !movieFull ? (
          <ActivityIndicator color="red" size={30} />
        ) : (
          <MovieDetails {...{ movieFull, cast }} />
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon color={'white'} name="arrow-back-outline" size={40} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieDetails: {
    flex: 1,
    minHeight: height,
  },

  imageContainer: {
    height: height * 0.7,
    width: '100%',

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  posterImage: {
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    height: '100%',
    flex: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  marginContainer: { marginHorizontal: 20, marginTop: 20 },
  subTitle: {
    fontSize: 18,
    fontWeight: 'light',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    padding: 10,
    top: 30,
    left: 20,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: 'trasparent',
    backgroundColor: 'cyan',
  },
});

export default DetailScreen;
