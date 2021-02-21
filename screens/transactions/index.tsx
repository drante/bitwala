import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GET_TRANSACTIONS } from '../../query/get-transactions';
import { TransactionList } from '../../components/transaction-list'
import { LoadingMessage } from '../../components/loading-message'

import { useQuery } from '@apollo/client';

import styles from './styles'

export const TransactionsScreen = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  if (loading) return <LoadingMessage message="Loading transactions..." />;
  if (error) return <Text>Error! ${error.message}`</Text>;

  const transactionData = data.bitcoin.transactions

  return (
    <View style={styles.container}>
      <ScrollView style={styles.transactionList}>
        <TransactionList transactionData={transactionData} />
      </ScrollView>
    </View>
  );
}
