import Notification from "../components/Notification";
import Post from "../components/Post";
import { useState, useEffect } from "react"
import axios from "axios";
import UserSession from "helpers/UserSession";


export default function NotificationContainer()
{

    const [notificationList, setNotificationList] = useState([]);


    useEffect(() => {
        axios.get('https://localhost:7255/api/Notifications')
            .then(notRes => {
                console.log(notRes.data);
                axios.get('https://localhost:7255/api/Posts')
                    .then((postRes: any) => {
                        let data: any = [];
                        notRes.data.forEach((not: any) => {
                            postRes.data.forEach((post: any) => {
                                if(post.userId == JSON.parse(UserSession.get()!) && not.interactiveUser != JSON.parse(UserSession.get()!) && post.id == not.postId) 
                                {
                                    data.push(not);
                                }
                            });
                        });

                        data.sort((a: any, b: any) => {
                            return b.id - a.id;
                        });
                
                        setNotificationList(data);
                    });
            });
    }, []);
    
    // function watchNoti(noti: any)
    // {
    //     console.log(noti)
    //     axios.delete(`https://localhost:7255/api/Notifications/${noti.id}`)
    //         .then((ress) => {
    //             const dataNot = {
                
    //                 postId: noti.postId,
    //                 interactiveUser: noti.interactiveUser,
    //                 message: noti.message,
    //                 isRead: true
    //             }
    //             axios.post('https://localhost:7255/api/Notifications', dataNot)
    //             .then(res => { 
    //                 console.log(res);
    //             });
    //         })
    // }

    return <div className={`flex flex-col pt-3`}>
        {notificationList.map((noti: any, index: number) => {
            return <div key={index}>
                <div><Notification {...noti}/></div>
                <div className={"w-full h-[1px] bg-gray-500 my-2"}></div>
            </div>;
        })}
    </div>;
}