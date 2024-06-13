const {VertexAI} = require('@google-cloud/vertexai');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'hackmee-team-17-0622', location: 'us-central1'});
const model = 'gemini-1.0-pro-vision-001';

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 2048,
    'temperature': 0.4,
    'topP': 0.4,
    'topK': 32,
  },
  safetySettings: [
    {
        'category': 'HARM_CATEGORY_HATE_SPEECH',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_HARASSMENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
  ],
});

const text1 = {text: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTe7iouMFAJGgR-4Uy0GumovV069hiI5Ip6[…]mTniOsdbukAueRVxjnR3SXZt0f9F_YJ6xPeT2EgyYRWEZxwy36Y0XH0 this is a show what is it's color?" };

async function generateContent() {
  const req = {
    contents: [
      {role: 'user', parts: [text1]}
    ],
  };

  const streamingResp = await generativeModel.generateContentStream(req);

  for await (const item of streamingResp.stream) {
    process.stdout.write('stream chunk: ' + JSON.stringify(item) + '\n');
  }

  process.stdout.write('aggregated response: ' + JSON.stringify(await streamingResp.response));

  return JSON.stringify((await streamingResp.response));
}
module.exports = {
  generateContent
}