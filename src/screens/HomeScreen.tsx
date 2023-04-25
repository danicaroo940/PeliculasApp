
import React, {useContext} from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';


import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackgroud } from '../components/GradientBackgroud';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

const { isLoading, nowPlaying, popular,topRated,upcoming } = useMovies();
const { top } = useSafeAreaInsets();
const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uriImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { primary = 'green', secondary = 'orange' } = await getImageColors( uriImage );
    setMainColors({ primary, secondary });
  };
  useEffect(() => {
    if (nowPlaying.length > 0){
      getPosterColors(0);
    }

  }, [nowPlaying]);
  
  if (isLoading) {
    return (
      <View style ={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator color="cyan" size={ 100 }/>
      </View>
    );
  }
  return (
    <GradientBackgroud>
      <ScrollView>

      <View style={{marginTop: top + 20}}>

        {/* Carousel Principal */}
        
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlaying }    
            renderItem={ ({item}: any) => <MoviePoster  movie={ item }/> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            inactiveSlideOpacity={1}
            onSnapToItem={ index => getPosterColors( index )}
          />
        </View>

        <HorizontalSlider movies={ popular } title="Populares"/>
        <HorizontalSlider movies={ topRated } title="Top Rated"/>
        <HorizontalSlider movies={ upcoming } title="Upcoming"/>



      </View>
      </ScrollView>
    </GradientBackgroud>
    
  );
};
