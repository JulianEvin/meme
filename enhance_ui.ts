import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Text colors - making them darker in light mode and lighter in dark mode for maximum contrast
content = content.replace(/text-zinc-800/g, 'text-slate-900');
content = content.replace(/text-zinc-500/g, 'text-slate-600');
content = content.replace(/text-zinc-400/g, 'text-slate-300');
content = content.replace(/text-zinc-50/g, 'text-white');
content = content.replace(/text-zinc-300/g, 'text-slate-200');
content = content.replace(/text-zinc-700/g, 'text-slate-800');

// 2. Accent colors - deeper green for light mode to ensure readability
content = content.replace(/#00B368/g, '#008A52'); 

// 3. Backgrounds - softer, cleaner slate tones
content = content.replace(/bg-\[#0A0A0A\]/g, 'bg-slate-950');
content = content.replace(/bg-\[#F4F5F7\]/g, 'bg-slate-50');

// 4. Blobs - remove mix-blend-multiply which breaks dark mode, adjust opacity
content = content.replace(/mix-blend-multiply filter blur-\[120px\] opacity-60/g, 'mix-blend-normal filter blur-[120px] opacity-30 dark:opacity-20');

// 5. Enhance glass-panel borders to not clash
content = content.replace(/border-\[#00FF9C\]\/50/g, 'border-[#00FF9C]/40 dark:border-[#00FF9C]/20');
content = content.replace(/border-\[#00FF9C\]\/40/g, 'border-[#00FF9C]/30 dark:border-[#00FF9C]/20');

// 6. Fix the gradient text to be more readable in light mode
content = content.replace(/from-\[#00FF9C\] via-\[#00E5FF\] to-\[#00FF9C\]/g, 'from-[#008A52] via-[#0066CC] to-[#008A52] dark:from-[#00FF9C] dark:via-[#00E5FF] dark:to-[#00FF9C]');

// 7. Fix the glowing text shadow to only apply in dark mode or be subtle in light mode
content = content.replace(/drop-shadow-\[0_0_20px_rgba\(0,255,156,0\.6\)\]/g, 'drop-shadow-md dark:drop-shadow-[0_0_20px_rgba(0,255,156,0.6)]');

// 8. Fix the "Active Care" badge text color
content = content.replace(/text-\[#00B368\]/g, 'text-[#008A52]');

fs.writeFileSync('src/App.tsx', content);
console.log('UI enhanced for better contrast and color matching.');
