import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './Layout.css';
import { useSelector } from 'react-redux';
import HoldingDrawer from "../HoldingDrawer/HoldingDrawer";

function Layout() {
  const selectedSongs = useSelector((state) => state.selectedSongs)

  return (
    // <div className={`layout ${selectedSongs.length > 0 ? 'holdingDrawerOpen' : ''}`}>
    <div className=''>
      <HoldingDrawer />
      <NavBar />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;