import { gql } from '@apollo/client';

export const GET_BLOCK = gql`
  query GetBlock($hash: String!) {
    bitcoin {
      blocks(blockHash: { is: $hash }) {
        blockHash
        blockSize
        difficulty
        height
        timestamp {
          time
        }
        transactionCount
      }
    }
  }
`;
