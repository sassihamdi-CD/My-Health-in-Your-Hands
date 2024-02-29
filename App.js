import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_ZXhhY3Qta29pLTIyLmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <SafeAreaView style={styles.container}>
      <SignedIn>
        <Text> You are signed in</Text>
      </SignedIn>
      <SignedOut>
        <Text>You are signed out</Text>
      </SignedOut>  
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
});
