const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item text-white bg-black wd-border-thin wd-bg-border-color">
                <img src=${post.image} class="wd-post-item-pic"/>
                <div class="wd-post-title">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="text-secondary">
                        <span class="text-white fw-bold">${post.userName}  <i class="fas fa-check-circle"></i></span>
                        - ${post.time}
                    </div>
                    <div class="fw-bold">
                        ${post.title}
                    </div>
                    <div class="text-secondary ${post.tweets==='' ? 'wd-hide-tuits' : ''}">
                        ${post.tweets} Tuits
                    </div>
                </div>
        </li>`);
}
export default PostSummaryItem;