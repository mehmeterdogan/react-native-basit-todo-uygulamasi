import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {setTodo} from '../../redux/Actions/TodoAction';

const Home = () => {
  const userStore = useSelector(state => state.UserReducer);
  const todoStore = useSelector(state => state.TodoReducer);

  const dispatch = useDispatch();

  const [listText, setListText] = React.useState('');

  //dublicate control
  const duplicate = (arr = [], title) => {
    return arr.find(item => item.title == title);
  };

  const handleAdd = todo => {
    if (duplicate(todoStore.list, todo) != undefined) {
      alert('Bu todo zaten eklenmiş!');
      return;
    }

    let newTodos = [{title: todo, status: 1}, ...todoStore.list];
    dispatch(setTodo(newTodos));
  };

  //new todo add
  const submit = () => {
    if (listText == '') return false;
    handleAdd(listText);
    setListText('');
  };

  //status change todo
  const todoStatus = title => {
    let array = [];
    todoStore.list.map(item => {
      if (item.title == title) {
        array.push({title: item.title, status: item.status == 1 ? 0 : 1});
      } else {
        array.push({title: item.title, status: item.status});
      }
    });
    dispatch(setTodo(array));
  };

  //delete todo
  const todoDelete = todoIndex => {
    let array = [];
    todoStore.list.map((item, index) => {
      if (todoIndex != index) {
        array.push({title: item.title, status: item.status});
      }
    });
    dispatch(setTodo(array));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '90%'}}>
        <View style={{marginBottom: 40}}>
          <Text h4>Ad Soyad: {userStore.fullName}</Text>
          <Text h4>Meslek: {userStore.job}</Text>
          <Text h4>Yaş: {userStore.age}</Text>
        </View>

        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Input
            placeholder="Görev Ekle"
            value={listText}
            onChangeText={text => {
              setListText(text);
            }}
          />
          <Button
            title="Ekle"
            onPress={item => {
              submit();
            }}
          />
        </View>
        <View style={{padding: 2, height: 400}}>
          <ScrollView>
            {todoStore.list.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    borderColor: 'lightgrey',
                    borderWidth: 0.5,
                    marginVertical: 10,
                  }}>
                  <Text
                    style={{padding: 10, alignSelf: 'center', width: '13%',color:"darkgrey",fontSize:17}}>
                    {index + 1})
                  </Text>
                  <Text
                    style={[
                      {
                        padding: 10,
                        alignSelf: 'center',
                        width: '65%',
                      },
                      item.status != 1
                        ? {textDecorationLine: 'line-through'}
                        : null,
                    ]}
                    h4>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      padding: 2,
                      alignSelf: 'center',
                      flexDirection: 'row',
                      width: '20%',
                    }}>
                    <Button
                      style={{margin: 2}}
                      type="clear"
                      title=""
                      icon={
                        <Icon
                          name={item.status == 0 ? 'eye-slash' : 'eye'}
                          size={15}
                          color="black"
                        />
                      }
                      onPress={() => todoStatus(item.title)}
                    />
                    <Button
                      style={{margin: 2}}
                      type="clear"
                      title=""
                      icon={<Icon name="trash-o" size={15} color="black" />}
                      onPress={() => todoDelete(index)}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
