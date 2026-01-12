export interface GalleryConfig {
  id: string
  title: string
  description: string
  images: string[]
  imageAltPrefix?: string
}

export const GALLERIES: Record<string, GalleryConfig> = {
  perdido: {
    id: 'perdido',
    title: 'Perdido Key',
    description:
      'The kitchen and bathrooms in this Perdido Key beach house were designed with an elevated coastal vibe, blending texture, color, and playful elements. Handmade glazed tiles soften natural light and introduce a seashell-inspired texture in the kitchen, creating both warmth and subtle character. In the guest bathroom, lively touches like cabana stripes, polka dots, and botanical patterns on the floors bring a sense of fun and whimsy. The primary bathroom offers a more tranquil escape, with washed green tiles and marble creating a soothing atmosphere around the tub and shower, perfect for unwinding after a day at the beach.',
    images: [
      '/images/projects/perdido/6730044d3acfe023dc91a3ce_LACQUERlaurarowe-15.webp',
      '/images/projects/perdido/6730044d420dae5eaffd0903_LACQUERlaurarowe-3.webp',
      '/images/projects/perdido/6730044dea0879a1387fded7_LACQUERlaurarowe-5.webp',
      '/images/projects/perdido/6730044d2d4d5de6a05ade8d_LACQUERlaurarowe-6.webp',
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
    ],
    imageAltPrefix: 'Perdido Key project',
  },
  'cleveland-park': {
    id: 'cleveland-park',
    title: 'Cleveland Park',
    description:
      "A full-scale renovation of a classic Cleveland Park home, reimagining all four levels for modern family living while preserving its historic character. The design thoughtfully balances period details with contemporary functionality, creating spaces that honor the home's architectural heritage while meeting the needs of today's family life.",
    images: [
      '/images/projects/cleveland-park/DSCF7784.jpg',
      '/images/projects/cleveland-park/DSCF7799.jpg',
      '/images/projects/cleveland-park/DSCF7812.jpg',
      '/images/projects/cleveland-park/DSCF7820.jpg',
      '/images/projects/cleveland-park/DSCF7860.jpg',
      '/images/projects/cleveland-park/DSCF7868.jpg',
      '/images/projects/cleveland-park/DSCF7874.jpg',
      '/images/projects/cleveland-park/DSCF7876.jpg',
      '/images/projects/cleveland-park/DSCF7885.jpg',
      '/images/projects/cleveland-park/DSCF7901.jpg',
      '/images/projects/cleveland-park/DSCF7920.jpg',
      '/images/projects/cleveland-park/DSCF7927.jpg',
      '/images/projects/cleveland-park/DSCF7935.jpg',
      '/images/projects/cleveland-park/DSCF7945.jpg',
      '/images/projects/cleveland-park/DSCF7965.jpg',
      '/images/projects/cleveland-park/DSCF7977.jpg',
      '/images/projects/cleveland-park/DSCF7986.jpg',
      '/images/projects/cleveland-park/DSCF7991.jpg',
      '/images/projects/cleveland-park/DSCF8003.jpg',
    ],
    imageAltPrefix: 'Cleveland Park project',
  },
}
