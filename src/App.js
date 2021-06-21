import React, { useState, useEffect } from 'react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import { getToken } from './utils/token';

function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (!token) {
      setAuth(null);
    } else {
      setAuth(token);
    }
    console.log(auth, '======');
  }, []);

  return (
    <ApolloProvider client={client}>
      {!auth ? (
        <Auth />
      ) : (
        <div>
          <h1>Estas logeado</h1>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ApolloProvider>
  );
}

export default App;
