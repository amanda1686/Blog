import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";

export default function PostPage() {
    const { postSlug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/post/getpost?slug=${postSlug}`);
                const data = await res.json();
                if (!res.ok) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                if (res.ok) {
                    setPost(data.post[0]);
                    setLoading(false);
                    setError(false);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchPost();
    }, [postSlug]);

if (loading) {
    return(
        <div className=" flex justify-center it min-h-screen">
            <Spinner size='xl'/>
        </div>
    )
}
    if (error) {
        return <div>Error al cargar la publicación.</div>;
    }

    // Si loading es falso y no hay error, renderizar el contenido de la publicación
    return (
        <div className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
            <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto 
            lg:text-4xl
            '>{post.title}</h1>
            <Link to={`/search?category=${post.category}`} className=' self-center mt-5' >
                <Button className='' color='gray' pill size='xs'>
                    {post.category}
                </Button>
            </Link>
            <img src={post.image} alt={post.title} className='mt-10 p-3 max-h-[600px] w-full object-cover'/>
            <div className=" flex justify-between p-3 border-b border-slate-500 text-xs">
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span>{post && (post.content.length/ 1000).toFixed(0)}mins read</span>
            </div>
            <div className=" p-3 post-content" dangerouslySetInnerHTML={{__html: post.content}}>
            </div>
            <div className=" max-w-4xl mx-auto w-full">
                <CallToAction/>
            </div>
            <CommentSection postId={post._id}/>
        </div>
    );
}

