import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {
    animasi();


    const unsubscribe = getData('user').then(res => {
      // console.log(res);
      if (!res) {
        // console.log('beum login');

        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      } else {
        console.log('sudah login logon');

        setTimeout(() => {
          navigation.replace('Home');
        }, 1500);
      }
    });
  }, []);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
          source={require('../../assets/splash.png')}
          style={
            {
              width: 300,
              height: 400,
            }
          }
        />

      </View>
      <ActivityIndicator size="large" color={colors.primary} />
      <View style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
          source={require('../../assets/akses.png')}
          style={
            {
              width: 200,
              height: 60,
            }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
