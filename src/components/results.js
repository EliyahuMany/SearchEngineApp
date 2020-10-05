import React from 'react';
import {View, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Abstract, ResultsDisplay} from '../ui/results';

const Results = ({results}) => {
  const {colors} = useTheme();
  const abstract =
    results.AbstractSource !== '' ? results.AbstractSource : null;

  return (
    <ScrollView>
      <View style={{paddingBottom: 100, backgroundColor: colors.background}}>
        {abstract ? <Abstract results={results} /> : null}
        {results.Results.length ? (
          <ResultsDisplay results={results.Results} title="Results" />
        ) : null}
        {results.RelatedTopics.length ? (
          <ResultsDisplay
            results={results.RelatedTopics}
            title="Related Topics"
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Results;
