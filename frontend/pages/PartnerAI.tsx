import React from 'react';
import AgentInteractionPanel from '../components/AgentInteractionPanel';

const PartnerAI = () => {
  const agentId = "Agent_Genesis_01";

  return (
    <div style={{ padding: '20px' }}>
      <h1>🧠 Your Digital Intelligence Partner</h1>
      <AgentInteractionPanel agentId={agentId} />
    </div>
  );
};

export default PartnerAI;