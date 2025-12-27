import { Post } from "@/interfaces/post";

const PostCard = ({ post }: { post: Post }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="font-semibold">{post.title}</h3>
    <p className="text-sm text-gray-600">{post.body}</p>
  </div>
);

export default PostCard;
