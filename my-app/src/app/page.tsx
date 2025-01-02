'use client';

import { Input, Button } from '@nextui-org/react'; 
import { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState('#ff5733');
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const checkGuess = () => {
    if (guess.toLowerCase() === color.toLowerCase()) {
      setMessage('Correct!');
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ padding: '20px', maxWidth: '400px', textAlign: 'center', borderRadius: '8px', background: '#fff' }}>
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: color,
          margin: '0 auto 20px',
        }} />
        <h3>Guess the Hex Color</h3>
        <Input
          clearable
          underlined
          label="Enter Hex Code"
          value={guess}
          onChange={handleGuessChange}
          css={{ width: '100%', marginBottom: '20px' }}
        />
        <Button onClick={checkGuess} color="primary" auto>
          Submit Guess
        </Button>
        {message && <p style={{ marginTop: '10px' }}>{message}</p>}
      </div>
    </div>
  );
}
