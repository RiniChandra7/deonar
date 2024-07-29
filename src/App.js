import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Routes, Navigate } from 'react-router-dom';
import CustomSidebar from './components/CustomSidebar';
import { cityList, langList, securityCheckMenuItems } from './constants/menuItems';
import Header from './components/Header';
import Arrival from './components/securityCheckComponents/Arrival';
import Removal from './components/securityCheckComponents/Removal';
import ParkingFee from './components/securityCheckComponents/ParkingFee';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header cityList={cityList} langList={langList} userName={"User"} />
      <div className="flex flex-grow mt-16">
        <CustomSidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          menuItems={securityCheckMenuItems}
          menuName="Security Check"
        />
        <main className="flex-grow p-4">
            <Routes>
              <Route path="/arrival" element={<Arrival />} />
              <Route path="/removal" element={<Removal />} />
              <Route path="/parking-fee" element={<ParkingFee />} />
              <Route path="/" element={<Navigate to="/arrival" />} />
            </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
