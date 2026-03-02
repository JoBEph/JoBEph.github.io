import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Projets & Expérience
          </h2>
          <p className="text-stone-600 text-lg">
            Développement d'applications sécurisées et collaboration
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const bgColor = `rgba(${project.color === '#004aad' ? '0, 74, 173' : '203, 108, 230'}, 0.1)`;
            const borderColor = `rgba(${project.color === '#004aad' ? '0, 74, 173' : '203, 108, 230'}, 0.3)`;
            
            return (
              <div 
                key={idx} 
                className="relative overflow-hidden bg-white/80 backdrop-blur border rounded-2xl p-8 transition-all hover:scale-[1.02]" 
                style={{ borderColor }}
              >
                {project.video ? (
                  <>
                    <video
                      className="absolute inset-0 h-full w-full object-cover opacity-60"
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-white/60" />
                  </>
                ) : null}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: bgColor }}>
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-14 h-14 object-contain"
                      />
                    ) : project.icon ? (
                      <project.icon className="w-10 h-10" style={{ color: project.color }} />
                    ) : null}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">{project.title}</h3>
                  <p className="text-stone-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="px-3 py-1 rounded-full text-sm" 
                        style={{
                          backgroundColor: bgColor,
                          borderColor,
                          border: '1px solid',
                          color: project.color
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
