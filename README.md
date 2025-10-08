# 🌟 الأكاديمية السعودية | دورة STEP الشاملة الحديثة

> منصة تعليمية رقمية 🇸🇦 تقدم تجربة متكاملة للاستعداد لاختبار STEP وفق معايير هيئة تقويم التعليم والتدريب.

## 🎯 الهدف من المشروع
توفير بديل وطني ميسّر للطلاب والطالبات يجمع بين:
- جودة المحتوى الأكاديمي.  
- سهولة الوصول والتفاعل.  
- دعم مباشر وإعلانات قانونية منظمة.  

## ⚙️ التقنيات المستخدمة
- **HTML5 / CSS3 / JS (Vanilla + GSAP Animations)**  
- **Bootstrap 5 / TailwindCSS**  
- **Responsive Design + Arabic UI RTL**  
- **Dynamic Animations & Interactive Elements**

## 📦 أقسام الموقع
| القسم | الوصف |
|-------|--------|
| 🏠 الصفحة الرئيسية | مقدمة عن الدورة ومحتواها. |
| 💵 صفحة التسجيل | نموذج التسجيل وخيارات الدفع. |
| 📊 لوحة المعلنين | نموذج التعاون الإعلاني الرسمي. |
| 📈 قسم الإحصائيات | يعرض عدد المشتركين والمعلنين بشكل حي. |
| 💬 التواصل | روابط الدعم الفني والمشرفين. |

## 🔗 روابط أساسية
- 🌐 [الموقع الرسمي للدورة](https://studentservices241445-rgb.github.io/Hilm-STEP-Academy/)
- 🤝 [صفحة التعاون الإعلاني](https://studentservices241445-rgb.github.io/Hilm-STEP-Academy/ads.html)
- 📺 [القناة الرسمية على تيليجرام](https://t.me/STEP_Academy100)

## 💡 الرؤية المستقبلية
نطمح لتوسيع المنصة لتشمل اختبارات أخرى مثل **IELTS / قدرات / تحصيلي** ضمن مشروع 🇸🇦 وطني واحد.

---

> © 2025 الأكاديمية السعودية | STEP الشاملة الحديثة  
> جميع الحقوق محفوظة – تطوير فريق 🇸🇦 مبادرة الطلاب التعليمية  
> "اللهم احفظ وطننا وولاة أمرنا واجعل هذا العمل نافعاً للطلاب والطالبات."
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>دورة STEP الشاملة الحديثة — طلب اشتراك</title>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --bg-1:#0e3d2b;           /* أخضر داكن */
    --bg-2:#0b2b20;           /* أخضر أغمق */
    --brand:#22c55e;          /* أخضر حديث */
    --brand-2:#16a34a;
    --gold:#f6c453;           /* ذهبي */
    --text:#f8fafc;           /* أبيض مزرق */
    --muted:#9fb3a6;
    --card:#0f2f24cc;         /* نصف شفافية */
    --glass:rgba(255,255,255,.06);
    --shadow:0 12px 40px rgba(0,0,0,.35);
  }

  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0;
    font-family:'Tajawal',system-ui,Segoe UI,Roboto,Arial;
    color:var(--text);
    overflow-x:hidden;
    background: radial-gradient(1200px 700px at 10% -10%, #15664d 0%, transparent 60%),
               radial-gradient(900px 600px at 110% 20%, #1a7f5f 0%, transparent 58%),
               radial-gradient(800px 500px at -10% 120%, #134e3b 0%, transparent 55%),
               linear-gradient(160deg, var(--bg-1), var(--bg-2));
    animation:bgMove 18s ease-in-out infinite alternate;
  }
  @keyframes bgMove{
    0%{background-position:0 0, 100% 0, 0 100%, 0 0}
    100%{background-position:10% -5%, 92% 6%, -6% 108%, 0 0}
  }

  /* علامة مائية متداخلة مع الخلفية */
  .watermark{
    position:fixed; inset:0; pointer-events:none; opacity:.07; mix-blend-mode:overlay;
    background-image:
      repeating-linear-gradient( 30deg,
        transparent 0 140px,
        rgba(255,255,255,.08) 140px 180px),
      repeating-linear-gradient( -30deg,
        transparent 0 140px,
        rgba(255,255,255,.08) 140px 180px);
  }
  .watermark::after{
    content:"STEP الشاملة الحديثة • STEP الشاملة الحديثة • ";
    position:absolute; inset:0; text-align:center; line-height:240vh;
    font-weight:800; font-size:8rem; letter-spacing:3px; color:#fff; opacity:.03;
    white-space:nowrap; transform:rotate(-12deg);
  }

  header{
    position:sticky; top:0; z-index:30;
    backdrop-filter:saturate(1.2) blur(8px);
    background:linear-gradient(180deg, rgba(15,48,36,.85), rgba(15,48,36,.35));
    border-bottom:1px solid rgba(255,255,255,.06);
  }
  .nav{
    max-width:1100px; margin:auto; padding:14px 18px; display:flex; gap:14px; align-items:center; justify-content:space-between;
  }
  .logo{display:flex; gap:10px; align-items:center;}
  .logo-badge{
    width:46px;height:46px;border-radius:14px; display:grid; place-items:center;
    background:linear-gradient(135deg, #1fa766, #0a6b48);
    box-shadow:0 10px 24px rgba(0,0,0,.35), inset 0 0 0 2px rgba(255,255,255,.06);
    font-weight:800; font-size:18px;
  }
  .logo h1{margin:0;font-size:18px;letter-spacing:.4px}
  .price-chip{
    display:inline-flex; align-items:center; gap:8px; font-weight:800;
    background:linear-gradient(135deg, #fef3c7, #fde68a);
    color:#0d1b13; padding:8px 12px; border-radius:999px; box-shadow:var(--shadow);
  }
  .price-chip small{opacity:.8; font-weight:700}

  .wrap{max-width:1100px; margin:24px auto; padding:0 16px}
  .hero{
    display:grid; gap:16px; grid-template-columns:1.1fr .9fr; align-items:stretch;
  }
  @media(max-width:980px){ .hero{grid-template-columns:1fr} }

  .card{
    background:linear-gradient(180deg, var(--card), rgba(15,48,36,.45));
    border:1px solid rgba(255,255,255,.08);
    border-radius:22px; box-shadow:var(--shadow);
  }
  .card .pad{padding:22px}

  .title{
    font-size:32px; margin:0 0 8px; font-weight:800;
  }
  .subtitle{margin:0 0 16px; color:var(--muted); font-weight:500}
  .features{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px}
  @media(max-width:620px){ .features{grid-template-columns:1fr} }
  .feature{
    background:var(--glass); border:1px solid rgba(255,255,255,.06);
    padding:14px 16px; border-radius:16px; display:flex; gap:10px; align-items:flex-start;
  }
  .feature b{color:#eafff2}
  .cta{display:flex; gap:12px; flex-wrap:wrap; margin-top:14px}
  .btn{
    appearance:none; border:none; cursor:pointer; font-family:inherit;
    padding:12px 16px; border-radius:14px; font-weight:800; letter-spacing:.3px;
    background:linear-gradient(135deg, var(--brand), var(--brand-2));
    color:#07150f; box-shadow:0 10px 20px rgba(18,116,76,.45);
    transition:.18s transform ease, .18s filter ease;
  }
  .btn:hover{transform:translateY(-2px) scale(1.01)}
  .btn.ghost{
    background:transparent; color:var(--text);
    border:1px solid rgba(255,255,255,.14);
    box-shadow:none;
  }

  /* نموذج الاشتراك */
  form .grid{display:grid; gap:14px; grid-template-columns:repeat(2,minmax(0,1fr))}
  @media(max-width:640px){ form .grid{grid-template-columns:1fr} }
  label{display:block; font-weight:700; margin-bottom:6px}
  input[type="text"], input[type="email"], input[type="tel"], select, .pill-box{
    width:100%; padding:12px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.12);
    background:rgba(255,255,255,.04); color:var(--text); outline:0;
  }
  .hint{color:var(--muted); font-size:14px; margin-top:4px}

  /* حبوب اختيار الدرجة */
  .pills{display:flex; flex-wrap:wrap; gap:8px}
  .pill{
    padding:10px 14px; border:1px solid rgba(255,255,255,.12);
    border-radius:999px; cursor:pointer; user-select:none;
    background:rgba(255,255,255,.03); font-weight:700;
  }
  .pill.active{background:linear-gradient(135deg,#fef3c7,#fde68a); color:#0f241a; border-color:#fcd34d}

  /* إشعارات منبثقة */
  .toast{
    position:fixed; left:18px; bottom:18px; z-index:50; display:flex; flex-direction:column; gap:10px; max-width:92vw;
  }
  .bubble{
    display:flex; gap:10px; align-items:center; background:#07251b; color:#dff7ec;
    border:1px solid rgba(255,255,255,.08); padding:10px 12px; border-radius:12px;
    box-shadow:var(--shadow); transform:translateX(-12px); opacity:0; animation:pop .35s ease forwards;
  }
  @keyframes pop{to{transform:translateX(0); opacity:1}}
  .bubble b{color:#a7f3d0}

  footer{margin:32px 0; color:#a8b8b1; text-align:center; font-size:14px}
  footer .sep{opacity:.25; padding:0 6px}
</style>
</head>
<body>

<div class="watermark"></div>

<header>
  <div class="nav">
    <div class="logo">
      <div class="logo-badge">STEP</div>
      <h1>الدورة الشاملة الحديثة</h1>
    </div>
    <div class="price-chip">
      <span>السعر</span><b>149 ر.س</b><small>شامل الضريبة</small>
    </div>
  </div>
</header>

<div class="wrap">
  <section class="hero">
    <!-- تعريف + مميزات -->
    <div class="card">
      <div class="pad">
        <h2 class="title">جاهز تختصر الطريق؟</h2>
        <p class="subtitle">محتوى مركّز + نماذج متكررة + خطة مذاكرة واضحة — كل شيء في صفحة واحدة.</p>

        <div class="features">
          <div class="feature"><b>محتوى قوي:</b> شروحات مركّزة ونماذج مُحدّثة بحسب نمط الاختبار.</div>
          <div class="feature"><b>تحديثات مستمرة:</b> تحصل على التحديثات أولاً بأول مدى الحياة.</div>
          <div class="feature"><b>خطط مذاكرة:</b> مسارات سريعة أو مكثفة بحسب وقتك ومستواك.</div>
          <div class="feature"><b>دعم ذكي:</b> توجيه سريع + إجابات لأبرز الأسئلة المتكررة.</div>
        </div>

        <div class="cta">
          <a class="btn" href="#enroll">قدّم طلب الاشتراك</a>
          <a class="btn ghost" href="index.html">الصفحة الرئيسية</a>
        </div>
      </div>
    </div>

    <!-- نموذج الاشتراك -->
    <div id="enroll" class="card">
      <div class="pad">
        <h3 class="title" style="font-size:26px;margin-bottom:8px;">طلب اشتراك — خطوة أخيرة</h3>
        <p class="subtitle" style="margin-bottom:18px;">عبّ البيانات التالية، وبضغطة واحدة بنرسلها تلقائياً للمنسق في تيليجرام.</p>

        <form id="form">
          <div class="grid">
            <div>
              <label for="name">الاسم الكامل</label>
              <input id="name" type="text" placeholder="مثال: نورة عبدالله" required>
            </div>
            <div>
              <label for="level">مستواك الحالي</label>
              <select id="level" required>
                <option value="" disabled selected>اختر مستوى تقريبي</option>
                <option>مبتدئ</option>
                <option>متوسط</option>
                <option>متقدم</option>
              </select>
            </div>
          </div>

          <div class="grid">
            <div>
              <label>سبب الاختبار</label>
              <select id="reason" required>
                <option value="" disabled selected>— اختر السبب —</option>
                <option>تقديم جامعة</option>
                <option>وظيفة/ترقية</option>
                <option>ابتعاث</option>
                <option>تحسين مستوى</option>
                <option>أخرى</option>
              </select>
            </div>
            <div>
              <label>الدرجة المستهدفة</label>
              <div id="targetBox" class="pills">
                <span class="pill">50+</span>
                <span class="pill">60+</span>
                <span class="pill">70+</span>
                <span class="pill">80+</span>
                <span class="pill">90+</span>
              </div>
              <div class="hint">اختر هدفك، ونبني لك خطة مناسبة.</div>
            </div>
          </div>

          <div class="grid">
            <div>
              <label>موعد الاختبار (شهر/سنة)</label>
              <div class="grid" style="grid-template-columns:1fr 1fr; gap:10px;">
                <select id="month" required>
                  <option value="" disabled selected>الشهر</option>
                </select>
                <select id="year" required>
                  <option value="" disabled selected>السنة</option>
                </select>
              </div>
            </div>
            <div>
              <label>طريقة الدفع المفضلة</label>
              <select id="pay" required>
                <option value="" disabled selected>— اختر طريقة الدفع —</option>
                <option>تحويل بنكي</option>
                <option>STC Pay</option>
                <option>نجوم تيليجرام</option>
                <option>عملات رقمية (TON/USDT)</option>
              </select>
              <div class="hint">لا تقلق، تفاصيل التحويل تُرسل لك بعد التأكيد.</div>
            </div>
          </div>

          <div class="grid">
            <div>
              <label>وسيلة التواصل</label>
              <select id="contactType" required>
                <option value="" disabled selected>— اختر وسيلة التواصل —</option>
                <option value="WhatsApp">واتساب</option>
                <option value="Telegram">تيليجرام</option>
                <option value="Email">البريد الإلكتروني</option>
              </select>
            </div>
            <div>
              <label id="contactLabel">المعرف / الرقم</label>
              <input id="contactValue" type="text" placeholder="مثال: ‎@YourUser أو 05xxxxxxxx أو email@example.com" required>
            </div>
          </div>

          <div style="margin-top:6px">
            <label>ملاحظات إضافية (اختياري)</label>
            <input id="notes" type="text" placeholder="أي تفاصيل نحتاج نعرفها قبل تجهيز اشتراكك؟">
          </div>

          <div class="cta" style="margin-top:16px">
            <button type="submit" class="btn">إرسال الطلب الآن</button>
            <button type="button" class="btn ghost" id="previewBtn">معاينة الرسالة</button>
          </div>

          <p class="hint" style="margin-top:10px">
            بالضغط على “إرسال الطلب” سيتم فتح تيليجرام برسالة جاهزة للمنسّق تتضمن بياناتك. لا يتم سحب أي معلومات تلقائياً من جهازك.
          </p>
        </form>
      </div>
    </div>
  </section>

  <section class="card" style="margin-top:18px">
    <div class="pad">
      <h3 class="title" style="font-size:24px;margin-bottom:8px;">ليه هذه الدورة؟</h3>
      <p class="subtitle">لأنها تتعامل مع الاختبار كـ “نمط” متكرر: تركز على الزبدة، وتقلّص الوقت، وتخليك تذاكر وأنت واثق.</p>
      <div class="features">
        <div class="feature"><b>تنظيم صارم:</b> فهرسة ذكية + تتبع تقدم.</div>
        <div class="feature"><b>قابل للتكيّف:</b> خطط 3/7/14 يوم + خطة شهرية.</div>
        <div class="feature"><b>شامل:</b> شروحات، ملفات، نماذج مكررة، أسئلة سريعة.</div>
        <div class="feature"><b>قانوني وآمن:</b> اشتراك موحّد 149 ر.س (شامل الضريبة) مع تحديثات مدى الحياة.</div>
      </div>
    </div>
  </section>

  <footer>
    © 2025 دورة STEP الشاملة الحديثة<span class="sep">•</span>نسخة تجريبية للواجهة — للاستخدام التعريفي
  </footer>
</div>

<!-- إشعارات منبثقة -->
<div class="toast" id="toasts"></div>

<script>
/* ===================== إعدادات سريعة قابلة للتعديل ===================== */
const COORDINATOR = "Hilm_STEP1"; // ← عدّل اسم حساب المنسّق على تيليجرام
const PRICE_TEXT  = "149 ر.س (شامل الضريبة)";

const DUMMY_NOTIFS = [
  "انضمَّ <b>عبدالرحمن القحطاني</b> قبل قليل",
  "تم تأكيد اشتراك <b>نورة العتيبي</b>",
  "سجّل <b>مشعل العبدالله</b> — خطة 7 أيام",
  "طلب اشتراك جديد من <b>ليان الحربي</b>",
  "ترقية خطة <b>سارة القحطاني</b> إلى 90+"
];

/* ===================== مساعدات واجهة ===================== */
const monthSel = document.getElementById('month');
const yearSel  = document.getElementById('year');
const now = new Date();
const months = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];

// تعبئة الأشهر (الشهر الحالي + 11)
for(let i=0;i<12;i++){
  const idx = (now.getMonth()+i)%12;
  const opt = document.createElement('option');
  opt.value = months[idx];
  opt.textContent = months[idx];
  monthSel.appendChild(opt);
}
// تعبئة السنوات (الحالي + 1)
for(let y=0; y<2; y++){
  const yr = now.getFullYear()+y;
  const opt = document.createElement('option');
  opt.value = yr; opt.textContent = yr;
  yearSel.appendChild(opt);
}

// حبوب الدرجة
const pills = Array.from(document.querySelectorAll('.pill'));
let selectedTarget = "";
pills.forEach(p=>{
  p.addEventListener('click', ()=>{
    pills.forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    selectedTarget = p.textContent.trim();
  });
});

// تحديث تسمية حقل التواصل
const contactType = document.getElementById('contactType');
const contactLabel= document.getElementById('contactLabel');
contactType.addEventListener('change', ()=>{
  const v = contactType.value;
  if(v==="WhatsApp") contactLabel.textContent = "رقم الواتساب";
  else if(v==="Telegram") contactLabel.textContent = "معرف تيليجرام";
  else contactLabel.textContent = "البريد الإلكتروني";
});

/* ===================== بناء الرسالة ===================== */
function buildMessage(preview=false){
  const name  = document.getElementById('name').value.trim();
  const level = document.getElementById('level').value;
  const reason= document.getElementById('reason').value;
  const month = document.getElementById('month').value;
  const year  = document.getElementById('year').value;
  const pay   = document.getElementById('pay').value;
  const cType = document.getElementById('contactType').value;
  const cVal  = document.getElementById('contactValue').value.trim();
  const notes = document.getElementById('notes').value.trim();

  if(!name || !level || !reason || !month || !year || !pay || !cType || !cVal || !selectedTarget){
    if(!preview) alert("فضلاً أكمل جميع الحقول واختر الدرجة المستهدفة.");
    return null;
  }

  const lines = [
    "اشتراك STEP — الدورة الشاملة الحديثة",
    "———————————————",
    `الاسم: ${name}`,
    `المستوى: ${level}`,
    `السبب: ${reason}`,
    `الدرجة المستهدفة: ${selectedTarget}`,
    `موعد الاختبار: ${month} ${year}`,
    `طريقة الدفع: ${pay}`,
    `وسيلة التواصل: ${cType} — ${cVal}`,
    notes? `ملاحظات: ${notes}` : "",
    "———————————————",
    `أقرّ برغبتي بالاشتراك بالسعر: ${PRICE_TEXT}`,
  ].filter(Boolean);

  return lines.join("\n");
}

/* ===================== إرسال إلى تيليجرام ===================== */
document.getElementById('form').addEventListener('submit', (e)=>{
  e.preventDefault();
  const msg = buildMessage(false);
  if(!msg) return;

  const url = `https://t.me/${COORDINATOR}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  confetti();
});

document.getElementById('previewBtn').addEventListener('click', ()=>{
  const msg = buildMessage(true);
  if(!msg) return;
  alert(msg);
});

/* ===================== إشعارات منبثقة عشوائية ===================== */
const toasts = document.getElementById('toasts');
function pushToast(){
  const el = document.createElement('div');
  el.className = 'bubble';
  el.innerHTML = `${DUMMY_NOTIFS[Math.floor(Math.random()*DUMMY_NOTIFS.length)]} • <small>قبل ثوانٍ</small>`;
  toasts.appendChild(el);
  setTimeout(()=>{ el.style.opacity=.0; el.style.transform="translateX(-12px)"; }, 4500);
  setTimeout(()=>{ el.remove(); }, 5200);
}
setInterval(pushToast, 7000);
setTimeout(pushToast, 1400);

/* ===================== مؤثر بسيط عند الإرسال ===================== */
function confetti(){
  const n=24;
  for(let i=0;i<n;i++){
    const s = document.createElement('span');
    const size = 6 + Math.random()*8;
    s.style.cssText = `
      position:fixed; z-index:60; left:${20+Math.random()*60}vw; top:10vh;
      width:${size}px; height:${size}px; border-radius:50%;
      background:${i%3? '#fcd34d' : '#34d399'};
      transform:translateY(-20px); opacity:0; pointer-events:none;
      transition:.8s ease;
    `;
    document.body.appendChild(s);
    requestAnimationFrame(()=>{
      s.style.transform = `translateY(${70+Math.random()*20}vh)`;
      s.style.opacity = 1;
    });
    setTimeout(()=>s.remove(), 900);
  }
}
</script>
</body>
</html>
