
const About = () => {
  return (
    <section className="bg-slate-50 text-slate-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Lorem Ipsum Section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What is Lorem Ipsum?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lorem Ipsum is dummy text widely used in the graphic design,
            printing, and publishing industries to fill layout spaces. Its
            origins date back to classical Latin literature, adapting excerpts
            from Cicero’s <em>"De Finibus Bonorum et Malorum,"</em> written in
            45 BC. Though essentially nonsensical, it provides a realistic
            letter distribution, simulating real text to evaluate designs
            without the distraction of readable content.
          </p>
        </div>

        {/* Curum Ipsum Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            What is Curum Ipsum?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Curum Ipsum is a Brazilian reinterpretation of the classic Lorem
            Ipsum, infused with the sounds and cultural essence of the
            Tupi-Guarani heritage. While maintaining its function as placeholder
            text for layouts, it adds authenticity and uniqueness with fragments
            of words and sounds that evoke Brazil's vibrant spirit. It's perfect
            for those seeking originality and creativity without compromising
            functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
