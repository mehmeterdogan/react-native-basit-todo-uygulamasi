import React from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {SetUser} from '../../redux/Actions/UserAction';

const Profile = () => {
  const useStore = useSelector(state => state.UserReducer);

  const [fullName, setFullName] = React.useState(useStore.fullName);
  const [age, setAge] = React.useState(useStore.age);
  const [job, setJob] = React.useState(useStore.job);
  const [buttonText, setButtonText] = React.useState('Kaydet');

  const dispatch = useDispatch();

  const submit = () => {
    if (!fullName || !age) {
      alert('Lütfen tüm alanları doldurun');
      return;
    }
    setButtonText('Kaydediliyor');
    dispatch(SetUser(fullName, age, job));
    setTimeout(() => {
      setButtonText('Kaydet');
    }, 1500);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text h3 style={{marginVertical: 10}}>
        Profil Güncelleme
      </Text>
      <View style={{width: '80%'}}>
        <Input
          placeholder="Ad Soyad"
          value={fullName}
          onChangeText={text => {
            setFullName(text);
          }}
        />
        <Input
          placeholder="Meslek"
          value={job}
          onChangeText={text => {
            setJob(text);
          }}
        />
        <Input
          placeholder="Yaş"
          value={age}
          onChangeText={text => {
            setAge(text);
          }}
        />
        <Button title={buttonText} onPress={submit} />
      </View>
    </View>
  );
};

export default Profile;
