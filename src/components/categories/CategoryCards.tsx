// src/components/Categories/CategoryCards.tsx
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Skeleton,
  Box,
} from "@mui/material";
import { Category } from "@/types";

interface CategoryCardsProps {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({
  categories,
  loading,
  error,
}) => {
  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <Card>
                <CardContent>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" height={20} />
                </CardContent>
              </Card>
            </Grid>
          ))
        : categories.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={category.slug}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.slug}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
    </Grid>
  );
};

export default CategoryCards;
