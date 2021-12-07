import { Link } from "react-router-dom"

const Post = (props) => {







  return (
    <div className="all-posts">
      <Link to={`/post/${props.post.id}`}>
        <h1>{props.post.name}</h1>
        <img src={props.post.image} alt="image of location" />
      </Link>
      <p>{props.post.description}</p>
    </div>
  );
}

export default Post