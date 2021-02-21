import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  query { 
    bitcoin {
        transactions(options: {limit: 20, desc: "date.date"}) {
          date {
              date
          }
          index
        }
    }
  }
`;

