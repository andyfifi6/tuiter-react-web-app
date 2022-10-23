import React from "react";
import PostListDetail from "./post-list-item";
import list from "./list.json"


const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                list.map(list =>
                    <PostListDetail
                        list={list}/> )
            }
        </ul>
    )
}
export default HomeComponent