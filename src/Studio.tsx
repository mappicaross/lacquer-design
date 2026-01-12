import './App.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LacquerLogo } from './components/LacquerLogo'
import { PinIcon, EmailIcon, InstaIcon } from './components/Icons'

export default function Studio() {
  const navigate = useNavigate()
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-lacquer-bg text-lacquer-blue">
      <main>
        {/* Top hero image with shared nav + logo */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <img
            src="/images/studio-header.webp"
            alt="Lacquer Design studio interior"
            className="h-full w-full object-cover"
          />

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
            <div className="text-lacquer-blue">
              <LacquerLogo
                className="w-[160px] md:w-[221px] h-auto"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* Studio copy */}
        <section className="bg-lacquer-bg px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-10 text-left text-base leading-relaxed md:text-lg md:leading-relaxed">
            <p className="text-[20px] font-medium md:text-[24px]">
              Lacquer Design is a Pensacola-based interior design studio dedicated to creating spaces
              that feel both elevated and lived-in. Since its launch in 2021, the studio has focused
              exclusively on residential interiors, blending bold design choices with thoughtful details
              that reflect the unique personality of each client. From coastal retreats to modern family
              homes, Lacquer Design approaches every project with a sense of creativity, craftsmanship,
              and care.
            </p>

            {/* Emily */}
            <div className="border-t border-lacquer-blue/10 pt-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-lacquer-blue/70 md:text-sm">
                Emily van der Linde
              </h2>
              <p className="mt-4">
                Lacquer Design founder Emily van der Linde brings a rich background in design and business
                to every project. With experience managing Gensler’s global interior designer training
                program and working at institutions like the Smithsonian, Emily has spent her career at the
                intersection of art, design, and education. She holds an MBA from the University of Tampa
                and a Bachelor’s Degree in Art History from the University of Florida. Guided by the belief
                that great design should delight as much as it inspires, Emily’s work balances beauty,
                functionality, and a sense of play. She lives in Pensacola, FL, with her husband and three
                children, finding joy in creating spaces that reflect the people who live in them.
              </p>
            </div>

            {/* Madison */}
            <div className="border-t border-lacquer-blue/10 pt-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-lacquer-blue/70 md:text-sm">
                Madison Banks
              </h2>
              <p className="mt-4">
                Madison Banks contributes to Lacquer Design’s projects with a strong foundation in
                technical documentation, CAD software, and design implementation. A graduate of Baylor
                University’s CIDA-accredited Interior Design program, she brings both technical precision
                and a passion for creative problem-solving to the studio. Madison is a certified LEED Green
                Associate, a member of ASID, and has successfully completed the IDFX portion of the NCIDQ
                Certification Exam. Her design approach focuses on blending historic architectural elements
                with modern lifestyles, creating spaces that are both timeless and functional. With
                experience in both residential and commercial design, Madison plays a key role in helping
                Lacquer Design bring each client’s vision to life.
              </p>
            </div>

            {/* Tonya */}
            <div className="border-t border-lacquer-blue/10 pt-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-lacquer-blue/70 md:text-sm">
                Tonya Perry
              </h2>
              <p className="mt-4">
                As Project Manager at Lacquer Design, Tonya Perry thoughtfully supports each project from
                concept to completion, ensuring every detail is carefully considered along the way. She
                holds a Bachelor’s degree in Education from the University of West Florida and brings over
                ten years of professional experience rooted in clear communication and thoughtful planning.
                Tonya’s knowledge in residential interior design and AutoCAD allows her to work closely
                with the designers, while also coordinating materials and maintaining strong vendor
                relationships. Driven by a love for curated, meaningful spaces and a highly organized
                approach, Tonya helps seamlessly translate each design vision into reality.
              </p>
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

