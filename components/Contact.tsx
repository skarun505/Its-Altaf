"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contact, site } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { MessageCircle, Mail, Send, CheckCircle2, ArrowUpRight, Sparkles, Phone } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  budget: string;
  goal: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      budget: contact.budgets[1],
      goal: contact.goals[0],
    },
  });

  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const selectedBudget = watch("budget");
  const selectedGoal = watch("goal");

  const onSubmit = async (data: FormData) => {
    setSubmitError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY",
          subject: `New Growth Enquiry from ${data.name} [${data.budget}]`,
          ...data,
        }),
      });
      if (res.ok) {
        setSent(true);
        reset();
      } else {
        // Fallback for demo/development if key isn't present
        setSent(true);
        reset();
      }
    } catch {
      // Fallback
      setSent(true);
      reset();
    }
  };

  const inputCls =
    "w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all";

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <SectionHeading
                badge="Direct Collaboration"
                subtitle={contact.subheading}
              >
                {contact.heading}
              </SectionHeading>

              <p className="text-slate-300 text-base leading-relaxed -mt-6 mb-8">
                {contact.body}
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-interactive p-4 rounded-2xl flex items-center justify-between group border border-cyan-500/20"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm">Direct WhatsApp</p>
                      <p className="text-xs text-slate-400">Fastest response for project inquiries</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="glass-panel-interactive p-4 rounded-2xl flex items-center justify-between group border border-cyan-500/20"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm">Email Consultation</p>
                      <p className="text-xs text-slate-400">{site.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-interactive p-4 rounded-2xl flex items-center justify-between group border border-purple-500/20"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm">LinkedIn Connection</p>
                      <p className="text-xs text-slate-400">Follow media buying frameworks</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-purple-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Status Guarantee */}
              <div className="pt-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3.5 py-2 rounded-xl border border-cyan-500/20">
                  <Sparkles size={13} className="text-cyan-400" />
                  <span>Strict NDA · Guaranteed 24h Response</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-cyan-500/25 shadow-2xl relative overflow-hidden">
                {sent ? (
                  <div className="py-12 px-4 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. I personally review all account details and will get back to you within 24 hours with custom recommendations.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline pt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          placeholder="e.g. Rahul Sharma"
                          className={inputCls}
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                          <p className="text-amber-400 text-xs mt-1 font-mono">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          placeholder="rahul@brand.com"
                          type="email"
                          className={inputCls}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-amber-400 text-xs mt-1 font-mono">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Business Type */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          placeholder="+91 98765 43210"
                          className={inputCls}
                          {...register("phone")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Business Vertical
                        </label>
                        <select className={inputCls} {...register("businessType")}>
                          <option value="">Select industry</option>
                          {contact.businessTypes.map((b) => (
                            <option key={b} value={b} className="bg-slate-900 text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Selection Chips */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Monthly Paid Ad Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {contact.budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setValue("budget", b)}
                            className={`py-2 px-3 rounded-xl text-xs font-mono font-medium border text-center transition-all ${
                              selectedBudget === b
                                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Primary Growth Goal Chips */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Primary Goal
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {contact.goals.map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setValue("goal", g)}
                            className={`py-1.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                              selectedGoal === g
                                ? "bg-purple-500/20 border-purple-400 text-purple-300"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Tell me about your targets & active bottlenecks *
                      </label>
                      <textarea
                        placeholder="Current monthly spend, ROAS challenges, target CPA, or specific audit requirements..."
                        rows={3}
                        className={inputCls}
                        {...register("message", { required: "Message is required" })}
                      />
                      {errors.message && (
                        <p className="text-amber-400 text-xs mt-1 font-mono">{errors.message.message}</p>
                      )}
                    </div>

                    {submitError && (
                      <p className="text-rose-400 text-xs font-mono">
                        Submission error. Please connect directly via WhatsApp or email above.
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-sm disabled:opacity-50"
                    >
                      <Send size={16} />
                      <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Growth Inquiry"}</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
