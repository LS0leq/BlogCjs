import {Wrapper} from "../../Wrapper.mjs";
import {TopNav} from "../../../components/TopNav.mjs";
import {Header} from "../../../components/Header.mjs";

export const AdminLayout = new CjsLayout(
    [
        [Wrapper,[
            [TopNav],
            [Header],
        ]]
    ]
);