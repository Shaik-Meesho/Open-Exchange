const {VertexAI} = require('@google-cloud/vertexai');
require('dotenv').config()
const imgUrl = require('./promptGenerationService');
/**
 * TODO(developer): Update these variables before running the sample.
 */

async function createNonStreamingMultipartContent(
  projectId = process.env.PROJECT_ID,
  location = 'us-central1',
  model = 'gemini-1.5-flash-001',
  image = imgUrl, //'gs://open-exchange/phone_cover.jpg',
  mimeType = 'image/jpeg'
) {
  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({project: process.env.PROJECT_ID, location: location});

  // Instantiate the model
  const generativeVisionModel = vertexAI.getGenerativeModel({
    model: model,
  });

  // For images, the SDK supports both Google Cloud Storage URI and base64 strings
  const filePart = {
    fileData: {
      fileUri: image,
      mimeType: mimeType,
    },
  };

  const textPart = {
    text: 'Vivo V20 Pro Cases & Covers, give only three or four words prompt',
  };

  const request = {
    contents: [{role: 'user', parts: [filePart, textPart]}],
  };

  console.log('Prompt Text:');
  console.log(request.contents[0].parts[1].text);

  console.log('Non-Streaming Response Text:');
  // Create the response stream
  const responseStream =
    await generativeVisionModel.generateContentStream(request);

  // Wait for the response stream to complete
  const aggregatedResponse = await responseStream.response;

  // Select the text from the response
  const fullTextResponse =
    aggregatedResponse.candidates[0].content.parts[0].text;

  console.log(fullTextResponse);
}

module.exports = {
    createNonStreamingMultipartContent,
}