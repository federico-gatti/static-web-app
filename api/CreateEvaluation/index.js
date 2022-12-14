const { createEvaluation } = require("../services/Evaluation");

const defaultData = {
  data: {
    clientName: "default clientName",
    supplierName: "default supplierName",
    status: "OPEN",
  },
};

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const { data } = req.body || defaultData;

  const result = await createEvaluation(data);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: result,
  };
};
