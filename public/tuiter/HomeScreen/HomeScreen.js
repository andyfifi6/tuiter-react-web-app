import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-4 col-lg-2 col-xl-2">
            ${NavigationSidebar('home')}
        </div>
        <div class="col-10 col-md-8 col-lg-10 col-xl-10">
            ${PostList()}
        </div>
        </div>
        <br>
    `);
})($);