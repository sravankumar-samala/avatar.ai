import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Chat from "./pages/chat";
import { useState } from "react";
import DarkModeToggler from "./components/darkModeToggleBtn";

function NotFound() {
  return <h1>Not found</h1>;
}

function App() {
  const localTheme = localStorage.getItem("theme");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDark, setIsDark] = useState(
    !localTheme ? prefersDarkMode : localTheme === "dark"
  );

  const toggleDarkMode = () => {
    setIsDark(!isDark);

    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <div className={`relative flex ${isDark ? "dark" : "light"}`}>
      <DarkModeToggler toggleDarkMode={toggleDarkMode} />
      <Sidebar />
      <div className="px-10 pt-8 grid flex-1 w-full bg-secondaryBg text-primaryClr border-[1px] border-primary-b">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create-new" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
