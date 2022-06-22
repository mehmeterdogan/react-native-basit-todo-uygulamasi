import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { SetLogin } from '../../redux/Actions/AutAction';

const Login = () => {
  const [userName,setUserName] = React.useState('');
  const [userPass,setPass] = React.useState('');
  const [isLoading,setLoading] = React.useState("Giriş Yap");

  const dispatch = useDispatch();

  const submit = ()=>{

    if( !userName || !userPass  ){
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    if( userName == "test" && userPass == "123" ){

      setLoading("Giriş Yapılıyor...");
      setTimeout(() => {
        dispatch(SetLogin(true));
      }, 2000);

    }else{
      alert("Girilen bilgiler hatalı");
    }

  }


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text h2 style={{marginVertical:30}}>Todo Login</Text>
      <View style={{width: '80%'}}>
        <Input
        value={userName}
          placeholder="Kullanıcı Adı"
          keyboardType="default"
          autoCapitalize='none'
          onChangeText={(text)=>{setUserName(text)}}
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
        value={userPass}
          placeholder="Şifre"
          onChangeText={(text)=>{setPass(text)}}
          secureTextEntry={true} 
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <Button title={isLoading} onPress={submit} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
