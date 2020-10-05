import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableHighlight,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const Abstract = ({results}) => {
  const {colors} = useTheme();
  const [showMore, setShowMore] = useState(false);

  return (
    <TouchableHighlight
      activeOpacity={0.7}
      underlayColor={colors.background}
      onPress={() => {
        if (results.AbstractText && !showMore) {
          setShowMore(true);
        } else {
          Linking.openURL(results.AbstractURL);
        }
      }}
      onLongPress={() => {
        if (results.AbstractText && showMore) {
          setShowMore(false);
        }
      }}>
      <View style={[styles.card, {backgroundColor: colors.card}]}>
        <Text style={styles.abstract}>
          {results.Heading} - {results.AbstractSource}
        </Text>
        {results.AbstractText ? (
          <Text numberOfLines={showMore ? 0 : 5}>{results.AbstractText}</Text>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

export const ResultsDisplay = ({results, title}) => {
  const {colors} = useTheme();

  return (
    <View style={{paddingTop: 15, paddingBottom: 15}}>
      <Text style={[styles.headline, {color: colors.text}]}>{title}</Text>
      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.card,
            borderWidth: 2,
            borderColor: colors.background,
          },
        ]}>
        {results.map((result, index) => (
          <Result
            key={index}
            result={result}
            border={results.length > index + 1}
          />
        ))}
      </View>
    </View>
  );
};

const Result = ({result, border}) => {
  const {colors} = useTheme();

  return result.Topics ? (
    result.Topics.length ? (
      <View>
        <ResultsDisplay results={result.Topics} title={result.Name} />
        {border ? (
          <View style={[styles.divider, {borderColor: colors.border}]} />
        ) : null}
      </View>
    ) : null
  ) : (
    <View>
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={colors.background}
        onPress={() => Linking.openURL(result.FirstURL)}>
        <Text style={[styles.cell, {color: colors.text}]}>{result.Text}</Text>
      </TouchableHighlight>
      {border ? (
        <View style={[styles.divider, {borderColor: colors.border}]} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  divider: {
    marginStart: 30,
    marginEnd: 30,
    borderBottomWidth: 1,
  },
  cell: {
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingStart: 20,
  },
  abstract: {fontSize: 18, fontWeight: 'bold'},
});
