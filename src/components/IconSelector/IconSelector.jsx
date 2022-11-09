import {AiOutlineShoppingCart, AiFillAlert } from 'react-icons/ai'

export const IconSelector = ({icon}) => {

    const iconMap = {
        alert: AiFillAlert,
        cart: AiOutlineShoppingCart,
    }

    if(!icon || !iconMap[icon]) return null;

    if(typeof iconMap[icon] !== undefined){
        const Icon = iconMap[icon];
        return <Icon  />
    }
}