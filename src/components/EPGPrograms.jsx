import React, { useState, useEffect } from 'react';
import { getEPGPrograms } from '../services/epgApi';
import { getProgramCover } from '../services/imageApi'; // Importar a função para obter a capa

const EPGPrograms = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEPGPrograms('RTP1', '2024-09-25T23:00:00Z', '2024-09-30T23:00:00Z');

            // Buscar a capa para cada programa
            const enrichedData = await Promise.all(
                data.map(async (program) => {
                    const coverUrl = await getProgramCover(program.Title, 'RTP1');
                    return { ...program, coverUrl }; // Adicionar a URL da capa ao programa
                })
            );

            setPrograms(enrichedData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Programas</h2>
            <ul>
                {programs.map((program) => (
                    <li key={program.Id}>
                        <img src={program.coverUrl} alt={program.Title} width="320" /> {/* Exibir a capa */}
                        {program.Title} - {program.StartDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EPGPrograms;