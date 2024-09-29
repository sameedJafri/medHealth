import React, { useState } from 'react';

function Emotions() {
  const [emotion, setEmotion] = useState('');
  const [logs, setLogs] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleInputChange = (event) => {
    setEmotion(event.target.value);
  };

  const handleAddLog = () => {
    if (emotion.trim()) {
      setLogs([...logs, emotion]);
      setEmotion(''); // Clear the input field
    }
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      <h1>Track Your Emotions</h1>
      <button onClick={toggleInput}>
        {showInput ? 'Hide Input' : 'Log Emotion'}
      </button>

      {showInput && (
        <div>
          <textarea
            value={emotion}
            onChange={handleInputChange}
            placeholder="Enter your emotion..."
            rows="4"
            cols="50"
          />
          <button onClick={handleAddLog}>Add Emotion</button>
        </div>
      )}

      <h2>Your Emotion Logs:</h2>
      {logs.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {logs.map((log, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              {log}
            </div>
          ))}
        </div>
      ) : (
        <p>No emotions logged yet.</p>
      )}
    </div>
  );
}

export default Emotions;