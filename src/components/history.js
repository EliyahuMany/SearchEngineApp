import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {SearchCell} from '../ui/history';

const History = (props) => {
  const historyState = useSelector((state) => state.history);
  const history = historyState.list;
  const {colors} = useTheme();

  return history.length ? (
    <ScrollView>
      {history.map((search, index) => {
        return (
          <SearchCell
            key={index}
            search={search}
            divider={history.length > index + 1}
          />
        );
      })}
    </ScrollView>
  ) : (
    <View style={styles.empty}>
      <Text>History is empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  empty: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default History;
