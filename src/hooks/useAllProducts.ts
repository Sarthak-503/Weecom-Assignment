// src/hooks/useAllProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/utils/api';
import { ProductsResponse } from '@/types';

export const useAllProducts = (search?: string, category?: string) => {
  return useQuery<ProductsResponse, Error>({
    queryKey: ['all-products', search, category],
    queryFn: () => fetchProducts(0, 0, search, category),
  });
};