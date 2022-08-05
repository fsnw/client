import axios from "axios";
import {useState, useEffect} from "react";

import { Link, useNavigate } from "react-router-dom";
import UserSession from "helpers/UserSession";


export default function SignupForm()
{
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function signup()
    {
        const newUser = {
            username: username,
            password: password,
            email: email
        }
        axios.post(`https://localhost:7255/api/Users`, newUser)
            .then(res=>{
                UserSession.set(username);
                navigate('/');
            })
    }

    return <div className={"flex flex-col w-[230px] gap-7 justify-center items-center"}>
        <div className={"text-white text-4xl font-black"}>SIGN UP</div>
        <label htmlFor="" className={"flex w-full flex-col gap-3"}>
            <span>email</span>
            <input type="email" onChange={(event) => setEmail(event.target.value)} className={"w-auto h-[35px] rounded-3xl"}/>
        </label>
        <label htmlFor="" className={"flex w-full flex-col gap-3"}>
            <span>user name</span>
            <input type="text" onChange={(event) => setUsername(event.target.value)} className={"w-auto h-[35px] rounded-3xl"}/>
        </label>
        <label htmlFor="" className={"flex w-full flex-col gap-3"}>
            <span>password</span>
            <input type="text" onChange={(event) => setPassword(event.target.value)} className={"w-auto h-[35px] rounded-3xl"}/>
        </label>


        <div className={"text-[10px] text-white"}>user police</div>

        <div className={"flex gap-3 w-full"}>
            
            <button className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                <Link to="/Login">
                    login
                </Link>
            </button>
            <button onClick={signup} className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                sign up
            </button>
        </div>
    </div>;
}