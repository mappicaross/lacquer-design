import './App.css'

import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LacquerLogo } from './components/LacquerLogo'
import { PinIcon, EmailIcon, InstaIcon } from './components/Icons'
import { ProjectCard } from './components/ProjectCard'
import { InProgressCard } from './components/InProgressCard'

const IN_PROGRESS_PROJECTS = [
  {
    title: 'Abbington Lane',
    imageSrc: '/images/progress-cards/progress-abbington.webp',
    imageAlt: 'Abbington Lane project in progress',
    description:
      'A full-scale family renovation pairing classic Americana style with highly functional, kid-friendly spaces.',
  },
  {
    title: 'Barlow Road',
    secondary: 'NEW YORK',
    imageSrc: '/images/progress-cards/progress-barlow.webp',
    imageAlt: 'Barlow Road project in progress',
    description:
      'A living and dining room refresh highlighting refined traditional details, custom built-ins, and timeless, layered materials.',
  },
  {
    title: 'Bayou Boulevard I',
    imageSrc: '/images/progress-cards/progress-bayouI.webp',
    imageAlt: 'Bayou Boulevard I project in progress',
    description:
      'A contemporary coastal new build with historic influences, designed to capture bayou views in downtown Pensacola.',
  },
  {
    title: 'Bayou Boulevard II',
    secondary: 'COMMERCIAL',
    imageSrc: '/images/progress-cards/progress-bayouII.webp',
    imageAlt: 'Bayou Boulevard II commercial project in progress',
    description:
      'A commercial refresh for a growing Pensacola law office, bringing a sophisticated residential sensibility to the workplace.',
  },
  {
    title: 'Cove Road',
    imageSrc: '/images/progress-cards/progress-cove.webp',
    imageAlt: 'Cove Road project in progress',
    description:
      'A full-home contemporary renovation on Bayou Texar, reimagining interiors throughout to suit modern family living.',
  },
  {
    title: 'Dunwoody Drive',
    imageSrc: '/images/progress-cards/progress-dunwoody.webp',
    imageAlt: 'Dunwoody Drive project in progress',
    description:
      'A playful, vibrant decorating project layering personality and color into a recently remodeled Cordova Park family home.',
  },
  {
    title: 'Gadsden Street I',
    imageSrc: '/images/progress-cards/progress-gadsden.webp',
    imageAlt: 'Gadsden Street I project in progress',
    description:
      'A ground-up East Hill new build with a main residence and ADU designed for tailored, family-focused living.',
  },
  {
    title: 'Gadsden Street II',
    imageSrc: '/images/progress-cards/progress-gadsdenII.webp',
    imageAlt: 'Gadsden Street II project in progress',
    description:
      'A Gadsden-area spec new build refined for broad appeal, with flexible layouts, upgraded kitchens and baths, and indoor–outdoor living potential.',
  },
  {
    title: 'Mallory Street',
    imageSrc: '/images/progress-cards/progress-mallory.webp',
    imageAlt: 'Mallory Street project in progress',
    description:
      'A renovation of a historic East Hill family home overlooking Bayview Park, blending updated interiors with classic character.',
  },
  {
    title: 'Menendez Drive',
    imageSrc: '/images/progress-cards/progress-menendez.webp',
    imageAlt: 'Menendez Drive project in progress',
    description:
      'A midcentury kitchen remodel for a bayou-front East Hill home, emphasizing thoughtful layout updates and cohesive material selections.',
  },
  {
    title: 'Munro Road',
    imageSrc: '/images/progress-cards/progress-munro.webp',
    imageAlt: 'Munro Road project in progress',
    description:
      'A midcentury modern restyling of a classic ranch home, reworking layouts and kitchen design for contemporary family living.',
  },
  {
    title: 'Semoran Circle',
    imageSrc: '/images/progress-cards/progress-semoran.webp',
    imageAlt: 'Semoran Circle project in progress',
    description:
      'A retro-leaning family renovation in Inverness, Pensacola, centered on a midcentury-inspired kitchen and playful, color-forward interiors.',
  },
  {
    title: 'Tanglewood Drive',
    imageSrc: '/images/progress-cards/progress-tanglewood.webp',
    imageAlt: 'Tanglewood Drive project in progress',
    description:
      'A ground-up family new build on Bayou Texar, combining classic architectural details with expansive, view-focused living spaces.',
  },
]

const HOMEPAGE_IMAGES = [
  '/images/homepage/h3.webp',
  '/images/homepage/h4.webp',
  '/images/homepage/h1.webp',
  '/images/homepage/h6.webp',
  '/images/homepage/h2.webp',
  '/images/homepage/h5.webp',
]

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HOMEPAGE_IMAGES.length)
    }, 7000) // change image every 7 seconds for a slow loop

    return () => window.clearInterval(interval)
  }, [])

  // Smooth scroll to anchored sections when hash is present
  useEffect(() => {
    if (!location.hash) return
    const targetId = location.hash.replace('#', '')
    const section = document.getElementById(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  const showWhiteLogo = HOMEPAGE_IMAGES[currentIndex]?.includes('h3')

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
                showWhiteLogo ? 'text-white' : 'text-lacquer-blue'
              }`}
            >
              <LacquerLogo
                className="w-[160px] md:w-[221px] h-auto"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Subtle scroll cue to encourage exploring further down the page */}
          <div className="pointer-events-none absolute inset-x-0 bottom-10 z-30 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/#about')}
              className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-lacquer-blue px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-lacquer-blue/90"
            >
              <span>Scroll for more</span>
              <span className="flex h-6 w-6 items-center justify-center text-base leading-none">
                ↓
              </span>
            </button>
          </div>
        </section>

        {/* Below-hero text block */}
        <section
          id="about"
          className="bg-lacquer-bg px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24"
        >
          <div className="mx-auto max-w-[1414px]">
            <div className="w-full text-left md:w-2/3">
              <p className="text-[28px] font-medium leading-[61px] md:text-[42px]">
                Lacquer Design is a Pensacola-based interior design studio
                creating homes that feel thoughtful, inviting, and uniquely
                personal. With a focus on craftsmanship, comfort, and enduring
                design, we help clients shape homes that feel both elevated and
                effortless to live in.
              </p>
            </div>
          </div>
        </section>

        {/* Completed projects on homepage */}
        <section
          id="recent-projects"
          className="bg-lacquer-bg px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24"
        >
          <div className="mx-auto max-w-[1414px]">
            <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-lacquer-blue/80 md:text-base">
              Recently Completed
            </h2>

            <div className="mt-6 space-y-6">
              <ProjectCard
                title="Cleveland Park"
                secondary="Washington D.C."
                description="A full-scale renovation of a classic Cleveland Park home, reimagining all four levels for modern family living while preserving its historic character."
                imageSrc="/images/project-cards/dc-card.webp"
                imageAlt="Cleveland Park project by Lacquer Design"
                onViewGallery={() => navigate('/projects/cleveland-park')}
              />

              <ProjectCard
                title="Perdido Key"
                description="A Perdido Key beach house refresh featuring elevated coastal kitchens and baths with playful pattern, texture, and serene spa-like finishes."
                imageSrc="/images/project-cards/perdido-card.webp"
                imageAlt="Perdido Key project by Lacquer Design"
                onViewGallery={() => navigate('/projects/perdido')}
              />
            </div>
          </div>
        </section>

        {/* In-progress projects */}
        <section className="bg-lacquer-bg px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
          <div className="mx-auto max-w-[1414px]">
            <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-lacquer-blue/80 md:text-base">
              In Progress
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {IN_PROGRESS_PROJECTS.map((project) => (
                <InProgressCard
                  key={project.title}
                  title={project.title}
                  secondary={project.secondary}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer contact strip */}
        <footer className="bg-lacquer-bg px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-28">
          <div className="mx-auto max-w-[1414px]">
            <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4 text-sm text-lacquer-blue/80">
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
        </footer>
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
                <button
                  type="button"
                  className="block text-[32px] font-medium md:text-[40px]"
                  onClick={() => {
                    setNavOpen(false)
                    navigate('/#recent-projects')
                  }}
                >
                  Projects
                </button>
              <button
                type="button"
                className="block text-[32px] font-medium md:text-[40px]"
                onClick={() => {
                  setNavOpen(false)
                  navigate('/studio')
                }}
              >
                  Studio
                </button>
              <button
                type="button"
                className="block text-[32px] font-medium md:text-[40px]"
                onClick={() => {
                  setNavOpen(false)
                  navigate('/contact')
                }}
              >
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
                  <span>studio@lacquerdesign.com</span>
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
