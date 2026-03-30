import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace \${\n\s*'glass-panel'\n\s*\} with glass-panel
content = content.replace(/\$\{\n\s*'glass-panel'\n\s*\}/g, 'glass-panel');

// Replace \${\n\s*'glass-panel border-\[#00FF9C\]\/50 shadow-\[0_0_20px_rgba\(0,255,156,0\.3\)\]'\n\s*\}
content = content.replace(/\$\{\n\s*'glass-panel border-\[#00FF9C\]\/50 shadow-\[0_0_20px_rgba\(0,255,156,0\.3\)\]'\n\s*\}/g, 'glass-panel border-[#00FF9C]/50 shadow-[0_0_20px_rgba(0,255,156,0.3)]');

// Replace \${\n\s*'glass-panel hover:border-\[#00FF9C\]\/30 hover:shadow-lg'\n\s*\}
content = content.replace(/\$\{\n\s*'glass-panel hover:border-\[#00FF9C\]\/30 hover:shadow-lg'\n\s*\}/g, 'glass-panel hover:border-[#00FF9C]/30 hover:shadow-lg');

fs.writeFileSync('src/App.tsx', content);
