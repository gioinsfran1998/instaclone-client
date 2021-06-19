import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query getUser {
    getUser {
      id
      name
      username
      email
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  console.log(data);
  return (
    <div>
      <h1>Dash</h1>
    </div>
  );
};

export default Dashboard;
