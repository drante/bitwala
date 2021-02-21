import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  transaction: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
  },
  transactionSectionTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionSectionHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
});