'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ==========================================
// EMAILJS CONFIGURATION
// ==========================================
// Replace these constants with your actual EmailJS credentials.
// 1. Create an account at https://www.emailjs.com/
// 2. Add an Email Service and get the SERVICE_ID.
// 3. Create an Email Template and get the TEMPLATE_ID.
// 4. Get your PUBLIC_KEY from the Account > API Keys section.
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const PROJECT_TYPES = [
  'General Contracting',
  'Residential Construction',
  'Commercial Construction',
  'Civil Works',
  'Renovation & Finishing',
  'Site Supervision',
  'Other',
]

const inputBase =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-[#0F172A] placeholder:text-gray-400 transition-all duration-200 focus:border-[#1D4ED8] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#1D4ED8]/20'

const inputError =
  'border-red-500 focus:border-red-500 focus:ring-red-500/20'

const labelBase =
  'block font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-[#0F172A] mb-1.5'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'success' | 'error'

  function validateForm() {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
        submissionDate: new Date().toLocaleString(),
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-[#1D4ED8]/30 bg-[#EFF6FF] p-12 text-center shadow-sm">
        <span className="flex size-16 items-center justify-center rounded-full bg-[#1D4ED8]/15">
          <CheckCircle2 className="size-8 text-[#1D4ED8]" />
        </span>
        <h3 className="font-heading text-xl font-extrabold text-[#0F172A]">Message Sent!</h3>
        <p className="max-w-xs text-sm leading-relaxed text-gray-500">
          Thank you! Your request has been sent successfully. Our team will contact you soon.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-2 rounded-full border border-[#1D4ED8] px-6 py-2 font-heading text-xs font-bold uppercase tracking-widest text-[#1D4ED8] transition-all duration-200 hover:bg-[#1D4ED8] hover:text-white"
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Row: Full Name + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelBase}>Full Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="e.g. Abebe Kebede"
            className={`${inputBase} ${errors.name ? inputError : ''}`}
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelBase}>Phone Number</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder="+251 9X XXX XXXX"
            className={`${inputBase} ${errors.phone ? inputError : ''}`}
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.phone && <p id="phone-error" className="mt-1.5 text-xs font-medium text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className={labelBase}>Email Address</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          placeholder="abebe@example.com"
          className={`${inputBase} ${errors.email ? inputError : ''}`}
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.email && <p id="email-error" className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="cf-type" className={labelBase}>Project Type</label>
        <select 
          id="cf-type" 
          name="projectType" 
          className={`${inputBase} ${errors.projectType ? inputError : ''}`}
          value={formData.projectType}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.projectType}
          aria-describedby={errors.projectType ? 'type-error' : undefined}
          disabled={isSubmitting}
        >
          <option value="" disabled>Select a project type…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.projectType && <p id="type-error" className="mt-1.5 text-xs font-medium text-red-500">{errors.projectType}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={labelBase}>Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us about your project — location, size, timeline, and any specific requirements…"
          className={`${inputBase} resize-none ${errors.message ? inputError : ''}`}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.message && <p id="message-error" className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p>}
      </div>

      {/* Error Message Alert */}
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-600 border border-red-100" role="alert">
          <AlertCircle className="size-5 shrink-0" />
          <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
        </div>
      )}

      {/* CTA Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1D4ED8] px-6 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-[#1D4ED8]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E3A8A] hover:shadow-xl hover:shadow-[#1D4ED8]/40 disabled:pointer-events-none disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Request a Quote
            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}
