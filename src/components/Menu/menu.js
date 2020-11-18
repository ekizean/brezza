import React from 'react'
import Dishes from './Dishes.js'
import NavButton from './NavButton.js'
import XLSX from 'xlsx'
import menuData from './menu-data.json'

import './menu.css'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'Antipasti',
            menuData: [],
            dishes: [],
        }
    }

    componentWillMount() {
        this.setState({ menuData }, () => {
            this.setCurrentDishes()
        })
        // this.getMenuData()
    }

    getMenuData() {
        const url = './Meny hemsida.xlsx'

        /* set up async GET request */
        const req = new XMLHttpRequest()
        req.open('GET', url, true)
        req.responseType = 'arraybuffer'

        req.onload = e => {
            const data = new Uint8Array(req.response)
            const workbook = XLSX.read(data, { type: 'array' })

            /* DO SOMETHING WITH workbook HERE */
            const first_sheet = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[first_sheet]
            const menuJson = XLSX.utils.sheet_to_json(worksheet)

            this.setState({ menuData: menuJson }, () => {
                this.setCurrentDishes()
            })
        }
        req.send()
    }

    setCurrentDishes = () => {
        const dishes = this.state.menuData.filter(dish => {
            return dish.type.toLowerCase() == this.state.type.toLowerCase()
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

        return (
            <div className="menu" id="menu">
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
                <Dishes dishes={this.state.dishes} />
            </div>
        )
    }
}

export default Menu
