import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductsPage from "@/pages/ProductsPage";
import CategoriesPage from "@/pages/CategoryPage";
import { useState } from "react";
const drawerWidth = 240;

const AppRoutes = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  <Box sx={{ display: "flex" }}>
    <Header handleDrawerToggle={handleDrawerToggle} />
    <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        mt: "64px",
      }}
    >
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Box>
  </Box>;
};

export default AppRoutes;
