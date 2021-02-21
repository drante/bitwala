import { gql } from '@apollo/client';

export const GET_BLOCKS = gql`
  query {
    bitcoin {
      blocks(options: { limit: 20, desc: "height" }) {
        height
        blockHash
        transactionCount
        timestamp {
          time
        }
      }
    }
  }
`;
