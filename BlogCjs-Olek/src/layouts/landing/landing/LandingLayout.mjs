import {Wrapper} from "../../Wrapper.mjs";
import {TopNav} from "../../../components/TopNav.mjs";
import {Header} from "../../../components/Header.mjs";
import {Blogs} from "../../../components/Blogs.mjs";


export const LandingLayout = new CjsLayout(
    [
        [Wrapper, [
            [TopNav],
            [Header],
            [Blogs],

        ]]
    ]
);

