import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.message}>Kayıt TAmamlandı</Text>
      <Text style={styles.label}>Üyenin Adı : {user.userName} </Text>
      <Text style={styles.label}>Üyenin Soyismi : {user.userSurName} </Text>
      <Text style={styles.label}>Üyenin Yaşı: {user.userAge} </Text>
      <Text style={styles.label}>Üyenin Mail: {user.usermail}</Text>
      <Text style={styles.label}>Üyenin Doğum yeri:{user.userHomeTown} </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
  },
  message: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MemberResult;
