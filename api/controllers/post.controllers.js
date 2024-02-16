import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js"

export const create = async (req, res, next) =>{
console.log(req.user);
    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'))
    }
    if (!req.body.title || !req.body.content) {
        return next(errorHandler(400, 'Please provide all required fields'))
    }
    const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g,'');
    const newPost= new Post({
        ...req.body, slug, userId: req.user.id,
    });
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        next(error);
    }
} ;

export const getpost = async (req, res, next) =>{
    try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 6;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;
        
        const post = await Post.find({
            ...(req.query.userId && { userId: req.query.userId }),
            ...(req.query.category && { category: req.query.category }),
            ...(req.query.slug && { slug: req.query.slug }),
            ...(req.query.postId && { _id: req.query.postId }), // Coma agregada aquí
            ...(req.query.searchTerm && {
                $or:[
                    { title: { $regex: req.query.searchTerm, $options: 'i' } }, // Espacio eliminado después de 'i'
                    { content: { $regex: req.query.searchTerm, $options: 'i' } } // Espacio eliminado después de 'i'
                ]
            })
        }).sort({ update: sortDirection}).skip(startIndex).limit(limit);

        const totalPost = await Post.countDocuments();

        const now = new Date();

        const oneMonthAgo = new Date(
            now.getFullYear(),
            now.getMonth() -1,
            now.getDate()
        );

        const lastMonthPost = await Post.countDocuments({
            createdAt: {$gte: oneMonthAgo},
        });

        res.status(200).json({
            post,
            totalPost,
            lastMonthPost,
        });

    } catch (error) {
        next(error)
    }
}
