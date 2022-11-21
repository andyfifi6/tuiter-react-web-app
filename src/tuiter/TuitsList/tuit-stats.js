import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = () => {
        if (tuit.liked) {
            dispatch(
                updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: !tuit.liked })
            );
        } else {
            dispatch(
                updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: !tuit.liked })
            );
        }
    }

    const dislikeTuitHandler = () => {
        if (tuit.disliked) {
            dispatch(
                updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1, disliked: !tuit.disliked })
            );
        } else {
            dispatch(
                updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: !tuit.disliked })
            );
        }
    }

    return(
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
                    <a className="wd-home-post-icon-no-underline wd-home-post-link-content"
                       onClick={likeTuitHandler}>
                        {tuit.liked ? (
                                <i className="wd-home-post-icon-no-underline wd-home-post-link-content fas fa-heart wd-home-post-icon-actioned"/>)
                            : (<i className="wd-home-post-icon-no-underline wd-home-post-link-content fas fa-heart"/>)}
                        {tuit.likes}
                    </a>
                </div>
            </div>

            <div className="wd-home-post-icon-grid">
                <div className="pt-2">
                    <a className="wd-home-post-icon-no-underline wd-home-post-link-content"
                       onClick={dislikeTuitHandler}>
                        {tuit.disliked ? (
                                <i className="wd-home-post-icon-no-underline wd-home-post-link-content fas fa-heart-broken text-primary"/>)
                            : (<i className="wd-home-post-icon-no-underline wd-home-post-link-content fas fa-heart-broken"/>)}
                        {tuit.dislikes}
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
    )
}

export default TuitStats;