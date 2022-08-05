import {RiHomeLine} from  "react-icons/ri"
import {TbMessageCircle2, TbNotification} from "react-icons/tb";
import {AiOutlineUser} from "react-icons/ai";

import {Link} from "react-router-dom";


// import styles from "styles/KLstyle.csss";



export default function Navigation(props: any)
{
    return <div className={"flex justify-around text-3xl fixed bottom-0 w-full py-3 border-0 border-t border-t-white bg-black"}>
        <Link to="/"><RiHomeLine/></Link>
        <Link to="/upload"><TbMessageCircle2/></Link>
        <Link to="/notification"><TbNotification/></Link>
        <Link to="/hihi"><AiOutlineUser/></Link>
    </div>;
}