import { reactive } from 'vue'

export const cart = reactive([])

export const addToCart = (instrument) => {
  cart.push({ name: instrument.name, price: instrument.price })
  console.log(JSON.parse(JSON.stringify(cart))) // thanks chatgpt
}
