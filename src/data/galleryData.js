// Import images and videos from the src folder
import C01 from '../images/gallery/court/C01.JPG';
import C02 from '../images/gallery/court/C02.JPG';
import C03 from '../images/gallery/court/C03.JPG';
import C04 from '../images/gallery/court/C04.JPG';
import C05 from '../images/gallery/court/C05.JPG';
import C06 from '../images/gallery/court/C06.JPG';
import C07 from '../images/gallery/court/C07.JPG';
import C08 from '../images/gallery/court/C08.JPG';
import C09 from '../images/gallery/court/C09.JPG';
import C10 from '../images/gallery/court/C10.JPG';
import C11 from '../images/gallery/court/C11.JPG';
import C12 from '../images/gallery/court/C12.JPG';
import C13 from '../images/gallery/court/C13.JPG';
import C14 from '../images/gallery/court/C14.JPG';
import C15 from '../images/gallery/court/C15.JPG';
import C16 from '../images/gallery/court/C16.JPG';
import C17 from '../images/gallery/court/C17.JPG';
import C18 from '../images/gallery/court/C18.JPG';
import C19 from '../images/gallery/court/C19.JPG';
import C20 from '../images/gallery/court/C20.JPG';
import C21 from '../images/gallery/court/C21.JPG';
import C22 from '../images/gallery/court/C22.JPG';
import C23 from '../images/gallery/court/C23.JPG';
import C24 from '../images/gallery/court/C24.JPG';
import C25 from '../images/gallery/court/C25.JPG';
import C26 from '../images/gallery/court/C26.JPG';
import C27 from '../images/gallery/court/C27.JPG';
import C28 from '../images/gallery/court/C28.JPG';
import C29 from '../images/gallery/court/C29.JPG';
import C30 from '../images/gallery/court/C30.JPG';
import C31 from '../images/gallery/court/C31.JPG';
import C32 from '../images/gallery/court/C32.JPG';
import C33 from '../images/gallery/court/C33.JPG';
import C34 from '../images/gallery/court/C34.JPG';
import C35 from '../images/gallery/court/C35.JPG';
import C36 from '../images/gallery/court/C36.JPG';
import C37 from '../images/gallery/court/C37.JPG';
import C38 from '../images/gallery/court/C38.JPG';
import C39 from '../images/gallery/court/C39.JPG';
import C40 from '../images/gallery/court/C40.JPG';
import C41 from '../images/gallery/court/C41.JPG';
import C42 from '../images/gallery/court/C42.JPG';


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