import React from 'react'
import Dishes from './Dishes.js'
import NavButton from './NavButton.js'
import menuData from './menu-data.json'
import './menu.scss'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'Antipasti',
            menuData: [],
            dishes: [],
        }
    }

    componentDidMount() {
        this.setState({ menuData }, () => {
            this.setCurrentDishes()
        })
    }

    setCurrentDishes = () => {
        const dishes = this.state.menuData.filter(dish => {
            return dish.type.toLowerCase() === this.state.type.toLowerCase()
        })

        this.setState({ dishes })
    }

    clickOnNavButton = type => {
        this.setState({ type }, () => {
            this.setCurrentDishes()
        })
    }

    getUniqueDishTypes = () => {
        const uniqueDishTypes = new Set()
        this.state.menuData.forEach(dish => {
            uniqueDishTypes.add(dish.type)
        })
        return Array.from(uniqueDishTypes)
    }

    render() {
        const dishTypes = this.getUniqueDishTypes()
        dishTypes.push('Vin')
        dishTypes.push('grappa')
        dishTypes.push('Stora sällskap')

        return (
            <div className="section" id="menu">
                <div className="text-center">
                    <h1>Meny</h1>
                    <p>
                        För oss är helhetsupplevelsen viktig. Genuin matlagning och kvalitetsviner i
                        en gedigen miljö. Titta gärna in i vår vinkällare!
                    </p>
                </div>
                <div className="menu-navigator">
                    {dishTypes.map(dishType => {
                        return (
                            <NavButton
                                dishType={dishType}
                                clickOnNavButton={this.clickOnNavButton}
                                selectedDishType={this.state.type}
                                key={dishType}
                            />
                        )
                    })}
                </div>
                <Dishes type={this.state.type} dishes={this.state.dishes} />
            </div>
        )
    }
}

export default Menu
