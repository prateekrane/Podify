import colors from '../utils/colors';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
  progress: number;
}

const Progress: FC<Props> = ({progress}) => {
  return (
    <>
      <Text style={styles.title}>{`${progress}%`}</Text>
      <View style={[styles.progressBar, {width: `${progress}%`}]} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#07437B',
    paddingVertical: 2,
    alignSelf: 'flex-end',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#07437B',
    borderRadius: 5,
  },
});

export default Progress;
