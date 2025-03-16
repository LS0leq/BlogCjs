import {Container} from "./Container.mjs";
import {LandingLayout} from "../landing/landing/LandingLayout.mjs";

export const RootLayout = new CjsLayout(
    [
        [Container, [
            [LandingLayout]
        ]]
    ]
);

RootLayout.onLoad(() => {
    Search.set('blogs');
});
