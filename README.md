# 🛍️ Product Dashboard

A modular and scalable **React + TypeScript** application built with **Material-UI**.  
The project demonstrates a modern architecture using **React Query**, **custom hooks**, and **component-driven design** for managing products and categories via the [DummyJSON API](https://dummyjson.com).

---

## 🚀 Approach & Architecture

### 🔹 Component Architecture
- **Presentation Components**: Focus on UI rendering  
  _Examples: `ProductTable`, `CategoryCards`_
- **Container Components**: Handle business logic & data  
  _Examples: `ProductsPage`, `CategoriesPage`_
- **Custom Hooks**: Abstract data fetching & state management  
  _Examples: `useProducts`, `useCategories`_

---

## 🗂️ State Management

- **React Query** → For server state management (caching, background updates, pagination)  
- **React State** → For local UI interactions & form management  
- **URL State** → Query parameters and routing for filtering & navigation  

---

## 🔄 Data Flow

1. **API Layer** → Centralized API utilities with typed responses  
2. **Custom Hooks** → React Query hooks for fetching & mutations  
3. **Components** → Consume hooks and render UI  
4. **User Actions** → Trigger mutations → Auto refetch & UI update  

---

## ⚡ Performance Optimizations

- **Pagination** → Efficient product loading with `limit/skip` params  
- **Caching** → React Query prevents redundant requests  
- **Lazy Loading** → Components/data only loaded when needed  
- **Memoization** → `React.memo` & `useMemo` for expensive computations  

---

## 📱 Responsive Design

- **MUI Grid System** → Adaptive layouts for all screen sizes  
- **Mobile-First** → Optimized for mobile with progressive enhancement  
- **Touch-Friendly** → Larger touch targets & smooth interactions  

---

## 🛡️ Error Handling

- **React Error Boundaries** → Graceful component error recovery  
- **API Error Handling** → Structured responses in API layer  
- **Loading States** → Skeletons & spinners for improved UX  

---

## 📊 API Integration

Using [DummyJSON API](https://dummyjson.com):

- `GET /products` → Fetch products (supports pagination & filtering)  
- `GET /products/{id}` → Fetch product details  
- `POST /products/add` → Create a product  
- `PUT /products/{id}` → Update a product  
- `DELETE /products/{id}` → Delete a product  
- `GET /categories` → Fetch all categories  

---

## 🎨 Theming

- **Material-UI Theming** with:
  - Custom color palette  
  - Responsive typography  
  - Consistent spacing (theme units)  
  - Ready for **Dark/Light mode**  

---

## 📦 Tech Stack

- **React + TypeScript**
- **Material-UI (MUI)**
- **React Query**
- **React Router**
- **DummyJSON API**

---

## 🖼️ Screenshots

_(Add screenshots or GIFs of your app here)_

---

## 🏗️ Setup & Installation

```bash
# Clone repository
git clone https://github.com/your-repo/product-dashboard.git

# Navigate into project
cd product-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
