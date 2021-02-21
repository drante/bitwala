import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  query { 
    bitcoin {
        transactions(options: {limit: 5, desc: "date.date"}) {
          date {
              date
          }
          index
        }
    }
  }
`;

