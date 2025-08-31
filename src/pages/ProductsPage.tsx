// src/pages/ProductsPage.tsx
import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Typography,
  Alert,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import ProductTable from '@/components/products/ProductsTable';
import ProductForm from '@/components/products/ProductsForm';
import { useProducts, useCreateProduct, useUpdateProduct, useDeleteProduct } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';
import { Product, ProductFormData } from '@/types';

const ProductsPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  
  const limit = 10;
  const skip = page * limit;
  
  const { data, error, isLoading } = useProducts(limit, skip, search, category);
  const { data: categoriesData } = useCategories();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const deleteMutation = useDeleteProduct();

  const handleAddProduct = () => {
    setEditingProduct(undefined);
    setIsFormOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleDeleteProduct = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteMutation.mutateAsync(id);
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  const handleSubmit = async (formData: ProductFormData) => {
    try {
      if (editingProduct) {
        await updateMutation.mutateAsync({ id: editingProduct.id, data: formData });
      } else {
        await createMutation.mutateAsync(formData);
      }
      setIsFormOpen(false);
      setEditingProduct(undefined);
    } catch (error) {
      console.error('Failed to save product:', error);
    }
  };

  const handleSearch = (query: string) => {
    setSearch(query);
    setPage(0);
  };

  const handleCategoryFilter = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setPage(0);
  };

  const handlePageChange = (newSkip: number) => {
    setPage(Math.floor(newSkip / limit));
  };

  const categoriesList = categoriesData?.map(cat => cat.name) || [];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Products
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Box>

      {(error || deleteMutation.isError || createMutation.isError || updateMutation.isError) && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error?.message || 
           deleteMutation.error?.message || 
           createMutation.error?.message || 
           updateMutation.error?.message}
        </Alert>
      )}

      <ProductTable
        products={data?.products || []}
        total={data?.total || 0}
        skip={skip}
        limit={limit}
        loading={isLoading}
        error={error?.message || null}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        categories={categoriesList}
        selectedCategory={category}
      />

      <ProductForm
        open={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingProduct(undefined);
        }}
        onSubmit={handleSubmit}
        product={editingProduct}
        categories={categoriesList}
        isLoading={createMutation.isPending || updateMutation.isPending}
      />
    </Container>
  );
};

export default ProductsPage;