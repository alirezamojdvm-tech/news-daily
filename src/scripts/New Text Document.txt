console.log('✅ اسکریپت تست اجرا شد!');
console.log('📁 مسیر فعلی:', process.cwd());
console.log('📁 محتویات پوشه:');
import fs from 'fs';
console.log(fs.readdirSync('.'));