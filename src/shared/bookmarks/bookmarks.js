import React from "react";
import BookmarksStyle from "./bookmarks.module.scss";

const Bookmarks = () => (
    <button className={BookmarksStyle.bookmarkButton}>
        <img id="bookmark-picture" src="favorite.png" alt="#" className={BookmarksStyle.bookmarkImg}/>
    </button>
)

export default Bookmarks;