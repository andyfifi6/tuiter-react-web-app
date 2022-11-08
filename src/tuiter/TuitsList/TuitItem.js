import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";

const TuitItem = ({
    tuit = {
        _id: 234,
        topic: "Space",
        userName: "SpaceX",
        title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        time: "2h",
        image: "da.jpeg",
        liked: false,
        replies: 123,
        retuits: 432,
        likes: 2345,
        handle: "@spacex",
        tuit: "Space Exploration Technologies Corp."
    }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item row mx-1 border rounded pt-2">
            <div className="col-1 p-0 float-start">
                <img src={`/image/${tuit.image}`} height={48} width={48} className="rounded-circle mx-auto position-relative"/>
            </div>

            <div className="ps-3 pb-1 float-start col-11">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>

                <span className="fw-bold">
                    {tuit.userName}
                </span>
                <span className="text-secondary">
                    {tuit.handle} - {tuit.time}
                </span>
                <div className="wd-home-post-content pb-2">
                    {tuit.tuit}
                </div>

                <div className="wd-grid-row">
                    <div className="wd-home-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-home-post-link-content wd-home-post-icon-no-underline">
                                <i className="far fa-comment"/>
                                <span className="wd-home-post-icon-padding-left">
                                    {tuit.replies}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="wd-home-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-home-post-link-content wd-home-post-icon-no-underline">
                                <i className="fas fa-share">
                                </i>
                                <span className="wd-home-post-icon-padding-left">
                                    {tuit.retuits}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="wd-home-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-home-post-link-content wd-home-post-icon-no-underline">
                                <i className="fas fa-heart wd-home-post-icon-actioned"></i>
                                <span className="wd-home-post-icon-padding-left">
                                    {tuit.likes}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="wd-home-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-home-post-link-content wd-home-post-icon-no-underline">
                                <i className="fas fa-external-link-alt">
                                </i>
                            </a>
                        </div>
                    </div>
                    <br/> <br/>
                </div>
            </div>
        </li>
    );
}
export default TuitItem;