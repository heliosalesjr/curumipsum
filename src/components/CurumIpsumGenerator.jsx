import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { useCopyToClipboard } from "react-use";

const CurumIpsumGenerator = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(1);
  const [type, setType] = useState("paragraphs");
  const [output, setOutput] = useState("");
  const [copied, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    // Fetch the JSON data
    fetch("/curumData.json")
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const generateContent = () => {
    if (!data) return;
    const contentArray = data[type];
    const result = contentArray.slice(0, inputValue).join(type === "words" ? " " : "\n\n");
    setOutput(result);
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
          onClick={generateContent}
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
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Output Box */}
      <div className="p-4 border border-slate-300 rounded-3xl bg-white">
        <p className="text-slate-700 whitespace-pre-line">{output}</p>
      </div>
    </section>
  );
};

export default CurumIpsumGenerator;

