import React from "react";
import "./Copilot.css";

const Copilot = () => {
  return (
    <div className="container">
      <h1>Microsoft 365 com AI (Copilot)</h1>
      <p>
        O Microsoft Copilot é uma ferramenta de Inteligência Artificial integrada ao Microsoft 365, como Word, Excel, PowerPoint e Outlook. Ele ajuda os usuários a escrever, criar apresentações, analisar dados e automatizar tarefas com comandos simples.
      </p>

      <h2>🔧 Funcionalidades principais</h2>
      <ul>
        <li>Geração automática de texto no Word</li>
        <li>Criação de apresentações no PowerPoint</li>
        <li>Análise de planilhas no Excel</li>
        <li>Resumos e respostas no Outlook</li>
      </ul>

      <h2>💡 Exemplos de uso</h2>
      <p>
        Imagine precisar criar um relatório no Word. Com o Copilot, você pode apenas digitar: “Crie um relatório com base nesses dados” e ele gera para você. No Excel, é possível pedir: “Resuma os dados da coluna B” e pronto.
      </p>

      <a href="https://www.microsoft.com/pt-br/microsoft-365/blog/2023/03/16/introducing-microsoft-365-copilot/" target="_blank" className="button">
        Saiba mais
      </a>
    </div>
  );
};

export default Copilot;