import React, { useEffect, useState } from 'react';
import PlayerComponent from './components/PlayerComponent';
import { getTranscriptionAndRecommendations } from './services/mediaDiveApi'; // Importa a função
import './index.css';

function App() {
  const [epgData, setEpgData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [transcriptions, setTranscriptions] = useState(null);
  const appKey = 'e31a599f-fa4c-44f1-9881-bff7eb652f8d';

  useEffect(() => {
    const fetchEPG = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://ott.online.meo.pt/program/v9/Programs/LiveChannelPrograms?UserAgent=AND_NG&$filter=StartDate+ge+datetime'2024-09-25T23:00:00Z'+and+StartDate+lt+datetime'2024-09-30T23:00:00Z'+and+CallLetter+eq+'RTP1'&$orderby=StartDate+asc`
        );

        if (!response.ok) {
          throw new Error('Erro na rede: ' + response.statusText);
        }

        const data = await response.json();
        setEpgData(data.value);
      } catch (error) {
        console.error('Erro ao obter EPG:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEPG();
  }, []);

  // Função para obter transcrições
  const fetchTranscriptions = async (title) => {
    try {
      const data = await getTranscriptionAndRecommendations(title);
      setTranscriptions(data);
    } catch (error) {
      console.error('Erro ao obter transcrições:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Programas RTP1</h1>
      {isLoading ? (
        <div className="spinner">Carregando...</div>
      ) : (
        <div className="programs-container">
          {epgData.length > 0 ? (
            epgData.map((program) => (
              <div key={program.Id} className="program-card">
                <img
                  src={`http://cdn-images.online.meo.pt/eemstb/ImageHandler.ashx?evTitle=${encodeURIComponent(program.Title)}&chCallLetter=RTP1&profile=16_9&width=320`}
                  alt={program.Title}
                  className="program-image"
                />
                <h2 className="program-title">{program.Title}</h2>
                <p className="program-time">{new Date(program.StartDate).toLocaleString()}</p>
                
                {/* Chama a função para obter transcrições quando o componente for montado */}
                <button onClick={() => fetchTranscriptions(program.Title)}>
                  Obter Transcrições
                </button>

                <PlayerComponent
                  appKey={appKey}
                  startTime={program.StartDate}
                  endTime={program.EndDate}
                  channel="RTP1"
                />
              </div>
            ))
          ) : (
            <p>Nenhum programa encontrado.</p>
          )}
        </div>
      )}

      {/* Exibe as transcrições, se disponíveis */}
      {transcriptions && (
        <div className="transcriptions-container">
          <h2>Transcrições:</h2>
          <pre>{JSON.stringify(transcriptions, null, 2)}</pre> {/* Exibe como JSON formatado */}
        </div>
      )}
    </div>
  );
}

export default App;
