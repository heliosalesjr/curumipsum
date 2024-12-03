import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopyToClipboard } from "react-use";

const CurumIpsumGenerator = () => {
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("paragraphs");
  const [generatedText, setGeneratedText] = useState("");
  const [copied, copyToClipboard] = useCopyToClipboard();
  const [kurumData, setKurumData] = useState([]);

  useEffect(() => {
    // Carrega o JSON dinamicamente
    fetch("../api/kurum.json")
      .then((res) => res.json())
      .then((data) => setKurumData(data.kurumData))
      .catch((err) => console.error("Erro ao carregar o JSON:", err));
  }, []);

  const handleGenerate = () => {
    const sections = kurumData.map((section) => section.content);
    let result = "";

    if (type === "paragraphs") {
      result = sections.slice(0, quantity).join("\n\n");
    } else if (type === "sentences") {
      const sentences = sections
        .flatMap((section) => section.split(". "))
        .filter((sentence) => sentence.trim());
      result = sentences.slice(0, quantity).join(". ") + ".";
    } else if (type === "words") {
      const words = sections
        .join(" ")
        .split(" ")
        .filter((word) => word.trim());
      result = words.slice(0, quantity).join(" ");
    }

    setGeneratedText(result);
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
          placeholder="Enter a number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
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
            onClick={() => copyToClipboard(generatedText)}
            className={`flex items-center gap-2 px-4 py-2 ${
              copied.value === generatedText
                ? "bg-green-600 text-white"
                : "bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300"
            } rounded`}
          >
            <FaCopy />
            {copied.value === generatedText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Output Box */}
      <div className="p-4 border border-slate-300 rounded-3xl bg-white">
        <p className="text-slate-700 whitespace-pre-wrap">{generatedText}</p>
      </div>
    </section>
  );
};

export default CurumIpsumGenerator;


