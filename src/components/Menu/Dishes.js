import React from 'react'
import Dish from './Dish.js'
import Package from './Package.js'
import './Dishes.scss'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaExternalLinkAlt, FaAngleDoubleDown } from 'react-icons/fa'
import wineListPdf from '../../static-resources/Brezza_vinlista.pdf'
import grappaListPdf from '../../static-resources/Brezza_grappalista.pdf'

const Dishes = ({ type, dishes }) => {
    function getDishMarkup(dish) {
        if (dish.packageName) {
            return <Package dish={dish} key={dish.packageName} />
        } else {
            return <Dish dish={dish} key={dish.dishName} />
        }
    }

    const groupSize = 3
    let showingContent

    if (type === 'Vin') {
        showingContent = (
            <div className="wine-content">
                <button className="transparent-button" onClick={() => scrollTo('.wine-tasting')}>
                    <FaAngleDoubleDown /> Vinprovningar
                </button>
                <a className="wine-list transparent-button" href={wineListPdf}>
                    <FaExternalLinkAlt /> Vinlista
                </a>
            </div>
        )
    } else if (type === 'grappa') {
        showingContent = (
            <a className="wine-list transparent-button" href={grappaListPdf}>
                <FaExternalLinkAlt /> Grappalista
            </a>
        )
    } else {
        showingContent = dishes
            .map(dish => {
                return getDishMarkup(dish)
            })
            .reduce((acc, curr, index) => {
                index % groupSize === 0 && acc.push([])
                acc[acc.length - 1].push(curr)
                return acc
            }, [])
            .map(rowContent => {
                return (
                    <div key={rowContent[0] && rowContent[0].key} className="row">
                        {rowContent}
                    </div>
                )
            })
    }

    const typeDescriptionPasta = <i className="lower-case gold">brezzas hemgjorda pasta</i>
    const typeDescriptionPizza = (
        <i className="lower-case gold">på italienska ingredienser och färsk mozzarella</i>
    )

    return (
        <div className="tab-content">
            <h2>{type}</h2>
            {type === 'Pasta' && typeDescriptionPasta}
            {type === 'Pizza' && typeDescriptionPizza}
            <div className="menu-content">{showingContent}</div>
        </div>
    )
}

export default Dishes
