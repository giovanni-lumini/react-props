import PostCard from "./PostCard"
import Posts from "../data/Posts"

export default function AppMain() {
    return (
        Posts.map((post, index) => (
            post.published === "true" && (
                <div key={index} className="container">
                    <PostCard
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags}
                    />
                </div>
            )
        ))
    )
}