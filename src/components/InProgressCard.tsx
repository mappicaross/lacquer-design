type InProgressCardProps = {
  title: string
  secondary?: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function InProgressCard({
  title,
  secondary,
  description,
  imageSrc,
  imageAlt,
}: InProgressCardProps) {
  return (
    <article className="group relative aspect-[3/2] w-full overflow-hidden bg-lacquer-bg shadow-sm">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Light blue overlay on hover for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[#D9E5E9] opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

      {/* Title + optional line always visible; description on hover */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <div className="max-w-[500px]">
          <h3 className="text-[22px] font-medium leading-snug text-lacquer-blue md:text-[26px]">
            {title}
          </h3>
          {secondary ? (
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-lacquer-blue/70 md:text-sm">
              {secondary}
            </p>
          ) : null}
          <p className="mt-3 text-sm leading-relaxed text-lacquer-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

