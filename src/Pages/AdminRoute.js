import { Route, Router, Routes } from "react-router-dom";
import Admin from "./Admin";
import Userdetails from "./Userdetails";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin/>}/>
        <Route path="/userdetails/:id" element={<Userdetails/>}/>
      </Routes>
    </>
  );


};
export default AdminRoutes;
