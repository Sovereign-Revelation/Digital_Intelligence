const { fetchPrompts, verifyResponses, calculateMaturity } = require('../utils/logicEngine');

/**
 * Evaluates factual maturity of agent responses.
 * @param {Object} input - Evaluation payload containing agentId, responses, context.
 * @returns {Object} - Evaluation result with prompt trace, scores, and maturity level.
 */
exports.evaluate = async (input) => {
  const { agentId, responses, context } = input;

  // Step 1: Fetch intelligent prompts based on entropy/context
  const questions = await fetchPrompts(agentId, context.entropy);

  // Step 2: Verify each response for factual alignment and trust metrics
  const verifiedResponses = await verifyResponses(responses, questions);

  // Step 3: Calculate maturity from verified response set
  const maturityResult = await calculateMaturity(verifiedResponses);

  return {
    agentId,
    promptsUsed: questions,
    verifiedResponses,
    maturity: maturityResult
  };
};