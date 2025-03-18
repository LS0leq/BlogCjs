import {Wrapper} from "../../Wrapper.mjs";
import {TopNav} from "../../../components/TopNav.mjs";
import {Header} from "../../../components/Header.mjs";
import {Login} from "../../../components/Login.mjs";

export const LoginLayout = new CjsLayout(
    [
        [Wrapper,[
            [TopNav],
            [Header],
            [Login]
        ]]
    ]
);