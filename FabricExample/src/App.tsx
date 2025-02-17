import 'react-native-gesture-handler';

import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStack from './navigation/RootStack';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const linking = {
  prefixes: ['https://rnkcfabricexample.com', 'rnkcfabricexample://'],
  config: {
    initialRouteName: 'EXAMPLES_STACK' as const,
    screens: {
      EXAMPLES_STACK: {
        path: 'examples',
        screens: {
          ANIMATED_EXAMPLE: {
            path: 'animated',
          },
        },
      },
    },
  },
};
const spinner = <ActivityIndicator color="blue" size="large" />;

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={styles.root}>
        <KeyboardProvider statusBarTranslucent>
          <NavigationContainer linking={linking} fallback={spinner}>
            <RootStack />
          </NavigationContainer>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
