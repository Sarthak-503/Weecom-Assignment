// src/utils/api.ts
import { Product, ProductsResponse, Category } from '@/types';

const API_BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (
  limit: number = 10,
  skip: number = 0,
  search?: string,
  category?: string
): Promise<ProductsResponse> => {
  let url = `${API_BASE_URL}?limit=${limit}&skip=${skip}&delay=1000`;
  
  if (search) {
    url = `${API_BASE_URL}/search?q=${search}&limit=${limit}&skip=${skip}&delay=1000`;
  } else if (category) {
    url = `${API_BASE_URL}/category/${category}?limit=${limit}&skip=${skip}&delay=1000`;
  }
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/${id}?delay=1000`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_BASE_URL}/categories?delay=1000`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

export const createProduct = async (product: Partial<Product>): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Failed to create product');
  }
  return response.json();
};

export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Failed to update product');
  }
  return response.json();
};

export const deleteProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete product');
  }
  return response.json();
};