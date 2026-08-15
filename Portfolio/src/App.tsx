import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Github from "./pages/github";
import Contact from "./pages/contact";
import ProjectDetails from "./pages/projectDetails";
import Resume from "./pages/resume";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/github" element={<Github />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
