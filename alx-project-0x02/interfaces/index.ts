export interface CardProps  {
    title: string;
    content: string
};

export interface SignupFormProps {
    onSubmitData: (data: CardProps) => void;
};
type Size = "small" | "medium" | "large";
type Shape = "rounded-sm" | "rounded-md" | "rounded-full";
export interface ButtonProps {
    size: Size;
    shape: Shape;
    title: string
};

export interface PostProps {
    title: string
    content: string
    userId: string
}

export interface UserProps {
    name: string, 
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
}
}