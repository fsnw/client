import Comment from "components/Comment";
import Notification from "components/Notification";

export default function CommentContainer(props: any)
{
    return <div className={"flex flex-col"}>
        {props.commentList.map((comment: any, index: number) => {
            return <div key={index}>
                <Comment {...comment}/>
                <div className={"w-full h-[1px] bg-gray-500 my-5"}></div>
            </div>;
        })}
    </div>;
}