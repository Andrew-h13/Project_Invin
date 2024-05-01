import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Inven</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <Button
            title="Log in"
            color="#8a9098"
            onPress={() => Alert.alert('Log-in')}
          />
        </View>
        <View style={styles.buttonStyle1}>
          <TouchableOpacity onPress={() => Alert.alert('sign up')}>
            <Text>Sign Up Today</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonStyle: {
    marginBottom: 20,
    width: 200,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
  },
  buttonBar: {
    flexDirection: 'row',
  },
  buttonStyle1: {
    width: 200,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8.5,
    backgroundColor: '#8a9098',
  },
});

export default App;
