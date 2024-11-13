import PostCard from "./PostCard"
import Posts from "../data/Posts"
export default function AppMain() {
    return (
        <div className="container">
            {Posts.map((post, index) =>
                post.published && (
                    <PostCard
                        key={index}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags}
                    />
                )
            )}
        </div>
    );
}