import { skills } from '../data/skills';
import { colors } from '../data/colors';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-stone-100/60">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Compétences Techniques
          </h2>
          <p className="text-stone-600 text-lg">
            Un ensemble de technologies maîtrisées pour un développement sécurisé
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => {
            const isBlue = idx % 2 === 0;
            const color = isBlue ? colors.primary : colors.secondary;
            const borderColor = isBlue ? colors.borderPrimary : colors.borderSecondary;
            
            return (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-bold mb-6" style={{ color }}>
                  {skillGroup.category}
                </h3>
                {skillGroup.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="flex items-center gap-3 p-3 bg-white/80 rounded-lg border border-stone-200/70 hover:bg-stone-50 transition-colors" 
                    style={{ borderColor }}
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="w-5 h-5 object-contain"
                      />
                    ) : (
                      <span className="w-5 h-5" aria-hidden="true" />
                    )}
                    <span className="text-stone-700">{item.name}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
