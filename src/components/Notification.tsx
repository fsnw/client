import Avatar from "@mui/material/Avatar";

import {useState, useEffect} from "react";

export default function Notification(props: any)
{
    const [classes, setClasses] = useState("");

    useEffect(()=>{
        if(!props.isRead)
        {
            setClasses("bg-[#535754]");
        }
    }, []);

    return <a href={`/comments/${props.postId}`} className={`flex gap-3 py-[10px] px-[10px] ${classes}`}>
        <Avatar sx={{width: 30, height: 30}} alt={props.interactiveUser} src="/static/images/avatar/2.jpg" />
        <div>
            <span className={"font-black text-white"}>{props.interactiveUser}</span> {props.message} 
            <div className={"inline-flex text-sm font-black"}>----- {props.createAt}</div>
        </div>
    </a>
}