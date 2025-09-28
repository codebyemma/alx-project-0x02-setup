import { useState, ChangeEvent, FormEvent } from "react";
import { CardProps, SignupFormProps } from "@/interfaces";

const PostModal: React.FC<SignupFormProps> = ({onSubmitData}) => {
    const [ data, setData] = useState<CardProps>({
        title: "",
        content: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((pre) => ({
            ...pre,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitData(data)
    };
    return (
        <form onSubmit={handleSubmit}>
            <label >title
            <input 
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange} /></label>
            <label >content
            <input
            type="text"
            name="content"
            value={data.content}
            onChange={handleChange} /></label>
            <button type="submit">submit</button>
        </form>
    );
};

export default PostModal;