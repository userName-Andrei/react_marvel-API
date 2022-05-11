import { Helmet } from "react-helmet";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Page 404"
                    />
                <title>Error 404</title>
            </Helmet>
            <ErrorMessage/>
            <h1 style={{textAlign: "center", marginBottom: 20}}>
                <span style={{color: '#9f0013'}}>404</span> PAGES DOES NOT EXIST
            </h1>
            <h3 style={{textAlign: "center", color: '#9f0013'}}><Link to="/">Back to main page</Link></h3>
        </div>
    );
}

export default NotFoundPage;