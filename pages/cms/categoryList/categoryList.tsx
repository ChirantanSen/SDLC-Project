// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function CategoryList() {
//   const { categoryListData } = useSelector((state) => state.Cms);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(categoryList());
//   }, []);
//   console.log(categoryListData, "categoryListData");

//   return <></>;
// }

// export default CategoryList;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// MUI imports
import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function CategoryList() {
  const dispatch = useDispatch();
  const { categoryListData, loading, error } = useSelector((state) => state.Cms);

  useEffect(() => {
    dispatch(categoryList());
  }, [dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" mt={3}>
        {error}
      </Typography>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Category List
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Slug</strong></TableCell>
              <TableCell><strong>Created At</strong></TableCell>
              <TableCell><strong>Updated At</strong></TableCell>
              <TableCell><strong>Deleted?</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categoryListData?.map((cat) => (
              <TableRow key={cat._id}>
                <TableCell>{cat.name}</TableCell>
                <TableCell>{cat.slug}</TableCell>
                <TableCell>
                  {new Date(cat.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(cat.updatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{cat.isDeleted ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CategoryList;
