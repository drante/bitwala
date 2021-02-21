import { gql } from '@apollo/client';

export const GET_BLOCKS = gql`
  query { 
    bitcoin {
      blocks(options: {limit: 5, desc: "height"}) {
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