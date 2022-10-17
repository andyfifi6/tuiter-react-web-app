const WhoToFollowListItem = (who) => {
  return(` 
  <li class="list-group-item list-inline text-white">
  <div class="float-start">
  <img src=${who.avatarIcon} class="rounded-circle wd-follow-suggestion-icon-size">
  </div>
  
  <div class="list-inline-item ms-3">
        <div class="fw-bold text-white">${who.userName} <i class="fas fa-check-circle"></i></div>
        <div class="text-white-50">@${who.handle}</div>
  </div>
  
  <div class="list-inline-item float-end align-middle mt-1">
        <button class="btn btn-primary rounded-pill">
              Follow
        </button>
  </div>
</li>`)
}
export default WhoToFollowListItem;