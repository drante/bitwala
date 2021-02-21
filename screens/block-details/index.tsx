import { useQuery } from '@apollo/client';
import React from 'react';
import { View, Text } from 'react-native'
import { LoadingMessage } from '../../components';
import { GET_BLOCK } from '../../query/get-block'

import styles from './styles'

interface BlockDetailsScreenProps {
  route: { params: { hash: string } }
}

interface SectionProps {
  title: string,
  value: string,
}

export const BlockDetailsScreen = ({ route }: BlockDetailsScreenProps) => {
  const { hash } = route.params
  const { loading, error, data } = useQuery(GET_BLOCK, { variables: { hash } });

  if (loading) return <LoadingMessage message="Loading block..." />;
  if (error) return <Text>Error! ${error.message}`</Text>;

  const blockData = data.bitcoin.blocks[0]

  const Section = ({ title, value }: SectionProps) => (
    <View style={styles.section}>
      <Text style={styles.blockSectionTitle}>{title}</Text>
      <Text>{value}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Section title="Hash" value={blockData.blockHash} />
      <Section title="Difficulty" value={blockData.difficulty} />
      <Section title="Height" value={blockData.height} />
      <Section title="Time" value={blockData.timestamp.time} />
      <Section title="Transaction count" value={blockData.transactionCount} />
    </View>
  );
}