import React, {useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurName, setUserSurName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [usermail, setUserMail] = useState(null);
  const [userHomeTown, setUserHomeTown] = useState(null);
  function handlerSumbit() {
    if (!userName || !userSurName || !userAge || !userHomeTown || !usermail) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş birakilamaz!');
      return;
    }
    const user = {
      userName,
      userSurName,
      userAge,
      userHomeTown,
      usermail,
    };
    navigation.navigate('MemberResultScreen', {user});

    console.log(user);
  }

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder={'Üyenin ismnini giriniz...'}
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder={'Üyenin soyismini giriniz...'}
        onChangeText={setUserSurName}
      />
      <Input
        label="Üye Yaşı"
        placeholder={'Üyenin yaşını giriniz...'}
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder={'Üyenin e-posta adresini giriniz...'}
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Doğum Yeri"
        placeholder={'Üyenin doğum yerini giriniz...'}
        onChangeText={setUserHomeTown}
      />
      <Button text="Kaydı Tamamla" onPress={handlerSumbit} />
    </SafeAreaView>
  );
}

export default MemberSign;
