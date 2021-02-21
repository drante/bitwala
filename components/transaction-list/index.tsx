import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { TransactionData } from '../../types';

interface TransactionProps {
  data: TransactionData;
}

interface TransactionListProps {
  transactionData: Array<TransactionData>;
}

const Transaction = ({ data }: TransactionProps) => {
  const { index, date } = data;

  return (
    <View style={styles.transaction}>
      <View style={styles.transactionSectionHorizontal}>
        <View>
          <Text style={styles.transactionSectionTitle}>Index</Text>
          <Text>{index}</Text>
        </View>
      </View>
      <View style={styles.transactionSectionHorizontal}>
        <View>
          <Text style={styles.transactionSectionTitle}>Date</Text>
          <Text>{date.date}</Text>
        </View>
      </View>
    </View>
  );
};

export const TransactionList = ({ transactionData }: TransactionListProps) => (
  /* 
    NOTE: Using array indices as keys instead of 
    transaction hash due to the potential query failure.
  */
  <>
    {transactionData.map((data, index) => (
      <Transaction key={index} data={data} />
    ))}
  </>
);
