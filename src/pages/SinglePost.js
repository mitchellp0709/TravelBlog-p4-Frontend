import { useParams, Link } from "react-router-dom";


const SinglePost = ({posts,edit,removePost}) => {

  const params = useParams()
  const id = parseInt(params.id);
  
  //find the correct post with id from params
  const post = posts.find((p) =>  p.id === id )
  


  return <div>
    <h1>{post?.name}</h1>
    <img src={post?.image} alt={`image of ${post?.name}`} />
    <p>{post?.description}</p>
    <button onClick={(event) => edit(post)}>Edit</button>
    <button onClick={()=>removePost(post)}>Delete</button>
    <Link to ="/"><button>Go Back</button></Link>
  </div>
};

export default SinglePost;
