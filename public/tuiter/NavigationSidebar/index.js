const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a href="/" class="list-group-item">
                    <i class="fa-solid fa-t text-white nav-item"></i></a>
                
                <a href="../HomeScreen/home.html" class="list-group-item ${active==='home' ? 'active' : ''}">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Home</span></a>
                
                <a href="../ExploreScreen/explore.html" class="list-group-item ${active==='explore' ? 'active' : ''}">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Explore</span></a>
                
                <a href="/" class="list-group-item">
                    <i class="fas fa-bell"></i><span class="d-none d-xl-inline-flex ps-2">Notifications</span>
                </a>
                <a href="/" class="list-group-item">
                    <i class="fas fa-bookmark"></i><span class="d-none d-xl-inline-flex ps-2">Bookmarks</span>
                </a>

                <a href="/" class="list-group-item">
                    <i class="fas fa-list"></i><span class="d-none d-xl-inline-flex ps-2">List</span>
                </a>
                <a href="/" class="list-group-item">
                    <i class="fas fa-user"></i><span class="d-none d-xl-inline-flex ps-2">Profile</span>
                </a>
                <a href="/" class="list-group-item">
                    <i class="fas fa-ellipsis-h"></i><span class="d-none d-xl-inline-flex ps-2">More</span>
                </a>
            </div>
<!--            Tweet Button-->
            <div class="d-grid mt-2">
                <button class="btn btn-primary rounded-pill">
                Tuit
                </button>
            </div>           
 `);
}
export default NavigationSidebar;