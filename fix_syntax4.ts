import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/'bg-zinc-900 border-\[\#00FF9C\]\/30 \$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\} shadow-\[0_0_20px_rgba\(0,255,156,0\.3\)\]'/g, 
  "'bg-zinc-900 border-[#00FF9C]/30 text-[#00FF9C] shadow-[0_0_20px_rgba(0,255,156,0.3)]'");

content = content.replace(/'bg-white border-\[\#00FF9C\]\/30 \$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\} shadow-\[0_10px_30px_rgba\(0,0,0,0\.1\)\]'/g, 
  "'bg-white border-[#00FF9C]/30 text-[#00B368] shadow-[0_10px_30px_rgba(0,0,0,0.1)]'");

fs.writeFileSync('src/App.tsx', content);
