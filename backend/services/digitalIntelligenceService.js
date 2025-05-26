function evaluateLogic(logicTests) {
  const passed = logicTests.filter(t => t.passed).length;
  return logicTests.length ? passed / logicTests.length : 0;
}

function evaluateMemory(memoryTrace) {
  const retrieved = memoryTrace.filter(m => m.retrieved).length;
  return memoryTrace.length ? retrieved / memoryTrace.length : 0;
}

function evaluateAutonomy(decisionLog) {
  const rated = decisionLog.map(d => d.reasoning.length + d.impact.length);
  const avg = rated.length ? rated.reduce((a, b) => a + b, 0) / rated.length : 0;
  return avg > 40 ? 1 : avg / 40;
}

exports.evaluate = async (input) => {
  const logicScore = evaluateLogic(input.logicSkills);
  const memoryScore = evaluateMemory(input.memoryTrace);
  const autonomyScore = evaluateAutonomy(input.decisionLog);

  const digitalIntelligenceIndex = parseFloat(
    ((logicScore + memoryScore + autonomyScore) / 3).toFixed(3)
  );

  return {
    ...input,
    score: {
      logic: logicScore,
      memory: memoryScore,
      autonomy: autonomyScore,
      digitalIntelligenceIndex
    }
  };
};