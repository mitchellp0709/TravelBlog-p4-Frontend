import { Link } from "react-router-dom"

const Post = (props) => {




  return (
    <div className="all-posts">
      <Link to={`/post/${props.post.id}`}>
        <h1>{props.post.name}</h1>
      </Link>
      
        <img src={props.post.image} alt="image of location" />
     
      <p>{props.post.description}</p>
    </div>
  );
}

export default Post