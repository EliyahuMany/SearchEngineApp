import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import Results from './results';
import {search} from '../utils/api';
import {addSearch} from '../actions/history';
import {useDispatch} from 'react-redux';

const Search = ({route}) => {
  const {colors} = useTheme();
  const [text, setText] = useState('');
  const [results, setResults] = useState();
  const [emptyResults, setEmptyResults] = useState(false);
  const [notFoundText, setNotFoundText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params) {
      setText(route.params.value);
      search(route.params.value).then((res) => {
        if (res && res.AbstractSource) {
          setResults(res);
          setEmptyResults(false);
        } else {
          setEmptyResults(true);
          setNotFoundText(text);
        }
      });
    }
  }, [route.params]);

  const submitHandler = () => {
    search(text).then((res) => {
      dispatch(addSearch(text));
      if (res && res.AbstractSource) {
        setResults(res);
        setEmptyResults(false);
      } else {
        setEmptyResults(true);
        setNotFoundText(text);
      }
    });
  };

  return (
    <View>
      <SearchBar
        round={true}
        placeholder="Search..."
        containerStyle={{
          backgroundColor: colors.background,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{backgroundColor: colors.card}}
        onChangeText={setText}
        value={text}
        onSubmitEditing={submitHandler}
      />
      {emptyResults ? (
        <View style={styles.empty}>
          <Text style={{color: colors.text, fontSize: 16}}>
            No result for "{notFoundText}"
          </Text>
        </View>
      ) : results ? (
        <Results results={results} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  empty: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
