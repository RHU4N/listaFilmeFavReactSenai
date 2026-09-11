import { useState } from "react";
import FilmeCard from "./components/FilmeCard";
import "./App.css";

export default function App() {
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      titulo: "Inception",
      genero: "Sci-Fi",
      ano: 2010,
      assistido: true,
      requisitos: "HD, Dolby Atmos",
    },
    {
      id: 2,
      titulo: "The Matrix",
      genero: "Action",
      ano: 1999,
      assistido: false,
      requisitos: "HD",
    },
    {
      id: 3,
      titulo: "Interstellar",
      genero: "Sci-Fi",
      ano: 2014,
      assistido: true,
      requisitos: "4K, HDR",
    },
    {
      id: 4,
      titulo: "The Godfather",
      genero: "Crime",
      ano: 1972,
      assistido: false,
      requisitos: "HD",
    },
  ]);

  function alternarAssistido(id) {
    setFilmes((filmesAtuais) =>
      filmesAtuais.map((filme) =>
        filme.id === id ? { ...filme, assistido: !filme.assistido } : filme,
      ),
    );
  }

  const totalAssistidos = filmes.filter((filme) => filme.assistido).length;
  const totalNaoAssistidos = filmes.filter((filme) => !filme.assistido).length;

  return (
    <main className="container">
      <header className="cabecalho">
        <h1>FilmeFav</h1>
        <p>Minha lista de filmes favoritos - React Básico</p>
      </header>

      <section className="resumo">
        <div className="resumo-grid">
          <div className="resumo-card">
            <span>Total</span>
            <strong>{filmes.length}</strong>
          </div>
          <div className="resumo-card presente">
            <span>Assistidos</span>
            <strong>{totalAssistidos}</strong>
          </div>
          <div className="resumo-card ausente">
            <span>Não assistidos</span>
            <strong>{totalNaoAssistidos}</strong>
          </div>
        </div>

        <div className="lista-filmes">
          {filmes.map((filme) => (
            <FilmeCard
              key={filme.id}
              titulo={filme.titulo}
              genero={filme.genero}
              ano={filme.ano}
              assistido={filme.assistido}
              requisitos={filme.requisitos}
              onToggleAssistido={() => alternarAssistido(filme.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
