import React from 'react';
import {Text, View, useColorScheme, LogBox} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/main.navigator.js';

const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={isDarkMode ? DarkTheme : DefaultTheme}
          fallback={
            <View>
              <Text>Loading</Text>
            </View>
          }>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
LogBox.ignoreAllLogs(true);
export default App;
