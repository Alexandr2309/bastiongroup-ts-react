import React from 'react';
import './styles/Aps.scss';
import Layout from './components/Layout/Layout';
import RoutesConfig from './routes/RoutesConfig';

function App() {
  return (
    <div className=''>
      <Layout>
        <RoutesConfig />
      </Layout>
    </div>
  );
}

export default App;
