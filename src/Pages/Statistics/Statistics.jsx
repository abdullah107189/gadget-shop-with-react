import { useLoaderData } from "react-router-dom";
import UseBanner from "../../Hooks/useBanner";
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { Helmet } from "react-helmet-async";

const Statistics = () => {
    const datas = useLoaderData()

    return (
        <div className="">
            <Helmet>
                <title>Statistics | Gadget-shop</title>
            </Helmet>
            <UseBanner
                title={"Statistics"}
                btn={false}
            ></UseBanner>
            <div className="max-w-[1440px] mx-auto">
                <h1 className="text-3xl font-bold my-5">Statistics</h1>

                <div className="flex justify-center">
                    <ComposedChart
                        width={1440}
                        height={400}
                        data={datas}
                        margin={{
                            top: 20,
                            right: 80,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" label={{ value: 'Products', position: 'insideBottomRight', offset: -10 }} />
                        <YAxis dataKey="price" label={{ value: 'Price', angle: -90, offset: -10, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#EFE1FB" stroke="node" />
                        <Bar dataKey="price" barSize={20} fill="#9538E2" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;