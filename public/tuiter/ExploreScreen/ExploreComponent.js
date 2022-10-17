import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="border border-thin border-secondary">
                <!--    1. search bar (1,2 in a div)-->
                <div class="input-group mt-1">
                    <input type="text" class="ms-3 me-3 rounded-pill wd-color-gray wd-search-bar-height form-control bg-dark border-0"
                           placeholder="   &#x1F50D;    Search Tuiter"/>
                    <span class="input-group-lg">
                    <a href="explore-settings.html"
                       class="wd-float-right wd-padding-left me-3"
                       style="text-decoration: none">
                        <img src="gear.png" class="wd-gear-icon-size"/>
                    </a>
                    </span>
                </div>
                <!--    2. tabs-->
                <ul class="nav nav-tabs border-0">
                    <li class="nav-item wd-border-bottom">
                        <a class="nav-link wd-link-font-size text-white fw-bold" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-link-font-size text-dark" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-link-font-size text-dark" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-link-font-size text-dark" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-link-font-size text-dark" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            
        <div class="border border-thin border-secondary position-relative">
                    <img src="../../image/ymz.JPG" class="col-12">
                    <h1 class="position-absolute bottom-0 start-10 text-white">Cang Lan Jue Starship</h1>
        </div>
        
           <!-- image with overlaid text -->
        ${PostSummaryList()}
        <br>
    `);
}
export default ExploreComponent;