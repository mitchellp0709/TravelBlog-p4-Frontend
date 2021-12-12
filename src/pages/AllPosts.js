import Post from "../components/Post"
import Carousel from "../components/Carousel"
import CarouselItem from "../components/CarouselItem"


const AllPosts = (props) => {
 
  return (
    <div className="container">
      <Carousel>
        {props.posts.map((pic) => {
          return <CarouselItem><img src={pic.image}/></CarouselItem>
        })}
      </Carousel>

      {props.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
export default AllPosts