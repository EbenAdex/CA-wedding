// Import images and videos from the src folder
import C01 from '../images/gallery/court/C01.jpg';
import C02 from '../images/gallery/court/C02.jpg';
import C03 from '../images/gallery/court/C03.jpg';
import C04 from '../images/gallery/court/C04.jpg';
import C05 from '../images/gallery/court/C05.jpg';
import C06 from '../images/gallery/court/C06.jpg';
import C07 from '../images/gallery/court/C07.jpg';
import C08 from '../images/gallery/court/C08.jpg';
import C09 from '../images/gallery/court/C09.jpg';
import C10 from '../images/gallery/court/C10.jpg';
import C11 from '../images/gallery/court/C11.jpg';
import C12 from '../images/gallery/court/C12.jpg';
import C13 from '../images/gallery/court/C13.jpg';
import C14 from '../images/gallery/court/C14.jpg';
import C15 from '../images/gallery/court/C15.jpg';
import C16 from '../images/gallery/court/C16.jpg';
import C17 from '../images/gallery/court/C17.jpg';
import C18 from '../images/gallery/court/C18.jpg';
import C19 from '../images/gallery/court/C19.jpg';
import C20 from '../images/gallery/court/C20.jpg';
import C21 from '../images/gallery/court/C21.jpg';
import C22 from '../images/gallery/court/C22.jpg';
import C23 from '../images/gallery/court/C23.jpg';
import C24 from '../images/gallery/court/C24.jpg';
import C25 from '../images/gallery/court/C25.jpg';
import C26 from '../images/gallery/court/C26.jpg';
import C27 from '../images/gallery/court/C27.jpg';
import C28 from '../images/gallery/court/C28.jpg';
import C29 from '../images/gallery/court/C29.jpg';
import C30 from '../images/gallery/court/C30.jpg';
import C31 from '../images/gallery/court/C31.jpg';
import C32 from '../images/gallery/court/C32.jpg';
import C33 from '../images/gallery/court/C33.jpg';
import C34 from '../images/gallery/court/C34.jpg';
import C35 from '../images/gallery/court/C35.jpg';
import C36 from '../images/gallery/court/C36.jpg';
import C37 from '../images/gallery/court/C37.jpg';
import C38 from '../images/gallery/court/C38.jpg';
import C39 from '../images/gallery/court/C39.jpg';
import C40 from '../images/gallery/court/C40.jpg';
import C41 from '../images/gallery/court/C41.jpg';
import C42 from '../images/gallery/court/C42.jpg';


const CourtItems = [
  { type: 'image', src: C01 },
  { type: 'image', src: C02 },
  { type: 'image', src: C03 },
  { type: 'image', src: C04 },
  { type: 'image', src: C05 },
  { type: 'image', src: C06 },
  { type: 'image', src: C07 },
  { type: 'image', src: C08 },
  { type: 'image', src: C09 },
  { type: 'image', src: C10 },
  { type: 'image', src: C11 },
  { type: 'image', src: C12 },
  { type: 'image', src: C13 },
  { type: 'image', src: C14 },
  { type: 'image', src: C15 },
  { type: 'image', src: C16 },
  { type: 'image', src: C17 },
  { type: 'image', src: C18 },
  { type: 'image', src: C19 },
  { type: 'image', src: C20 },
  { type: 'image', src: C21 },
  { type: 'image', src: C22 },
  { type: 'image', src: C23 },
  { type: 'image', src: C24 },
  { type: 'image', src: C25 },
  { type: 'image', src: C26 },
  { type: 'image', src: C27 },
  { type: 'image', src: C28 },
  { type: 'image', src: C29 },
  { type: 'image', src: C30 },
  { type: 'image', src: C31 },
  { type: 'image', src: C32 },
  { type: 'image', src: C33 },
  { type: 'image', src: C34 },
  { type: 'image', src: C35 },
  { type: 'image', src: C36 },
  { type: 'image', src: C37 },
  { type: 'image', src: C38 },
  { type: 'image', src: C39 },
  { type: 'image', src: C40 },
  { type: 'image', src: C41 },
  { type: 'image', src: C42 },
]

const modules = import.meta.glob('../images/gallery/proposal/*.{jpg,jpeg,png,gif,mp4,webm}', { eager: true });
const proposalFiles = Object.keys(modules).sort().map((k) => {
  const mod = modules[k];
  return mod?.default ?? mod;
});

const Proposal = proposalFiles.map((src) => {
  const ext = String(src).split('.').pop().toLowerCase();
   return (['mp4','webm','mov'].includes(ext)) ? { type: 'video', src } : { type: 'image', src };
});



export const galleryData = {
  Court: CourtItems,
  Proposal,
  Reception: [
  ],
  Traditional: [
    ],
    AfterParty: [
    ],
};