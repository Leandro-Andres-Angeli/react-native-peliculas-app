/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { MovieFull } from '../interfaces/movieDetails';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
const MovieDetails = ({ movieFull, cast }: Props) => {
  console.log('cast', cast);
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Icon name="star-outline" color="grey" size={16} />

          <Text>{movieFull.vote_average}</Text>
        </View>
        <Text style={{ marginLeft: 5 }}>
          - {movieFull.genres.map(g => g.name).join(' , ')}
        </Text>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text>{movieFull.overview}</Text>

        <Text style={{ fontWeight: 'bold' }}>Presupuesto</Text>
        <Text>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 23,
              marginTop: 10,
              fontWeight: 'bold',
              marginHorizontal: 20,
            }}
          >
            Actores
          </Text>
          <FlatList
            horizontal={true}
            data={cast}
            keyExtractor={item => item.id.toString()}
            style={{ marginHorizontal: 10, height: 70 }}
            renderItem={({ item }) => <CastItem actor={item}></CastItem>}
          ></FlatList>
          {/* <CastItem actor={cast[0]}></CastItem> */}
        </View>
      </View>
    </>
  );
};

export default MovieDetails;
