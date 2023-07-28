// Array to store the cart items
var cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
  var item = items[itemIndex];

  // Check if the item already exists in the cart
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
    // Item already exists in the cart, increment the quantity
    existingItem.quantity++;
  } else {
    // Item does not exist in the cart, add it with a quantity of 1
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  // Update the cart count
  updateCartCount();

  // Update the cart items display
  updateCartItems();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });

  if (itemIndex !== -1) {
    // Item found in the cart, remove it
    cartItems.splice(itemIndex, 1);

    // Update the cart count
    updateCartCount();

    // Update the cart items display
    updateCartItems();
  }
}

// Function to update the cart count
function updateCartCount() {
  var cartCountElement = document.getElementById('cart-count');
  var cartCount = 0;

  cartItems.forEach(function (item) {
    cartCount += item.quantity;
  });

  cartCountElement.textContent = cartCount;
}

// Function to update the cart items display
function updateCartItems() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;

    var itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = '$' + item.price;

    var removeBtnElement = document.createElement('button');
    removeBtnElement.classList.add('remove-btn');
    removeBtnElement.textContent = 'Remove';
    removeBtnElement.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeBtnElement);

    cartItemsElement.appendChild(cartItemElement);
  });
}

// Sample data for items
var items = [
  {
    id: 1,
    name: 'Fashion watches',
    price: 8,
    image: 'https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Analogue Watches',
    price: 7.34,
    image: 'https://images.pexels.com/photos/9897865/pexels-photo-9897865.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Add more items as needed
  {
    id: 3,
    name: 'Smart watches',
    price: 19,
    image: 'https://images.pexels.com/photos/14691508/pexels-photo-14691508.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 4,
    name: 'Mechanical Watches',
    price: 20,
    image: 'https://images.pexels.com/photos/9878207/pexels-photo-9878207.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Hybrid Watches',
    price: 25,
    image: 'https://images.pexels.com/photos/128206/pexels-photo-128206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    name: 'Sport Watches',
    price: 18,
    image: 'https://images.pexels.com/photos/9848539/pexels-photo-9848539.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    name: 'Fitness watches',
    price: 21,
    image: 'https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    name: 'Casio watches',
    price: 18.9,
    image: 'https://images.pexels.com/photos/4124334/pexels-photo-4124334.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    name: 'Automatic watches',
    price: 25,
    image: 'https://images.pexels.com/photos/9878309/pexels-photo-9878309.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    name: 'Dress watches',
    price: 15,
    image: 'https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 11,
    name: 'Luxury watches',
    price: 100,
    image: 'https://images.pexels.com/photos/9981078/pexels-photo-9981078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 12,
    name: 'Military watches',
    price: 30,
    image: 'https://media.istockphoto.com/id/1312138867/photo/vintage-military-watch-with-nato-strap-and-tactical-belt-on-army-green-background-classic.jpg?s=2048x2048&w=is&k=20&c=trfBEnNUsqou_Kuu_0o79VGny5rtDMQpiAPOyLOGvW4=',
  },
  {
    id: 13,
    name: 'Wood Watches',
    price: 21,
    image: 'https://media.istockphoto.com/id/1133745011/photo/wooden-watch-on-wooden-background.jpg?s=2048x2048&w=is&k=20&c=yQ6ftUerqPmzcD_WJvTTo01qlWtRf3EuXVhLFTxPUG0=',
  },
  {
    id: 14,
    name: ' Pocket Watches',
    price: 19,
    image: 'https://media.istockphoto.com/id/157618978/photo/golden-pocket-watch-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=uZLWCmzxVAX91S8B1Xsyblf6jEL9Lb7m1bBDYS2J-5M=',
  },
  {
    id: 15,
    name: 'Dive Watches',
    price: 42,
    image: 'https://media.istockphoto.com/id/508092848/photo/wristwatches-on-a-dark-background-acrylic.jpg?s=612x612&w=0&k=20&c=0s2BoG7nbcwUauzcPI4hNipw4rPmjU6K02IerH9jk9U=',
  },
  {
    id: 16,
    name: 'Chronograph watches ',
    price: 22,6,
    image: 'https://images.pexels.com/photos/3487862/pexels-photo-3487862.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 17,
    name: 'Digital watches',
    price: 45,
    image: 'https://images.pexels.com/photos/15228782/pexels-photo-15228782/free-photo-of-a-person-wearing-a-smartwatch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },

];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(function (button, index) {
  button.addEventListener('click', function () {
    addToCart(index);
  });
});

