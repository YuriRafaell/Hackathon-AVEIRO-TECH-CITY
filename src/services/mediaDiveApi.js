import axios from 'axios';

const MEDIA_DIVE_API_URL = 'https://mediadive.poc.alticelabs.com'; // URL base da API Media Dive
const API_KEY = 'e31a599f-fa4c-44f1-9881-bff7eb652f8d'; // Sua chave de API

export async function getTranscriptionAndRecommendations(title) {
    try {
        const response = await axios.get(`${MEDIA_DIVE_API_URL}/pubblocks`, {
            params: { title }, // Parâmetros da API, se necessário
            headers: {
                Authorization: `Bearer ${API_KEY}`, // Adiciona sua chave aqui
            },
        });

        return response.data; // Retorna os dados da resposta
    } catch (error) {
        console.error('Erro ao buscar transcrições e recomendações:', error);
        throw error; // Propaga o erro
    }
}