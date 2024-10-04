import axios from 'axios';
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import ProductView from './ProductView';

const Product = () => {
    const [product, setProduct] = useState();
    const [hasilProduct, setHasilProduct] = useState();
    const [cari, setCari] = useSearchParams();
    const PencarianProduct = cari.get("Pencarianproduct");

    const ambilProduct = async () => {
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );
        const data = await response.data;
        setProduct(data);
    };

    useEffect(() => {
        if (!PencarianProduct) {
            ambilProduct();
        } else {
            ubahCari(PencarianProduct);
        }
    }, [PencarianProduct]);

    const ubahCari = async (input) => {
        setCari({ PencarianProduct: input });

        const response= await axios.get(
            "https://fakestoreapi.com/products" + PencarianProduct
        );
        const data = await response.data;
        setHasilProduct(data);
    };

    console.log(hasilProduct);
    const hasilFilter = PencarianProduct ? hasilProduct : product;

  return (
    <ProductView
    PencarianProduct={PencarianProduct}
    hasilProduct={hasilProduct}
    hasilFilter={hasilFilter}
    ubahCari={ubahCari}
    />
  );
};

export default Product;