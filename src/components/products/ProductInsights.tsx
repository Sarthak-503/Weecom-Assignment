// src/components/Products/ProductInsights.tsx
import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  useTheme
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { Product } from "@/types";

// Define colors for charts
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Paper elevation={3} sx={{ p: 1, backgroundColor: "background.paper" }}>
        <Typography variant="body2" fontWeight="bold">
          {label}
        </Typography>
        {payload.map((entry: any, index: number) => (
          <Typography key={index} variant="body2" color={entry.color}>
            {entry.name}: {entry.value}
          </Typography>
        ))}
      </Paper>
    );
  }
  return null;
};

interface ProductInsightsProps {
  products: Product[];
  loading: boolean;
}

const ProductInsights: React.FC<ProductInsightsProps> = ({
  products,
  loading,
}) => {
  const theme = useTheme();

  // Calculate insights data
  const categoryData = React.useMemo(() => {
    const categoryMap: Record<string, number> = {};

    products.forEach((product) => {
      if (categoryMap[product.category]) {
        categoryMap[product.category] += 1;
      } else {
        categoryMap[product.category] = 1;
      }
    });

    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value,
    }));
  }, [products]);

  const stockData = React.useMemo(() => {
    const inStock = products.filter((p) => p.stock > 10).length;
    const lowStock = products.filter(
      (p) => p.stock > 0 && p.stock <= 10
    ).length;
    const outOfStock = products.filter((p) => p.stock === 0).length;

    return [
      { name: "In Stock", value: inStock },
      { name: "Low Stock", value: lowStock },
      { name: "Out of Stock", value: outOfStock },
    ];
  }, [products]);

  const priceRangeData = React.useMemo(() => {
    const ranges = [
      { name: "Under $10", min: 0, max: 10, count: 0 },
      { name: "$10-$50", min: 10, max: 50, count: 0 },
      { name: "$50-$100", min: 50, max: 100, count: 0 },
      { name: "$100-$500", min: 100, max: 500, count: 0 },
      { name: "Over $500", min: 500, max: Infinity, count: 0 },
    ];

    products.forEach((product) => {
      for (const range of ranges) {
        if (product.price >= range.min && product.price < range.max) {
          range.count++;
          break;
        }
      }
    });

    return ranges.map(({ name, count }) => ({ name, count }));
  }, [products]);

  const ratingData = React.useMemo(() => {
    const ratings = [1, 2, 3, 4, 5];
    return ratings.map((rating) => ({
      name: `${rating} Star`,
      count: products.filter((p) => Math.floor(p.rating) === rating).length,
    }));
  }, [products]);

  // Calculate summary metrics
  const metrics = React.useMemo(() => {
    const totalProducts = products.length;
    const totalValue = products.reduce(
      (sum, product) => sum + product.price * product.stock,
      0
    );
    const avgRating =
      products.reduce((sum, product) => sum + product.rating, 0) /
        totalProducts || 0;
    const avgPrice =
      products.reduce((sum, product) => sum + product.price, 0) /
        totalProducts || 0;

    return {
      totalProducts,
      totalValue,
      avgRating: parseFloat(avgRating.toFixed(1)),
      avgPrice: parseFloat(avgPrice.toFixed(2)),
      categories: categoryData.length,
    };
  }, [products, categoryData]);

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>Loading insights...</Typography>
      </Box>
    );
  }

  if (products.length === 0) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>No product data available for insights.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 1, md: 2 } }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Product Insights
      </Typography>

      {/* Summary Metrics */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 2.4 }}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="primary">
                {metrics.totalProducts}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Products
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 2.4 }}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="primary">
                ${metrics.totalValue.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Inventory Value
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 2.4 }}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="primary">
                {metrics.avgRating}/5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 2.4 }}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="primary">
                ${metrics.avgPrice}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Price
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 2.4 }}>
          <Card elevation={2}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="primary">
                {metrics.categories}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Categories
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Products by Category */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Products by Category
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                data={categoryData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill={theme.palette.primary.main} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Stock Status */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Stock Status
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={stockData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(Number(percent) * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stockData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Price Distribution */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Price Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                data={priceRangeData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill={theme.palette.secondary.main} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Rating Distribution */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Rating Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                data={ratingData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke={theme.palette.info.main}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductInsights;
