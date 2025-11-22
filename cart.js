function addToCart(name, price){
      /* const qtyElement = button.parentElement.querySelector('.count2');
      const quantity = parseInt(qtyElement?.innerText) || 1; */
      const quantity = 1;
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const index = cart.findIndex(item => item.name === name);

      if (index !== -1) {
        cart[index].quantity++;
      }else {
        cart.push({name, price, quantity});
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(name + ' added to cart for ' + price + ' EGP each');
  }
