import { FaCopy } from "react-icons/fa";

const CurumIpsumGenerator = () => {
  return (
    <section className="bg-slate-50 text-slate-800 p-8 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold text-slate-900 mb-6 ">
        Curum Ipsum Generator
      </h1>

      {/* Form */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {/* Number Input */}
        <input
          type="number"
          placeholder="Enter a number"
          className="w-24 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {/* Dropdown */}
        <select
          className="p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>

        {/* Generate Button */}
        <button className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-500">
          Generate
        </button>

        {/* Copy Button */}
        <div className="ml-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 border border-slate-300 rounded hover:bg-slate-300">
            <FaCopy />
            Copy
          </button>
        </div>
      </div>

      {/* Output Box */}
      <div className="p-4 border border-slate-300 rounded-3xl bg-white">
        <p className="text-slate-700">
          Tupirit amet, curum adipiscing arara. Piranga vel itapera, potira nunc
          jupicat purus, amaru vari iacur. Morubi lacinia pindorau neque tabira
          fermentum sarigué.
        </p>
      </div>
    </section>
  );
};

export default CurumIpsumGenerator;
