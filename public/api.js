// server.js
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;
const apiKey = 'AIzaSyCBRlC5kpah6jBrEdQ0WD5UJtApJzc8nzI';  // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 0.9,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

app.use(cors());
app.use(express.json());

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  try {
    const chatSession = model.startChat({ generationConfig, history: [] });
    const result = await chatSession.sendMessage(prompt);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
