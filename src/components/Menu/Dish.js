import React from 'react'
import DT from './DT.js'
import './Dish.scss'

const Dish = ({ dish }) => {
    const { dishName, price, description } = dish
    return (
        <div className="col-sm-4 dish">
            <dl>
                <DT name={dishName} price={price} />
                <dd>{description}</dd>
            </dl>
        </div>
    )
}

export default Dish
