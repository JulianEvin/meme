import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix the broken hover strings
content = content.replace(/hover:\$\{isDarkMode \? 'text-\[\#00FF9C\]' : 'text-\[\#00B368\]'\}/g, "hover:text-[#00B368] dark:hover:text-[#00FF9C]");
// Wait, we don't use dark variant.
// Let's just replace the whole ternary if it's broken.

// Pattern: isDarkMode ? '... hover:${isDarkMode ? ...}' : '... hover:${isDarkMode ? ...}'
// Let's just use a regex to find all `${isDarkMode ? 'text-[#00FF9C]' : 'text-[#00B368]'}` that are INSIDE single quotes.
// Actually, it's easier to just replace the exact broken strings.

content = content.replace(/isDarkMode \? 'text-zinc-400 hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}' : 'text-zinc-500 hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}'/g, 
  "isDarkMode ? 'text-zinc-400 hover:text-[#00FF9C]' : 'text-zinc-500 hover:text-[#00B368]'");

content = content.replace(/isDarkMode \? 'text-zinc-300 hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}' : 'text-zinc-700 hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}'/g, 
  "isDarkMode ? 'text-zinc-300 hover:text-[#00FF9C]' : 'text-zinc-700 hover:text-[#00B368]'");

content = content.replace(/isDarkMode \? 'text-zinc-50 group-hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}' : 'text-zinc-800 group-hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\}'/g, 
  "isDarkMode ? 'text-zinc-50 group-hover:text-[#00FF9C]' : 'text-zinc-800 group-hover:text-[#00B368]'");

content = content.replace(/bg-zinc-800 text-zinc-500 group-hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\} group-hover:bg-\[\#00FF9C\]\/10/g, 
  "bg-zinc-800 text-zinc-500 group-hover:text-[#00FF9C] group-hover:bg-[#00FF9C]/10");

content = content.replace(/bg-zinc-100 text-zinc-400 group-hover:\$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\} group-hover:bg-\[\#00FF9C\]\/10/g, 
  "bg-zinc-100 text-zinc-400 group-hover:text-[#00B368] group-hover:bg-[#00B368]/10");

content = content.replace(/bg-black\/40 \$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\} border-\[\#00FF9C\]\/30/g, 
  "bg-black/40 text-[#00FF9C] border-[#00FF9C]/30");

content = content.replace(/bg-zinc-100 \$\{isDarkMode \? \\'text-\[\#00FF9C\]\\' : \\'text-\[\#00B368\]\\'\} border-zinc-200/g, 
  "bg-zinc-100 text-[#00B368] border-zinc-200");

// Let's just do a simpler replacement for any remaining broken ones:
// Any `${isDarkMode ? 'text-[#00FF9C]' : 'text-[#00B368]'}` inside single quotes needs to be fixed.
// Since I can't easily parse that with regex, I'll just run this script and see what's left.

fs.writeFileSync('src/App.tsx', content);
