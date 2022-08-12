import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {
  function goToMehberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMehberSign} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Welcome;
