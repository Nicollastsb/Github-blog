import { Routes, Route } from "react-router-dom";
import { HomeBlog } from "./pages/homeBlog";
import { Post } from "./pages/post";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/Github-blog" element={<DefaultLayout/>}>
                <Route path="/Github-blog" element={<HomeBlog/>}/>
                <Route path="/Github-blog/post/:postId" element={<Post/>}/>
            </Route>
        </Routes>
    );
}