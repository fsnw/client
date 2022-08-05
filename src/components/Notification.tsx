import Avatar from "@mui/material/Avatar";

export default function Notification(props: any)
{
    return <div className={"flex gap-3"}>
        <Avatar sx={{width: 30, height: 30}} alt={props.interactiveUser} src="/static/images/avatar/2.jpg" />
        <div>
            <span className={"font-black text-white"}>{props.interactiveUser}</span> {props.message} 
            <div className={"inline-flex text-sm font-black"}>----- {props.createAt}</div>
        </div>
    </div>
}