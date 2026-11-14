import { useState, FormEvent } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, ArrowUpRight, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { SocialIcon } from './SocialIcon';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactSection() {
  const { profile, socials } = PORTFOLIO_DATA;
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<FormValues | null>(null);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!data.subject.trim() || data.subject.trim().length < 3) {
      nextErrors.subject = 'Please provide a brief subject for your inquiry.';
    }
    if (!data.message.trim() || data.message.trim().length < 15) {
      nextErrors.message = 'Please include a short message (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback for restricted clipboard contexts
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedRecord({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    });
    setValues(INITIAL_VALUES);
  };

  const buildMailtoHref = (record: FormValues) => {
    const subject = encodeURIComponent(record.subject);
    const body = encodeURIComponent(
      `From: ${record.name} (${record.email})\n\n${record.message}`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 sm:py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Social Platforms */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Get in Touch
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-4xl dark:text-zinc-50">
              Let&apos;s build something dependable together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Whether you are hiring for a staff engineering role, scoping an architectural advisory engagement, or looking to collaborate on a product launch, I would be glad to hear from you.
            </p>

            {/* Direct Email Block */}
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Direct Email
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-base font-semibold text-zinc-950 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-50 dark:hover:text-blue-400"
                >
                  <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <span>{profile.email}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 whitespace-nowrap transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Platform Links */}
            <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Professional Profiles
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[48px] items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <SocialIcon
                        platform={social.platform}
                        className="h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-zinc-950 dark:text-zinc-100">
                          {social.label}
                        </p>
                        <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
              {submittedRecord ? (
                <div role="status" className="space-y-6 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                      Inquiry prepared, {submittedRecord.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      Your message regarding <span className="font-medium text-zinc-950 dark:text-zinc-100">&ldquo;{submittedRecord.subject}&rdquo;</span> has been validated and logged. You can also launch your default mail app below to dispatch it directly to <span className="font-medium">{profile.email}</span>.
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Message Preview
                    </p>
                    <p className="mt-2 whitespace-pre-line leading-relaxed">
                      {submittedRecord.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoHref(submittedRecord)}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Open in Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedRecord(null)}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-800"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="Alex Morgan"
                        className={`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-2 focus:outline-offset-0 focus:outline-blue-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 ${
                          errors.name
                            ? 'border-rose-500 dark:border-rose-500'
                            : 'border-zinc-300 dark:border-zinc-700'
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder="alex@company.com"
                        className={`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-2 focus:outline-offset-0 focus:outline-blue-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 ${
                          errors.email
                            ? 'border-rose-500 dark:border-rose-500'
                            : 'border-zinc-300 dark:border-zinc-700'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={values.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      placeholder="Staff Engineering Role / Product Architecture Inquiry"
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-2 focus:outline-offset-0 focus:outline-blue-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 ${
                        errors.subject
                          ? 'border-rose-500 dark:border-rose-500'
                          : 'border-zinc-300 dark:border-zinc-700'
                      }`}
                    />
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Share a brief overview of your team, project scope, or timeline..."
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-2 focus:outline-offset-0 focus:outline-blue-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 ${
                        errors.message
                          ? 'border-rose-500 dark:border-rose-500'
                          : 'border-zinc-300 dark:border-zinc-700'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Typically replies within 1 business day.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
