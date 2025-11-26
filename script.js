/*
 * سكربت بسيط لحساب تكلفة الاشتراك وإدارة خطوات الدفع
 */

// أسعار الباقات بالريال السعودي
const packagePrices = {
    basic: 300,
    premium: 450,
    vip: 600
};

// حساب السعر وعرض الفاتورة
function calculatePrice() {
    const typeEl = document.getElementById('subscription-type');
    const qtyEl = document.getElementById('quantity');
    const unitPriceEl = document.getElementById('unit-price');
    const subtotalEl = document.getElementById('subtotal');
    const discountInfoEl = document.getElementById('discount-info');
    const totalPriceEl = document.getElementById('total-price');
    const invoiceSection = document.getElementById('invoice-section');

    const type = typeEl.value;
    const quantity = parseInt(qtyEl.value) || 1;
    const pricePerUnit = packagePrices[type];
    const subtotal = pricePerUnit * quantity;

    // determine discount based on number of participants
    let discountRate = 0;
    if (quantity >= 3) {
        discountRate = 0.15;
    } else if (quantity === 2) {
        discountRate = 0.10;
    }
    const discountAmount = subtotal * discountRate;
    const total = subtotal - discountAmount;

    // update invoice fields
    unitPriceEl.textContent = pricePerUnit.toFixed(2) + ' ريال';
    subtotalEl.textContent = subtotal.toFixed(2) + ' ريال';
    discountInfoEl.textContent = discountRate > 0 ? (discountRate * 100) + '% خصم' : 'لا يوجد خصم';
    totalPriceEl.textContent = total.toFixed(2) + ' ريال';

    invoiceSection.style.display = 'block';
}

// إظهار قسم الدفع وإخفاء نموذج الاشتراك
function showPayment() {
    const formSection = document.getElementById('subscription-form');
    const invoiceSection = document.getElementById('invoice-section');
    const paymentSection = document.getElementById('payment');
    formSection.style.display = 'none';
    invoiceSection.style.display = 'none';
    paymentSection.style.display = 'block';
    window.scrollTo({ top: paymentSection.offsetTop - 20, behavior: 'smooth' });
}

// نسخ الآيبان إلى الحافظة
function copyIban() {
    const ibanText = document.getElementById('iban').textContent.trim();
    if (navigator.clipboard) {
        navigator.clipboard.writeText(ibanText).then(() => {
            alert('تم نسخ الآيبان إلى الحافظة.');
        }).catch(() => {
            alert('لم يتم النسخ، يرجى نسخ الآيبان يدوياً.');
        });
    } else {
        // متصفح لا يدعم clipboard API
        alert('يرجى نسخ رقم الآيبان يدوياً: ' + ibanText);
    }
}

// إنهاء الاشتراك بعد رفع الإيصال
function finishSubscription() {
    const receiptEl = document.getElementById('receipt');
    const paymentSection = document.getElementById('payment');
    const thankYouSection = document.getElementById('thankyou');

    // التحقق من إرفاق إيصال التحويل
    if (!receiptEl.files || receiptEl.files.length === 0) {
        alert('يرجى إرفاق صورة أو ملف إيصال التحويل.');
        return;
    }

    // إخفاء قسم الدفع وإظهار رسالة الشكر
    paymentSection.style.display = 'none';
    thankYouSection.style.display = 'block';
    window.scrollTo({ top: thankYouSection.offsetTop - 20, behavior: 'smooth' });
}