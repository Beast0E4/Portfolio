import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";

function MainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    );
  }
  
  export default MainRoutes;