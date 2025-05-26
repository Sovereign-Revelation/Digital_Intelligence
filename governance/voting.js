const votes = [];

function castVote(agentId, proposalId, vote) {
  votes.push({ agentId, proposalId, vote });
}

function tallyVotes(proposalId) {
  const proposalVotes = votes.filter(v => v.proposalId === proposalId);
  const results = proposalVotes.reduce((acc, curr) => {
    acc[curr.vote] = (acc[curr.vote] || 0) + 1;
    return acc;
  }, {});
  return results;
}

module.exports = { castVote, tallyVotes };