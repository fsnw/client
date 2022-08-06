import {RiHomeLine} from  "react-icons/ri"
import {TbMessageCircle2, TbNotification} from "react-icons/tb";
import {BsCloudUpload} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";

import {Link} from "react-router-dom";


// import styles from "styles/KLstyle.csss";



export default function Navigation(props: any)
{
    return <div className={"flex justify-around text-3xl fixed bottom-0 w-full py-3 border-0 border-t border-t-white bg-black"}>
        <a href="/"><RiHomeLine/></a>
        <a href="/upload"><BsCloudUpload/></a>
        <a href="/notification"><TbNotification/></a>
        <a href="/hihi"><AiOutlineUser/></a>
    </div>;
}