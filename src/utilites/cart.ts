
export function addToCart(num: number) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([num]));
        return 1;
    } else {
        let parsedCart: number[] = JSON.parse(cart);
        let indexOfParsedCart = parsedCart.indexOf(num);
        if (indexOfParsedCart !== -1) {
            parsedCart.splice(indexOfParsedCart, 1);
        } else {
            if (parsedCart.length >= 20) {
                alert('Извините, корзина заполнена');
                return parsedCart.length + 1;
            }
            parsedCart.push(num);
        }
        localStorage.setItem('cart', JSON.stringify(parsedCart));
        return parsedCart.length;
    }
    
}

export function showCart() {
    let cart = localStorage.getItem('cart');
    let counter = document.querySelector('.counter');
    if (counter) { 
        if (!cart){
            counter.textContent = '0';
        } else {
            counter.textContent = (JSON.parse(cart) as number[]).length.toString();
        }
    }
}

export function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    showCart();
}

export function checkCart(num: number) {
    let cart = localStorage.getItem('cart');
    if (cart) {
        let parsedCart: number[] = JSON.parse(cart);
        return parsedCart.includes(num);
    } 
    return false;
}