import './App.css'

import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LacquerLogo } from './components/LacquerLogo'

export default function Contact() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Store form reference before async operations
    const form = e.currentTarget
    const formData = new FormData(form)
    const data: Record<string, string> = {}
    
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    try {
      // Using FormSubmit.co - Free form submission service
      // Works on both localhost and production domains
      // NOTE: First submission requires email confirmation at FormSubmit.co
      // After confirming, all future submissions will work automatically
      // 
      // Alternative services to consider:
      // - Formspree (https://formspree.io)
      // - Netlify Forms (if hosting on Netlify)
      // - Custom serverless function
      const response = await fetch('https://formsubmit.co/studio@lacquerdesign.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Project Inquiry from ${data.name}`,
          _template: 'table',
          _captcha: 'false', // Set to 'true' to enable reCAPTCHA
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        console.error('Form submission failed:', response.status, response.statusText)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-lacquer-bg text-lacquer-blue">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-xs font-medium uppercase tracking-[0.18em] text-lacquer-blue/80 hover:text-lacquer-blue"
        >
          ← Back to home
        </button>
        <div className="text-lacquer-blue">
          <LacquerLogo
            className="w-[160px] md:w-[221px] h-auto"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Content */}
      <main className="px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <section className="mb-8 md:mb-12">
            <h1 className="text-2xl font-medium md:text-3xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-sm text-lacquer-blue/80 md:text-base">
              Get in touch with Lacquer Design to discuss how we can bring your vision to life. 
              Whether you're starting a new project or looking for guidance, we're here to create 
              a space that's uniquely yours.
            </p>
          </section>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Project Address */}
            <div>
              <label htmlFor="projectAddress" className="block text-sm font-medium mb-2">
                Project Address <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectAddress"
                name="projectAddress"
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Current Address */}
            <div>
              <label htmlFor="currentAddress" className="block text-sm font-medium mb-2">
                Current Address (if different from project address)
              </label>
              <input
                type="text"
                id="currentAddress"
                name="currentAddress"
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Square Footage */}
            <div>
              <label htmlFor="squareFootage" className="block text-sm font-medium mb-2">
                Approximate Square Footage
              </label>
              <input
                type="text"
                id="squareFootage"
                name="squareFootage"
                placeholder="e.g. 2,500 sq ft"
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Type of Project */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Type of Project <span className="text-red-600">*</span>
              </label>
              <div className="space-y-3">
                {[
                  'Renovation and Interior Furnishing & Styling',
                  'New Build and Interior Furnishing & Styling',
                  'Furnishing & Styling',
                  'Commercial',
                  'Other'
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="projectType"
                      value={option}
                      required
                      className="h-4 w-4 border-lacquer-blue/20 text-lacquer-blue focus:ring-lacquer-blue"
                    />
                    <span className="text-sm text-lacquer-blue/90">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Scope of Work */}
            <div>
              <label htmlFor="scopeOfWork" className="block text-sm font-medium mb-2">
                Scope of Work <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="scopeOfWork"
                name="scopeOfWork"
                placeholder="e.g. Whole House, 2 Rooms, etc."
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Project Dates */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                  Ideal Project Start Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
                />
              </div>
              <div>
                <label htmlFor="completionDate" className="block text-sm font-medium mb-2">
                  Ideal Project Completion Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  id="completionDate"
                  name="completionDate"
                  required
                  className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
                />
              </div>
            </div>

            {/* Budgets */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="buildBudget" className="block text-sm font-medium mb-2">
                  Estimated Build/Renovation Budget <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="buildBudget"
                  name="buildBudget"
                  placeholder="e.g. $50,000 - $100,000"
                  required
                  className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
                />
              </div>
              <div>
                <label htmlFor="furnishingsBudget" className="block text-sm font-medium mb-2">
                  Estimated Furnishings & Decor Budget <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="furnishingsBudget"
                  name="furnishingsBudget"
                  placeholder="e.g. $25,000 - $50,000"
                  required
                  className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
                />
              </div>
            </div>

            {/* Architect/Contractor */}
            <div>
              <label htmlFor="architectContractor" className="block text-sm font-medium mb-2">
                Are you or will you work with an architect and/or contractor? If so, please list the parties involved and the project status. <span className="text-red-600">*</span>
              </label>
              <textarea
                id="architectContractor"
                name="architectContractor"
                rows={4}
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue resize-y"
              />
            </div>

            {/* Who will be living */}
            <div>
              <label htmlFor="occupants" className="block text-sm font-medium mb-2">
                Who will be living in/enjoying this space? <span className="text-red-600">*</span>
              </label>
              <textarea
                id="occupants"
                name="occupants"
                rows={3}
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue resize-y"
              />
            </div>

            {/* Inspiration Links */}
            <div>
              <label htmlFor="inspiration" className="block text-sm font-medium mb-2">
                Please share link(s) to any inspiration images and/or Pinterest boards to show us your style.
              </label>
              <textarea
                id="inspiration"
                name="inspiration"
                rows={3}
                placeholder="Pinterest board URLs, Instagram links, etc."
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue resize-y"
              />
            </div>

            {/* How did you hear */}
            <div>
              <label htmlFor="howHeard" className="block text-sm font-medium mb-2">
                How did you learn about Lacquer Design? <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="howHeard"
                name="howHeard"
                placeholder="e.g. Instagram, referral, Google search"
                required
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue"
              />
            </div>

            {/* Additional Info */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                Anything else you would like to tell us about your project?
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={5}
                className="w-full rounded-lg border border-lacquer-blue/20 bg-white px-4 py-3 text-lacquer-blue placeholder:text-lacquer-blue/40 focus:border-lacquer-blue focus:outline-none focus:ring-1 focus:ring-lacquer-blue resize-y"
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                Thank you for reaching out! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                There was an error submitting your form. Please try again or email us directly at{' '}
                <a href="mailto:studio@lacquerdesign.com" className="underline hover:text-red-900">
                  studio@lacquerdesign.com
                </a>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-lacquer-blue px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-lacquer-blue/90 disabled:opacity-50 disabled:cursor-not-allowed md:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
