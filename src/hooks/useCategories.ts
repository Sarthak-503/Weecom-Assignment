// src/hooks/useCategories.ts
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/utils/api';
import { Category } from '@/types';

export const useCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};