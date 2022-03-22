import * as Icon from '../../lib'
interface CardInfor {
    img: string
    description: string
}

export const cardInfo: CardInfor[] = [
    {
        img: Icon.newProdIcon,
        description: 'Add a new product to the catalogue'
    },
    {
        img: Icon.editProdIcon,
        description: 'Edit a product from the catalogue'
    },
]
