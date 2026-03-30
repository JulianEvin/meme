import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace all instances of `isDarkMode ? '... bg-... ...' : '... bg-... ...'` with `'glass-panel'`
// This regex looks for `isDarkMode \? '[^']*bg-[^']*' : '[^']*bg-[^']*'`
content = content.replace(/isDarkMode\s*\?\s*'[^']*bg-[^']*'\s*:\s*'[^']*bg-[^']*'/g, (match) => {
  // We want to keep some text colors if they are inside the match, but usually they are separate.
  // Let's check what we are replacing.
  console.log("Replacing:", match);
  
  if (match.includes('text-[#00FF9C]')) {
    return `'glass-panel border-[#00FF9C]/50 shadow-[0_0_20px_rgba(0,255,156,0.3)]'`;
  }
  if (match.includes('hover:border-[#00FF9C]/30')) {
    return `'glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg'`;
  }
  if (match.includes('hover:border-[#00FF9C]/60')) {
    return `'glass-panel hover:border-[#00FF9C]/60 hover:shadow-lg'`;
  }
  if (match.includes('placeholder:text-zinc-600')) {
    return `'glass-panel text-current placeholder:text-current/50'`;
  }
  return `'glass-panel'`;
});

fs.writeFileSync('src/App.tsx', content);
console.log('Done.');
