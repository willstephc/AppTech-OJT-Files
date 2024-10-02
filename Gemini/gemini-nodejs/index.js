const express = require('express');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables
dotenv.config();

// Initialize the express app
const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Initialize Generative AI using gemini.js method
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Define predefined responses for specific prompts
const sapDescriptions = {
  "sap business technology platform": "A unified, open platform that provides the tools for businesses to drive innovation and accelerate their digital transformation.",
  "sap s/4hana": "An intelligent ERP suite designed to help businesses run simple in a digital and networked world.",
  "sap analytics cloud": "A comprehensive analytics solution that combines BI, augmented analytics, and planning to help businesses make data-driven decisions."
};

// Function to generate content using generative AI (fallback if no predefined match)
async function generateResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([prompt]);
  return result.response.text(); // Return the generated text
}

// POST Route for Text Generation
app.post('/generate', async (req, res) => {
  let { prompt } = req.body;

  if (!prompt) {
    return res.status(400).send('Prompt is required.');
  }

  // Normalize the prompt to avoid case and spacing issues
  prompt = prompt.trim().toLowerCase();

  // Check if the prompt matches one of the predefined SAP descriptions (using normalized keys)
  const response = sapDescriptions[prompt];

  if (response) {
    // If we find a match, return the predefined response immediately
    console.log("Matched response:", response);
    return res.send({ response });
  }

  // Otherwise, use the AI model to generate the response
  try {
    const responseText = await generateResponse(prompt);
    res.send({ response: responseText });
  } catch (error) {
    console.error('Error generating content:', error.message);
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
    process.exit(1);
  }
  console.log(`App is running on http://localhost:${port}`);
});
