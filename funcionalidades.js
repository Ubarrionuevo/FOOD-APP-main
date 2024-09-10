
function saveSelectedProducts() {
   const selectedProducts = [];
   const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   
   checkboxes.forEach(checkbox => {
       selectedProducts.push(checkbox.nextElementSibling.textContent.trim());
   });

   localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}


function saveSelection(key, value) {
  localStorage.setItem(key, value);
}

function redirectToWhatsApp() {
const phoneNumber = '543834035119'; // Tu número de teléfono en formato internacional
let message = 'Hola, me gustaría pedir:\n';

// Recuperar productos seleccionados de localStorage
const storedSelections = JSON.parse(localStorage.getItem('selectedProducts'));
if (storedSelections) {
    storedSelections.forEach(product => {
        message += `- ${product}\n`;
    });
}

// Recoger método de pago seleccionado
const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
if (paymentMethod) {
    message += `\nMétodo de Pago: ${paymentMethod.nextElementSibling.textContent.trim()}`;
}

// Recoger método de entrega seleccionado
const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
if (deliveryMethod) {
    message += `\nMétodo de Entrega: ${deliveryMethod.nextElementSibling.textContent.trim()}`;
}

// Añadir información adicional
const additionalInfo = document.querySelector('textarea').value.trim();
if (additionalInfo) {
    message += `\n\nInformación Adicional: ${additionalInfo}`;
}

// Redirigir a WhatsApp
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.location.href = whatsappURL;
}

