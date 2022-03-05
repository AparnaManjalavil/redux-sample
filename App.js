/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {increamentCount} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  let [countValue, setCountValue] = useState(0);
  const {count} = useSelector(state => state.countReducer);
  const increamentCountValue = () => {
    countValue++;
    setCountValue(countValue);
    dispatch(increamentCount(countValue));
  };
  return (
    <View style={styles.container}>
      <Button title="INCREAMENT" onPress={() => increamentCountValue()} />
      <Text>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
