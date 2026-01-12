# Gallery Management Guide

This guide explains how to add, edit, and manage gallery pages on the Lacquer Design website.

## Architecture Overview

The gallery system consists of three main parts:

1. **`HorizontalGallery` Component** (`src/components/HorizontalGallery.tsx`) - The reusable component that renders the horizontal scroll gallery
2. **Gallery Configuration** (`src/config/galleries.ts`) - Central configuration for all gallery data
3. **Gallery Page Components** (`src/PerdidoGallery.tsx`, `src/ClevelandParkGallery.tsx`, etc.) - Individual page components that use the configuration

## How to Add a New Gallery

### Step 1: Add Images to Public Folder

Place your gallery images in `/public/images/projects/[project-name]/`

Example:
```
/public/images/projects/my-project/
  - image1.jpg
  - image2.jpg
  - image3.jpg
```

### Step 2: Add Gallery Configuration

Open `src/config/galleries.ts` and add a new entry to the `GALLERIES` object:

```typescript
export const GALLERIES: Record<string, GalleryConfig> = {
  // ... existing galleries ...
  
  'my-project': {
    id: 'my-project',
    title: 'My Project Name',
    description: 'Project description that appears below the title...',
    images: [
      '/images/projects/my-project/image1.jpg',
      '/images/projects/my-project/image2.jpg',
      '/images/projects/my-project/image3.jpg',
    ],
    imageAltPrefix: 'My Project Name',
  },
}
```

### Step 3: Create Gallery Page Component

Create a new file `src/MyProjectGallery.tsx`:

```typescript
import { HorizontalGallery } from './components/HorizontalGallery'
import { GALLERIES } from './config/galleries'

export default function MyProjectGallery() {
  const gallery = GALLERIES['my-project']
  
  return (
    <HorizontalGallery
      title={gallery.title}
      description={gallery.description}
      images={gallery.images}
      imageAltPrefix={gallery.imageAltPrefix}
    />
  )
}
```

### Step 4: Add Route

Open `src/main.tsx` and add the import and route:

```typescript
import MyProjectGallery from './MyProjectGallery.tsx'

// ... in the Routes section:
<Route path="/projects/my-project" element={<MyProjectGallery />} />
```

### Step 5: Link from Homepage

Open `src/App.tsx` and add or update the `ProjectCard` with the `onViewGallery` handler:

```typescript
<ProjectCard
  title="My Project Name"
  description="Short description..."
  imageSrc="/images/project-cards/my-project-card.webp"
  imageAlt="My Project Name by Lacquer Design"
  onViewGallery={() => navigate('/projects/my-project')}
/>
```

## How to Edit an Existing Gallery

### To Update Images or Content

Simply edit the gallery configuration in `src/config/galleries.ts`. Changes to title, description, or images will automatically reflect on the gallery page.

### To Reorder Images

Rearrange the images array in the gallery configuration. The order in the array determines the order in the horizontal scroll.

## Gallery Features

All galleries automatically include:

- ✅ Horizontal scroll controlled by vertical scrolling
- ✅ Consistent image heights (100% viewport height minus padding)
- ✅ Automatic width calculation based on image aspect ratios
- ✅ Proper spacing between images
- ✅ Edge-to-edge scrolling with appropriate padding
- ✅ Mobile-responsive design
- ✅ Back navigation to projects page
- ✅ Header with logo

## Tips

- **Image Optimization**: Use compressed images (WebP format recommended) for better performance
- **Aspect Ratios**: The system handles both portrait (2:3) and landscape (3:2) images automatically
- **Image Order**: Place your most important images first, as that's what visitors will see initially
- **Description Length**: Keep descriptions concise but descriptive (2-4 sentences is ideal)

## File Structure

```
src/
├── components/
│   └── HorizontalGallery.tsx    # Reusable gallery component
├── config/
│   └── galleries.ts              # All gallery configurations
├── PerdidoGallery.tsx            # Individual gallery pages
├── ClevelandParkGallery.tsx
└── main.tsx                      # Routing configuration

public/
└── images/
    └── projects/
        ├── perdido/              # Project image folders
        └── cleveland-park/
```
