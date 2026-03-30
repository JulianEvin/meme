import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. About section cards
content = content.replace(
  /isDarkMode \? 'bg-zinc-900\/30 border-zinc-800\/50' : 'bg-white border-zinc-200 shadow-sm'/g,
  `'glass-panel'`
);

// 2. Competencies cards
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900 border-\[\#00FF9C\]\/30 text-\[\#00FF9C\] shadow-\[0_0_20px_rgba\(0,255,156,0\.3\)\]' \n\s*: 'bg-white border-\[\#00FF9C\]\/30 text-\[\#00B368\] shadow-\[0_10px_30px_rgba\(0,0,0,0\.1\)\]'/g,
  `'glass-panel border-[#00FF9C]/50 shadow-[0_0_20px_rgba(0,255,156,0.3)]'`
);
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900\/30 border-zinc-800\/50 hover:bg-zinc-900\/50 hover:border-\[\#00FF9C\]\/30' \n\s*: 'bg-\[\#F4F5F7\] border-zinc-200 hover:border-\[\#00FF9C\]\/30 shadow-sm hover:shadow-md'/g,
  `'glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg'`
);

// 3. Experience cards
content = content.replace(
  /isDarkMode\n\s*\? 'bg-black\/40 text-\[\#00FF9C\] border-\[\#00FF9C\]\/30 shadow-\[0_0_15px_rgba\(0,255,156,0\.1\)\]' \n\s*: 'bg-zinc-100 text-\[\#00B368\] border-zinc-200'/g,
  `'glass-panel border-[#00FF9C]/50 shadow-[0_0_15px_rgba(0,255,156,0.2)]'`
);
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900\/20 border-zinc-800\/50 hover:border-\[\#00FF9C\]\/30 hover:shadow-\[0_0_30px_rgba\(0,255,156,0\.05\)\]' \n\s*: 'bg-white border-zinc-200 hover:border-\[\#00FF9C\]\/30 shadow-sm hover:shadow-md'/g,
  `'glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg'`
);

// 4. Education cards
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900\/30 border-zinc-800\/50 hover:border-\[\#00FF9C\]\/30 hover:shadow-\[0_0_30px_rgba\(0,255,156,0\.05\)\]' \n\s*: 'bg-\[\#F4F5F7\] border-zinc-200 hover:border-\[\#00FF9C\]\/30 shadow-sm'/g,
  `'glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg'`
);

// 5. Community cards
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900\/30 border-zinc-800\/50 hover:border-\[\#00FF9C\]\/60 hover:shadow-\[0_0_30px_rgba\(0,255,156,0\.05\)\]' \n\s*: 'bg-\[\#F4F5F7\] border-zinc-200 group-hover:border-\[\#00FF9C\]\/60 shadow-sm'/g,
  `'glass-panel hover:border-[#00FF9C]/60 hover:shadow-lg'`
);

// 6. Contact inputs
content = content.replace(
  /isDarkMode \n\s*\? 'bg-zinc-900\/50 border-zinc-800 text-zinc-50 placeholder:text-zinc-600' \n\s*: 'bg-white border-zinc-200 text-zinc-800 placeholder:text-zinc-300'/g,
  `'glass-panel text-current placeholder:text-current/50'`
);

// 7. Footer
content = content.replace(
  /isDarkMode \? 'border-zinc-900 bg-\[\#050505\]' : 'border-zinc-200 bg-\[\#FAFAFA\]'/g,
  `'border-white/10 glass-panel'`
);

// 8. Mobile menu
content = content.replace(
  /bg-black\/95 backdrop-blur-3xl/g,
  `glass-panel`
);

fs.writeFileSync('src/App.tsx', content);
console.log('Glassmorphism applied again.');
