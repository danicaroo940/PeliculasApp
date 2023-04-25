import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootstackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootstackParams, 'DetailScreen'> {}


export const DetailScreen = ({route, navigation}: Props) => {

  const movie = route.params;
  const uriImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);


  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image 
            source={{uri:uriImage }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
        {
          isLoading 
          ? <ActivityIndicator size={30} color="grey"/>
          : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }
        <TouchableOpacity  
        onPress={() => navigation.pop()}
        style={styles.backButton}>
          <Icon 
            name="arrow-back-outline"
            color="white"
            size={34}
          />
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton:{
    position:'absolute',
    alignItems:'center',
    top: 10,
    left: 20,
    backgroundColor: 'rgba(0, 0, 25, 0.5)',
    width: 60,
    borderRadius: 100,
  },
  imageContainer:{
    width:'100%',
    height:screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
 
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,

  },
  posterImage: {
        flex:1,
    },

    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
},
  subTitle: {
    fontSize:18,
    opacity: 0.8,
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
}
);
