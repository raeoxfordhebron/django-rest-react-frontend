import { Link, useLoaderData } from "react-router-dom"
import { ShowLoader } from "../loaders"

const Show = (props) => {
    const post = useLoaderData()

    // styles
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }
    return <div style={div}>
        <h1>{post.subject}</h1>
        <h2>{post.details}</h2>
        <Link to="/"><button>Go Back</button></Link>
    </div>
}

export default Show