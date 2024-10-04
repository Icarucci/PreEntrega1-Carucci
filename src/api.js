/* Utilizando Mockapi */


import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get("https://66d6ed62006bfbe2e64f1e2d.mockapi.io/api/v1/productos");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export const getProductsById = async (productId) => {
    try {
        const products = await getProducts();
        return products.find(prod => prod.id === productId);
        
    } catch (error) {
        console.error("Error con fech:", error);
        return null;
    }
}

export const getProductsByCategory = async (productCategory) => {
    try {
        const products = await getProducts();

        const lowercasedCategory = productCategory.toLowerCase();

        const filteredProducts = products.filter(prod => Object.values(prod).some(prop => typeof prop === 'string' && prop.toLowerCase().includes(lowercasedCategory)
            )
        );

        return filteredProducts;

    } catch (error) {
        console.error("Error fetching productos por categoria:", error);
        return null;
    }
}

