import Avatar from "@mui/material/Avatar";

export default function Comment(props: any)
{
    return <div className={"flex gap-3"}>
        <Avatar sx={{width: 30, height: 30}} alt={props.interactiveUser} src="/static/images/avatar/1.jpg" />
        <div>
            <span className={"font-black text-white"}>{props.interactiveUser}</span> {props.content}
            <div className={"text-sm font-black text-gray-300"}>----- {props.createAt}</div>
        </div>
    </div>;
}