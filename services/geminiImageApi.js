const {VertexAI} = require('@google-cloud/vertexai');
require('dotenv').config()
/**
 * TODO(developer): Update these variables before running the sample.
 */


async function createNonStreamingMultipartContent(
  projectId = process.env.PROJECT_ID,
  location = 'us-central1',
  model = 'gemini-1.5-flash-001',
  image = 'gs://cloud-ai-platform-19fcbbee-05c5-447d-99e4-d2fbe026fcd1/hack-image/Screenshot 2024-06-13 at 4.44.23 PM.png',
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
    text: 'what is shown in this image? And give the keywords by seeing the image',
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