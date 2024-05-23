export default interface User {
    id: number
    firstName: string
    lastName: string
    email: string
  }

export interface Gift {
    id: string
    title: string
    price: number
    description: string
    url: string
    imgUrl: string 
    currency: string
    reserved: boolean
  }

export interface Wishlist {
    id: string
    title: string
    description: string
    date: string
    user_id: number
  }
  
  export interface WishlistState {
    listWishlist: Wishlist[]
    selectedWishlist: Wishlist | undefined
  }
  
  export interface WishlistDTO {
    id: number
    title: string
    description: string
    date: string
    user_id: number
  }
