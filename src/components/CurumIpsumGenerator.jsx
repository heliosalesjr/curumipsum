import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import useCopyToClipboard from "react-use/lib/useCopyToClipboard";

const CurumIpsumGenerator = () => {
  const [data, setData] = useState(null); // Dados do JSON
  const [output, setOutput] = useState(""); // Texto gerado
  const [inputValue, setInputValue] = useState(1); // Número inserido
  const [type, setType] = useState("paragraphs"); // Tipo selecionado
  const [, copyToClipboard] = useCopyToClipboard(); // Apenas a função

  // Carregar JSON ao montar o componente
  useEffect(() => {
    fetch("/curumData.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Função para gerar o texto com base na entrada do usuário
  const handleGenerate = () => {
    if (!data) return;

    let generatedText = "";

    switch (type) {
      case "paragraphs":
        generatedText = data.paragraphs.slice(0, inputValue).join("\n\n");
        break;
      case "sentences":
        generatedText = data.sentences.slice(0, inputValue).join(" ");
        break;
      case "words":
        generatedText = data.words.slice(0, inputValue).join(" ");
        break;
      default:
        generatedText = "Invalid selection.";
    }

    setOutput(generatedText || "No content available.");
  };

  return (
    <section className="bg-slate-50 text-slate-800 p-8 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold text-slate-900 mb-6">
        Curum Ipsum Generator
      </h1>

      {/* Form */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {/* Number Input */}
        <input
          type="number"
          min="1"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          placeholder="Enter a number"
          className="w-24 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {/* Dropdown */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-500"
        >
          Generate
        </button>

        {/* Copy Button */}
        <div className="ml-auto">
          <button
            onClick={() => copyToClipboard(output)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 border border-slate-300 rounded hover:bg-slate-300"
          >
            <FaCopy />
            Copy
          </button>
        </div>
      </div>

      {/* Output Box */}
      <div className="p-4 border border-slate-300 rounded-3xl bg-white">
        <p className="text-slate-700 whitespace-pre-wrap">{output}</p>
      </div>
    </section>
  );
};

export default CurumIpsumGenerator;
