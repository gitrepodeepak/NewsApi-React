import "./App.css";
import NewsContainer from "./components/newsContainer";
import About from "./components/about";
import Contact from "./components/contact";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <NewsContainer key={"general"} category={"general"} />,
      },
      {
        path: "/business",
        element: <NewsContainer key={"business"} category={"business"} />,
      },
      {
        path: "/entertainment",
        element: (
          <NewsContainer key={"entertainment"} category={"entertainment"} />
        ),
      },
      {
        path: "/health",
        element: <NewsContainer key={"health"} category={"health"} />,
      },
      {
        path: "/science",
        element: <NewsContainer key={"science"} category={"science"} />,
      },
      {
        path: "/sports",
        element: <NewsContainer key={"sports"} category={"sports"} />,
      },
      {
        path: "/technology",
        element: <NewsContainer key={"technology"} category={"technology"} />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
