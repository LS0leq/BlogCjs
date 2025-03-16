import {Container} from "./Container.mjs";
import {LandingLayout} from "../landing/landing/LandingLayout.mjs";
import {ContactLayout} from "../contact/contact/ContactLayout.mjs";
import {LoginLayout} from "../login/login/LoginLayout.mjs";
import {AdminLayout} from "../admin/admin/AdminLayout.mjs";

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

RootLayout.onLoad(() => {
    const url = new URLSearchParams(window.location.search);
    const path = url.get('path');
    if(path=="blogs")RootLayout.loadLanding();
    if(path=="contact")RootLayout.loadContact();
    if(path=="login")RootLayout.loadLogin();
    if(path=="admin")RootLayout.loadAdmin();


});

if (window.location.search === "?search=blogs") {
    Search.set('blogs');
}