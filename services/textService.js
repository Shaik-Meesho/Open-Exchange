const { VertexAI } = require('@google-cloud/vertexai');
require('dotenv').config()

async function generateTextContent(prompt, projectId = process.env.PROJECT_ID) {
  const vertexAI = new VertexAI({ project: projectId, location: 'us-central1' });

  const generativeModel = vertexAI.getGenerativeModel({
    model: 'gemini-1.5-flash-001',
  });

  const resp = await generativeModel.generateContent(prompt);
  const contentResponse = await resp.response;
  return contentResponse;
}

module.exports = { generateTextContent };
