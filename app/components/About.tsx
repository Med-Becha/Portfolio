import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-16 px-6 sm:px-12 md:px-24 lg:px-36"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Hi! I’m a passionate web developer specializing in creating modern,
          scalable, and user-friendly web applications. With a strong foundation
          in
          <span className="font-medium text-gray-900">
            {" "}
            React, Next.js, and Tailwind CSS
          </span>
          , I focus on delivering seamless user experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4 max-w-3xl mx-auto">
          I’ve had the opportunity to work on various projects, ranging from
          responsive websites to full-stack applications. When I’m not coding,
          you’ll find me exploring new technologies, reading, or enjoying
          nature.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {/* Skill Card */}
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-40">
            <Image
              src="/images/html-icon.png"
              alt="HTML"
              width={48}
              height={48}
              className="mb-4"
            />
            <span className="text-gray-800 font-semibold">HTML</span>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-40">
            <Image
              src="/images/css-icon.png"
              alt="CSS"
              width={48}
              height={48}
              className="mb-4"
            />
            <span className="text-gray-800 font-semibold">CSS</span>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-40">
            <Image
              src="/images/js-icon.png"
              alt="JavaScript"
              width={48}
              height={48}
              className="mb-4"
            />
            <span className="text-gray-800 font-semibold">JavaScript</span>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-40">
            <Image
              src="/images/react-icon.png"
              alt="React"
              width={48}
              height={48}
              className="mb-4"
            />
            <span className="text-gray-800 font-semibold">React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
