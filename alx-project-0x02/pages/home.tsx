import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import Header from "@/components/layout/Header";
const Home = () => {
    const [data, setData] = useState<CardProps | null>(null);
    const handleFormSubmit = (data: CardProps) => {
        setData(data);
    };
    return (
        <div>
            <Header />
            <PostModal onSubmitData={handleFormSubmit} />
            {data && <Card
            title={data.title}
            content={data.content} />}
            <Card title="good doctor" content="nice here"
/>            <h3>home page</h3>
        </div>
    );
};

export default Home;