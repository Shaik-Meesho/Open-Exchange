const {VertexAI} = require('@google-cloud/vertexai');
require('dotenv').config();
/**
 * TODO(developer): Update these variables before running the sample.
 */
async function generate_from_text_input(projectId = process.env.PROJECT_ID) {
  const vertexAI = new VertexAI({project: projectId, location: 'us-central1'});

  const generativeModel = vertexAI.getGenerativeModel({
    model: 'gemini-1.5-flash-001',
  });

  const prompt =
    "What's a good name for a flower shop that specializes in selling bouquets of dried flowers?";

  const resp = await generativeModel.generateContent(prompt);
  const contentResponse = await resp.response;
  console.log("This is api response ",JSON.stringify(contentResponse));
  return JSON.stringify(contentResponse);
}

module.exports = {
    generate_from_text_input,
}