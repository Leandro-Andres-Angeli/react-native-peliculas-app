import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { GradientProvider } from './src/context/GardientContext';
interface appProps extends PropsWithChildren {}
const AppState = ({ children }: appProps) => {
  return <GradientProvider>{children}</GradientProvider>;
};
const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <AppState>
          <Navigation />
        </AppState>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
