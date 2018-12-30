import React, { Component, Fragment } from 'react'

import NavBar from '../../component/navbar/NavBar'
import SideDrawer from '../../component/navbar/sidedrawer/SideDrawer'
import BackDrop from '../../component/backdrop/BackDrop'
import DrawerToggle from '../../component/navbar/sidedrawer/drawertoggle/DrawerToggle'
import MainTitle from '../maintitle/MainTitle'
import MainContentBlock from '../maincontentblock/MainContentBlock'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldOpenDrawer: false
        }
    }

    openSideDrawer = () => {
        this.setState({ shouldOpenDrawer: true })
    }

    closeSideDrawer = () => {
        this.setState({ shouldOpenDrawer: false })
    }

    render() {
        return (
            <Fragment>
                <NavBar clicked={this.closeSideDrawer}/>
                <SideDrawer shouldOpenDrawer={this.state.shouldOpenDrawer} closeEventHandler={this.closeSideDrawer} />
                <BackDrop shouldOpenDrawer={this.state.shouldOpenDrawer} closeEventHandler={this.closeSideDrawer} />
                <DrawerToggle clicked={this.openSideDrawer} />
                <MainTitle />
                <MainContentBlock />
            </Fragment>
        )
    }
}

export default Layout