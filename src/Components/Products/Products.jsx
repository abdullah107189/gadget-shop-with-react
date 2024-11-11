import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Products = () => {
    const categoriesData = useLoaderData()
    return (
        <div className="relative md:-top-[200px] -top-[100px] pt-4 md:p-0 px-4" id="allProducts">
            <h1 className="text-4xl font-bold text-center mb-12 md:sticky top-[75px] py-3 z-10 bg-white">Explore Cutting-Edge Gadgets</h1>

            <div className="grid md:grid-cols-5 gap-3 ">
                {/* left side  */}
                <div className=" md:col-span-1 ">
                    <div className="shadow-lg border rounded-xl p-3 md:flex flex-col grid grid-cols-2 gap-3 md:sticky top-24 z-10">
                        <NavLink to={`/#allProducts`} className={({ isActive }) => `${isActive ? 'bgPink hover:bgPink hover:text-white text-white' : 'hover:pinkOutletBtn'} p-3 btn rounded-full w-full flex justify-start pl-10`}>All</NavLink>
                        {
                            categoriesData.map(category =>
                                <NavLink
                                    to={`/products/${category.category_name}#allProducts`}
                                    className={({ isActive }) => `${isActive ? 'bgPink hover:bgPink hover:text-white text-white' : 'hover:pinkOutletBtn'} p-3 btn rounded-full w-full flex justify-start pl-10`}
                                    key={category.category_id}
                                >
                                    {category.category_name}</NavLink>)
                        }
                    </div>
                </div>



                {/* right side  */}
                <div className="md:col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default Products;