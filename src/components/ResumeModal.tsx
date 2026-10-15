import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Loader2, Mail, AlertCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ResumeRequestPayload {
  email: string;
}

const TARGET_EMAIL = 'palakschiraniya@gmail.com';
const DEFAULT_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

/**
 * Sends a real email notification when a visitor requests the resume.
 * Uses FormSubmit public AJAX endpoint or custom VITE_EMAIL_ENDPOINT if set in .env.
 * No private server API keys are exposed in client JavaScript.
 */
export const submitResumeAccessRequest = async (
  payload: ResumeRequestPayload
): Promise<{ success: boolean; message: string }> => {
  const endpoint = import.meta.env.VITE_EMAIL_ENDPOINT || DEFAULT_ENDPOINT;

  const timestamp = new Date().toISOString();
  const messageBody = `Someone has requested your resume through your portfolio.\n\nRequester email:\n${payload.email}\n\nThis is only a request. No resume has been automatically shared.`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      _subject: 'New Resume Request — Palak Chiraniya',
      _captcha: 'false',
      email: payload.email,
      message: messageBody,
      source: 'Palak Chiraniya Portfolio',
      timestamp: timestamp,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.success === 'true' || data.success === true) {
    return {
      success: true,
      message: 'Request delivered successfully.',
    };
  } else {
    console.warn('[ResumeAccessRequest] Response detail:', data);
    throw new Error(data.message || 'Email delivery pending or failed.');
  }
};

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setEmail('');
        setError(undefined);
        setSubmitError(undefined);
        setIsSubmitting(false);
        setIsSubmitted(false);
      }, 200);
    }
  }, [isOpen]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateEmail = (): boolean => {
    if (!email.trim()) {
      setError('Email address is required.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError(undefined);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;

    setIsSubmitting(true);
    setSubmitError(undefined);

    try {
      await submitResumeAccessRequest({ email: email.trim() });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to submit resume request:', err);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[420px] bg-[#292929] border border-[#41403C] rounded-2xl shadow-2xl p-6 sm:p-7 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9DB7A5]/80 to-[#9DB7A5]/20" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4.5 right-4.5 p-1 rounded-lg text-[#B8B3AA] hover:text-[#F4F1EA] hover:bg-[#303030] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="py-4 text-center space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#9DB7A5]/15 border border-[#9DB7A5]/30 flex items-center justify-center mx-auto text-[#9DB7A5]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#F4F1EA] tracking-tight font-sans">
                Request sent <span className="text-[#9DB7A5]">✓</span>
              </h3>
              <p className="text-xs text-[#B8B3AA] font-sans leading-relaxed">
                Thanks! I'll get back to you soon.
              </p>
            </div>

            <div className="pt-3 border-t border-[#41403C]">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-[#303030] hover:bg-[#303832] border border-[#41403C] text-[#F4F1EA] font-medium text-xs font-mono transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* REQUEST FORM STATE */
          <div className="space-y-5">
            {/* Header */}
            <div className="space-y-1 pr-6">
              <h3 className="text-xl font-bold text-[#F4F1EA] tracking-tight font-sans">
                Would you like my resume?
              </h3>
              <p className="text-xs text-[#B8B3AA] font-sans leading-relaxed">
                Please provide your email address if you'd like me to share it with you.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-mono font-medium text-[#B8B3AA]">
                  Email address <span className="text-[#9DB7A5]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#B8B3AA]/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(undefined);
                      if (submitError) setSubmitError(undefined);
                    }}
                    placeholder="your@email.com"
                    className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#202020] border text-xs sm:text-sm text-[#F4F1EA] placeholder-[#B8B3AA]/50 font-sans transition-all duration-200 focus:outline-none focus:ring-1 ${
                      error
                        ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-[#41403C] focus:border-[#9DB7A5] focus:ring-[#9DB7A5]'
                    }`}
                  />
                </div>
                {error && (
                  <p className="flex items-center gap-1 text-[11px] text-rose-400 font-mono mt-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{error}</span>
                  </p>
                )}
              </div>

              {/* Submit Error Message */}
              {submitError && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-sans">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-[#41403C]">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono text-[#B8B3AA] hover:text-[#F4F1EA] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-xl bg-[#9DB7A5] hover:bg-[#B3C9B9] text-[#202020] font-semibold text-xs font-mono flex items-center gap-1.5 transition-all duration-200 shadow-sm disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
