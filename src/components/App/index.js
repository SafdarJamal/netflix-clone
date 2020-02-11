import React from 'react';
import styles from './style.module.css';

import Routes from '../../routes';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes />
    </div>
  );
};

export default App;
