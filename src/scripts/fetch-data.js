// src/scripts/fetch-data.js - نسخه نهایی
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, '../data');

console.log('🚀 شروع اسکریپت دریافت داده...');

// ساخت پوشه data
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('✅ پوشه data ساخته شد');
}

// ==================== ۱. تولید داده‌های واقعی‌گونه ====================
function generateRealisticData() {
  console.log('📊 تولید داده‌های آزمایشی...');
  
  const now = new Date();
  const persianDate = now.toLocaleDateString('fa-IR');
  const persianTime = now.toLocaleTimeString('fa-IR');
  
  // ۱. داده‌های طلا و ارز
  const goldCurrency = {
    gold: [
      { name: 'طلای ۱۸ عیار', price: 123456789, change_percent: 2.5, symbol: 'GOLD' },
      { name: 'سکه امامی', price: 45678901, change_percent: 1.8, symbol: 'EMAMI' }
    ],
    currency: [
      { name: 'دلار آمریکا', price: 98500, change_percent: 0.3, symbol: 'USD' },
      { name: 'یورو', price: 107500, change_percent: -0.2, symbol: 'EUR' },
      { name: 'درهم امارات', price: 26800, change_percent: 0.1, symbol: 'AED' }
    ],
    crypto: [
      { name: 'بیت‌کوین', price: 82000000, change_percent: 1.2, symbol: 'BTC' },
      { name: 'اتریوم', price: 4500000, change_percent: 0.8, symbol: 'ETH' },
      { name: 'تتر', price: 98500, change_percent: 0.0, symbol: 'USDT' }
    ],
    last_update: now.toISOString()
  };
  fs.writeFileSync(
    path.join(dataDir, 'gold-currency.json'),
    JSON.stringify(goldCurrency, null, 2),
    'utf8'
  );
  console.log('✅ gold-currency.json (طلا و ارز)');

  // ۲. داده‌های کیفیت هوا
  const airQuality = {
    aqi: 85,
    city: { name: 'تهران' },
    time: { s: `${persianDate} ${persianTime}` },
    iaqi: {
      pm25: { v: 35 },
      pm10: { v: 75 },
      o3: { v: 20 },
      no2: { v: 15 }
    },
    forecast: {
      daily: {
        pm25: [
          { day: '۱۴۰۴/۰۲/۱۰', avg: 45 },
          { day: '۱۴۰۴/۰۲/۱۱', avg: 55 },
          { day: '۱۴۰۴/۰۲/۱۲', avg: 40 }
        ]
      }
    }
  };
  fs.writeFileSync(
    path.join(dataDir, 'air-quality.json'),
    JSON.stringify(airQuality, null, 2),
    'utf8'
  );
  console.log('✅ air-quality.json (کیفیت هوا)');

  // ۳. داده‌های بورس
  const marketIndex = {
    total_symbols: 320,
    total_value: 12500000000000,
    top_gainers: [
      { name: 'فولاد', change: 5.2, price: 4850 },
      { name: 'خودرو', change: 4.8, price: 320 },
      { name: 'کگل', change: 3.9, price: 2150 },
      { name: 'فملی', change: 3.5, price: 1800 },
      { name: 'شستا', change: 2.8, price: 750 }
    ],
    top_losers: [
      { name: 'شپنا', change: -3.5, price: 1800 },
      { name: 'وبملت', change: -2.8, price: 950 },
      { name: 'خگستر', change: -2.2, price: 620 },
      { name: 'سایپا', change: -1.8, price: 120 },
      { name: 'مپنا', change: -1.5, price: 550 }
    ],
    last_update: now.toISOString()
  };
  fs.writeFileSync(
    path.join(dataDir, 'market-index.json'),
    JSON.stringify(marketIndex, null, 2),
    'utf8'
  );
  console.log('✅ market-index.json (بورس)');

  // ۴. داده‌های کامودیتی
  const commodities = {
    items: [
      { name: 'طلای جهانی', price: 2350, change_percent: 0.5, unit: 'USD/oz' },
      { name: 'نقره', price: 28.5, change_percent: -0.3, unit: 'USD/oz' },
      { name: 'مس', price: 4.2, change_percent: 0.8, unit: 'USD/lb' },
      { name: 'نفت برنت', price: 82.5, change_percent: 1.2, unit: 'USD/bbl' },
      { name: 'نفت وست تگزاس', price: 78.5, change_percent: 1.0, unit: 'USD/bbl' }
    ],
    last_update: now.toISOString()
  };
  fs.writeFileSync(
    path.join(dataDir, 'commodities.json'),
    JSON.stringify(commodities, null, 2),
    'utf8'
  );
  console.log('✅ commodities.json (کامودیتی‌ها)');

  console.log('🎉 تمام داده‌ها با موفقیت تولید شدند!');
}

// ==================== ۲. اجرای اصلی ====================
function main() {
  try {
    generateRealisticData();
    console.log(`⏱️ زمان اجرا: ${new Date().toLocaleString('fa-IR')}`);
  } catch (error) {
    console.error('❌ خطا:', error.message);
    console.error(error.stack);
  }
}

// اجرای مستقیم
main();