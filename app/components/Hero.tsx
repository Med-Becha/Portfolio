const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-fixed bg-cover bg-center hero "
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')", // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl sm:text-7xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          I’m a developer passionate about building modern and scalable
          solutions.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
