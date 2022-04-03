import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage
})

export interface Product {
    id?: string
    name?: string
    description?: string
    price?: string
    category?: string
    image?: string
    file?: {
        bucket: string
        region: string
        key: string
    }
    createdAt?: Date
    updatedAt?: Date
    owner?: string
}

export const productState = atom<Product[]>({
    key: 'product',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export interface History {
    id?: string
    title: string
    content: string
    image: string
    // className?: {
    //     className?: string
    //     className2?: string
    // }
    file?: {
        bucket: string
        region: string
        key: string
    }
    createdAt?: Date
    updatedAt?: Date
    owner?: string
}

export const historyState = atom<History[]>({
    key: 'history',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const darkModeState = atom<true | false>({
    key: 'darkmode',
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const modalState = atom<true | false>({
    key: 'modal',
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const alertState = atom<true | false>({
    key: 'alert',
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const refreshState = atom<true | false>({
    key: 'refresh',
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const selectedState = atom<number>({
    key: 'select',
    default: 0,
    effects_UNSTABLE: [persistAtom]
})