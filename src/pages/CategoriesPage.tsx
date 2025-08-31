// src/pages/CategoriesPage.tsx
import React from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import CategoryCards from '@/components/categories/CategoryCards';
import { useCategories } from '@/hooks/useCategories';

const CategoriesPage: React.FC = () => {
  const { data: categories, error, isLoading } = useCategories();

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Categories
      </Typography>
      <CategoryCards
        categories={categories || []}
        loading={isLoading}
        error={error?.message || null}
      />
    </Container>
  );
};

export default CategoriesPage;