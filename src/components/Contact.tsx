'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { ContactFormData } from '@/types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@walras-research.com',
      href: 'mailto:contact@walras-research.com'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit to Netlify Forms
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          subject: 'New Contact Form Submission - Walras Research',
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You could add error handling here
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-terminal-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
            suppressHydrationWarning
          >
            <div className="w-20 h-20 border border-terminal-border rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mb-4">
              Thank You!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 px-4 sm:px-0 font-sans">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setErrors({});
              }}
              className="bg-copper hover:bg-copper-light text-white px-8 py-3 font-mono text-sm tracking-wider transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-terminal-darker">
      {/* Static form for Netlify detection - hidden */}
      <form name="contact" data-netlify="true" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <textarea name="message"></textarea>
        <input type="hidden" name="subject" />
      </form>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-copper-light/60 tracking-widest">CONTACT_PROTOCOL</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-copper-light/20 to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6">
            Get In <span className="text-copper-light italic">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl font-sans leading-relaxed">
            Ready to maximize your crypto investments? Contact our team to discuss 
            your portfolio and explore our exclusive trading strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6 sm:mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 border border-terminal-border flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-copper-light" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-terminal-muted tracking-widest mb-2">
                      {info.label}
                    </h4>
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-copper-light transition-colors font-sans"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-terminal-black border border-terminal-border p-4 sm:p-6 shadow-terminal">
              <h4 className="font-serif text-xl text-white mb-4">
                Office Hours
              </h4>
              <div className="space-y-2 text-gray-400 font-sans">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-terminal-black border border-terminal-border p-6 sm:p-8 shadow-terminal"
          >
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="New Contact Form Submission - Walras Research" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-terminal-muted tracking-widest mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-terminal-darker/60 text-white placeholder:text-terminal-muted focus:ring-2 focus:ring-copper-light/40 focus:border-copper-light/40 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-terminal-border'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-terminal-muted tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-terminal-darker/60 text-white placeholder:text-terminal-muted focus:ring-2 focus:ring-copper-light/40 focus:border-copper-light/40 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-terminal-border'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-mono text-terminal-muted tracking-widest mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-terminal-border bg-terminal-darker/60 text-white placeholder:text-terminal-muted focus:ring-2 focus:ring-copper-light/40 focus:border-copper-light/40 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-terminal-muted tracking-widest mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 border bg-terminal-darker/60 text-white placeholder:text-terminal-muted focus:ring-2 focus:ring-copper-light/40 focus:border-copper-light/40 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-terminal-border'
                  }`}
                  placeholder="Tell us about your investment goals and how we can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-copper hover:bg-copper-light disabled:bg-copper/60 text-white py-4 px-6 font-mono text-sm tracking-wider transition-all duration-300 flex items-center justify-center group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
