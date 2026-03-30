import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Refine the main background
content = content.replace(/bg-\[#F8F9FA\]/g, 'bg-[#FAFAFA]');

// 2. Soften the main text color in light mode
content = content.replace(/text-zinc-900/g, 'text-zinc-800');

// 3. Soften the secondary text color in light mode
content = content.replace(/text-zinc-600/g, 'text-zinc-500');

// 4. Soften the dark mode text color
content = content.replace(/text-white/g, 'text-zinc-50');

// 5. Refine the secondary background in light mode
content = content.replace(/bg-zinc-50/g, 'bg-[#F4F5F7]');

// 6. Refine the card background in light mode
// content = content.replace(/bg-white/g, 'bg-[#FFFFFF]'); // bg-white is already #FFFFFF

// 7. Refine the neon green for light mode text and borders if needed.
// Actually, #00FF9C is great, but maybe we can use #00E68A for text in light mode for better contrast.
// Let's leave the neon green as is for now, as it's the signature color.

fs.writeFileSync('src/App.tsx', content);
console.log('Colors refined successfully.');
