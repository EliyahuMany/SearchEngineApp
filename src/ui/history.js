import React from 'react';
import {useTheme, useNavigation} from '@react-navigation/native';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';

export const SearchCell = ({search, divider}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={colors.background}
      onPress={() => navigation.navigate('Search', {value: search})}>
      <View>
        <Text
          style={[
            styles.text,
            {color: colors.text, backgroundColor: colors.card},
          ]}>
          {search}
        </Text>
        {divider ? (
          <View style={[styles.divider, {borderBottomColor: colors.border}]} />
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  divider: {marginBottom: 2},
  text: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});
