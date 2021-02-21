import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  block: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 4,
    padding: 12,
  },
  blockSectionTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  blockSectionHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
  },
  blockSectionView: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  growHorizontally: {
    flexGrow: 1,
    width: 0,
  },
});