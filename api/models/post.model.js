import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://vxhtabpxdsjx-u4747.pressidiumcdn.com/wp-content/uploads/2022/09/book_blogs_2-1024x576.jpg',
        },
        category: {
            type: String,
            default: 'uncategorized'
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },{timestamps:true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;