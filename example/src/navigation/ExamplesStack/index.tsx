import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ScreenNames } from '../../constants/screenNames';
import KeyboardAnimation from '../../screens/Examples/KeyboardAnimation';
import ReanimatedChat from '../../screens/Examples/ReanimatedChat';
import Events from '../../screens/Examples/Events';
import AwareScrollView from '../../screens/Examples/AwareScrollView';
import StatusBar from '../../screens/Examples/StatusBar';
import LottieAnimation from '../../screens/Examples/Lottie';
import NonUIProps from '../../screens/Examples/NonUIProps';
import InteractiveKeyboard from '../../screens/Examples/InteractiveKeyboard';
import InteractiveKeyboardIOS from '../../screens/Examples/InteractiveKeyboardIOS';
import NativeStack from '../NestedStack';
import KeyboardAvoidingViewExample from '../../screens/Examples/KeyboardAvoidingView';
import ReanimatedChatFlatlist from '../../screens/Examples/ReanimatedChatFlatlist';
import EnabledDisabled from '../../screens/Examples/EnabledDisabled';

export type ExamplesStackParamList = {
  [ScreenNames.ANIMATED_EXAMPLE]: undefined;
  [ScreenNames.REANIMATED_CHAT]: undefined;
  [ScreenNames.EVENTS]: undefined;
  [ScreenNames.AWARE_SCROLL_VIEW]: undefined;
  [ScreenNames.STATUS_BAR]: undefined;
  [ScreenNames.LOTTIE]: undefined;
  [ScreenNames.NON_UI_PROPS]: undefined;
  [ScreenNames.INTERACTIVE_KEYBOARD]: undefined;
  [ScreenNames.INTERACTIVE_KEYBOARD_IOS]: undefined;
  [ScreenNames.NATIVE_STACK]: undefined;
  [ScreenNames.KEYBOARD_AVOIDING_VIEW]: undefined;
  [ScreenNames.ENABLED_DISABLED]: undefined;
};

const Stack = createStackNavigator<ExamplesStackParamList>();

const options = {
  [ScreenNames.ANIMATED_EXAMPLE]: {
    title: 'Keyboard animation ⌨️',
  },
  [ScreenNames.REANIMATED_CHAT]: {
    title: 'Chat',
  },
  [ScreenNames.REANIMATED_CHAT_FLATLIST]: {
    title: 'Chat Flatlist',
  },
  [ScreenNames.EVENTS]: {
    title: 'Events',
  },
  [ScreenNames.AWARE_SCROLL_VIEW]: {
    title: 'Aware scroll view',
  },
  [ScreenNames.STATUS_BAR]: {
    headerShown: false,
    title: 'Status bar manipulation',
  },
  [ScreenNames.LOTTIE]: {
    title: 'Lottie animation',
  },
  [ScreenNames.NON_UI_PROPS]: {
    title: 'Non UI Props',
  },
  [ScreenNames.INTERACTIVE_KEYBOARD]: {
    title: 'Interactive keyboard',
  },
  [ScreenNames.INTERACTIVE_KEYBOARD_IOS]: {
    title: 'Interactive keyboard 🍏',
  },
  [ScreenNames.NATIVE_STACK]: {
    title: 'Native stack',
  },
  [ScreenNames.KEYBOARD_AVOIDING_VIEW]: {
    title: 'KeyboardAvoidingView',
  },
  [ScreenNames.ENABLED_DISABLED]: {
    title: 'Enabled/disabled',
  },
};

const ExamplesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.ANIMATED_EXAMPLE}
      component={KeyboardAnimation}
      options={options[ScreenNames.ANIMATED_EXAMPLE]}
    />
    <Stack.Screen
      name={ScreenNames.REANIMATED_CHAT}
      component={ReanimatedChat}
      options={options[ScreenNames.REANIMATED_CHAT]}
    />
    <Stack.Screen
      name={ScreenNames.REANIMATED_CHAT_FLATLIST}
      component={ReanimatedChatFlatlist}
      options={options[ScreenNames.REANIMATED_CHAT]}
    />
    <Stack.Screen
      name={ScreenNames.EVENTS}
      component={Events}
      options={options[ScreenNames.EVENTS]}
    />
    <Stack.Screen
      name={ScreenNames.AWARE_SCROLL_VIEW}
      component={AwareScrollView}
      options={options[ScreenNames.AWARE_SCROLL_VIEW]}
    />
    <Stack.Screen
      name={ScreenNames.STATUS_BAR}
      component={StatusBar}
      options={options[ScreenNames.STATUS_BAR]}
    />
    <Stack.Screen
      name={ScreenNames.LOTTIE}
      component={LottieAnimation}
      options={options[ScreenNames.LOTTIE]}
    />
    <Stack.Screen
      name={ScreenNames.NON_UI_PROPS}
      component={NonUIProps}
      options={options[ScreenNames.NON_UI_PROPS]}
    />
    <Stack.Screen
      name={ScreenNames.INTERACTIVE_KEYBOARD}
      component={InteractiveKeyboard}
      options={options[ScreenNames.INTERACTIVE_KEYBOARD]}
    />
    <Stack.Screen
      name={ScreenNames.INTERACTIVE_KEYBOARD_IOS}
      component={InteractiveKeyboardIOS}
      options={options[ScreenNames.INTERACTIVE_KEYBOARD_IOS]}
    />
    <Stack.Screen
      name={ScreenNames.NATIVE_STACK}
      component={NativeStack}
      options={options[ScreenNames.NATIVE_STACK]}
    />
    <Stack.Screen
      name={ScreenNames.KEYBOARD_AVOIDING_VIEW}
      component={KeyboardAvoidingViewExample}
      options={options[ScreenNames.KEYBOARD_AVOIDING_VIEW]}
    />
    <Stack.Screen
      name={ScreenNames.ENABLED_DISABLED}
      component={EnabledDisabled}
      options={options[ScreenNames.ENABLED_DISABLED]}
    />
  </Stack.Navigator>
);

export default ExamplesStack;
