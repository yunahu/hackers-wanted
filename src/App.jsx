import Home from "./pages/Home";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import NotFound from "./pages/NotFound";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
