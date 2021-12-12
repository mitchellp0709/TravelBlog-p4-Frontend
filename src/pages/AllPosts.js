import Post from "../components/Post"
import Carousel from "../components/Carousel"
import CarouselItem from "../components/CarouselItem"


const AllPosts = (props) => {
 
  return (
    <div className="container">
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>

      {props.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
export default AllPosts