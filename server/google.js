// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

async function getResponse (document) {
  // Detects entities in the document
  const [result] = await client.analyzeEntities({document});
  const entities = result.entities;

  return entities;
}

async function analyzeText(str) {
  let document = {
    content: str,
    type: 'PLAIN_TEXT',
  };
  let test = await getResponse(document);
  return test;
}

module.exports = {
  analyzeText
};