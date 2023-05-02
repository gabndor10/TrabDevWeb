const submitButton = document.getElementById('submit-order');
const orderTotal = document.getElementById('order-total-text');
const addButtons = document.querySelectorAll('.add-item');
const orderList = document.getElementById('order-list');
const footerTotal = document.getElementById('footer-total');
let total = 0;

submitButton.addEventListener('click', () => {
  alert('Pedido enviado!');
  orderTotal.textContent = `Total: R$${total.toFixed(2)}`;
});

addButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const item = event.target.parentNode;
    const price = parseFloat(item.querySelector('.price').textContent.replace(',', '.').replace('R$', '').trim());
    total += price;
    orderTotal.textContent = `Total: R$${total.toFixed(2)}`;
    footerTotal.textContent = `Total: R$${total.toFixed(2)}`;

    const orderItem = document.createElement('li');
    const itemName = item.querySelector('h3').textContent;
    orderItem.textContent = `${itemName} - R$${price.toFixed(2)}`;
    orderList.appendChild(orderItem);
  });
});

console.log("Rodando liso");