import React, { useState } from 'react';
import { Button, Card, ProtectedWrapper } from 'shared-ui';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <ProtectedWrapper>
      <div style={{ 
        padding: '2rem', 
        fontFamily: 'Arial, sans-serif',
      }}>
        <header style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: '#1f2937', 
            fontSize: '1.8rem', 
            marginBottom: '0.5rem' 
          }}>
            Counter Application
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>
            A simple counter using shared UI components
          </p>
        </header>

        <main>
          <Card title="Counter Application">
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                color: '#3b82f6',
                marginBottom: '1.5rem'
              }}>
                {count}
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '0.5rem', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
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