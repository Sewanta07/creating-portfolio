import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sewanta Luitel - Portfolio',
    short_name: 'Sewanta',
    description: 'Portfolio of Sewanta Luitel, a Laravel & Full Stack Web Developer from Nepal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#0F172A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
