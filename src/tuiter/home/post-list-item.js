import React from "react";

const PostListDetail = (
    {
        list = {
            "userName": "Dongfang Qingcang",
            "handle": "dfqc",
            "postImage": "ymz1.JPG",
            "linkTitle": "Countdown: Mission to Cang Yan Sea",
            "linkContent": "From training to launch, blablabla, blablabla",
            "time": "23h",
            "tuit": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "userImage": "mjqc.jpeg",
            "comments": "123",
            "retuits": "234", "likes": "345", "shares": "20"
        }
    }
) => {
    return(
        <li className="row mx-1 border rounded pt-2">
            <div className="col-2 px-0">
               <img src={`/image/${list.userImage}`} height={48} width={48} className="rounded-circle mx-auto d-block position-relative"/>
            </div>

            <div className="col-10 ps-0 pe-3">
                <span className="fw-bold">
                    {list.userName}
                </span>
                <span className="text-secondary">
                    @{list.handle} - {list.time}
                </span>
                <div className="wd-home-post-content">{list.tuit}</div>
                <img src={`/image/${list.postImage}`} className="img-fluid border"/>

                <div className={`wd-home-post-link border ${(list.linkTitle===''&& list.linkContent==='') ? 'wd-no-display' : ''}`}>
                    <div className="wd-home-post-link-padding">
                        <div className="fw-bold">
                            {list.linkTitle}
                        </div>
                        <div className="wd-home-post-link-content">
                            {list.linkContent}
                        </div>
                    </div>
                </div>
                <div className="wd-grid-row">
                    <div className="wd-home-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-home-post-link-content wd-home-post-icon-no-underline">
                                <i className="far fa-comment"/>
                                <span className="wd-home-post-icon-padding-left">
                                    {list.comments}
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
                                    {list.retuits}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="wd-home-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-home-post-link-content wd-home-post-icon-no-underline">
                                <i className="fas fa-heart wd-home-post-icon-actioned">
                                </i>
                                <span className="wd-home-post-icon-padding-left">
                                    {list.likes}
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
        </li>);
};
export default PostListDetail;