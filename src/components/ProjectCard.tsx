type ProjectCardProps = {
  title: string
  secondary?: string
  description: string
  imageSrc: string
  imageAlt: string
  onViewGallery?: () => void
}

export function ProjectCard({
  title,
  secondary,
  description,
  imageSrc,
  imageAlt,
  onViewGallery,
}: ProjectCardProps) {
  return (
    <article className="group relative aspect-[3/2] w-full overflow-hidden bg-black shadow-sm">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent transition-opacity duration-300 group-hover:from-black/40 group-hover:via-black/20 group-hover:to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <div className="max-w-[500px]">
          <h3 className="text-[28px] font-medium leading-tight text-white md:text-[42px] md:leading-[1.1]">
            {title}
          </h3>
          {secondary ? (
            <p className="mt-1 text-base font-medium uppercase tracking-[0.18em] text-white/80 md:text-lg">
              {secondary}
            </p>
          ) : null}
          <div className="pointer-events-none mt-4 text-base text-white/0 transition-all duration-300 group-hover:text-white group-hover:delay-100 md:text-lg">
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* View gallery button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          type="button"
          onClick={onViewGallery}
          className="rounded-full bg-white px-7 py-2.5 text-base font-medium uppercase tracking-[0.14em] text-lacquer-blue md:text-lg"
        >
          View gallery
        </button>
      </div>
    </article>
  )
}

