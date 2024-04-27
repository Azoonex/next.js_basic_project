import { checkDataFetch } from "@/src/errorHanding/checkdataFetch"
import { useEffect, useState } from "react"

export default function PostPageFetch() {
    const [valuePost,setValuePost] = useState([])
    const [isLoading,setIsLoadin] = useState(false)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                return response.json()
                setIsLoadin(true)
            })
            .then(json => setValuePost((i) => {
                return i.slice(1,30)
            })).catch((err)=>{
                setIsLoadin(false)
                console.log(err)
            })
            
    },[])

    console.log(valuePost)
    
    return(
        <h1>
            {valuePost.map((i,index)=> (
             <h3 key={i.id}>{i.title}</h3>
            ))}
        </h1>
    )
}