import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GradientBackground from './src/components/GradientBackground';
interface appProps extends PropsWithChildren {}
const AppState = ({ children }: appProps) => {
  return <GradientBackground>{children}</GradientBackground>;
};
const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
