import Post from "components/Post";
import UserSession from "helpers/UserSession";
import axios from "axios";
import { useEffect, useState } from "react";


export default function PostContainer(props: any)
{
    const [postList, setPostList] = useState([]);
    const [postLoves, setPostLoves] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7255/api/PostLofes')
        .then((res: any) => {
            setPostLoves(res.data)
        });
    }, []);


    useEffect(() => {
        axios.get('https://localhost:7255/api/Posts')
            .then((res: any) => {
                let data = res.data;
                data.sort((a: any, b: any) => {
                    return b.id - a.id;
                });

                setPostList(data);
            });
    }, []);


    return <div className={"flex flex-col gap-5"}>
        {postList.map((post: any, index: number) => {
            let loveId;

            const loveState = postLoves.some((love: any) => {
                loveId = love.id;
                return love.postId == post.id && love.interactiveUser == JSON.parse(UserSession.get()!);
            });

            let test = 0;

            postLoves.forEach((l: any)=>{
                if (l.postId == post.id)
                {
                    test++;
                }
            })

            return <Post 
                loveAmount={test}
                loveId={loveId}
                postId={post.id}
                loveState={loveState}
                userId={post.userId}
                content={post.content}
                key={post.id}
                image={post.image}/>
        })}
    </div>
}