import CommentContainer from "containers/CommentContainer";
import Post from "../components/Post";
import Avatar from "@mui/material/Avatar";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import UserSession from "helpers/UserSession";

export default function CommentSection()
{
    const {postId} = useParams();

    const [commentList, setCommentList] = useState([]);

    const [newComment, setNewComment] = useState("");

    const [post, setPost] = useState({
        id: 0,
        postId: 0,
        image: "",
        userId: "",
        content: ""
    });
    
    useEffect(() => {
        axios.get(`https://localhost:7255/api/Posts/${postId}`)
            .then(res => {
                setPost(res.data); 
            });
    }, []);

// get comment khi pointer đến trang

    function initComment()
    {
        axios.get(`https://localhost:7255/api/Comments`)
            .then(res => {                
                const data: any = res.data.filter((comment: any) => comment.postId == postId);
                data.sort((a: any, b: any) => {
                    return b.id - a.id;
                });

                console.log(data)
                setCommentList(data); 
            });
    }


    useEffect(() => {
        initComment()
    }, []);


    function sendComment()
    {
        const dataComment = {
            postId: postId,
            interactiveUser: JSON.parse(UserSession.get()!),
            content: newComment
        }
//post comment
        axios.post(`https://localhost:7255/api/Comments`, dataComment)
            .then(res => {
                initComment()

                const dataNot = {
                    postId: postId,
                    interactiveUser: JSON.parse(UserSession.get()!),
                    message: `has commented "${newComment}" on your post`,
                    isRead: false
                }
//post notification
                axios.post('https://localhost:7255/api/Notifications', dataNot)
                .then(res => { 
                    console.log(res);
                })
            });
    }


    return <div className={"p-4 flex flex-col gap-7"}>
        <div className={"flex items-center gap-3"}>
            <Avatar sx={{width: 30, height: 30}} alt={post.userId} src="/static/images/avatar/1.jpg" />
            <label className={"w-full flex py-3 px-6 gap-3 bg-white rounded-3xl text-black"} htmlFor="">
                <input onChange={(event) => setNewComment(event.target.value)} className={"w-full border-none outline-none"} type="text"/>
                <button onClick={sendComment} >Send</button>
            </label>
        </div>
        <div className="post-content">
            <span className={"font-black text-white"}>{post.userId}: </span>
            {post.content}
            <img className="pt-12" src={post.image} alt="" />
        </div>
        <CommentContainer commentList={commentList}/>
    </div>;
}