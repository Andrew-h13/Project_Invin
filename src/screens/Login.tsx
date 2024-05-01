/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to Inven</Text>
      </View>
      <View>
        <View>
          <Button
            title="Log in"
            color="#8a9098"
            onPress={() => Alert.alert('Log-in')}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('sign up')}>
            <Text>Sign Up Today</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
