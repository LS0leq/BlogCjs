import {Wrapper} from "../../Wrapper.mjs";
import {TopNav} from "../../../components/TopNav.mjs";
import {Header} from "../../../components/Header.mjs";
import {Blogs} from "../../../components/Blogs.mjs";
// import {BlogPreview} from "../../../components/BlogPreview.mjs";
import {Content} from "../../Content.mjs";

export const LandingLayout = new CjsLayout(
    [
        [Wrapper, [
            [TopNav],
            [Header],
            [Blogs],
        ]]
    ]
);

const Layouts = {
    "blogs": Blogs,

}

// Ładowanie szczegółów bloga w LandingLayout
LandingLayout.loadContent = (category) => {
    if (!(category in Layouts)) return;

    console.log(category);

    if (category === "blogs") {
        Content.loadLayout(Layouts[category]);  // Ładowanie listy blogów
    } else if (category === "blog-detail") {
        const postId = Search.get('postId');  // Pobieramy ID bloga z URL
        Content.loadLayout(BlogPreview.render({ postId }));  // Ładowanie szczegółów bloga
    }
};
