import Post from "../components/Post"

const AllPosts = (props) => {
 
  return <div className="container">
    {props.posts.map((post) => {
      return <Post key={post.id} post={post} />
    })
    }
  </div>
}
export default AllPosts