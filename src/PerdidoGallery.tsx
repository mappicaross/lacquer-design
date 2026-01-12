import './App.css'

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LacquerLogo } from './components/LacquerLogo'

const PERDIDO_GALLERY_IMAGES = [
  '/images/projects/perdido/6730044d3acfe023dc91a3ce_LACQUERlaurarowe-15.webp',
  '/images/projects/perdido/6730044d420dae5eaffd0903_LACQUERlaurarowe-3.webp',
  '/images/projects/perdido/6730044dea0879a1387fded7_LACQUERlaurarowe-5.webp',
  '/images/projects/perdido/6730044d2d4d5de6a05ade8d_LACQUERlaurarowe-6.webp',
  '/images/projects/perdido/6730044cf4ecee1c96f875f1_LACQUERlaurarowe-14.webp',
  '/images/projects/perdido/6730044cc5fbdedf523dc266_LACQUERlaurarowe-19.webp',
  '/images/projects/perdido/6730044cee1dcb33143a0121_LACQUERlaurarowe-30.webp',
  '/images/projects/perdido/6730044c02e847b17fb22679_LACQUERlaurarowe-33.webp',
  '/images/projects/perdido/673004568faf2e14275eadc1_LACQUERlaurarowe-35.webp',
  '/images/projects/perdido/67360f6692e695bfabc059d8_LACQUERlaurarowe-42.webp',
  '/images/projects/perdido/67360f72c32ec88c74d8044e_LACQUERlaurarowe-45.webp',
  '/images/projects/perdido/67360f8091354d346870e6f8_LACQUERlaurarowe-47.webp',
  '/images/projects/perdido/67360f978f98de33bd5e6597_LACQUERlaurarowe-50.webp',
  '/images/projects/perdido/67360f9f0a6000e4909d0f72_LACQUERlaurarowe-53.webp',
  '/images/projects/perdido/67360fa195ca4d636e706231_LACQUERlaurarowe-56.webp',
  '/images/projects/perdido/67360f9f95ffcbf81cf76e02_LACQUERlaurarowe-57.webp',
  '/images/projects/perdido/67360faad56a7a526ce15fb2_LACQUERlaurarowe-61.webp',
  '/images/projects/perdido/673610204d18d3c5bad00e6a_LACQUERlaurarowe-62.webp',
  '/images/projects/perdido/67360fe1cecfcc7110c76d6b_LACQUERlaurarowe-68.webp',
]

const ITEM_WIDTH_VW = 40
const FRAME_WIDTH_VW = PERDIDO_GALLERY_IMAGES.length * ITEM_WIDTH_VW
const MAX_TRANSLATE_VW = Math.max(0, FRAME_WIDTH_VW - 100)

export default function PerdidoGallery() {
  const navigate = useNavigate()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [scrollRatio, setScrollRatio] = useState(0)

  // Track-style scroll: map vertical scroll within the track to horizontal translation
  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current
      if (!track) return

      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY
      const trackTop = track.offsetTop
      const trackHeight = track.offsetHeight
      const start = trackTop
      const end = trackTop + trackHeight - viewportHeight

      if (scrollY <= start) {
        setScrollRatio(0)
      } else if (scrollY >= end) {
        setScrollRatio(1)
      } else {
        const progress = (scrollY - start) / (end - start || 1)
        setScrollRatio(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-lacquer-blue text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <button
          type="button"
          onClick={() => navigate('/#recent-projects')}
          className="text-xs font-medium uppercase tracking-[0.18em] text-white/80 hover:text-white"
        >
          ← Back to projects
        </button>
        <div className="text-white">
          <LacquerLogo
            className="w-[160px] md:w-[221px] h-auto"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex flex-col px-6 pb-10 md:px-12 md:pb-12">
        {/* Heading and description */}
        <section className="max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70 md:text-sm">
            Gallery
          </p>
          <h1 className="mt-2 text-2xl font-medium md:text-3xl">
            Perdido Key
          </h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            The kitchen and bathrooms in this Perdido Key beach house were designed with an elevated
            coastal vibe, blending texture, color, and playful elements. Handmade glazed tiles soften
            natural light and introduce a seashell-inspired texture in the kitchen, creating both
            warmth and subtle character. In the guest bathroom, lively touches like cabana stripes,
            polka dots, and botanical patterns on the floors bring a sense of fun and whimsy. The
            primary bathroom offers a more tranquil escape, with washed green tiles and marble
            creating a soothing atmosphere around the tub and shower, perfect for unwinding after a
            day at the beach.
          </p>
        </section>

        {/* Horizontal gallery with vertical scroll-controlled Track / Camera / Frame */}
        <section className="mt-12">
          <div
            ref={trackRef}
            className="relative"
            style={{ height: `${FRAME_WIDTH_VW}vw` }}
          >
            {/* Camera */}
            <div className="sticky top-0 flex h-screen items-center">
              <div className="h-[80vh] w-full overflow-hidden">
                {/* Frame */}
                <div
                  className="flex h-full"
                  style={{
                    width: `${FRAME_WIDTH_VW}vw`,
                    transform: `translateX(-${scrollRatio * MAX_TRANSLATE_VW}vw)`,
                  }}
                >
                  {PERDIDO_GALLERY_IMAGES.map((src) => (
                    <div
                      key={src}
                      className="flex h-full w-[40vw] flex-shrink-0 items-center justify-center px-3 md:px-4"
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-3xl bg-lacquer-blue/60">
                        <img
                          src={src}
                          alt="Perdido Key project gallery image"
                          className="h-[70vh] w-auto max-h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

