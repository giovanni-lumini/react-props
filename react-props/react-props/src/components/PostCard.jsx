import Posts from '../data/Posts'

export default function PostCard(props) {
    return (
        <div className="card">
            <h3 className="title">{props.title}</h3>
            <img className="post-img" src={props.image} alt="" />
            <div className="content">{props.content}</div>
            <div className="tags">{props.tags}</div>
        </div>
    )
}