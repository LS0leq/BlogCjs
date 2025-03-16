import {RootLayout} from "./layouts/root/RootLayout.mjs";
import {LandingLayout} from "./layouts/landing/landing/LandingLayout.mjs";

Search.setDisplayedOnScreen(true);

CjsPluginManager.enable({
    notification: true
});

init(RootLayout);

Search.onChange((search) => {
    if (Search.startsWith("/blogs")) {
        const postId = Search.get(1);

        if (postId) {
            LandingLayout.loadBlogDetail(postId);
        } else {
            LandingLayout.loadContent("blogs");
        }
    }
});
