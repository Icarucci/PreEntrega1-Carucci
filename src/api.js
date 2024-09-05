import axios from "axios";

const getProducts = async () => {
    try {
        const response = await axios.get("https://66d6ed62006bfbe2e64f1e2d.mockapi.io/api/v1/productos");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export default getProducts;