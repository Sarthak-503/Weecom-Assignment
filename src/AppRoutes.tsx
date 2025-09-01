// src/AppRoutes.tsx
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useState, Suspense, lazy } from "react";

// Lazy load pages
const ProductsPage = lazy(() => import("@/pages/ProductsPage"));
const CategoriesPage = lazy(() => import("@/pages/CategoriesPage"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default AppRoutes;