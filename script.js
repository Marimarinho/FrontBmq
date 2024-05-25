let cartTotal = 0;

function addToCart(productPrice) {
    // Adiciona o preço do produto ao total do carrinho
    cartTotal += productPrice;

    // Atualiza o contador do carrinho com o novo total
    updateCartCounter(cartTotal);
}

function updateCartCounter(total) {
    // Atualiza o texto do contador com o novo total
    document.getElementById("cart-counter").textContent = "R$ " + total.toFixed(2);
}