import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Fix main container
content = content.replace(
  /<div className=\{`min-h-screen font-sans transition-colors duration-500 selection:bg-\[#00FF9C\]\/30 relative overflow-hidden \$\{\n\s*'glass-panel'\n\s*\}\`\}>/,
  `<div className={\`min-h-screen font-sans transition-colors duration-500 selection:bg-[#00FF9C]/30 relative overflow-hidden \${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#F4F5F7]'}\`}>`
);

// Fix blobs
content = content.replace(
  /<div className=\{`absolute top-\[-10%\] left-\[-10%\] w-\[50%\] h-\[50%\] rounded-full mix-blend-multiply filter blur-\[120px\] opacity-60 animate-blob \$\{'glass-panel'\}\`\}><\/div>/,
  `<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob bg-[#00FF9C]"></div>`
);
content = content.replace(
  /<div className=\{`absolute top-\[20%\] right-\[-10%\] w-\[50%\] h-\[50%\] rounded-full mix-blend-multiply filter blur-\[120px\] opacity-60 animate-blob animation-delay-2000 \$\{'glass-panel'\}\`\}><\/div>/,
  `<div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000 bg-[#00E5FF]"></div>`
);
content = content.replace(
  /<div className=\{`absolute bottom-\[-20%\] left-\[20%\] w-\[50%\] h-\[50%\] rounded-full mix-blend-multiply filter blur-\[120px\] opacity-60 animate-blob animation-delay-4000 \$\{'glass-panel'\}\`\}><\/div>/,
  `<div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-4000 bg-[#9C00FF]"></div>`
);

// Fix About Section
content = content.replace(
  /<section id="about" className=\{`py-32 px-6 md:px-12 relative overflow-hidden border-y border-\[#00FF9C\]\/5 transition-colors duration-500 \$\{\n\s*'glass-panel'\n\s*\}\`\}>/,
  `<section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden border-y border-[#00FF9C]/5 transition-colors duration-500">`
);

fs.writeFileSync('src/App.tsx', content);
