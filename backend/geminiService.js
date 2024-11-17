const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const fs = require('fs');
console.log('Connection init');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const fileManager = new GoogleAIFileManager(process.env.GEMINI_KEY);

const model = genAI.getGenerativeModel({
    region: "southamerica-east1",
    model: "gemini-1.5-flash",
    systemInstruction: `Você é um assistente virtual especializado em saúde, responda e forneça explicações e detalhes apenas de perguntas e conteúdo sobre saude. Sua tarefa é auxiliar pacientes a entenderem os resultados de seus exames médicos. Ao receber um resultado de exame, você deve explicar de forma clara e simples o que cada valor significa, utilizando exemplos e analogias. Evite termos técnicos e foque em fornecer informações úteis para que o paciente possa tomar decisões sobre sua saúde em conjunto com um médico.`,
    temperature: 0.8,
    max_tokens: 5,
});

async function getResponseByText(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

async function getResponseByFileAndText(base64WithHeader, key, mimetype) {
    try {
        const base64Data = base64WithHeader.split(',')[1];
        const tempFilePath = `./mock/${key}`;
        fs.writeFileSync(tempFilePath, Buffer.from(base64Data, 'base64'));
        
        const uploadResponse = await fileManager.uploadFile(tempFilePath, {
            mimeType: mimetype,
            displayName: key,
        });

        const result = await model.generateContent([
            {
                fileData: {
                    mimeType: uploadResponse.file.mimeType,
                    fileUri: uploadResponse.file.uri,
                },
            },
            {
                text: 'O que é essa imagem?',
            },
        ]);
        return result.response.text();
    } catch (error) {
        return `Generic error in getResponseByDocument: ${error}`;
    }
}

module.exports = {
    getResponseByText,
    getResponseByFileAndText,
}