import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group rounded-5">
            <li className="list-group-item">
                <h4>Who to follow</h4>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        who={who}/>
                )
            }
        </ul>
    );
};
export default WhoToFollowList;