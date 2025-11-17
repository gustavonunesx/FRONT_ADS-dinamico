import React, { useState, useEffect } from 'react'; // Importa React e os Hooks useState e useEffect
import './App.css'; // Importa o arquivo de estilos

function App() {
  // Cria um estado chamado 'texto', inicializado como vazio
  // setTexto é a função que altera o valor de 'texto'
  const [texto, setTexto] = useState('');

  // useEffect executa um efeito colateral sempre que 'texto' muda
  useEffect(() => {
    // Atualiza o título da aba do navegador
    document.title = texto || 'Título Padrão'; // Se 'texto' estiver vazio, usa "Título Padrão"
  }, [texto]); // A dependência é 'texto', ou seja, roda sempre que 'texto' muda

  return (
    <div className="container">
      <h2>Título Dinâmico</h2>

      {/* Input que controla o estado 'texto' */}
      <input
        type="text"
        placeholder="Digite algo..."
        value={texto} // O valor do input vem do estado
        onChange={(e) => setTexto(e.target.value)} // Atualiza o estado quando o usuário digita
        className="input-text"
      />

      {/* Mostra o texto digitado */}
      <p>Você digitou: {texto}</p>
    </div>
  );
}

export default App; // Exporta o componente principal
