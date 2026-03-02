import { useState } from 'react';
import { supabase } from '../config/supabase';
import { ContactForm } from '../types';

const EMAIL_REGEX = /^(?!.*\.\.)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const NAME_REGEX = /^[\p{L}\p{M}' -]+$/u;

const sanitizeInput = (value: string, maxLength: number) => {
  const trimmed = value.trim().replace(/[\u0000-\u001F\u007F]/g, '');
  const withoutTags = trimmed.replace(/[<>]/g, '');
  return withoutTags.slice(0, maxLength);
};

export const useContactForm = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    email: '',
    fullName: '',
    organization: '',
    message: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const validateForm = (form: ContactForm) => {
    const errors: Partial<Record<keyof ContactForm, string>> = {};
    const email = sanitizeInput(form.email, 120).toLowerCase();
    const fullName = sanitizeInput(form.fullName, 80);
    const organization = sanitizeInput(form.organization, 120);
    const message = sanitizeInput(form.message, 1200);

    if (!EMAIL_REGEX.test(email)) {
      errors.email = 'Email invalide.';
    }

    if (fullName.length < 2 || !NAME_REGEX.test(fullName)) {
      errors.fullName = 'Nom invalide.';
    }

    if (organization.length < 2) {
      errors.organization = 'Organisation invalide.';
    }

    if (message.length < 10) {
      errors.message = 'Message trop court.';
    }

    return { errors, sanitized: { email, fullName, organization, message } };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage('');

    if (contactForm.website.trim()) {
      setSubmitMessage('Erreur lors de l\'envoi. Réessayez plus tard.');
      return;
    }

    const { errors, sanitized } = validateForm(contactForm);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitMessage('Veuillez corriger les champs en erreur.');
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contacts').insert([{
        email: sanitized.email,
        full_name: sanitized.fullName,
        organization: sanitized.organization,
        message: sanitized.message
      }]);

      if (error) throw error;

      setSubmitMessage('Merci pour votre message! Je vous répondrai bientôt.');
      setContactForm({ email: '', fullName: '', organization: '', message: '', website: '' });
      setTimeout(() => setSubmitMessage(''), 3000);
    } catch (error) {
      setSubmitMessage('Erreur lors de l\'envoi. Réessayez plus tard.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof ContactForm, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return {
    contactForm,
    isSubmitting,
    submitMessage,
    fieldErrors,
    handleSubmit,
    updateField,
  };
};
