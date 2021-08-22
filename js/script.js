
const basicMemory = document.getElementById('basic-memory');
const premiumMemory = document.getElementById('premium-memory');

const memoryCost = document.getElementById('memory-cost');

const basicStorage = document.getElementById('basic-storage');
const mediumStorage = document.getElementById('medium-storage');
const premiumStorage = document.getElementById('premium-storage');

const storageCost = document.getElementById('storage-cost');

const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');

const deliveryCharge = document.getElementById('delivery-charge');

const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');

const promoCodeInput = document.getElementById('promo-code-input');
const promoCodeButton = document.getElementById('promo-code-button');
const totalPromoPrice = document.getElementById('total-promo-price');

//update total
function updateTotal() {
    const memoryCostAmount = Number(memoryCost.innerText);
    const storageCostAmount = Number(storageCost.innerText);
    const deliveryChargeAmount = Number(deliveryCharge.innerText);
    const bestPriceAmount = Number(bestPrice.innerText);
    const totalPriceAmount = memoryCostAmount + storageCostAmount + deliveryChargeAmount + bestPriceAmount;
    totalPrice.innerText = totalPriceAmount;
    totalPromoPrice.innerText = totalPriceAmount;
}

//update promo total
function updatePromoTotal() {
    if (promoCodeInput.value == 'stevekaku') {
        const totalPromoPriceAmount = Number(totalPrice.innerText)
        const promoCodeAmount = totalPromoPriceAmount * 0.2
        totalPromoPrice.innerText = totalPromoPriceAmount - promoCodeAmount;
    } else {
        promoCodeInput.value = '';
    }
    promoCodeInput.value = '';
}

//event handler for memory cost
basicMemory.addEventListener('click', function () {
    memoryCost.innerText = 0;
    updateTotal()
});
premiumMemory.addEventListener('click', function () {
    memoryCost.innerText = 180;
    updateTotal()
});

//event handler for storage cost
basicStorage.addEventListener('click', function () {
    storageCost.innerText = 0;
    updateTotal()
});
mediumStorage.addEventListener('click', function () {
    storageCost.innerText = 100;
    updateTotal()
});
premiumStorage.addEventListener('click', function () {
    storageCost.innerText = 180;
    updateTotal()
});

//event handler for delivery charge
freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = 0;
    updateTotal()
});
paidDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = 20;
    updateTotal()
});

//event handler for apply promo code
promoCodeButton.addEventListener('click', function () {
    updatePromoTotal();
});
