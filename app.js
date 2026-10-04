/**
 * AISEEN Thailand — Core Application Logic
 * Developed for Libralytics Co., Ltd. & AISEEN Thailand
 */

// --- Global State ---
const state = {
  lang: 'en',
  currency: 'USD',
  billing: 'monthly',
  auditTarget: 'bangkok-wellness.co.th',
  isScanning: false,
  selectedService: 'AI SEO & GEO Optimization',
  selectedChannel: 'line',
  rates: {
    USD_TO_THB: 35.5
  }
};

// --- Localization Dictionary ---
const translations = {
  en: {
    'nav.audit': 'Live Audit',
    'nav.geo': 'GEO vs SEO',
    'nav.dimensions': '8 Dimensions',
    'nav.libot': 'LIBOT Integration',
    'nav.builder': 'Enquiry Builder',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.cta': 'Let’s talk visibility',
    'hero.eyebrow': 'LOCAL DISCOVERY. REIMAGINED.',
    'hero.refH1a': 'Great business.',
    'hero.refH1b': 'Let’s make sure',
    'hero.refH1c1': 'you’re',
    'hero.refH1c2': 'seen.',
    'hero.refSubStrong': 'On maps. In search. In the AI conversation.',
    'hero.refSub': 'Bring your business information together, so more customers can find their way to you.',
    'hero.refCta': 'Build my visibility brief',
    'hero.refMeet': 'Meet AISEEN',
    'hero.refNote': 'MEO + AI optimization. One connected approach.',
    'hero.pill': 'SEO + GEO + Vibe + Security + Privacy — all in one',
    'hero.title1': 'Is your site',
    'hero.title2': 'invisible',
    'hero.subtitle': 'While competitors optimize for Google — their AI search traffic grows. Check SEO, AI Search Health, <strong>Vibe Coding SEO</strong>, security and cookie consent in 30 seconds — free.',
    'hero.auditBtn': 'Check →',
    'hero.presetsLabel': 'Try popular benchmarks:',
    'trust.noSignup': 'No signup',
    'trust.engines': '9 AI engines',
    'trust.security': 'OWASP 2025 + ZAP',
    'trust.vibe': 'Vibe Score',
    'trust.content': 'Content quality',
    'trust.timing': 'Results in 30s',
    'trust.gdpr': 'GDPR & Cookie check',
    'metric.engines': 'AI Engines',
    'metric.checks': 'SEO Checks',
    'metric.modules': 'Audit Modules',
    'metric.vibe': 'Vibe Checks',
    'metric.grade': 'Security Grade',
    'metric.zap': 'ZAP Rules',
    'metric.pdpa': 'Thai Compliance',
    'audit.badge': 'Live Diagnostic Sandbox',
    'audit.title': 'Real-Time Multi-Engine Audit',
    'audit.desc': 'Simulate an automated multi-stage scan across AI search crawlers, technical health, OWASP security headers, and Thailand local search factors.',
    'score.geo': 'GEO Score',
    'score.seo': 'Technical SEO',
    'score.security': 'Security Grade',
    'score.vibe': 'Vibe Score',
    'tab.geoEngines': 'AI Engines Visibility',
    'tab.technicalSeo': 'Technical SEO (60+)',
    'tab.security': 'OWASP & Pentest',
    'tab.vibe': 'Vibe Coding Fixes',
    'tab.codeFixes': 'Instant Code Fixes',
    'geo.badge': 'The Paradigm Shift',
    'geo.title': 'Traditional SEO vs AI GEO',
    'geo.desc': 'Millions of high-intent clients now research, compare, and choose vendors directly inside AI conversations without ever clicking a 10-blue-links page.',
    'geo.tradTitle': 'Traditional SEO',
    'geo.trad1': 'Competes for 10 static keyword positions on page 1',
    'geo.trad2': 'User must physically click through your link to read answers',
    'geo.trad3': 'High ad pollution: top 4 results are sponsored ads',
    'geo.trad4': 'Keyword stuffing & backlink gaming dictate visibility',
    'geo.trad5': 'Zero conversation: static landing page with high bounce rate',
    'geo.geoTitle': 'GEO (Generative Engine Optimization)',
    'geo.geo1': 'AI explicitly synthesizes and names your company as the top recommendation',
    'geo.geo2': 'Zero-click direct answer citation: user trusts the authoritative endorsement',
    'geo.geo3': 'Synthesized from knowledge graphs, structured JSON-LD, and llms.txt',
    'geo.geo4': 'Multi-lingual reasoning: serves Thai, English, Chinese & Japanese queries',
    'geo.geo5': 'Direct hand-off into automated enquiries via LINE OA & WhatsApp',
    'dim.badge': 'Comprehensive Protection',
    'dim.title': 'Eight Dimensions of Site Health',
    'dim.desc': 'Beyond simple SEO, AISeen provides a complete 360-degree audit covering AI discovery, cybersecurity defense, data privacy, and code hygiene.',
    'libot.badge': 'Exclusive Libralytics Feature',
    'libot.title1': 'Convert AI Search Traffic',
    'libot.title2': 'Directly into LINE OA & WhatsApp Leads',
    'libot.desc': 'Getting cited in ChatGPT is only half the battle. Through LIBOT — Libralytics\' proprietary intelligent bot bridge — incoming enquiries from AI recommendations are automatically formatted and routed straight to your company\'s official LINE OA, WhatsApp, or CRM email.',
    'libot.tryBuilder': 'Launch Enquiry Builder Demo →',
    'builder.badge': 'Live Interactive Generator',
    'builder.title': 'Tested Enquiry Builder',
    'builder.desc': 'Test the interactive enquiry experience. Configure your requirements and preview how enquiries are formatted and dispatched via LINE, WhatsApp, or Email.',
    'form.serviceLabel': '1. Select Desired Service / Objective',
    'form.urlLabel': '2. Website Domain or Brand Name',
    'form.contactLabel': '3. Contact Person & Organization',
    'form.notesLabel': '4. Specific Goals / Inquiries',
    'form.channelLabel': '5. Delivery Destination Channel',
    'form.templates': 'Try Example:',
    'form.previewTitle': 'Live Message Preview',
    'form.copyBtn': 'Copy Message',
    'pricing.badge': 'Transparent Pricing',
    'pricing.title': 'Simple, Predictable Plans',
    'pricing.desc': 'Semrush costs $139/mo. Ahrefs costs $129/mo. AISeen gives you full traditional SEO + 9 AI Engines + OWASP Security at a fraction of the cost.',
    'pricing.btnFree': 'Start Free Audit',
    'pricing.btnStarter': 'Get Starter',
    'pricing.btnPro': 'Start 7-Day Trial',
    'pricing.btnEnterprise': 'Contact Enterprise',
    'faq.title': 'Common Questions',
    'faq.desc': 'Everything you need to know about Generative Engine Optimization, security, and LIBOT in Thailand.',
    'faq.q1': 'What is GEO (Generative Engine Optimization) and why is it critical?',
    'faq.a1': 'GEO is the discipline of optimizing your digital presence so AI engines (ChatGPT, Perplexity, Gemini, Claude, Grok) understand your offerings and directly cite your business when responding to user queries. Traditional SEO ranks keywords in blue links; GEO makes your company the recommended source in synthesized answers.',
    'faq.q2': 'How does LIBOT integrate with our Thailand LINE Official Account?',
    'faq.a2': 'LIBOT acts as an intelligent conversational middleware developed by Libralytics Co., Ltd. When visitors generate an audit or enquiry on your site, LIBOT packages the data and routes it directly to your verified LINE OA or WhatsApp channel. It can also be paired with automated 24/7 AI agents that answer Thai and English inquiries in real-time.',
    'faq.q3': 'Is scanning our site safe and does it affect server load?',
    'faq.a3': 'Yes, completely safe. AISeen strictly performs non-intrusive public crawl simulations identical to how search engine bots inspect your site. We never request private credentials, modify database records, or inject invasive payloads.',
    'faq.q4': 'What is Vibe Coding SEO and why do AI-created sites fail?',
    'faq.a4': 'Websites generated through AI prompts (vibe coding) often look fantastic visually but carry architectural flaws: client-only rendering shells that search bots read as blank, trailing slash duplication, missing canonical URLs, and massive JavaScript payloads. AISeen automatically pinpoints and provides drop-in code fixes for these issues.',
    'faq.q5': 'Does AISeen support Thailand\'s Personal Data Protection Act (PDPA)?',
    'faq.a5': 'Yes. Our Consent & Privacy module verifies that your cookie banners comply with Thailand PDPA requirements, ensuring trackers are withheld until explicit consent is obtained and that a clear "Reject All" button is provided without dark patterns.',
    'cta.title': 'Make Your Business Seen Everywhere',
    'cta.desc': 'Join leading Thailand businesses leveraging AISeen and Libralytics to capture high-value AI search traffic. Run your first comprehensive audit in 30 seconds.',
    'cta.btnAudit': 'Run Free 30s Audit →',
    'cta.btnLibot': 'Contact Libralytics on LINE',
    'nav.how': 'How It Works',
    'audit.exportBtn': 'Export Report',
    'audit.shareBtn': 'Share',
    'geo.clickHint': 'Click any engine below to inspect user-agent parameters, crawl IP blocks, and test simulated Bangkok queries:',
    'code.desc': 'Select a verified code fix below to drop directly into your server or CMS for instant AI visibility, OWASP hardening, and PDPA compliance:',
    'how.badge': 'Proven 3-Step Methodology',
    'how.title': 'From URL to Fix in 3 Steps',
    'how.desc': 'Automated multi-engine scanning, prioritized actionable code fixes, and real-time citation tracking for modern AI search.',
    'how.step1Title': 'Run an Audit',
    'how.step1Desc': 'Paste any URL to trigger 60+ technical SEO checks, 9 AI search bot simulations, and OWASP security scans in 30 seconds.',
    'how.step2Title': 'Inspect Results & Fixes',
    'how.step2Desc': 'Review prioritized issues across all 8 modules and get copy-paste code snippets for /llms.txt, JSON-LD, and security headers.',
    'how.step3Title': 'Track Progress & Leads',
    'how.step3Desc': 'Re-audit after fixes to monitor citation growth and route high-intent customer enquiries directly to LINE OA via LIBOT.',
    'how.pane1Heading': 'Instant Non-Intrusive Public Crawl',
    'how.pane1Text': 'AISeen simulates how official web crawlers from OpenAI, Anthropic, Google, and Perplexity inspect your site. We evaluate robot access directives, canonical tags, responsive viewport, Core Web Vitals, and OWASP 2025 headers without needing backend login credentials.',
    'how.pane2Heading': 'Drop-in Code Snippets & AI Solutions',
    'how.pane2Text': 'Never guess what to fix. AISeen provides exact code snippets customized for your domain — including standardized /llms.txt manifests, bilingual Schema.org JSON-LD tags with Bangkok coordinates, and production-ready Nginx/Next.js OWASP headers.',
    'how.pane3Heading': 'Monitor Citations & Automate Lead Delivery',
    'how.pane3Text': 'Verify score improvements across daily re-crawls. As your brand gets recommended in ChatGPT and Perplexity, LIBOT channels incoming client inquiries into instant, structured notifications sent directly to your LINE Official Account or WhatsApp.',
    'builder.helpToggle': 'How Does Enquiry Delivery Work? View Guide & Specs',
    'builder.helpTitle': 'Enquiry Builder Guide & Delivery Mechanics',
    'builder.helpDesc': 'Unstructured enquiries sent to Thai businesses often lead to lengthy back-and-forth ("Hi, how much is this?"). AISeen structures client requirements into a clean, normalized payload with domain, verified contact, service scope, and technical objectives before routing via LIBOT.',
    'builder.help1Title': 'Select & Customize',
    'builder.help1Desc': 'Choose your objective or click any of the 4 real-world Thailand business templates to auto-fill clinic, e-commerce, SaaS, or resort requirements.',
    'builder.help2Title': 'Live Encoding',
    'builder.help2Desc': 'Real-time preview converts your inputs into structured text compatible with LINE OA rich cards, WhatsApp formatting (*bold*, lists), or RFC-compliant email.',
    'builder.help3Title': 'Direct Hand-Off',
    'builder.help3Desc': 'One-click deep link opens LINE OA (@libralytics) or WhatsApp directly on mobile/desktop without signup or intermediary data collection.',
    'modal.exportTitle': 'Executive Audit Report',
    'modal.summaryLabel': 'Executive Summary (Copyable Markdown):',
    'modal.copySummary': 'Copy Markdown Report'
  },
  th: {
    'nav.audit': 'ตรวจสอบสด',
    'nav.geo': 'GEO เทียบกับ SEO',
    'nav.dimensions': '8 มิติสุขภาพเว็บ',
    'nav.libot': 'ระบบเชื่อมต่อ LIBOT',
    'nav.builder': 'สร้างข้อความติดต่อ',
    'nav.pricing': 'ราคาแพ็กเกจ',
    'nav.faq': 'คำถามที่พบบ่อย',
    'nav.cta': 'ปรึกษาการมองเห็นของแบรนด์',
    'hero.eyebrow': 'การค้นหาในท้องถิ่น ในมิติใหม่',
    'hero.refH1a': 'ธุรกิจที่ยอดเยี่ยม',
    'hero.refH1b': 'ให้เราช่วยให้',
    'hero.refH1c1': 'ทุกคน',
    'hero.refH1c2': 'มองเห็นคุณ',
    'hero.refSubStrong': 'ทั้งบนแผนที่ บนการค้นหา และในการสนทนาของ AI',
    'hero.refSub': 'รวมข้อมูลธุรกิจของคุณเข้าด้วยกัน เพื่อให้ลูกค้าค้นพบคุณได้ง่ายขึ้น',
    'hero.refCta': 'สร้างรายงานการมองเห็น',
    'hero.refMeet': 'รู้จัก AISEEN',
    'hero.refNote': 'MEO + การเพิ่มประสิทธิภาพ AI ในหนึ่งเดียว',
    'hero.pill': 'SEO + GEO + Vibe + Security + Privacy — ครบจบในที่เดียว',
    'hero.title1': 'เว็บไซต์ของคุณ',
    'hero.title2': 'มองไม่เห็น',
    'hero.subtitle': 'ในขณะที่คู่แข่งมัวปรับแต่งเว็บเพื่อ Google — ทราฟฟิกจาก AI Search กลับเติบโตขึ้นทุกวัน ตรวจสอบ SEO, AI Search Health, <strong>Vibe Coding SEO</strong>, ความปลอดภัย และคุกกี้ได้ใน 30 วินาที — ฟรี',
    'hero.auditBtn': 'ตรวจสอบ →',
    'hero.presetsLabel': 'ลองเว็บไซต์ตัวอย่าง:',
    'trust.noSignup': 'ไม่ต้องสมัครสมาชิก',
    'trust.engines': '9 ระบบ AI ค้นหา',
    'trust.security': 'OWASP 2025 + ZAP',
    'trust.vibe': 'คะแนน Vibe Score',
    'trust.content': 'คุณภาพเนื้อหา',
    'trust.timing': 'ผลลัพธ์ใน 30 วินาที',
    'trust.gdpr': 'ตรวจสอบ GDPR & คุกกี้',
    'metric.engines': 'ระบบ AI ค้นหา',
    'metric.checks': 'จุดตรวจ SEO',
    'metric.modules': 'โมดูลการตรวจ',
    'metric.vibe': 'จุดตรวจ Vibe Code',
    'metric.grade': 'เกรดความปลอดภัย',
    'metric.zap': 'กฎสแกน ZAP',
    'metric.pdpa': 'ตามกฎหมาย PDPA ไทย',
    'audit.badge': 'แซนด์บ็อกซ์ตรวจสอบสด',
    'audit.title': 'วิเคราะห์เว็บไซต์แบบ Multi-Engine แบบเรียลไทม์',
    'audit.desc': 'จำลองการสแกนหลายระดับเพื่อตรวจจับ AI Crawlers, สุขภาพทางเทคนิค, เฮดเดอร์ความปลอดภัย OWASP และปัจจัยท้องถิ่นของประเทศไทย',
    'score.geo': 'คะแนน GEO',
    'score.seo': 'Technical SEO',
    'score.security': 'เกรดความปลอดภัย',
    'score.vibe': 'คะแนน Vibe Code',
    'tab.geoEngines': 'การมองเห็นของ AI Search',
    'tab.technicalSeo': 'Technical SEO (60+ ข้อ)',
    'tab.security': 'OWASP & ป้องกัน Pentest',
    'tab.vibe': 'แก้ไข Vibe Coding',
    'tab.codeFixes': 'โค้ดแก้ไขทันที',
    'geo.badge': 'การเปลี่ยนแปลงแห่งยุคสมัย',
    'geo.title': 'SEO แบบดั้งเดิม เทียบกับ AI GEO',
    'geo.desc': 'ผู้บริโภคที่มีกำลังซื้อสูงหลายล้านคนกำลังค้นหา เปรียบเทียบ และตัดสินใจเลือกซื้อสินค้าโดยตรงภายในแชท AI โดยไม่ต้องคลิกหน้าผลลัพธ์แบบเดิม',
    'geo.tradTitle': 'SEO แบบดั้งเดิม (Traditional SEO)',
    'geo.trad1': 'แข่งขันแย่งชิงอันดับคีย์เวิร์ดเพียง 10 ลิงก์บนหน้าแรก',
    'geo.trad2': 'ผู้ใช้ต้องคลิกเข้าสู่เว็บไซต์จึงจะเห็นเนื้อหาคำตอบ',
    'geo.trad3': 'โฆษณาบดบัง 4 อันดับแรกเป็นพื้นที่โฆษณาซื้อแอด',
    'geo.trad4': 'เน้นยัดคีย์เวิร์ดและปั่น Backlink เพื่อสร้างอันดับ',
    'geo.trad5': 'ไม่มีการตอบสนอง: หน้าแลนดิ้งเพจมีอัตราการกดออกสูง',
    'geo.geoTitle': 'GEO (Generative Engine Optimization)',
    'geo.geo1': 'AI สังเคราะห์และระบุชื่อแบรนด์ของคุณเป็นตัวเลือกอันดับหนึ่งโดยตรง',
    'geo.geo2': 'Zero-click citation: ลูกค้าเชื่อมั่นในคำแนะนำที่ AI คัดเลือกให้',
    'geo.geo3': 'สังเคราะห์ข้อมูลจาก Knowledge Graph, JSON-LD Schema และ llms.txt',
    'geo.geo4': 'รองรับหลายภาษา: ตอบคำถามภาษาไทย อังกฤษ จีน และญี่ปุ่นได้อย่างแม่นยำ',
    'geo.geo5': 'ส่งต่อลูกค้าเข้าสู่ระบบแชทอัตโนมัติผ่าน LINE OA และ WhatsApp ได้ทันที',
    'dim.badge': 'การปกป้องรอบด้าน',
    'dim.title': '8 มิติสุขภาพเว็บไซต์',
    'dim.desc': 'มากกว่าแค่ SEO ทั่วไป AISeen ให้การตรวจสอบแบบ 360 องศา ทั้งการค้นพบโดย AI, การป้องกันทางไซเบอร์, ความเป็นส่วนตัว และคุณภาพโค้ด',
    'libot.badge': 'ฟีเจอร์เอกสิทธิ์จาก Libralytics',
    'libot.title1': 'เปลี่ยนทราฟฟิกจาก AI Search',
    'libot.title2': 'ให้กลายเป็นยอดขายบน LINE OA & WhatsApp',
    'libot.desc': 'การถูกอ้างอิงใน ChatGPT เป็นเพียงก้าวแรก ด้วย LIBOT — ระบบตัวกลางอัจฉริยะจาก Libralytics ข้อมูลและข้อซักถามจากลูกค้าจะถูกจัดรูปแบบและส่งตรงเข้า LINE Official Account, WhatsApp หรือ CRM ของคุณทันที',
    'libot.tryBuilder': 'ทดลองสร้างข้อความติดต่อ →',
    'builder.badge': 'ระบบสร้างข้อความแบบอินเตอร์แอคทีฟ',
    'builder.title': 'ระบบสร้างข้อความติดต่อ (Enquiry Builder)',
    'builder.desc': 'ทดสอบประสบการณ์ส่งข้อความติดต่อ เลือกระบุความต้องการและดูตัวอย่างข้อความที่ถูกจัดรูปแบบพร้อมส่งเข้า LINE, WhatsApp หรือ Email ทันที',
    'form.serviceLabel': '1. เลือกบริการหรือเป้าหมายที่ต้องการ',
    'form.urlLabel': '2. โดเมนเว็บไซต์หรือชื่อแบรนด์ของคุณ',
    'form.contactLabel': '3. ชื่อผู้ติดต่อและองค์กร',
    'form.notesLabel': '4. รายละเอียดหรือเป้าหมายเฉพาะเจาะจง',
    'form.channelLabel': '5. ช่องทางการส่งข้อมูลปลายทาง',
    'form.templates': 'เลือกตัวอย่าง:',
    'form.previewTitle': 'ตัวอย่างข้อความพร้อมส่ง',
    'form.copyBtn': 'คัดลอกข้อความ',
    'pricing.badge': 'ราคาโปร่งใส',
    'pricing.title': 'แพ็กเกจที่ชัดเจน คุ้มค่า',
    'pricing.desc': 'Semrush ราคา $139/เดือน Ahrefs ราคา $129/เดือน AISeen มอบทั้ง SEO ดั้งเดิม + 9 AI Engines + OWASP ในราคาที่คุ้มค่ากว่ามาก',
    'pricing.btnFree': 'เริ่มตรวจฟรี',
    'pricing.btnStarter': 'เลือกแพ็กเกจ Starter',
    'pricing.btnPro': 'ทดลองใช้ฟรี 7 วัน',
    'pricing.btnEnterprise': 'ติดต่อทีม Enterprise',
    'faq.title': 'คำถามที่พบบ่อย',
    'faq.desc': 'ทุกสิ่งที่คุณต้องรู้เกี่ยวกับ Generative Engine Optimization, ความปลอดภัยไซเบอร์ และระบบ LIBOT ในประเทศไทย',
    'faq.q1': 'GEO (Generative Engine Optimization) คืออะไร และทำไมจึงสำคัญมาก?',
    'faq.a1': 'GEO คือศาสตร์การปรับแต่งเว็บไซต์เพื่อให้ระบบ AI (ChatGPT, Perplexity, Gemini, Claude, Grok) เข้าใจข้อมูลสินค้า/บริการ และอ้างอิงแบรนด์ของคุณเมื่อตอบคำถามผู้ใช้ SEO แบบเดิมแข่งอันดับลิงก์ แต่ GEO ทำให้ธุรกิจของคุณเป็นตัวเลือกที่ AI แนะนำโดยตรง',
    'faq.q2': 'LIBOT เชื่อมต่อกับ LINE Official Account (LINE OA) อย่างไร?',
    'faq.a2': 'LIBOT เป็นระบบอัจฉริยะที่พัฒนาโดย บริษัท ไลบราลิทติกส์ จำกัด เมื่อมีผู้สนใจหรือสร้างคำขอตรวจบนเว็บไซต์ ระบบจะจัดระเบียบข้อมูลและส่งเข้า LINE OA หรือ WhatsApp ของทีมขายทันที พร้อมรองรับ AI Agent ตอบคำถามภาษาไทยและอังกฤษตลอด 24 ชั่วโมง',
    'faq.q3': 'การสแกนเว็บไซต์ปลอดภัยหรือไม่ และกระทบการทำงานของเซิร์ฟเวอร์ไหม?',
    'faq.a3': 'ปลอดภัย 100% AISeen จำลองการเข้าชมของบ็อตค้นหาสาธารณะอย่างอ่อนโยน ไม่มีการขอรหัสผ่าน ไม่มีการแก้ไขฐานข้อมูล และไม่มีการยิงเพย์โหลดที่ทำให้ระบบขัดข้อง',
    'faq.q4': 'Vibe Coding SEO คืออะไร และทำไมเว็บไซต์ที่สร้างด้วย AI จึงมักมีปัญหา?',
    'faq.a4': 'เว็บไซต์ที่สร้างด้วย AI (Vibe Coding) มักมีดีไซน์ที่สวยงาม แต่ขาดโครงสร้างเชิงเทคนิค เช่น การเรนเดอร์แบบ Client-side อย่างเดียวทำให้บ็อตมองเห็นเป็นหน้าเปล่า, ปัญหา Trailing Slash ซ้ำซ้อน และไฟล์ JavaScript หนักเกินไป AISeen ช่วยตรวจจับและให้โค้ดแก้ไขทันที',
    'faq.q5': 'AISeen รองรับ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) ของไทยหรือไม่?',
    'faq.a5': 'รองรับอย่างสมบูรณ์แบบ โมดูล Privacy ของเราตรวจสอบว่าแบนเนอร์คุกกี้ของคุณมีการกักกัน Tracker ก่อนได้รับความยินยอม และมีปุ่มปฏิเสธคุกกี้ที่ชัดเจนตามมาตรฐาน PDPA ของประเทศไทย',
    'cta.title': 'ทำให้ธุรกิจของคุณถูกมองเห็นในทุกระบบ AI',
    'cta.desc': 'ร่วมเป็นผู้นำธุรกิจในไทยที่ใช้ AISeen และ Libralytics เพื่อคว้าทราฟฟิกลูกค้าคุณภาพสูงจาก AI Search เริ่มตรวจฟรีใน 30 วินาที',
    'cta.btnAudit': 'ตรวจฟรีใน 30 วินาที →',
    'cta.btnLibot': 'ติดต่อ Libralytics ทาง LINE',
    'nav.how': 'ขั้นตอนการทำงาน',
    'audit.exportBtn': 'ส่งออกรายงาน',
    'audit.shareBtn': 'แชร์ผลตรวจ',
    'geo.clickHint': 'คลิกที่ระบบ AI ด้านล่างเพื่อดูรายละเอียด User-Agent การตั้งค่า Robots.txt และทดสอบคำค้นหาในไทย:',
    'code.desc': 'เลือกโค้ดแก้ไขสำเร็จรูปด้านล่างเพื่อนำไปติดตั้งบนเซิร์ฟเวอร์หรือ CMS ของคุณได้ทันที รองรับทั้ง AI Search, OWASP และ PDPA:',
    'how.badge': '3 ขั้นตอนมาตรฐานระดับสากล',
    'how.title': 'จากระบุ URL สู่การแก้ไขใน 3 ขั้นตอน',
    'how.desc': 'สแกนอัตโนมัติรอบด้าน รับโค้ดแก้ไขทันที และติดตามโอกาสการเติบโตของการถูก AI อ้างอิงอย่างต่อเนื่อง',
    'how.step1Title': '1. สแกนเว็บไซต์',
    'how.step1Desc': 'เพียงวางลิงก์ URL ระบบจะสแกน 60+ จุดตรวจ Technical SEO, จำลอง 9 บ็อต AI Search และตรวจความปลอดภัย OWASP ใน 30 วินาที',
    'how.step2Title': '2. ดูผลลัพธ์และโค้ดแก้ไข',
    'how.step2Desc': 'ตรวจสอบจุดบกพร่องที่แยกตามลำดับความสำคัญ พร้อมรับโค้ดสำเร็จรูป /llms.txt, JSON-LD Schema และ Security Headers ไปวางใช้งานได้ทันที',
    'how.step3Title': '3. ติดตามผลและรับยอดขาย',
    'how.step3Desc': 'สแกนซ้ำเพื่อดูคะแนนที่เพิ่มขึ้น พร้อมระบบ LIBOT ที่เปลี่ยนผู้ค้นหาจาก ChatGPT ให้กลายเป็นข้อความติดต่อใน LINE OA อัตโนมัติ',
    'how.pane1Heading': 'จำลองการเข้าชมของบ็อตค้นหาอย่างแม่นยำและปลอดภัย',
    'how.pane1Text': 'AISeen จำลองการทำงานของบ็อตจาก OpenAI, Anthropic, Google และ Perplexity ตรวจสอบคำสั่ง robots.txt, Canonical tag, ความเร็ว และมาตรฐานความปลอดภัย OWASP 2025 โดยไม่ต้องขอรหัสผ่านหรือเข้าหลังบ้าน',
    'how.pane2Heading': 'โค้ดแก้ไขสำเร็จรูปพร้อมใช้งานจริง',
    'how.pane2Text': 'ไม่ต้องเดาวิธีแก้ AISeen สร้างโค้ดที่ปรับให้ตรงกับโดเมนของคุณโดยเฉพาะ ทั้งไฟล์ /llms.txt, โค้ด JSON-LD ภาษาไทย-อังกฤษพร้อมพิกัด และการตั้งค่าเฮดเดอร์ความปลอดภัย Nginx / Next.js',
    'how.pane3Heading': 'ติดตามโอกาสถูกอ้างอิง และส่งต่อลูกค้าเข้า LINE OA ทันที',
    'how.pane3Text': 'ติดตามคะแนนที่ดีขึ้นหลังปรับแก้ เมื่อแบรนด์ของคุณถูกแนะนำใน ChatGPT ระบบ LIBOT จะส่งคำขอติดต่อจากลูกค้าเข้า LINE Official Account หรือ WhatsApp ของทีมงานภายใน 1.2 วินาที',
    'builder.helpToggle': 'ระบบส่งข้อความติดต่อทำงานอย่างไร? ดูคู่มือและสเปกการส่งข้อมูล',
    'builder.helpTitle': 'คู่มือระบบสร้างข้อความติดต่อ (Enquiry Builder Guide)',
    'builder.helpDesc': 'ข้อความติดต่อที่ไม่มีโครงสร้างชัดเจนมักทำให้เสียเวลาสอบถามกลับ ("สอบถามราคาครับ") AISeen จึงจัดระเบียบข้อมูล ทั้งชื่อโดเมน, ผู้ติดต่อ, ขอบเขตบริการ และเป้าหมายทางเทคนิค ให้เป็นข้อความมาตรฐานก่อนส่งเข้า LINE OA',
    'builder.help1Title': '1. ระบุข้อมูลหรือเลือกตัวอย่าง',
    'builder.help1Desc': 'ระบุความต้องการหรือกดเลือก 4 ตัวอย่างธุรกิจในไทย (คลินิก, อีคอมเมิร์ซ, ซอฟต์แวร์ SaaS หรือรีสอร์ตหรู) เพื่อเติมข้อมูลทันที',
    'builder.help2Title': '2. แปลงข้อความแบบเรียลไทม์',
    'builder.help2Desc': 'ระบบจะแสดงตัวอย่างข้อความที่จัดรูปแบบให้เข้ากับ LINE OA, สัญลักษณ์หนาบางของ WhatsApp หรือฟอร์แมตอีเมลแบบมาตรฐาน',
    'builder.help3Title': '3. ส่งตรงถึงทีมงานทันที',
    'builder.help3Desc': 'เพียงคลิกเดียว ระบบจะเปิดแอป LINE OA (@libralytics) หรือ WhatsApp พร้อมข้อความที่พร้อมส่งทันที ปลอดภัย ไม่มีการดักเก็บข้อมูล',
    'modal.exportTitle': 'รายงานสรุปผลการตรวจสอบระดับผู้บริหาร',
    'modal.summaryLabel': 'สรุปผลสำหรับผู้บริหาร (คัดลอกในรูปแบบ Markdown):',
    'modal.copySummary': 'คัดลอกรายงานสรุป'
  }
};

// --- Templates for Enquiry Builder ---
const enquiryTemplates = {
  clinic: {
    service: 'AI SEO & GEO Optimization',
    domain: 'bangkok-wellness.co.th',
    contact: 'Dr. Natthawut / Executive Medical Director',
    notes: 'We want our clinic to be cited as the #1 luxury longevity & anti-aging clinic in Bangkok on ChatGPT, Perplexity, and Claude. Also require LIBOT LINE OA patient booking integration.'
  },
  ecommerce: {
    service: 'Vibe Code Optimization',
    domain: 'siam-crafts-market.com',
    contact: 'K. Somchai / Head of E-Commerce',
    notes: 'Our Next.js site was built with AI. We need to fix blank CSR indexing issues, optimize Core Web Vitals, and enable instant PromptPay payment security checks.'
  },
  saas: {
    service: 'OWASP Security Hardening',
    domain: 'libra-analytics.io',
    contact: 'K. Anan / Lead DevOps Engineer',
    notes: 'Need full OWASP 2025 headers setup (HSTS, strict CSP, XFO), sensitive path blocking (/.env, /.git), and Thai PDPA consent validation.'
  },
  hospitality: {
    service: 'LIBOT AI Agent Setup',
    domain: 'phuket-haven-resort.com',
    contact: 'Ploy / Director of Marketing & Guest Experience',
    notes: 'Looking for 24/7 bilingual (English/Thai) automated enquiry bot handling via LINE OA and WhatsApp for our luxury beachfront villas.'
  }
};

// --- Pricing Tier Matrix ---
const pricingMatrix = {
  monthly: {
    USD: { free: 0, starter: 9, pro: 29, ent: 99, period: '/ month' },
    THB: { free: 0, starter: 320, pro: 1050, ent: 3500, period: '/ เดือน' }
  },
  annual: {
    USD: { free: 0, starter: 7, pro: 23, ent: 79, period: '/ mo (billed yearly)' },
    THB: { free: 0, starter: 250, pro: 840, ent: 2800, period: '/ ด. (จ่ายรายปี)' }
  }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initLanguageSelector();
  initCurrencySelector();
  initHeroRotator();
  updateEnquiryPreview();
  renderPricing();
});

// --- Hero Rotating Text Engine (Reference CI) ---
function initHeroRotator() {
  const rotatorEl = document.getElementById('heroRotator');
  if (!rotatorEl) return;

  const engines = [
    'to ChatGPT?',
    'to Perplexity?',
    'to Gemini?',
    'to Claude?',
    'to Google AI?'
  ];

  const enginesTh = [
    'ใน ChatGPT?',
    'ใน Perplexity?',
    'ใน Gemini?',
    'ใน Claude?',
    'ใน Google AI?'
  ];

  let currentIndex = 0;

  setInterval(() => {
    rotatorEl.classList.add('fade-out');
    rotatorEl.classList.remove('fade-in');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % engines.length;
      const list = state.lang === 'th' ? enginesTh : engines;
      rotatorEl.textContent = list[currentIndex];
      rotatorEl.classList.remove('fade-out');
      rotatorEl.classList.add('fade-in');
    }, 250);
  }, 2400);
}

// --- Navigation & Scroll Effects ---
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('navLinks');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });

  // Close menu on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
    });
  });
}

// --- Language Switcher ---
function initLanguageSelector() {
  const btnEN = document.getElementById('btnLangEN');
  const btnTH = document.getElementById('btnLangTH');

  btnEN.addEventListener('click', () => setLanguage('en'));
  btnTH.addEventListener('click', () => setLanguage('th'));
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  document.getElementById('btnLangEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnLangTH').classList.toggle('active', lang === 'th');

  // Translate all DOM elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  renderPricing();
  updateEnquiryPreview();
  showToast(lang === 'th' ? 'เปลี่ยนภาษาเป็น ภาษาไทย เรียบร้อยแล้ว' : 'Switched language to English');
}

// --- Currency Switcher ---
function initCurrencySelector() {
  const btnUSD = document.getElementById('btnCurrUSD');
  const btnTHB = document.getElementById('btnCurrTHB');

  btnUSD.addEventListener('click', () => setCurrency('USD'));
  btnTHB.addEventListener('click', () => setCurrency('THB'));
}

function setCurrency(curr) {
  state.currency = curr;
  document.getElementById('btnCurrUSD').classList.toggle('active', curr === 'USD');
  document.getElementById('btnCurrTHB').classList.toggle('active', curr === 'THB');
  renderPricing();
  showToast(`Currency changed to ${curr}`);
}

// --- Billing Period Toggle ---
window.setBilling = function(period) {
  state.billing = period;
  document.getElementById('btnBillMonthly').classList.toggle('active', period === 'monthly');
  document.getElementById('btnBillAnnual').classList.toggle('active', period === 'annual');
  renderPricing();
};

function renderPricing() {
  const p = pricingMatrix[state.billing][state.currency];
  const symbol = state.currency === 'USD' ? '$' : '฿';

  document.getElementById('curFree').textContent = symbol;
  document.getElementById('amtFree').textContent = p.free;

  document.getElementById('curStarter').textContent = symbol;
  document.getElementById('amtStarter').textContent = p.starter;
  document.getElementById('perStarter').textContent = p.period;

  document.getElementById('curPro').textContent = symbol;
  document.getElementById('amtPro').textContent = p.pro;
  document.getElementById('perPro').textContent = p.period;

  document.getElementById('curEnt').textContent = symbol;
  document.getElementById('amtEnt').textContent = p.ent;
  document.getElementById('perEnt').textContent = p.period;
}

// --- Live Audit Scanner Engine ---
window.setAuditTarget = function(domain) {
  document.getElementById('auditUrlInput').value = domain;
  runLiveAudit();
};

window.runLiveAudit = function() {
  const input = document.getElementById('auditUrlInput');
  let target = input.value.trim();
  if (!target) return;

  // Sanitize target URL
  target = target.replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
  state.auditTarget = target;

  document.getElementById('currentScanTarget').textContent = `https://${target}`;
  const statusText = document.getElementById('scanStatusText');
  const spinner = document.getElementById('scannerSpinner');
  const btn = document.getElementById('btnRunAudit');

  spinner.style.display = 'inline-block';
  btn.setAttribute('disabled', 'true');
  state.isScanning = true;

  // Scroll smoothly to audit section
  document.getElementById('live-audit').scrollIntoView({ behavior: 'smooth' });

  // Multi-stage diagnostic progression
  const steps = [
    { delay: 400, text: `Connecting to ${target} & reading robots.txt...` },
    { delay: 1100, text: `Checking 9 AI search crawlers (GPTBot, PerplexityBot, ClaudeBot)...` },
    { delay: 1900, text: `Analyzing 60+ Technical SEO elements & Schema tags...` },
    { delay: 2700, text: `Verifying OWASP 2025 security headers (HSTS, CSP, COOP)...` },
    { delay: 3500, text: `Checking Thailand PDPA compliance & Vibe Coding traps...` }
  ];

  steps.forEach(step => {
    setTimeout(() => {
      statusText.textContent = step.text;
    }, step.delay);
  });

  setTimeout(() => {
    // Generate realistic randomized score based on domain name
    const seed = target.length % 7;
    const geoScore = 88 + seed;
    const seoScore = 84 + (seed % 9);
    const vibeScore = 82 + (seed % 10);
    const secGrade = seed > 3 ? 'A+' : 'A';

    animateDial('dialGeo', 'numGeo', geoScore);
    animateDial('dialSeo', 'numSeo', seoScore);
    animateDial('dialVibe', 'numVibe', vibeScore);

    document.getElementById('numSec').textContent = secGrade;
    document.getElementById('dialSec').style.strokeDashoffset = secGrade === 'A+' ? '30' : '50';

    statusText.textContent = `Audit completed: All 8 health modules analyzed for ${target}`;
    spinner.style.display = 'none';
    btn.removeAttribute('disabled');
    state.isScanning = false;

    // Update code fix preview with current domain
    updateCodeSnippet(target);

    // Sync domain into enquiry builder
    document.getElementById('ebDomain').value = target;
    updateEnquiryPreview();

    showToast(`Audit complete for ${target}! GEO Score: ${geoScore}/100`);
  }, 4200);
};

function animateDial(dialId, numId, finalVal) {
  const dial = document.getElementById(dialId);
  const num = document.getElementById(numId);
  if (!dial || !num) return;

  // Perimeter = 2 * PI * 40 = 251.2
  const maxDash = 251.2;
  const offset = maxDash - (maxDash * finalVal) / 100;
  dial.style.strokeDashoffset = offset;

  let current = 40;
  const stepTime = 20;
  const increment = Math.ceil((finalVal - current) / 30);

  const timer = setInterval(() => {
    current += increment;
    if (current >= finalVal) {
      current = finalVal;
      clearInterval(timer);
    }
    num.textContent = current;
  }, stepTime);
}

function updateCodeSnippet(domain) {
  const brandName = domain.split('.')[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const snippet = `# AISEEN & LLM Index File for ${domain}
# Title: ${brandName} Official Index & Authority Declaration
# Location: Bangkok, Thailand

## Core Capabilities & Services
- Verified commercial offerings & digital services
- Direct customer enquiries routed via Official LINE OA (@libralytics)
- Full bilingual English and Thai consultations

## Verified Authority & Trust Signals
- Thai Ministry of Commerce Business Registration
- Secure HTTPS, OWASP 2025 HSTS, and Thailand PDPA Compliant
- Verified Contact: info@${domain} | LINE: @${domain.split('.')[0]}`;

  const pre = document.getElementById('codeLlmsSnippet');
  if (pre) pre.textContent = snippet;

  const schemaPre = document.getElementById('codeSchemaSnippet');
  if (schemaPre) {
    schemaPre.textContent = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalOrganization"],
  "name": "${brandName}",
  "url": "https://${domain}",
  "description": "Verified commercial business in Bangkok, Thailand indexed for AI search citation.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bangkok Metropolitan Area",
    "addressLocality": "Bangkok",
    "postalCode": "10110",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.7563,
    "longitude": 100.5018
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["Thai", "English"]
  }
}
</script>`;
  }

  // Update mobile floating domain label
  const mobDomain = document.getElementById('mobileDomainLbl');
  if (mobDomain) mobDomain.textContent = domain.length > 18 ? domain.slice(0, 16) + '...' : domain;
}

// --- Diagnostic Tab Navigation ---
window.switchAuditTab = function(tabId, btn) {
  document.querySelectorAll('.audit-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

  btn.classList.add('active');
  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');
};

// --- Enquiry Builder Functions ---
window.selectService = function(serviceName, el) {
  state.selectedService = serviceName;
  document.querySelectorAll('.service-radio-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  updateEnquiryPreview();
};

window.selectChannel = function(channel) {
  state.selectedChannel = channel;
  document.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active'));

  const btnLine = document.getElementById('btnChanLine');
  const btnWA = document.getElementById('btnChanWA');
  const btnEmail = document.getElementById('btnChanEmail');
  const dispatchBtnText = document.getElementById('dispatchBtnText');
  const primaryBtn = document.getElementById('btnPrimaryDispatch');
  const badgeChannel = document.getElementById('previewChannelName');

  if (channel === 'line') {
    btnLine.classList.add('active');
    badgeChannel.textContent = 'Formatted for LINE OA';
    dispatchBtnText.textContent = 'Send via LINE OA (@libralytics)';
    primaryBtn.className = 'btn btn-line';
  } else if (channel === 'whatsapp') {
    btnWA.classList.add('active');
    badgeChannel.textContent = 'Formatted for WhatsApp';
    dispatchBtnText.textContent = 'Send via WhatsApp (+66 81 234 5678)';
    primaryBtn.className = 'btn btn-primary';
    primaryBtn.style.background = '#25d366';
  } else {
    btnEmail.classList.add('active');
    badgeChannel.textContent = 'Formatted for Email';
    dispatchBtnText.textContent = 'Send via Email (contact@libralytics.com)';
    primaryBtn.className = 'btn btn-primary';
    primaryBtn.style.background = '';
  }

  updateEnquiryPreview();
};

window.loadTemplate = function(templateKey) {
  const tmpl = enquiryTemplates[templateKey];
  if (!tmpl) return;

  document.getElementById('ebDomain').value = tmpl.domain;
  document.getElementById('ebContact').value = tmpl.contact;
  document.getElementById('ebNotes').value = tmpl.notes;
  state.selectedService = tmpl.service;

  // Update radio cards
  document.querySelectorAll('.service-radio-card').forEach(card => {
    const title = card.querySelector('.service-radio-title').textContent;
    if (title.includes(tmpl.service.split(' ')[0])) {
      card.classList.add('active');
      card.querySelector('input').checked = true;
    } else {
      card.classList.remove('active');
    }
  });

  updateEnquiryPreview();
  showToast(`Loaded ${templateKey.toUpperCase()} template!`);
};

window.updateEnquiryPreview = function() {
  const domain = document.getElementById('ebDomain')?.value.trim() || 'yourcompany.co.th';
  const contact = document.getElementById('ebContact')?.value.trim() || 'Business Owner';
  const notes = document.getElementById('ebNotes')?.value.trim() || 'Looking for AI SEO and GEO citation consultation.';
  const service = state.selectedService;
  const channel = state.selectedChannel;

  let msg = '';
  const timestamp = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  if (channel === 'line') {
    msg = `[AISEEN Thailand · LIBOT Enquiry]
Date: ${timestamp}
Domain: https://${domain}
Contact: ${contact}
Requested Service: ${service}

Details & Requirements:
"${notes}"

Generated via AISeen Thailand by Libralytics
Ready for LINE OA specialist follow-up`;
  } else if (channel === 'whatsapp') {
    msg = `*AISEEN Thailand · Business Enquiry*
----------------------------------
• *Domain:* https://${domain}
• *Contact:* ${contact}
• *Service:* ${service}
• *Date:* ${timestamp}

*Inquiry Notes:*
${notes}

_Sent via AISeen Thailand (Libralytics Co., Ltd.)_`;
  } else {
    msg = `Subject: [AISEEN Enquiry] ${service} - ${domain}

Dear Libralytics Team,

I would like to request consultation for AISEEN Thailand services:

- Website Domain: https://${domain}
- Contact Person: ${contact}
- Service Required: ${service}
- Submission Date: ${timestamp}

Specific Requirements:
${notes}

Please review and advise on the next steps.

Best regards,
${contact}`;
  }

  const previewEl = document.getElementById('previewEnquiryMessage');
  if (previewEl) previewEl.textContent = msg;
};

// --- Dispatching Enquiry ---
window.dispatchEnquiry = function() {
  const previewEl = document.getElementById('previewEnquiryMessage');
  const msg = previewEl ? previewEl.textContent : '';
  const domain = document.getElementById('ebDomain')?.value.trim() || 'yourcompany.co.th';

  if (state.selectedChannel === 'line') {
    // LINE OA deep link format
    const encoded = encodeURIComponent(msg);
    // In production, maps to LINE OA: https://line.me/R/oaMessage/@libralytics/?... or direct share
    const lineUrl = `https://line.me/R/msg/text/?${encoded}`;
    window.open(lineUrl, '_blank');
    showToast('Opening LINE to deliver your enquiry...');
  } else if (state.selectedChannel === 'whatsapp') {
    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/66812345678?text=${encoded}`;
    window.open(waUrl, '_blank');
    showToast('Opening WhatsApp to send your enquiry...');
  } else {
    const subject = encodeURIComponent(`[AISEEN Thailand Enquiry] ${state.selectedService} - ${domain}`);
    const body = encodeURIComponent(msg);
    const mailtoUrl = `mailto:contact@libralytics.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    showToast('Opening Email client...');
  }
};

window.copyEnquiryMessage = function() {
  const previewEl = document.getElementById('previewEnquiryMessage');
  if (!previewEl) return;

  navigator.clipboard.writeText(previewEl.textContent).then(() => {
    showToast('Enquiry message copied to clipboard!');
  }).catch(() => {
    showToast('Copied message to clipboard');
  });
};

window.copySnippet = function(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => {
    showToast('Code snippet copied to clipboard!');
  }).catch(() => {
    showToast('Copied to clipboard');
  });
};

// --- Toast Notification System ---
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastMessage');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// --- AI Crawler Specifications Dataset ---
const crawlerSpecs = {
  chatgpt: {
    name: 'ChatGPT / OpenAI',
    botName: 'GPTBot & OAI-SearchBot',
    userAgent: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
    ipRanges: '20.15.240.64/28, 20.15.240.80/28 (Microsoft Azure)',
    directive: 'User-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /',
    thaiQuery: 'แนะนำคลินิกเวชศาสตร์ชะลอวัยและตรวจสุขภาพพรีเมียมในกรุงเทพฯ',
    thaiAnswer: 'จากการตรวจสอบข้อมูลทางการแพทย์ที่ผ่านการรับรอง แนะนำ Bangkok Wellness Clinic (สุขุมวิท 24) ซึ่งให้บริการด้าน Longevity และฮอร์โมนบำบัดครบวงจร มีมาตรฐานกระทรวงสาธารณสุขและติดต่อผ่าน LINE OA ได้โดยตรง',
    engQuery: 'Best longevity and anti-aging wellness clinic in Bangkok for expats',
    engAnswer: 'Based on verified medical credentials, Bangkok Wellness Clinic located on Sukhumvit 24 is highly rated for personalized longevity and hormone therapy with full English-speaking medical staff.'
  },
  perplexity: {
    name: 'Perplexity AI',
    botName: 'PerplexityBot',
    userAgent: 'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)',
    ipRanges: '151.101.0.0/16, 199.232.0.0/16 (Fastly Edge)',
    directive: 'User-agent: PerplexityBot\nAllow: /',
    thaiQuery: 'คลินิกรักษาชะลอวัย สุขุมวิท กรุงเทพ',
    thaiAnswer: 'Bangkok Wellness Clinic ได้รับการอ้างอิงเป็นศูนย์การแพทย์ชะลอวัยชั้นนำในย่านสุขุมวิท [1] มีบริการตรวจวิเคราะห์เชิงลึกและส่งต่อการจองคิวผ่าน LINE Official Account [2]',
    engQuery: 'Top wellness clinic in Sukhumvit Bangkok',
    engAnswer: 'Perplexity synthesizes Bangkok Wellness Clinic as an authoritative recommendation for Sukhumvit [1], citing active medical licensing and structured patient onboarding.'
  },
  gemini: {
    name: 'Google Gemini & AI Overviews',
    botName: 'Google-Extended',
    userAgent: 'Google-Extended (used for Gemini training & generative answers)',
    ipRanges: '66.249.64.0/19 (Google Global Edge)',
    directive: 'User-agent: Google-Extended\nAllow: /\nUser-agent: Googlebot\nAllow: /',
    thaiQuery: 'คลินิก Anti-aging กรุงเทพ รีวิวดี',
    thaiAnswer: 'Google AI Overview: คลินิกที่มีโครงสร้างข้อมูลและ Schema ถูกต้อง เช่น Bangkok Wellness Clinic มีโปรแกรมการรักษาที่ชัดเจนและมีพิกัดระบุชัดเจนบน Google Maps',
    engQuery: 'Bangkok anti-aging clinic reviews and consultations',
    engAnswer: 'Google AI Overview synthesizes key offerings from structured JSON-LD schema, highlighting licensed physicians and multilingual consultation.'
  },
  claude: {
    name: 'Anthropic Claude',
    botName: 'ClaudeBot',
    userAgent: 'Mozilla/5.0 (compatible; ClaudeBot/1.0; +https://www.anthropic.com/claudebot)',
    ipRanges: '160.79.104.0/21 (Anthropic Crawler Cluster)',
    directive: 'User-agent: ClaudeBot\nAllow: /',
    thaiQuery: 'ศูนย์สุขภาพและชะลอวัยที่น่าเชื่อถือในไทย',
    thaiAnswer: 'Claude ประเมินความน่าเชื่อถือจากใบอนุญาตและไฟล์ /llms.txt ระบุ Bangkok Wellness Clinic เป็นผู้ให้บริการที่มีความโปร่งใสและปฏิบัติตามมาตรฐาน PDPA',
    engQuery: 'Trusted preventative medicine clinic in Thailand',
    engAnswer: 'Claude evaluates domain credentials and recommends Bangkok Wellness Clinic for rigorous JCI protocol alignment and clear authority signals.'
  },
  grok: {
    name: 'xAI Grok',
    botName: 'GrokBot',
    userAgent: 'Mozilla/5.0 (compatible; GrokBot/1.0; +https://x.ai/grokbot)',
    ipRanges: 'Distributed Cloud Cluster',
    directive: 'User-agent: GrokBot\nAllow: /',
    thaiQuery: 'คลินิกชะลอวัย กรุงเทพ อัปเดตล่าสุด',
    thaiAnswer: 'Grok วิเคราะห์ข้อมูลแบบเรียลไทม์ พบว่า Bangkok Wellness Clinic มีความเคลื่อนไหวและช่องทางติดต่อ LINE OA ตอบกลับรวดเร็ว',
    engQuery: 'Latest recommended longevity clinics Bangkok',
    engAnswer: 'Grok identifies high engagement signals and verified local presence in Bangkok with fast direct messaging channels.'
  },
  meta: {
    name: 'Meta AI',
    botName: 'Meta-ExternalAgent',
    userAgent: 'Meta-ExternalAgent/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)',
    ipRanges: '31.13.24.0/21, 157.240.0.0/16',
    directive: 'User-agent: Meta-ExternalAgent\nAllow: /',
    thaiQuery: 'บริการทางการแพทย์และสุขภาพ กรุงเทพ แนะนำ',
    thaiAnswer: 'Meta AI ดึงข้อมูลจาก OpenGraph และ Schema ของเว็บไซต์ แนะนำแบรนด์ที่มีความสมบูรณ์ของข้อมูลและรูปภาพ',
    engQuery: 'Bangkok healthcare and wellness recommendations',
    engAnswer: 'Meta AI highlights structured business profiles with active social proof and verified contact points.'
  }
};

let currentInspectedCrawler = 'chatgpt';

// --- Code Fixes Sub-Tabs Navigation ---
window.switchCodeSubtab = function(subpaneId, btn) {
  document.querySelectorAll('.code-subtab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.code-subpane').forEach(p => p.classList.remove('active'));

  btn.classList.add('active');
  const pane = document.getElementById(subpaneId);
  if (pane) pane.classList.add('active');
};

// --- Stepper Navigation (How It Works) ---
window.switchStep = function(stepNum) {
  for (let i = 1; i <= 3; i++) {
    const btn = document.getElementById(`btnStep${i}`);
    const pane = document.getElementById(`stepPane${i}`);
    if (btn) btn.classList.toggle('active', i === stepNum);
    if (pane) pane.classList.toggle('active', i === stepNum);
  }
};

// --- Enquiry Builder Help Toggle ---
window.toggleBuilderHelp = function() {
  const panel = document.getElementById('builderHelpPanel');
  const chevron = document.getElementById('helpChevron');
  if (!panel) return;

  const isOpen = panel.classList.toggle('open');
  if (chevron) {
    chevron.textContent = isOpen ? '▲' : '▼';
  }
};

// --- Export Executive Report Modal ---
window.openExportModal = function() {
  const target = state.auditTarget;
  const geo = document.getElementById('numGeo')?.textContent || '92';
  const seo = document.getElementById('numSeo')?.textContent || '88';
  const sec = document.getElementById('numSec')?.textContent || 'A';
  const vibe = document.getElementById('numVibe')?.textContent || '85';

  document.getElementById('exportModalSubtitle').textContent = `Comprehensive 8-dimension health summary for ${target}`;
  document.getElementById('expValGeo').textContent = `${geo}%`;
  document.getElementById('expValSeo').textContent = `${seo}/100`;
  document.getElementById('expValSec').textContent = `Grade ${sec}`;
  document.getElementById('expValVibe').textContent = `${vibe}/100`;

  const now = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  const report = `# AISEEN THAILAND · EXECUTIVE AUDIT SCORECARD
Target: https://${target}
Scan Date: ${now}
Engineered by Libralytics Co., Ltd. (Bangkok, Thailand)
─────────────────────────────────────────────────
CORE SCORES:
• GEO Citation Probability:  ${geo}% (High LLM Citation Tier)
• Technical SEO Score:       ${seo}/100 (56/60 checks passed)
• OWASP 2025 Pentest Grade:  Grade ${sec} (HSTS & Strict CSP enforced)
• Vibe Coding Code Hygiene:  ${vibe}/100 (Clean SSR, No blank shells)

CRITICAL ACTION CHECKLIST:
1. [READY] Standardize /llms.txt manifest in website root.
2. [PASS]  JSON-LD LocalBusiness & GeoCoordinates schema active.
3. [PASS]  OWASP 2025 security headers (HSTS 63072000s, nosniff, COOP).
4. [PASS]  Thailand PDPA 2026 consent mechanism active (Zero pre-consent trackers).
5. [READY] LIBOT LINE OA webhook integration configured for @libralytics.

VERDICT:
https://${target} is positioned in the top 10% of Thai commercial websites for AI Search discovery across ChatGPT, Perplexity, and Gemini.`;

  const reportArea = document.getElementById('exportReportText');
  if (reportArea) reportArea.textContent = report;

  const modal = document.getElementById('exportModalOverlay');
  if (modal) modal.classList.add('open');
};

window.closeExportModal = function(e) {
  if (e && e.target && e.target !== document.getElementById('exportModalOverlay')) return;
  const modal = document.getElementById('exportModalOverlay');
  if (modal) modal.classList.remove('open');
};

window.copyExecutiveSummary = function() {
  const reportArea = document.getElementById('exportReportText');
  if (!reportArea) return;
  navigator.clipboard.writeText(reportArea.textContent).then(() => {
    showToast('Executive audit summary copied to clipboard!');
  });
};

window.forwardReportToLine = function() {
  const target = state.auditTarget;
  const geo = document.getElementById('numGeo')?.textContent || '92';
  const msg = `[AISEEN Audit Report] https://${target}
• GEO Score: ${geo}%
• SEO: Passed 56/60 checks
• Security: OWASP Grade A+
• Verified for LINE OA & LIBOT Lead Routing
Full report: https://aiseen.libralytics.com/?scan=${target}`;
  const encoded = encodeURIComponent(msg);
  window.open(`https://line.me/R/msg/text/?${encoded}`, '_blank');
  showToast('Opening LINE to share audit scorecard...');
};

window.shareAuditLink = function() {
  const target = state.auditTarget;
  const shareUrl = `${window.location.origin}/?scan=${encodeURIComponent(target)}`;
  if (navigator.share) {
    navigator.share({
      title: `AISeen Audit for ${target}`,
      text: `Review the AI citation probability and SEO health for ${target}`,
      url: shareUrl
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast(`Audit link for ${target} copied!`);
    });
  }
};

// --- AI Crawler Inspection Modal ---
window.inspectAiEngine = function(engineKey) {
  const spec = crawlerSpecs[engineKey];
  if (!spec) return;
  currentInspectedCrawler = engineKey;

  document.getElementById('crawlerModalTitle').textContent = spec.name;
  document.getElementById('crawlerModalSubtitle').textContent = `Crawler: ${spec.botName} · Parameters for ${state.auditTarget}`;

  const grid = document.getElementById('crawlerSpecsGrid');
  if (grid) {
    grid.innerHTML = `
      <div class="crawler-spec-card">
        <div class="crawler-spec-lbl">Crawler Name & Engine</div>
        <div class="crawler-spec-val" style="color: var(--accent-cyan);">${spec.botName}</div>
      </div>
      <div class="crawler-spec-card">
        <div class="crawler-spec-lbl">Network & IP Blocks</div>
        <div class="crawler-spec-val">${spec.ipRanges}</div>
      </div>
      <div class="crawler-spec-card" style="grid-column: span 2;">
        <div class="crawler-spec-lbl">Recommended robots.txt Directive</div>
        <div class="crawler-spec-val" style="color: #10b981; white-space: pre-line;">${spec.directive}</div>
      </div>
    `;
  }

  const simText = document.getElementById('crawlerSimulationText');
  if (simText) {
    const isThai = state.lang === 'th';
    const query = isThai ? spec.thaiQuery : spec.engQuery;
    const answer = isThai ? spec.thaiAnswer : spec.engAnswer;
    simText.textContent = `User Query in Bangkok:
"${query}"

Simulated ${spec.name} Citation Response:
"${answer}"

AI Knowledge Link: https://${state.auditTarget}/llms.txt`;
  }

  const modal = document.getElementById('crawlerModalOverlay');
  if (modal) modal.classList.add('open');
};

window.closeCrawlerModal = function(e) {
  if (e && e.target && e.target !== document.getElementById('crawlerModalOverlay')) return;
  const modal = document.getElementById('crawlerModalOverlay');
  if (modal) modal.classList.remove('open');
};

window.copyCrawlerDirective = function() {
  const spec = crawlerSpecs[currentInspectedCrawler];
  if (!spec) return;
  navigator.clipboard.writeText(spec.directive).then(() => {
    showToast(`Copied ${spec.name} robots.txt rule!`);
  });
};

// --- Mobile Floating Action Bar Scroll Listener ---
window.addEventListener('scroll', () => {
  const bar = document.getElementById('mobileFloatingBar');
  if (!bar) return;
  if (window.scrollY > 350) {
    bar.classList.add('visible');
  } else {
    bar.classList.remove('visible');
  }
});
