import React from "react";
import headerStyle from "./headerComponent.module.scss";
import MenuButton from "../../shared/menuButton/menuButton";
import Logo from "../../shared/logo/logo";
import ProfileButton from "../../shared/profileButton/profileButton";
import Search from "../../shared/search/search";
import Bookmarks from "../../shared/bookmarks/bookmarks";
import GlobalStyle from "../../styles/globalStyle.module.scss";
import { useMediaQuery } from "react-responsive";
import Widgets from "../../shared/widgets/widgets";
import AddButton from "../../shared/addButton/addButton";

const Header = () => {

    const isTabletOrLaptop = useMediaQuery({query: '(min-width: 600px)'});
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});

    return (   
        <>
            <div id={headerStyle.header}>
                {isTabletOrLaptop ? (
                    <div className={headerStyle.menuSection}>
                        <MenuButton/>
                        <Widgets/>
                    </div>) : <MenuButton/> }
                <Logo/>
                {isTabletOrLaptop ? 
                    <div className={headerStyle.profileSection}>
                        <Search className={GlobalStyle.paddingRight_3}/>
                        <ProfileButton className={GlobalStyle.paddingRight_3}/>
                        <Bookmarks className={GlobalStyle.paddingRight_3}/>
                    </div> : <AddButton/>}
            </div>
            {isMobile && 
                <div className={headerStyle.widgetsHeaderForMobile}>
                    <Widgets/>
                </div>}
        </>
    )
}

export default Header;