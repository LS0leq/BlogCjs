import {Container} from "./Container.mjs";
import {LandingLayout} from "../landing/landing/LandingLayout.mjs";
import {ContactLayout} from "../contact/contact/ContactLayout.mjs";
import {LoginLayout} from "../login/login/LoginLayout.mjs";
import {AdminLayout} from "../admin/admin/AdminLayout.mjs";
import {ErrorLayout} from "../error/error/ErrorLayout.mjs";

export const RootLayout = new CjsLayout(
    [
        [Container, [
        ]]
    ]
);
RootLayout.loadLanding =()=> Container.loadLayout(LandingLayout);
RootLayout.loadContact =()=> Container.loadLayout(ContactLayout);
RootLayout.loadLogin =()=> Container.loadLayout(LoginLayout);
RootLayout.loadAdmin =()=> Container.loadLayout(AdminLayout);
RootLayout.loadError =()=> Container.loadLayout(ErrorLayout);

RootLayout.onLoad(() => {
    const url = new URLSearchParams(window.location.search);
    const path = url.get('path');
    if(path=="blogs")RootLayout.loadLanding();
    else if(path=="contact")RootLayout.loadContact();
    else if(path=="login")RootLayout.loadLogin();
    else if(path=="admin")RootLayout.loadAdmin();
    else RootLayout.loadError();
    // RootLayout.loadLanding();


});

if (window.location.search === "?search=blogs") {
    Search.set('blogs');
}