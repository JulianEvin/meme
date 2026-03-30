import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix the remaining broken strings
content = content.replace(/group-hover:\$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\}/g, "group-hover:text-[#00B368] dark:group-hover:text-[#00FF9C]");
// Wait, we don't use dark variant.
// Let's just replace the whole ternary if it's broken.

// Let's find all occurrences of `${isDarkMode ? 'text-[#00FF9C]' : 'text-[#00B368]'}` that are inside single quotes and fix them.
// A simpler way is to just replace the broken string with the correct one.

content = content.replace(/group-hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}/g, "group-hover:text-[#00B368]");
content = content.replace(/hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}/g, "hover:text-[#00B368]");

// Let's just replace the exact broken strings from the grep output:
content = content.replace(/className="absolute -inset-4 bg-gradient-to-tr \$\{isDarkMode \? 'from-\[\#00FF9C\] to-\[\#00E5FF\]' : 'from-\[\#00B368\] to-\[\#0096D6\]'\} rounded-\[2\.5rem\] blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"/g, 
  "className={`absolute -inset-4 bg-gradient-to-tr ${isDarkMode ? 'from-[#00FF9C] to-[#00E5FF]' : 'from-[#00B368] to-[#0096D6]'} rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`}");

content = content.replace(/group-hover:\$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\}/g, "group-hover:text-[#00B368]");
content = content.replace(/hover:\$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\}/g, "hover:text-[#00B368]");

// Let's just do a blanket replacement for any remaining broken ones:
// If it's inside a template literal, it's fine. If it's inside a single quote, it's broken.
content = content.replace(/'bg-black\/40 \$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\} border-\[\#00FF9C\]\/30 shadow-\[0_0_15px_rgba\(0,255,156,0\.1\)\]'/g, 
  "isDarkMode ? 'bg-black/40 text-[#00FF9C] border-[#00FF9C]/30 shadow-[0_0_15px_rgba(0,255,156,0.1)]' : 'bg-zinc-100 text-[#00B368] border-zinc-200'");

content = content.replace(/'bg-zinc-100 \$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\} border-zinc-200'/g, 
  "'bg-zinc-100 text-[#00B368] border-zinc-200'");

content = content.replace(/group-hover:\$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\}/g, "group-hover:text-[#00FF9C]");

fs.writeFileSync('src/App.tsx', content);
