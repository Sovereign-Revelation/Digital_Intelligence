const peers = [];

function addPeer(peer) {
  peers.push(peer);
}

function reachConsensus(data) {
  // Simplified consensus algorithm
  const votes = peers.map(peer => peer.validate(data));
  const approvals = votes.filter(vote => vote === true).length;
  return approvals > peers.length / 2;
}

module.exports = { addPeer, reachConsensus };