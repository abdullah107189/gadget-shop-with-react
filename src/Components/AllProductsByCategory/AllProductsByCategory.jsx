import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProductCard from "../SIngleProductCard/SingleProductCard";

const AllProductsByCategory = () => {
    const loadAllProducts = useLoaderData()
    const [allData, setAllData] = useState(loadAllProducts || [])
    const { category } = useParams()
    useEffect(() => {
        if (category) {
            const filterData = [...loadAllProducts].filter(items => items.category === category)
            setAllData(filterData)
        }
        else {
            setAllData(loadAllProducts.slice(0, 12))
        }
    }, [loadAllProducts, category])
    return (
        <div>
            <div className="grid  md:grid-cols-3 gap-3">
                {
                    allData.map(items => <SingleProductCard
                        key={items.product_id}
                        items={items}
                    ></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProductsByCategory;