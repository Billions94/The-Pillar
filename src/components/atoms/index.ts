import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage
})

export interface Product {
    name: string
    description: string
    price: string
    category: string
    image: string
    file: {
        bucket: string
        region: string
        key: string
    }
}

export const productState = atom<Product[] | any[]>({
    key: 'product',
    default: [],
    effects_UNSTABLE: [persistAtom]
})