import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import LoginScreen from './LoginScreen';

const OnboardingScreen = ({navigation}) => {
  return (
<Onboarding

    onDone={()=> navigation.navigate('Login')}
  pages={[
    {
      backgroundColor: 'green',
    //   image: <Image source={require('../assets/mymy.jpg')} />,
      title: 'Amazon Clone',
      subtitle: 'One Big Engineer',
    },
    {
        backgroundColor: '#ff4',
        // image: <Image source={require("https://pngimg.com/uploads/amazon/amazon_PNG25.png")} />,
        title: 'Welcome To Amazon',
        subtitle: 'Tambua Evaristus',
      },
      {
        backgroundColor: 'orange',
        // image: <Image source={require('../assets/mymy.jpg')} />,
        title: 'Feel free to go Any where',
        subtitle: 'Tambua Evaristus',
      },
  ]}
/>  )
}

export default OnboardingScreen