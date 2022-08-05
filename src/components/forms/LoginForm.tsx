import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserSession from "helpers/UserSession";


export default function LoginForm()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();


    useEffect(() =>{
        UserSession.set("");
    }, [])


    function login()
    {
        axios.get(`https://localhost:7255/api/Users`)
            .then(res=>{
                const checker = res.data.some((user: any) => {
                    return user.username === username && user.password === password;
                })

                if(checker) { 
                    UserSession.set(username);
                    navigate('/');
                }
            })
    }


    return <div className={"flex flex-col w-[230px] gap-7 justify-center items-center"}>
        <div className={"text-white text-4xl font-black"}>LOGIN</div>
        <label htmlFor="" className={"flex w-full flex-col gap-3"}>
            <span>user name</span>
            <input name= "user_name" type="text" onChange={(event)=>setUsername(event.target.value)} className={"w-auto h-[35px] rounded-3xl"}/>
        </label>
        <label htmlFor="" className={"flex w-full flex-col gap-3"}>
            <span>password</span>
            <input name= "password" type="password" onChange={(event)=>setPassword(event.target.value)} className={"w-auto h-[35px] rounded-3xl"}/>
        </label>

        <div className={"text-[10px] text-white"}>forgot your pass?</div>

        <div className={"flex gap-3 w-full"}>
            <button className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                <Link to="/signup">
                    sign up
                </Link>
            </button>
            <button type="submit" onClick={login} className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                login
            </button>
        </div>
        
    </div>;
}