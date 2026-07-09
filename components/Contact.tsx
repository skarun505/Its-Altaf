"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contact, site } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { MessageCircle, Mail } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New enquiry from portfolio site",
          ...data,
        }),
      });
      if (res.ok) {
        setSent(true);
        reset();
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  };

  const inputCls =
    "w-full bg-bg border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface/40">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeading>{contact.heading}</SectionHeading>
          <p className="text-muted text-lg -mt-6 mb-8">{contact.body}</p>
          <div className="space-y-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
            >
              <MessageCircle className="text-accent" size={20} /> WhatsApp
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>{" "}
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
            >
              <Mail className="text-accent" size={20} /> {site.email}
            </a>
          </div>
        </div>

        <div className="bg-surface border border-line rounded-2xl p-7">
          {sent ? (
            <p className="text-primary">
              Message sent. I&apos;ll get back to you within 24 hours.
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div>
                <input placeholder="Name" className={inputCls} {...register("name", { required: true })} />
                {errors.name && <p className="text-warm text-xs mt-1">Name is required</p>}
              </div>
              <div>
                <input placeholder="Email" type="email" className={inputCls} {...register("email", { required: true })} />
                {errors.email && <p className="text-warm text-xs mt-1">Email is required</p>}
              </div>
              <input placeholder="Phone" className={inputCls} {...register("phone")} />
              <div className="grid grid-cols-2 gap-4">
                <select className={inputCls} {...register("businessType")}>
                  <option value="">Business type</option>
                  {contact.businessTypes.map((b) => <option key={b}>{b}</option>)}
                </select>
                <select className={inputCls} {...register("budget")}>
                  <option value="">Monthly ad budget</option>
                  {contact.budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <textarea placeholder="Tell me about your goals" rows={4} className={inputCls} {...register("message", { required: true })} />
                {errors.message && <p className="text-warm text-xs mt-1">Message is required</p>}
              </div>
              {submitError && <p className="text-warm text-xs">Something went wrong. Please try again.</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
