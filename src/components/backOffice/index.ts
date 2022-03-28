import * as Icon from '../../lib'
import React, { SetStateAction } from 'react'
interface CardInfor {
    img: string
    description: string
    action: React.Dispatch<SetStateAction<boolean>>
}



export const cardInfo: CardInfor[] = [
    {
        img: Icon.newProdIcon,
        description: 'Add a new product to the catalogue',
        action: () => true
    },
    {
        img: Icon.editProdIcon,
        description: 'Edit a product from the catalogue',
        action: () => true
    },
    {
        img: Icon.newHistory,
        description: 'Add a new history to the catalogue',
        action: () => true
    }
]
