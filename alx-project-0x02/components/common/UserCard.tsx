import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>
                {address?.street}
                {address?.suite ? `, ${address.suite}` : ""}
                {address?.city ? `, ${address.city}` : ""}
                {address?.zipcode ? `, ${address.zipcode}` : ""}
            </p>
        </div>
    );
};

export default UserCard;
