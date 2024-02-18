import moment from 'moment';
import React, { useEffect, useState } from 'react';

export default function Comment({ comment }) {
  const [user, setUser] = useState({});
  console.log(user);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        if (!comment || !comment.userId) {
          return; // Si comment.userId no está definido, no hagas la llamada a la API
        }
        
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
  }, [comment]);

  return (
    <div className="flex p-4 border-b dark:border-gray-600 text-sm">
        <div className=" flex-shrink-0 mr-3">
            <img className='w-10 h-10 rounded-full bg-gray-200' src={user.profilePicture} alt={user.username} />
        </div>
        <div className=" flex-1">
            <div className=" flex items-center mb-1">
                <span className='font-bold mr-1 text-xs truncate'>{user ? `@${user.username}`:"anonymus user"} </span>
                <span className='text-gray-500 text-xs '>{moment(comment.createdAt).fromNow()}</span>
            </div>
            <p className='mb-2'>{comment.content}</p>
        </div>
    </div>
  )
}
