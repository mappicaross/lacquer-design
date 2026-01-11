import './App.css'

import { useEffect, useState } from 'react'
import { LacquerLogo } from './components/LacquerLogo'
import { PinIcon, EmailIcon, InstaIcon } from './components/Icons'

const HOMEPAGE_IMAGES = [
  '/images/homepage/h1.webp',
  '/images/homepage/h2.webp',
  '/images/homepage/h3.webp',
  '/images/homepage/h4.webp',
  '/images/homepage/h5.webp',
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HOMEPAGE_IMAGES.length)
    }, 7000) // change image every 7 seconds for a slow loop

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-lacquer-bg text-lacquer-blue">
      <main>
        {/* Full viewport hero with slideshow */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Image stack for crossfade */}
          {HOMEPAGE_IMAGES.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Circular menu + logo overlaid on hero (sits above overlay nav so the icon morphs in-place) */}
          <div className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
            <button
              type="button"
              onClick={() => setNavOpen((open) => !open)}
              className={`mt-1 flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-colors duration-200 ${
                navOpen ? 'bg-white text-lacquer-blue' : 'bg-lacquer-blue text-white'
              }`}
              aria-label={navOpen ? 'Close site navigation' : 'Open site navigation'}
            >
              <div className="relative h-[18px] w-7">
                <span
                  className={`absolute left-0 right-0 h-[2px] rounded-full bg-current transition-transform duration-200 ease-out ${
                    navOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0 rotate-0'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] rounded-full bg-current transition-all duration-200 ease-out ${
                    navOpen
                      ? 'top-1/2 -translate-y-1/2 scale-x-0 opacity-0'
                      : 'top-1/2 -translate-y-1/2'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] rounded-full bg-current transition-transform duration-200 ease-out ${
                    navOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0 rotate-0'
                  }`}
                />
              </div>
            </button>
            <div
              className={`transition-colors duration-500 ${
                currentIndex === 2 ? 'text-white' : 'text-lacquer-blue'
              }`}
            >
              <LacquerLogo
                className="w-[160px] md:w-[221px] h-auto"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Hero heading content intentionally removed */}
        </section>

        {/* Below-hero text block */}
        <section className="bg-lacquer-bg px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-[1414px]">
            <div className="w-full text-left md:w-2/3">
              <p className="text-[28px] font-medium leading-[61px] md:text-[42px]">
                Lacquer Design is a Pensacola-based interior design studio
                creating homes that feel thoughtful, inviting, and uniquely
                personal. With a focus on craftsmanship, comfort, and enduring
                design, we help clients shape homes that feel both elevated and
                effortless to live in.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <button
                  type="button"
                  className="group flex flex-col justify-between rounded-2xl border border-lacquer-blue/10 bg-white/40 px-6 py-7 text-left shadow-sm transition hover:border-lacquer-blue/30 hover:bg-white"
                >
                  <span className="text-lg font-medium text-lacquer-blue">
                    Projects
                  </span>
                  <p className="mt-3 text-sm text-lacquer-blue/70 opacity-0 transition duration-200 ease-out group-hover:opacity-100">
                    A look at recent residential work, from historic cottages to
                    new-build homes.
                  </p>
                </button>
                <button
                  type="button"
                  className="group flex flex-col justify-between rounded-2xl border border-lacquer-blue/10 bg-white/40 px-6 py-7 text-left shadow-sm transition hover:border-lacquer-blue/30 hover:bg-white"
                >
                  <span className="text-lg font-medium text-lacquer-blue">
                    Studio
                  </span>
                  <p className="mt-3 text-sm text-lacquer-blue/70 opacity-0 transition duration-200 ease-out group-hover:opacity-100">
                    Learn more about our design philosophy, process, and the
                    studio behind Lacquer.
                  </p>
                </button>
                <button
                  type="button"
                  className="group flex flex-col justify-between rounded-2xl border border-lacquer-blue/10 bg-white/40 px-6 py-7 text-left shadow-sm transition hover:border-lacquer-blue/30 hover:bg-white"
                >
                  <span className="text-lg font-medium text-lacquer-blue">
                    Contact
                  </span>
                  <p className="mt-3 text-sm text-lacquer-blue/70 opacity-0 transition duration-200 ease-out group-hover:opacity-100">
                    Reach out to begin a project, request a consultation, or ask
                    a question.
                  </p>
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm text-lacquer-blue/80">
                <div className="flex items-center gap-3">
                  <PinIcon className="h-6 w-6 text-lacquer-blue" />
                  <span>Pensacola, Florida</span>
                </div>
                <a
                  href="mailto:studio@lacquerdesign.com"
                  className="flex items-center gap-3 hover:text-lacquer-blue"
                >
                  <EmailIcon className="h-6 w-6 text-lacquer-blue" />
                  <span>studio@lacquerdesign.com</span>
                </a>
                <a
                  href="https://instagram.com/lacquer_design"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-lacquer-blue"
                >
                  <InstaIcon className="h-6 w-6 text-lacquer-blue" />
                  <span>@lacquer_design</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global fullscreen navigation with fade in/out */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-500 ease-out ${
          navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full w-full bg-black/25">
          <div className="flex w-1/2 min-w-[320px] bg-lacquer-blue px-8 py-10 text-white md:px-16">
            <div className="relative flex h-full w-full">
              <nav className="absolute left-0 right-0 top-1/2 -translate-y-1/2 space-y-6 text-left md:space-y-8">
                <button type="button" className="block text-[32px] font-medium md:text-[40px]">
                  Projects
                </button>
                <button type="button" className="block text-[32px] font-medium md:text-[40px]">
                  Studio
                </button>
                <button type="button" className="block text-[32px] font-medium md:text-[40px]">
                  Contact
                </button>
              </nav>

              <div className="absolute left-0 right-0 bottom-10 space-y-2 text-xs text-white/80 md:text-sm">
                <div className="flex items-center gap-2">
                  <PinIcon className="h-4 w-4 text-white" />
                  <span>Pensacola, Florida</span>
                </div>
                <a
                  href="mailto:studio@lacquerdesign.com"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <EmailIcon className="h-4 w-4 text-white" />
                  <span>studio@lacquer_design.com</span>
                </a>
                <a
                  href="https://instagram.com/lacquer_design"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <InstaIcon className="h-4 w-4 text-white" />
                  <span>@lacquer_design</span>
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setNavOpen(false)}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  )
}

export default App
