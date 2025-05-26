import React, { useState } from 'react';
import axios from 'axios';
import './styles/aiInterface.css';

const AgentInteractionPanel = ({ agentId }) => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const sendPrompt = async () => {
    const payload = {
      agentId,
      context: { entropy: 'moderate' },
      responses: [input],
    };

    const res = await axios.post('/api/factual-evaluation', payload);
    const aiReply = res.data.result.verifiedResponses[0];

    setResponses(prev => [...prev, { prompt: input, response: aiReply.response, maturity: res.data.result.maturity }]);
    setInput('');
  };

  return (
    <div className="interaction-panel">
      <h2>Partner AI: {agentId}</h2>
      <div className="feed">
        {responses.map((entry, i) => (
          <div key={i} className="exchange">
            <p><strong>You:</strong> {entry.prompt}</p>
            <p><strong>AI:</strong> {entry.response}</p>
            <p className="maturity">Maturity: {entry.maturity.level} ({entry.maturity.score})</p>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask your AI..."
      />
      <button onClick={sendPrompt}>Send</button>
    </div>
  );
};

export default AgentInteractionPanel;