import url from "./url";
import { redirect } from "react-router-dom";

export async function CreateAction ({request}){
    // get the form data
    const formData = await request.formData()

    // construct new to-do
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route in backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    return redirect("/")
}

export async function UpdateAction ({request, params}){
    // get the form data
    const formData = await request.formData()

    // construct new to-do
    const updatedTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route in backend
    await fetch(url + params.id +"/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })
    return redirect("/")
}