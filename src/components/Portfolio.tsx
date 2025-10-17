import { Quote } from "lucide-react";

const projects = [
  {
    title: "Feature Film Production",
    client: "Local Production House",
    quote: "Exceptional service and top-tier equipment. The team went above and beyond.",
  },
  {
    title: "Commercial Campaign",
    client: "International Brand",
    quote: "Professional, reliable, and seamless experience from start to finish.",
  },
  {
    title: "Documentary Series",
    client: "Independent Filmmaker",
    quote: "Great selection of gear and incredibly helpful staff. Highly recommended!",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Singapore's Creatives
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            From indie films to major commercials, we support productions of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-teal transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-teal mb-4" />
              <p className="text-lg text-white/90 mb-6 leading-relaxed">"{project.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{project.title}</p>
                <p className="text-white/60 text-sm">{project.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
