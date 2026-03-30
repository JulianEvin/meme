import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Convert normal string classNames containing text-[#00FF9C] to template literals
content = content.replace(/className="([^"]*text-\[\#00FF9C\][^"]*)"/g, 'className={`$1`}');

// 2. Replace text-[#00FF9C] with dynamic color for better contrast in light mode
// We use #00B368 for light mode which is a deeper, more legible green, while keeping the neon #00FF9C for dark mode.
content = content.replace(/text-\[\#00FF9C\]/g, "${isDarkMode ? 'text-[#00FF9C]' : 'text-[#00B368]'}");

// 3. Let's also do the same for border-[#00FF9C] if it's used for thin borders, but borders are usually fine.
// Let's check if there are any text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9C] to-[#00E5FF]
// In light mode, this gradient might be hard to read.
// Let's change the gradient for light mode: from-[#00B368] to-[#0096D6]
content = content.replace(/from-\[\#00FF9C\] to-\[\#00E5FF\]/g, "${isDarkMode ? 'from-[#00FF9C] to-[#00E5FF]' : 'from-[#00B368] to-[#0096D6]'}");

fs.writeFileSync('src/App.tsx', content);
console.log('Neon colors perfected for light mode.');
