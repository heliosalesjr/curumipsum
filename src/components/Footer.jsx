const Footer = () => {
    return (
      <footer className="bg-green-600 text-white py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          {/* Project Name and Year */}
          <div className="text-lg font-bold">
            Curum Ipsum © {new Date().getFullYear()}
          </div>
          {/* Creator Information */}
          <div className="text-sm sm:text-base font-medium mt-2 sm:mt-0">
            Created by Hélio Sales Jr.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  