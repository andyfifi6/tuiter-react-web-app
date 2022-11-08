import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: "xlh1.jpeg",
            userName: "NASA",
            handle: "NASA"
        }
    }) => {
    return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" height={48} src={`/image/${who.avatarIcon}`} alt="Index Icon"/>
                    </div>
                    <div className="col-8">
                        <div className="fw-bold">{who.userName}
                            <i className="fas fa-check-circle"/>
                        </div>
                        <div className="text-secondary">@{who.handle}</div>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary rounded-pill float-end">Follow</button>
                    </div>
                </div>
            </li>
    );
};
export default WhoToFollowListItem;