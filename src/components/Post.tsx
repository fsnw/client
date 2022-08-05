import Avatar from "@mui/material/Avatar";

import {FiMoreHorizontal} from "react-icons/fi";
import {MdFavoriteBorder} from "react-icons/md";
import {MdOutlineModeComment} from "react-icons/md";
import {AiOutlineSend} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";

import { useState, useEffect } from "react";
import axios from "axios";
import UserSession from "helpers/UserSession";
import { Link, useNavigate } from "react-router-dom";


export default function Post(props: any)
{
    const [love, setLove] = useState(props.loveState);
    const [loveAmount, setLoveAmount] = useState(props.loveAmount);

    const onUnLove = () =>
    {
        setLove(!love);

        setLoveAmount(loveAmount-1);

        axios.delete(`https://localhost:7255/api/PostLofes/${props.loveId}`)
            .then((res: any) => {
                console.log(res.data);
            });
    }

    const onLove = () =>
    {        
        setLove(!love);

        setLoveAmount(loveAmount+1);

        const data = {
            postId: props.postId,
            interactiveUser: JSON.parse(UserSession.get()!),
        }

        axios.post('https://localhost:7255/api/PostLofes', data)
            .then((res: any) => {
                console.log(res.data);

                const dataNot = {
                    postId: props.postId,
                    interactiveUser: JSON.parse(UserSession.get()!),
                    message: `has loved your post so much`,
                    isRead: false
                }

                axios.post('https://localhost:7255/api/Notifications', dataNot)
                .then(res => { 
                    console.log(res);
                })
            });
    }

    return <div>
        <div className={"p-3 flex justify-between items-center"}>
            <div className={"flex items-center gap-2"}>
                <Avatar sx={{width: 30, height: 30}} alt={props.userId} src="/static/images/avatar/1.jpg" />
                <span className={"font-black text-white"}>{props.userId}</span>
            </div>
            <FiMoreHorizontal/>
        </div>
        <div>
            <img
                src={props.image}
                alt=""/>
        </div>
        <div className={"p-3 flex flex-col gap-3"}>
            <div className={"flex justify-between items-center text-3xl"}>
                <ul className={"flex justify-between items-center gap-5"}>
                    <li>
                        {
                            love
                            ? <MdFavoriteBorder className={"text-[red]"} onClick={()=>onUnLove()}/>
                            : <MdFavoriteBorder onClick={()=>onLove()}/>
                        }
                    </li>
                    <li><Link to={`/comments/${props.postId}`} ><MdOutlineModeComment/></Link></li>
                    <li><AiOutlineSend/></li>
                </ul>
                <div>
                    <BsBookmark/>
                </div>
            </div>
            <div className={""}>
                {loveAmount} loves
            </div>
            <div className={"post-content"}>
                <span className={"font-black text-white"}>{props.userId}: </span>
                {props.content}
            </div>
        </div>
    </div>;
}