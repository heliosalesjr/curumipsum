import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopyToClipboard } from "react-use";

const CurumIpsumGenerator = () => {
  const [kurumData, setKurumData] = useState([]);
  const [outputText, setOutputText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [value, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/kurum.json"); // Caminho baseado na pasta public
        if (!response.ok) {
          throw new Error("Failed to fetch JSON");
        }
        const data = await response.json();
        setKurumData(data.kurumData);
      } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
      }
    };

    loadData();
  }, []);

  const handleGenerate = () => {
    if (kurumData.length > 0) {
      // Escolhe aleatoriamente um parágrafo
      const randomIndex = Math.floor(Math.random() * kurumData.length);
      setOutputText(kurumData[randomIndex].content);
    }
  };

  const handleCopy = () => {
    if (outputText) {
      copyToClipboard(outputText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <section className="bg-slate-50 text-slate-800 p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">
        Curum Ipsum Generator
      </h1>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="number"
          placeholder="Enter a number"
          className="w-24 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <select
          className="p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>

        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-500"
        >
          Generate
        </button>

        <div className="ml-auto">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 border border-slate-300 rounded hover:bg-slate-300"
          >
            <FaCopy />
            Copy
          </button>
        </div>
      </div>

      <div className="p-4 border border-slate-300 rounded-3xl bg-white">
        <p className="text-slate-700">{outputText || "Your generated text will appear here."}</p>
        {copySuccess && <p className="text-green-600 mt-2">Copied to clipboard!</p>}
      </div>
    </section>
  );
};

export default CurumIpsumGenerator;
