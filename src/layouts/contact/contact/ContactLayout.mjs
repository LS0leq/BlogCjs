import {Wrapper} from "../../Wrapper.mjs";
import {TopNav} from "../../../components/TopNav.mjs";
import {Header} from "../../../components/Header.mjs";
import {Contact} from "../../../components/Contact.mjs";

export const ContactLayout = new CjsLayout(
    [
        [Wrapper,[
            [TopNav],
            [Header],
            [Contact]
        ]]
    ]
);