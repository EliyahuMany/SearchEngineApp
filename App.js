import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import MainApp from './src/components';
import Reducers from './src/reducers';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);
const store = createStore(
  persistedReducer,
  // DEV only! - The next line gives Redux DevTool the ability to expose all the store data.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const persistor = persistStore(store);

const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={DefaultTheme}>
          <StatusBar
            backgroundColor={DefaultTheme.colors.background}
            barStyle={'dark-content'}
          />
          <View
            style={{flex: 1, backgroundColor: DefaultTheme.colors.background}}>
            <SafeAreaView style={{flex: 1}}>
              <MainApp />
            </SafeAreaView>
          </View>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
