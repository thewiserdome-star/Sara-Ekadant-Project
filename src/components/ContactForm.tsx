import { useState, FormEvent } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyConfig: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();  // Prevent form default submit behavior
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Open PDF immediately in response to user action - critical for iOS Safari
    // iOS Safari blocks tab opening if it happens after async operations
    const pdfUrl = 'https://saraekadant.blob.core.windows.net/mediasaraekadant/Sara%20Ekadant%20Brochure.pdf';
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');

    try {
      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          property_config: formData.propertyConfig,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', propertyConfig: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-navy-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400">
            Schedule a private viewing or request more information
          </p>
        </div>

        <div className="bg-navy-800 p-8 md:p-12 border border-gold-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-navy-700 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-navy-700 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    placeholder="+91-999999999"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-navy-700 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Property Configuration
              </label>
              <div className="flex flex-wrap gap-6 text-gray-200">
                {['1 BHK', '2 BHK', '3.5 BHK Duplex'].map((option) => (
                  <label key={option} className="inline-flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="propertyConfig"
                      value={option}
                      checked={formData.propertyConfig === option}
                      onChange={(e) => setFormData({ ...formData, propertyConfig: e.target.value })}
                      className="h-5 w-5 text-gold-500 focus:ring-gold-500 border-gold-500/50 bg-navy-700"
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-navy-700 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                  placeholder="Tell us about you..."
                />
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p>Thank you for your interest! We'll be in touch soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400">
                <p>Something went wrong. Please try again later.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 py-4 px-8 font-semibold transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
