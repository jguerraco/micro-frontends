import React, { useState } from 'react';
import { Button, Card, ProtectedWrapper } from 'shared-ui';
import styles from './App.module.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <ProtectedWrapper>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Counter Application
          </h2>
          <p className={styles.subtitle}>
            A simple counter using shared UI components
          </p>
        </header>

        <main>
          <Card title="Counter Application">
            <div className={styles.counterDisplay}>
              <div className={styles.count}>
                {count}
              </div>
              
              <div className={styles.buttonGroup}>
                <Button onClick={handleDecrement} variant="secondary">
                  Decrease
                </Button>
                <Button onClick={handleReset} variant="secondary">
                  Reset
                </Button>
                <Button onClick={handleIncrement} variant="primary">
                  Increase
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </ProtectedWrapper>
  );
};

export default App;