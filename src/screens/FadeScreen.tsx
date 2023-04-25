import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';


export const FadeScreen = () => {
  const {fadeIn,fadeOut,opacity} = useFade();

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: 'grey', 
      justifyContent:'center', 
      alignItems: 'center' }}>
      <Animated.View 
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10,
        }}
      />

      <Button 
        title="Fade in"
        onPress={fadeIn}
        />
          <Button 
        title="Fade OUT"
        onPress={fadeOut}
        />
    </View>
  );
};
