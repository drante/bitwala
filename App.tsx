import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './navigation';

const client = new ApolloClient({
  uri: 'https://graphql.bitquery.io',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar />
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}