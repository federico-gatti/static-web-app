const prisma = require("../lib/prisma");

const createEvaluation = async (newEvaluation) => {
  try {
    const evaluation = await prisma.evaluation.create({
      data: {
        ...newEvaluation,
      },
    });

    return evaluation;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { createEvaluation };
