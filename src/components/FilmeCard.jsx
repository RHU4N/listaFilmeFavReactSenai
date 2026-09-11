import "./FilmeCard.css";

export default function FilmeCard({ titulo, genero, ano, assistido, requisitos, onToggleAssistido }) {
    return (
    <article className={`filme-card ${assistido ? "card-assistido" : "card-nao-assistido"}`}>
        <div>
            <h2>{titulo}</h2>
            <p>Gênero: {genero}</p>
            <p>Ano: {ano}</p>
            <p>Requisitos: {requisitos}</p>
        </div>
        <div className="status">
            <p>
                <strong>{assistido ? "Assistido" : "Não Assistido"}</strong>
            </p>
            <button onClick={onToggleAssistido}>
                {assistido ? "Marcar como não assistido" : "Marcar como assistido"}
            </button>
        </div>
    </article>
    )
}