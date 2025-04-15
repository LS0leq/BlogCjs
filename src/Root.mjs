import {RootLayout} from "./layouts/root/RootLayout.mjs";
import {LandingLayout} from "./layouts/landing/landing/LandingLayout.mjs";

Search.setDisplayedOnScreen(true);

CjsPluginManager.enable({
    notification: true
});

init(RootLayout);
