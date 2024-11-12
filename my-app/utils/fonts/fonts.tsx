// In your component or _app.js
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 

import { Nunito_Sans, Libre_Bodoni, Rye, Playfair_Display, Lato, Oswald } from 'next/font/google';

// Configure the fonts for usage
export const nunitoSans = Nunito_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
});
export const libreBodoni = Libre_Bodoni({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const rye = Rye({
    subsets: ['latin'],
    weight: '400',
});
export const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
});
