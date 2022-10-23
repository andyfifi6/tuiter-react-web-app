import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group bg-secondary rounded-5">
           <!-- continue here -->
           <div class="list-group-item fw-bold text-white">Who to Follow</div>
           ${
        who.map(who => {
            return WhoToFollowListItem(who);
        }).join('')
    }
           </ul>
`); }
export default WhoToFollowList;