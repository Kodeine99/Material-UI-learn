import React from 'react';
import ProductCards from './ProductCards';
import { Grid } from '@material-ui/core/'
import ProductList from './ProductList';

function ProductsContainer() {
    const getProductList = (ProductListObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <ProductCards {...ProductListObj} />
            </Grid>
        );
    }
    return (
        <Grid container spacing={4}>
            {ProductList.map(ProductListObj => getProductList(ProductListObj))}
        </Grid>
    );
}

export default ProductsContainer;
