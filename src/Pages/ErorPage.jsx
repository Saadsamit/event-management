import { Link } from "react-router-dom";

const ErorPage = () => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen space-y-5">
            <h1 className="text-8xl font-bold text-headerColor">404</h1>
            <p className="text-3xl">ERROR - PAGE NOT FOUND</p>
            <Link to="/" className="capitalize MyBtn btn">go back to home</Link>
        </div>
    );
};

export default ErorPage;