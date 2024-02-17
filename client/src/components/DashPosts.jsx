import { Table, TableCell, TableHeadCell, TableRow, Modal, ModalBody, Button  } from "flowbite-react";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {HiOutlineExclamationCircle} from 'react-icons/hi'


export default function DashPosts() {
    const {currentUser} = useSelector((state) => state.user)
    const [userPosts, setUserPosts] = useState([])
    const [showMore, setShowMore] =useState(true);
    const [showModal, setShowModal] = useState(false);
    const [postIdToDelete ,setPostIdToDelete] = useState('');
    console.log(userPosts);
    useEffect (() => {
        const fetchPosts = async () =>{ 
            try {
                const res = await fetch(`/api/post/getpost?userId=${currentUser._id}`)
                const data = await res.json()
                if (res.ok) {
                    setUserPosts(data.post);
                    if (data?.post?.length > 9) {
                        setShowMore(false);
                    }
                }
                if (res.ok) {
                    setUserPosts(data.post)
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        if (currentUser.isAdmin) {
            fetchPosts();
        }
    }, [currentUser._id]);

    const handleShowMore = async()=>{
        const startIndex = userPosts.length;
        try {
            const res = await fetch(`/api/post/getpost?userId=${currentUser._id}&startIndex=${startIndex}`);
            const data = await res.json();
            if (res.ok) {
                setUserPosts((prev) => [...prev, ...data.post]);
                if (data?.post?.length > 9) {
                    setShowMore(false);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDeletePost = async () => {
        setShowModal(false);
        try {
          const res = await fetch(
            `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
            {
              method: 'DELETE',
            }
          );
          const data = await res.json();
          if (!res.ok) {
            console.log(data.message);
          } else {
            setUserPosts((prev) =>
              prev.filter((posts) => posts._id !== postIdToDelete)
            );
          }
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    <div className='w-full table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
        {currentUser.isAdmin && userPosts.length > 0 ? (
            <>
                <Table hoverable className='shadow-md'>
                    <Table.Head>
                        <TableHeadCell>Date update</TableHeadCell>
                        <TableHeadCell>Post image</TableHeadCell>
                        <TableHeadCell>Post title</TableHeadCell>
                        <TableHeadCell>Category</TableHeadCell>
                        <TableHeadCell>Delete</TableHeadCell>
                        <TableHeadCell>
                            <span className=''>Edit</span>    
                        </TableHeadCell>
                    </Table.Head>
                    {userPosts.map((posts) =>
                        <Table.Body className='divide-y'>
                            <TableRow className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                                <TableCell>
                                    {new Date(posts.updatedAt).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <Link to={`post/${posts.slug}`}>
                                    <img 
                                    src={posts.image} 
                                    alt={posts.title}
                                    className='w-20 h-10 object-cover bg-gray-500'
                                    />
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link className='font-medium text-gray-900 dark:text-white' to={`/post/${posts.slug}`}>{posts.title}</Link>
                                </TableCell>
                                <TableCell>{posts.category} </TableCell>
                                <TableCell>
                                    <span onClick={()=>{
                                        setShowModal(true);
                                        setPostIdToDelete(posts._id);
                                    }} className='font-medium text-red-500 hover:underline cursor-pointer'>
                                        Delete
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Link className='text-teal-500 hover:underline' to={`/updatepost/${posts._id}`}>
                                        <span>Edit</span>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </Table.Body>
                    )}
                </Table>
                {
                    showMore && (
                        <button onClick={handleShowMore} className='w-full text-teal-500 self-center text-sm  py-7'>
                            Show More
                        </button>
                    )
                }
            </>
        ):(
            <p>You have no post yet!</p>
        )}
          <Modal show={showModal} onClose={() => setShowModal(false)} popup size='md'>
  <Modal.Header/>
    <ModalBody>
      <div className="text-center">
        <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto'/>
        <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>Are you sure you want to delete this post?</h3>
        <div className=" flex justify-center gap-6">
          <Button color='failure' onClick={handleDeletePost}>
            Yes, I'm sure
          </Button>
          <Button color='gray' onClick={() => setShowModal(false)}>
            No, cancel
          </Button>
        </div>
      </div>
    </ModalBody>
  </Modal>
    </div>
  )
}




