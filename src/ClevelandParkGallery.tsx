import { HorizontalGallery } from './components/HorizontalGallery'
import { GALLERIES } from './config/galleries'

export default function ClevelandParkGallery() {
  const gallery = GALLERIES['cleveland-park']
  
  return (
    <HorizontalGallery
      title={gallery.title}
      description={gallery.description}
      images={gallery.images}
      imageAltPrefix={gallery.imageAltPrefix}
    />
  )
}
