import { useEffect, useRef, useState, type SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LacquerLogo } from './LacquerLogo'

interface HorizontalGalleryProps {
  title: string
  description: string
  images: string[]
  imageAltPrefix?: string
}

export function HorizontalGallery({
  title,
  description,
  images,
  imageAltPrefix = 'Gallery image',
}: HorizontalGalleryProps) {
  const navigate = useNavigate()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [scrollRatio, setScrollRatio] = useState(0)
  const [itemWidths, setItemWidths] = useState<number[]>(
    () => images.map(() => 40), // initial guess (portrait width)
  )
  const [imageElements, setImageElements] = useState<(HTMLImageElement | null)[]>(
    () => images.map(() => null)
  )

  const frameWidthVw = itemWidths.reduce((sum, w) => sum + w, 0)
  const maxTranslateVw = Math.max(0, frameWidthVw - 100)

  const calculateWidth = (aspectRatio: number): number => {
    // Calculate width based on aspect ratio to maintain 100% height
    // Using actual viewport dimensions for accurate conversion
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth
    
    // Account for vertical padding (py-6 md:py-10)
    // Approximate: 48px on mobile, 80px on desktop
    const isMobile = viewportWidth < 768
    const verticalPaddingPx = isMobile ? 48 : 80
    
    // Calculate effective height in pixels after padding
    const effectiveHeightPx = viewportHeight - verticalPaddingPx
    
    // Calculate required width in pixels to maintain aspect ratio
    const requiredWidthPx = effectiveHeightPx * aspectRatio
    
    // Convert to vw
    let widthVw = (requiredWidthPx / viewportWidth) * 100
    
    // Cap landscape images at 100vw to prevent them being wider than viewport
    widthVw = Math.min(widthVw, 100)
    
    return widthVw
  }

  const handleImageLoad = (index: number, event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget
    const aspectRatio = img.naturalWidth / img.naturalHeight
    const widthVw = calculateWidth(aspectRatio)

    // Store image element for resize recalculation
    setImageElements((prev) => {
      const next = [...prev]
      next[index] = img
      return next
    })

    setItemWidths((prev) => {
      if (Math.abs(prev[index] - widthVw) < 0.1) return prev
      const next = [...prev]
      next[index] = widthVw
      return next
    })
  }

  // Recalculate widths on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemWidths((prev) => {
        return prev.map((_, index) => {
          const img = imageElements[index]
          if (!img) return prev[index]
          const aspectRatio = img.naturalWidth / img.naturalHeight
          return calculateWidth(aspectRatio)
        })
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [imageElements])

  // Ensure gallery route always starts at top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

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
  }, [frameWidthVw])

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
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            {description}
          </p>
        </section>

        {/* Horizontal gallery with vertical scroll-controlled Track / Camera / Frame */}
        <section className="mt-8 md:mt-10 -mx-6 md:-mx-12">
          <div
            ref={trackRef}
            className="relative"
            style={{ height: `${frameWidthVw}vw` }}
          >
            {/* Camera */}
            <div className="sticky top-0 flex h-screen items-center">
              <div className="h-screen w-full overflow-hidden">
                {/* Frame */}
                <div
                  className="flex h-full py-6 md:py-10"
                  style={{
                    width: `${frameWidthVw}vw`,
                    transform: `translateX(-${scrollRatio * maxTranslateVw}vw)`,
                  }}
                >
                  {images.map((src, index) => {
                    const isFirst = index === 0
                    const isLast = index === images.length - 1
                    
                    // Determine padding classes based on position
                    let paddingClass = 'px-2' // Default spacing between images
                    if (isFirst) {
                      paddingClass = 'pl-6 md:pl-12 pr-2' // Match main padding on left
                    } else if (isLast) {
                      paddingClass = 'pl-2 pr-6 md:pr-12' // Match main padding on right
                    }
                    
                    return (
                      <div
                        key={src}
                        className={`flex h-full flex-shrink-0 items-center justify-center ${paddingClass}`}
                        style={{ 
                          width: `${itemWidths[index]}vw`,
                        }}
                      >
                        <img
                          src={src}
                          alt={`${imageAltPrefix} ${index + 1}`}
                          className="h-full w-full object-cover"
                          onLoad={(event) => handleImageLoad(index, event)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
