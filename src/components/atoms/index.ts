import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // configuration stay the same too
    storage: localStorage
})

export interface Product {
    name: string
    description: string
    image: string
    price: string
    category: string
}

export const productState = atom<Product[] | any[]>({
    key: 'product',
    default: [],
    effects_UNSTABLE: [persistAtom]
})