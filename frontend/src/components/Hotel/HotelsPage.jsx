import React from "react";
import Navbar from "../shared/Navbar";
import SideNavbarAdmin from "../Admin Dashboard/SideNavbarAdmin";
import HotelList from "../Hotel/HotelList";
import { useSelector } from "react-redux";

const HotelsPage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      {user?.role === "admin" ? <SideNavbarAdmin /> : <Navbar />}
      <HotelList />
    </>
  );
};

export default HotelsPage;
