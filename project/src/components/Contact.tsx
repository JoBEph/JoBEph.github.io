import { Send, Shield, Code2, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { useContactForm } from '../hooks/useContactForm';
import { colors } from '../data/colors';

export const Contact = () => {
  const { contactForm, isSubmitting, submitMessage, handleSubmit, updateField, fieldErrors } = useContactForm();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Travaillons ensemble
          </h2>
          <div className="flex gap-4 justify-center mb-12">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:shadow-2xl hover:rotate-6"
                style={{ backgroundColor: link.color, color: 'white' }}
              >
                {link.img ? (
                  <img
                    src={link.img}
                    alt={link.name}
                    className="w-7 h-7 object-contain"
                  />
                ) : link.icon ? (
                  <link.icon className="w-6 h-6" />
                ) : null}
              </a>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Contactez-moi</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="hidden" aria-hidden="true">
                <label className="block text-stone-700 text-sm font-semibold mb-2">Website</label>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={contactForm.website}
                  onChange={(e) => updateField('website', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-stone-700 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  maxLength={120}
                  value={contactForm.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                  style={{ borderColor: colors.borderSecondary }}
                  placeholder="votre@email.com"
                />
                {fieldErrors.email && (
                  <p id="contact-email-error" className="text-sm text-red-600 mt-2">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-stone-700 text-sm font-semibold mb-2">Nom Prénom</label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={contactForm.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.fullName)}
                  aria-describedby={fieldErrors.fullName ? 'contact-name-error' : undefined}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                  style={{ borderColor: colors.borderSecondary }}
                  placeholder="Votre nom"
                />
                {fieldErrors.fullName && (
                  <p id="contact-name-error" className="text-sm text-red-600 mt-2">
                    {fieldErrors.fullName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-stone-700 text-sm font-semibold mb-2">Organisation</label>
                <input
                  type="text"
                  required
                  maxLength={120}
                  value={contactForm.organization}
                  onChange={(e) => updateField('organization', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.organization)}
                  aria-describedby={fieldErrors.organization ? 'contact-organization-error' : undefined}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none transition-colors"
                  style={{ borderColor: colors.borderSecondary }}
                  placeholder="Votre organisation"
                />
                {fieldErrors.organization && (
                  <p id="contact-organization-error" className="text-sm text-red-600 mt-2">
                    {fieldErrors.organization}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-stone-700 text-sm font-semibold mb-2">Message</label>
                <textarea
                  required
                  maxLength={1200}
                  value={contactForm.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none transition-colors h-32 resize-none"
                  style={{ borderColor: colors.borderSecondary }}
                  placeholder="Raison de votre demande..."
                />
                {fieldErrors.message && (
                  <p id="contact-message-error" className="text-sm text-red-600 mt-2">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-white rounded-lg font-semibold transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ backgroundColor: colors.primary }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              </button>
              {submitMessage && (
                <div className="p-3 rounded-lg text-center" style={{
                  backgroundColor: submitMessage.includes('Merci') ? colors.bgPrimaryLight : 'rgba(239, 68, 68, 0.1)',
                  color: submitMessage.includes('Merci') ? colors.primary : '#ef4444'
                }}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-start space-y-4 md:mt-20">
            <div className="bg-white/80 border rounded-2xl p-6" style={{ borderColor: colors.borderPrimary }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.bgPrimaryLight }}>
                  <Shield className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">Expertise Cybersécurité</h4>
                  <p className="text-stone-600">Spécialisé dans l'audit de sécurité et l'identification des vulnérabilités</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 border rounded-2xl p-4" style={{ borderColor: colors.borderSecondary }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.bgSecondaryLight }}>
                  <Code2 className="w-6 h-6" style={{ color: colors.secondary }} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">Développement Frontend</h4>
                  <p className="text-stone-600">React, TypeScript, Tailwind CSS pour des interfaces modernes et sécurisées</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 border rounded-2xl p-5" style={{ borderColor: colors.borderPrimary }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.bgPrimaryLight }}>
                  <Mail className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">Réponse Rapide</h4>
                  <p className="text-stone-600">Je vous répondrai dans les 72h suivant votre demande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
