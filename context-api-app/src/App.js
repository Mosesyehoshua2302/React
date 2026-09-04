import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

// export default function App() {
//   const userInfo = { username: "Admin", isAdmin: true };
//   return (
//     <UserInfoContext.Provider value={userInfo}>
//       <BlogPage />
//     </UserInfoContext.Provider>
//   );
// }

export default function App() {
  return (
    // Wrapping in ThemeProvider makes the theme + toggler available to
    // ContentComponent (and anything else nested here) via useContext.
    <ThemeProvider>
      {/* <div className="App"> */}
      <ContentComponent />
      {/* </div> */}
    </ThemeProvider>
  );
}
