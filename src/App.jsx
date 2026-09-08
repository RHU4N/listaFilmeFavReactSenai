import {useState} from 'react';
import './App.css';
import FilmeCard from './components/FilmeCard';

export default function App() {
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      titulo: "Inception",
      genero: "Sci-Fi",
      ano: 2010,
      assistido: true,
      requisitos: "HD, Dolby Atmos"
    },
    {
      id: 2,
      titulo: "The Matrix",
      genero: "Action",
      ano: 1999,
      assistido: false,
      requisitos: "HD"
    },
    {
      id: 3,
      titulo: "Interstellar",
      genero: "Sci-Fi",
      ano: 2014,
      assistido: true,
      requisitos: "4K, HDR"
    },
    {
      id: 4,
      titulo: "The Godfather",
      genero: "Crime",
      ano: 1972,
      assistido: false,
      requisitos: "HD"
    }
  ]);

  function toggleAssistido(id) {
    setFilmes(filmesAtuais =>
      filmesAtuais.map(filme =>
        filme.id === id ? { ...filme, assistido: !filme.assistido } : filme
      )
    );

    const totalAssistidos = filmes.filter(filme => filme.assistido).length;

    const totalNaoAssistidos = filmes.filter(filme => !filme.assistido).length;

    return(
      
    );


  }
}