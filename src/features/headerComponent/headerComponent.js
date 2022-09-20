import React from "react";
import headerStyle from "./headerComponent.module.scss";
import MenuButton from "../../shared/menuButton/menuButton";
import Logo from "../../shared/logo/logo";
import ProfileButton from "../../shared/profileButton/profileButton";
import Search from "../../shared/search/search";
import Bookmarks from "../../shared/bookmarks/bookmarks";
import GlobalStyle from "../../styles/globalStyle.module.scss";

const Header = () => (   
    <div id={headerStyle.header}>
        <MenuButton/>
        <Logo/>
        <div className={headerStyle.profileSection}>
            <Search className={GlobalStyle.paddingRight_3}/>
            <ProfileButton className={GlobalStyle.paddingRight_3}/>
            <Bookmarks className={GlobalStyle.paddingRight_3}/>
        </div>
    </div>
)

export default Header;