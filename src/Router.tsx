import { Routes, Route } from "react-router-dom";
import { HomeBlog } from "./pages/homeBlog";
import { Post } from "./pages/post";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<HomeBlog/>}/>
                <Route path="/post/:postId" element={<Post/>}/>
            </Route>
        </Routes>
    );
}