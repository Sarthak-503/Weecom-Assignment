// src/AppRoutes.tsx
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductsPage from "@/pages/ProductsPage";
import CategoriesPage from "@/pages/CategoriesPage";
import { useState } from "react";

const AppRoutes = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      
      {/* Spacer to push content below fixed AppBar */}
      <Box sx={(theme) => theme.mixins.toolbar} />

      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            p: 3,
            width: { md: `calc(100% - 240px)` },
            ml: { md: '240px' },
          }}
        >
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default AppRoutes;