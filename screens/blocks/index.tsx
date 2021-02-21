import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlockList } from '../../components/block-list';
import { LoadingMessage } from '../../components/loading-message';
import { useQuery } from '@apollo/client';
import styles from './styles';
import { GET_BLOCKS } from '../../query/get-blocks';

export const BlocksScreen = () => {
  const { loading, error, data } = useQuery(GET_BLOCKS);
  const { navigate } = useNavigation();

  if (loading) return <LoadingMessage message="Loading blocks..." />;
  if (error) return <Text>Error! ${error.message}`</Text>;

  const openBlockDetails = (hash: string) => {
    navigate('BlockDetails', { hash });
  };

  const blockData = data.bitcoin.blocks;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.blockListContainer}>
        <BlockList
          blockData={blockData}
          onBlockHashSelected={(hash) => openBlockDetails(hash)}
        />
      </ScrollView>
    </View>
  );
};
