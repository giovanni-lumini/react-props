import PostCard from "./PostCard"
import Posts from "../data/Posts"

export default function AppMain() {


    return (
        Posts.map((post, index) => {
            post.published === "true" &&
                <div className="container">
                    <PostCard key={index} title={post.title} image={post.image} content={post.content} tags={post.tags} />
                </div>
        })
    )
}