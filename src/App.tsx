import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import PageLayout from "./layout/pageLayout/PageLayout";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout></PageLayout>}>
      <Route index element={<Navigate replace to="/home"></Navigate>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="destination" element={<Destination></Destination>}></Route>
      <Route path="crew" element={<Crew></Crew>}></Route>
      <Route path="technology" element={<Technology></Technology>}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
