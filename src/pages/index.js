import { useLoaderData, Form } from "react-router-dom"
import Post from "../components/post"

const Index = (props) => {
    const todos = useLoaderData()
    console.log(todos)
    return <> 
    <div style={{textAlign: "center"}}>
        <h2>Create a To-do</h2>
        <Form action="/create" method="post">
            <input type="text" name="subject" placeholder="subject"/>
            <input type="text" name="details" placeholder="details"/>
            <button>Create New To-do</button>
        </Form>
    </div>
    {todos.map((post) => <Post key={post.id} post={post}/>)}
    
    </>
}

export default Index