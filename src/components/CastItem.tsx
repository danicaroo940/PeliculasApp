import React from 'react';
import { Cast } from '../interfaces/creditInterface';
import { Text, View, Image, StyleSheet } from 'react-native';

interface Props {
  actor: Cast
}

export const CastItem = ({actor}:Props) => {

  const uriImage = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {
        actor.profile_path && (
          <Image 
            source={{uri: uriImage}}
            style={{width: 50, height: 50, borderRadius: 10}}
          />
        )
      }
      <View style={styles.actorinfo}>
        <Text style={{ fontSize:18, fontWeight: 'bold' }}>
          {actor.name}
        </Text>
        <Text style={{ fontSize:16, opacity: 0.7 }}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      height:50,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 5,
      marginHorizontal: 10,
      paddingRight: 15,

    },
    actorinfo:{
      marginLeft: 10,

    }
});
