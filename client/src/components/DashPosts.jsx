import { Table, TableCell, TableHeadCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


export default function DashPosts() {
    const {currentUser} = useSelector((state) => state.user)
    const [userPosts, setUserPosts] = useState([])
    console.log(userPosts);
    useEffect (() => {
        const fetchPosts = async () =>{ 
            try {
                const res = await fetch(`/api/post/getpost?userId=${currentUser._id}`)
                const data = await res.json()
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
    }, [currentUser._id])
  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
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
                                    <span className='font-medium text-red-500 hover:underline cursor-pointer'>
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
            </>
        ):(
            <p>You have no post yet!</p>
        )}
    </div>
  )
}

