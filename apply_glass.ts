import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add 'dark' class to the main wrapper if isDarkMode is true, and add relative/overflow-hidden
content = content.replace(
  /<div className=\{`min-h-screen font-sans transition-colors duration-500 selection:bg-\[\#00FF9C\]\/30 \$\{\n\s*isDarkMode \? 'bg-\[\#050505\] text-zinc-50' : 'bg-\[\#FAFAFA\] text-zinc-800'\n\s*\}\`\}>/,
  `<div className={\`min-h-screen font-sans transition-colors duration-500 selection:bg-[#00FF9C]/30 relative overflow-hidden \${
      isDarkMode ? 'bg-[#000000] text-zinc-50 dark' : 'bg-[#F2F2F7] text-zinc-800'
    }\`}>
      {/* iOS-style background blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={\`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob \${isDarkMode ? 'bg-purple-900/40' : 'bg-purple-300/50'}\`}></div>
        <div className={\`absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000 \${isDarkMode ? 'bg-blue-900/40' : 'bg-blue-300/50'}\`}></div>
        <div className={\`absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-4000 \${isDarkMode ? 'bg-emerald-900/40' : 'bg-emerald-300/50'}\`}></div>
      </div>
      <div className="relative z-10">`
);

// Close the new relative z-10 div at the end of the return statement
content = content.replace(
  /<\/div>\n\s*\);\n\}\n$/,
  `      </div>\n    </div>\n  );\n}\n`
);

// 2. Update Navbar to be a floating glass pill
content = content.replace(
  /<nav \n\s*className=\{`fixed top-0 left-0 right-0 z-50 transition-all duration-500 \$\{\n\s*isScrolled \n\s*\? isDarkMode \n\s*\? 'bg-black\/80 backdrop-blur-xl border-b border-\[\#00FF9C\]\/10 py-4 shadow-\[0_4px_30px_rgba\(0,255,156,0\.1\)\]' \n\s*: 'bg-white\/80 backdrop-blur-xl border-b border-\[\#00FF9C\]\/10 py-4 shadow-\[0_4px_30px_rgba\(0,255,156,0\.05\)\]'\n\s*: 'bg-transparent py-6'\n\s*\}\`\}\n\s*>/,
  `<nav 
        className={\`fixed top-0 left-0 right-0 md:top-4 md:left-12 md:right-12 z-50 transition-all duration-500 md:rounded-3xl \${
          isScrolled 
            ? 'glass-panel py-4'
            : 'bg-transparent py-6'
        }\`}
      >`
);

// 3. Update Mobile Menu to be glass
content = content.replace(
  /className=\{`fixed inset-0 z-40 bg-black\/95 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-500 \$\{\n\s*mobileMenuOpen \? 'opacity-100 visible' : 'opacity-0 invisible'\n\s*\}\`\}/,
  `className={\`fixed inset-0 z-40 glass-panel flex flex-col items-center justify-center transition-all duration-500 \${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }\`}`
);

// 4. Update Competencies Cards
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900\/30 border-zinc-800\/50 hover:bg-zinc-900\/50 hover:border-\[\#00FF9C\]\/30' \n\s*: 'bg-\[\#F4F5F7\] border-zinc-200 hover:border-\[\#00FF9C\]\/30 shadow-sm hover:shadow-md'/g,
  `'glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg'`
);
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900 border-\[\#00FF9C\]\/30 text-\[\#00FF9C\] shadow-\[0_0_20px_rgba\(0,255,156,0\.3\)\]' \n\s*: 'bg-white border-\[\#00FF9C\]\/30 text-\[\#00B368\] shadow-\[0_10px_30px_rgba\(0,0,0,0\.1\)\]'/g,
  `'glass-panel border-[#00FF9C]/50 shadow-[0_0_20px_rgba(0,255,156,0.3)]'`
);

// 5. Update Experience Cards
content = content.replace(
  /isDarkMode\n\s*\? 'bg-black\/40 text-\[\#00FF9C\] border-\[\#00FF9C\]\/30 shadow-\[0_0_15px_rgba\(0,255,156,0\.1\)\]' \n\s*: 'bg-zinc-100 text-\[\#00B368\] border-zinc-200'/g,
  `'glass-panel border-[#00FF9C]/50 shadow-[0_0_15px_rgba(0,255,156,0.2)]'`
);
content = content.replace(
  /isDarkMode\n\s*\? 'bg-zinc-900\/20 border-zinc-800\/50 hover:border-\[\#00FF9C\]\/30 hover:shadow-\[0_0_30px_rgba\(0,255,156,0\.05\)\]' \n\s*: 'bg-white border-zinc-200 hover:border-\[\#00FF9C\]\/30 shadow-sm hover:shadow-md'/g,
  `'glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg'`
);

// 6. Update Education Cards
content = content.replace(
  /className=\{`p-8 rounded-\[2rem\] border transition-all duration-500 group \$\{\n\s*isDarkMode\n\s*\? 'bg-zinc-900\/30 border-zinc-800\/50 hover:border-\[\#00FF9C\]\/30 hover:shadow-\[0_0_30px_rgba\(0,255,156,0\.05\)\]' \n\s*: 'bg-\[\#F4F5F7\] border-zinc-200 hover:border-\[\#00FF9C\]\/30 shadow-sm'\n\s*\}\`\}/g,
  `className={\`p-8 rounded-[2rem] border transition-all duration-500 group glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg\`}`
);

// 7. Update Community Involvement Cards
content = content.replace(
  /className=\{`p-8 rounded-\[2rem\] border transition-all duration-500 group \$\{\n\s*isDarkMode\n\s*\? 'bg-zinc-900\/30 border-zinc-800\/50 hover:border-\[\#00FF9C\]\/60 hover:shadow-\[0_0_30px_rgba\(0,255,156,0\.05\)\]' \n\s*: 'bg-\[\#F4F5F7\] border-zinc-200 group-hover:border-\[\#00FF9C\]\/60 shadow-sm'\n\s*\}\`\}/g,
  `className={\`p-8 rounded-[2rem] border transition-all duration-500 group glass-panel hover:border-[#00FF9C]/60 hover:shadow-lg\`}`
);

// 8. Update Contact Inputs
content = content.replace(
  /className=\{`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none focus:border-\[\#00FF9C\]\/50 focus:shadow-\[0_0_20px_rgba\(0,255,156,0\.1\)\] \$\{\n\s*isDarkMode \n\s*\? 'bg-zinc-900\/50 border-zinc-800 text-zinc-50 placeholder:text-zinc-600' \n\s*: 'bg-white border-zinc-200 text-zinc-800 placeholder:text-zinc-300'\n\s*\}\`\}/g,
  `className={\`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none focus:border-[#00FF9C]/50 focus:shadow-[0_0_20px_rgba(0,255,156,0.1)] glass-panel text-current placeholder:text-current/50\`}`
);

// 9. Update Contact Textarea
content = content.replace(
  /className=\{`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none focus:border-\[\#00FF9C\]\/50 focus:shadow-\[0_0_20px_rgba\(0,255,156,0\.1\)\] resize-none \$\{\n\s*isDarkMode \n\s*\? 'bg-zinc-900\/50 border-zinc-800 text-zinc-50 placeholder:text-zinc-600' \n\s*: 'bg-white border-zinc-200 text-zinc-800 placeholder:text-zinc-300'\n\s*\}\`\}/g,
  `className={\`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none focus:border-[#00FF9C]/50 focus:shadow-[0_0_20px_rgba(0,255,156,0.1)] resize-none glass-panel text-current placeholder:text-current/50\`}`
);

// 10. Update Theme Switcher
content = content.replace(
  /className=\{`fixed bottom-8 right-8 z-\[60\] w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl border transition-all duration-500 \$\{\n\s*isDarkMode \n\s*\? 'bg-zinc-900 border-\[\#00FF9C\]\/30 text-\[\#00FF9C\] shadow-\[0_0_20px_rgba\(0,255,156,0\.3\)\]' \n\s*: 'bg-white border-\[\#00FF9C\]\/30 text-\[\#00B368\] shadow-\[0_10px_30px_rgba\(0,0,0,0\.1\)\]'\n\s*\}\`\}/,
  `className={\`fixed bottom-8 right-8 z-[60] w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl border transition-all duration-500 glass-panel \${isDarkMode ? 'text-[#00FF9C]' : 'text-[#00B368]'}\`}`
);

// 11. Update Contact Info Cards
content = content.replace(
  /className=\{`w-16 h-16 rounded-3xl border flex items-center justify-center transition-all \$\{\n\s*isDarkMode \n\s*\? 'bg-zinc-900 border-zinc-800 group-hover:border-\[\#00FF9C\]\/60 group-hover:shadow-\[0_0_25px_rgba\(0,255,156,0\.3\)\] shadow-\[inset_0_0_10px_rgba\(0,0,0,0\.5\)\]' \n\s*: 'bg-\[\#F4F5F7\] border-zinc-200 group-hover:border-\[\#00FF9C\]\/60 shadow-sm'\n\s*\}\`\}/g,
  `className={\`w-16 h-16 rounded-3xl border flex items-center justify-center transition-all glass-panel group-hover:border-[#00FF9C]/60 group-hover:shadow-[0_0_25px_rgba(0,255,156,0.3)]\`}`
);

// 12. Update Footer
content = content.replace(
  /className=\{`py-12 border-t transition-colors duration-500 \$\{\n\s*isDarkMode \? 'border-zinc-900 bg-[#050505]' : 'border-zinc-200 bg-\[\#FAFAFA\]'\n\s*\}\`\}/,
  `className={\`py-12 border-t transition-colors duration-500 \${
          isDarkMode ? 'border-white/10 glass-panel' : 'border-black/5 glass-panel'
        }\`}`
);

fs.writeFileSync('src/App.tsx', content);
console.log('Glassmorphism applied.');
