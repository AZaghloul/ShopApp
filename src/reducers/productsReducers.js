//Initial State Of Products
const products = [
  {
    id: 1,
    name: "Samsung Galaxy A30S",
    description:
      "riple Camera, Dual SIM GSM Unlocked A307G/DS - US + Global 4G LTE International Model (64GB + 64GB SD + Case Bundle) (White)",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61TqiNJvIFL._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/316LkkE-BmL._AC_SR38.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/31gAy0oBEeL._AC_SR38.jpg",
    ],
    price: "249.99",
    colors: ["gray", "black", "red"],
  },
  {
    id: 2,

    name: "Apple AirPods Pro",
    description:
      "Active noise cancellation for immersive soun and Transparency mode for hearing and connecting with the world around you",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71eGsUPZm2L._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71lj9Fdeq0L._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71zLI-DaR7L._AC_SX679_.jpg",
    ],
    price: "229.99",
    colors: ["gray", "black"],
  },
  {
    id: 3,

    name: "Apple Watch Series 5",
    description: "(GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71mbZF8PT1L._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/711JTvQBFFL._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71vZCD5ROlL._AC_SX679_.jpg",
    ],
    price: "429.99",
    colors: ["gray", "black", "pink"],
  },
  {
    id: 4,

    name: "JBL Xtreme 2",
    description: "Waterproof Portable Bluetooth Speaker - Blue",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81kAa5OtH9L._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81da94d3V8L._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81kpWC2D0%2BL._AC_SX522_.jpg",
    ],
    price: "349.99",
    colors: ["blue", "Squad Camo", "red"],
  },
  {
    id: 5,
    name: "Redragon M801 PC Gaming Mouse",
    description:
      "LED RGB Backlit MMO 9 Programmable Buttons Mouse with Macro Recording Side Buttons Rapid Fire Button for Windows Computer Gamer (Wireless, Black)",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/611jbF%2BFbbL._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71i18Q9QooL._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71eB5oMsu-L._AC_SX522_.jpg",
    ],
    price: "49.99",
    colors: ["black"],
  },
];

function productsReducer(state = { products, product: undefined }, action) {
  switch (action.type) {
    case "PRODUCT_BY_ID":
      return {
        ...state,
        product: state.products.find((p) => p.id === action.payload),
      };

    default:
      return state;
  }
}

export default productsReducer;
