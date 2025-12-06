// بيانات الأسعار والخصومات
const packagePrices = {
    basic: 300,
    premium: 450,
    vip: 600,
};

const courseNames = {
    step: 'دورة STEP الشاملة',
    qdrat: 'دورة القدرات العامة',
    tahsili: 'دورة التحصيلي',
    maaref: 'دورة القدرة المعرفية',
    license: 'دورة الرخصة المهنية',
};

const paymentNames = {
    bank: 'تحويل بنكي',
    stars: 'نجوم تيليجرام (خصم 5٪)',
};

const bankData = {
    bank: 'بنك الإنماء',
    account: '68206067557000',
    iban: 'SA4905000068206067557000',
};

function formatCurrency(value) {
    return `${value.toFixed(2)} ريال`;
}

function calculatePrice() {
    const course = document.getElementById('course').value;
    const packageType = document.getElementById('subscription-type').value;
    const quantity = Math.min(Math.max(parseInt(document.getElementById('quantity').value) || 1, 1), 10);
    const paymentMethod = document.getElementById('payment-method').value;

    const unitPrice = packagePrices[packageType];
    const subtotal = unitPrice * quantity;

    let groupDiscountRate = 0;
    if (quantity >= 3) {
        groupDiscountRate = 0.15;
    } else if (quantity === 2) {
        groupDiscountRate = 0.10;
    }
    const groupDiscountAmount = subtotal * groupDiscountRate;

    const starsDiscountRate = paymentMethod === 'stars' ? 0.05 : 0;
    const starsDiscountAmount = (subtotal - groupDiscountAmount) * starsDiscountRate;

    const total = subtotal - groupDiscountAmount - starsDiscountAmount;

    // عرض القيم في الفاتورة
    document.getElementById('selected-course').textContent = courseNames[course];
    document.getElementById('selected-package').textContent = document.getElementById('subscription-type').selectedOptions[0].textContent;
    document.getElementById('selected-payment').textContent = paymentNames[paymentMethod];
    document.getElementById('unit-price').textContent = formatCurrency(unitPrice);
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('discount-info').textContent = groupDiscountRate > 0 ? `${(groupDiscountRate * 100).toFixed(0)}٪` : 'لا يوجد خصم جماعي';
    document.getElementById('stars-discount').textContent = starsDiscountRate > 0 ? `${(starsDiscountRate * 100).toFixed(0)}٪` : 'لا يوجد';
    document.getElementById('total-price').textContent = formatCurrency(total);

    // إظهار الفاتورة وإخفاء الأقسام الأخرى
    document.getElementById('invoice-section').style.display = 'block';
    document.getElementById('bank-upload').style.display = 'none';
    document.getElementById('stars-info').style.display = 'none';
    document.getElementById('thankyou').style.display = 'none';

    // تحديث حقل الكمية بالقيمة المصححة
    document.getElementById('quantity').value = quantity;
}

function copyText(id) {
    const text = document.getElementById(id).textContent.trim();
    if (!navigator.clipboard) {
        alert('يرجى نسخ الرقم يدويًا: ' + text);
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
        alert('تم النسخ بنجاح');
    }).catch(() => alert('تعذر النسخ تلقائيًا، انسخ يدويًا.'));
}

function showBankUpload() {
    document.getElementById('bank-upload').style.display = 'block';
    document.getElementById('stars-info').style.display = 'none';
    document.getElementById('thankyou').style.display = 'none';
    scrollToSection('bank-upload');
}

function showStarsInfo() {
    document.getElementById('stars-info').style.display = 'block';
    document.getElementById('bank-upload').style.display = 'none';
    document.getElementById('thankyou').style.display = 'none';
    scrollToSection('stars-info');
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
    }
}

function finishSubscription(method) {
    if (method === 'bank') {
        const receiptEl = document.getElementById('receipt');
        if (!receiptEl.files || receiptEl.files.length === 0) {
            alert('يرجى إرفاق إيصال التحويل.');
            return;
        }
    }
    document.getElementById('thankyou').style.display = 'block';
    document.getElementById('bank-upload').style.display = 'none';
    document.getElementById('stars-info').style.display = 'none';
    scrollToSection('thankyou');
}

// تعبئة بيانات البنك في الصفحة
function populateBank() {
    document.getElementById('bank-name').textContent = bankData.bank;
    document.getElementById('account-number').textContent = bankData.account;
    document.getElementById('iban').textContent = bankData.iban;
}

document.addEventListener('DOMContentLoaded', () => {
    populateBank();
});
