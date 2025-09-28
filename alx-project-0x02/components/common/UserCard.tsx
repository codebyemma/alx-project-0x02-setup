import { UserProps } from "@/interfaces";

const PostCard: React.FC<UserProps> = ({name, email, address}) => {
    return(
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        <p>{address?.street}, {address?.city}, {address?.zipcode}, {address?.suite}</p>
        </div>
    );
};

export default PostCard;
