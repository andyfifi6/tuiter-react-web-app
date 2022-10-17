const PostItem = (post) => {
    return(`
        <li class="list-group-item text-white bg-black wd-border-thin wd-bg-border-color row">
            <div class="p-0 pt-2 wd-float-left col-1">
                <img src=${post.userImage} class="wd-bookmark-post-author-pic"/>
            </div>
            <div class="ps-3 pb-1 wd-float-left col-11">
                <span class="wd-bookmark-post-author-name fw-bold">
                    ${post.userName}
                </span>
                <span class="wd-bookmark-post-author-handle">
                    @${post.handle} &#183 ${post.time}
                </span>
                <div class="wd-bookmark-post-content pb-2">
                    ${post.tuit}
                </div>
                <div class="wd-border-thin wd-bg-border-color ${(post.linkTitle===''&&post.linkContent==='') ? 'wd-post-picture' : 'wd-bookmark-post-picture'}">
                    <img src=${post.postImage} class="${(post.linkTitle===''&&post.linkContent==='') ? 'wd-post-picture' : 'wd-bookmark-post-picture'}">
                </div>
                <div style="${(post.linkTitle===''&&post.linkContent==='') ? 'display:none' : ''}" class="wd-bookmark-post-link wd-bg-border-color wd-border-thin">
                    <div class="wd-bookmark-post-link-padding">
                        <div class="wd-bookmark-post-link-title-bold">
                            ${post.linkTitle}
                        </div>
                        <div class="wd-bookmark-post-link-content">
                            ${post.linkContent}
                        </div>
                    </div>
                </div>
                <div class="wd-grid-row">
                    <div class="wd-bookmark-post-icon-grid">
                        <div class="pt-2">
                            <a href="#" class="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i class="far fa-comment"></i>
                                <span class="wd-bookmark-post-icon-padding-left">
                                    ${post.comments}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="wd-bookmark-post-icon-grid">
                        <div class="pt-2">
                            <a href="#" class="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i class="fas fa-share">
                                </i>
                                <span class="wd-bookmark-post-icon-padding-left">
                                    ${post.retuits}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="wd-bookmark-post-icon-grid">
                        <div class="pt-2">
                            <a href="#" class="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline wd-bookmark-post-icon-actioned">
                                <i class="fas fa-heart">
                                </i>
                                <span class="wd-bookmark-post-icon-padding-left">
                                    ${post.likes}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="wd-bookmark-post-icon-grid">
                        <div class="pt-2">
                            <a href="#" class="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i class="fas fa-external-link-alt">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>`);
}
export default PostItem;