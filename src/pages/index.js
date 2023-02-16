import { useLoaderData } from "react-router-dom"
import Post from "../components/post"

const Index = (props) => {
    const todos = useLoaderData()
    console.log(todos)
    return todos.map((post) => <Post key={post.id} post={post}/>)
}

export default Index