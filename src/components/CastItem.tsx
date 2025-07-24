/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Cast } from '../interfaces/creditsInterface';
import { Image } from 'react-native';
interface Props {
  actor: Cast;
}
const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image src={uri} style={{ width: 60, height: 60, borderRadius: 10 }} />
      )}

      <View style={{ paddingStart: 5, paddingEnd: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',

    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    height: '95%',
    elevation: 14,
  },
  actorInfo: {
    marginLeft: 10,
  },
});

export default CastItem;
