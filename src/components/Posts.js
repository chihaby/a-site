import React, { useContext } from 'react'
import Post from './Post';
// import AddPost from './AddPost';
import { PostsContext } from '../providers/PostsProvider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Posts = () => {

  const posts = useContext(PostsContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // lazyLoad: true,
    centerMode: true,
    adaptiveHeight: true,
    // fade: true,
    arrows: true,
    // autoplaySpeed: 50000,
    className: 'slides'
  };

  return (
      <Slider {...settings}>
          {posts.map(post => <Post {...post} key={post.id} />
          )} 
      </Slider>
  )
}
export default Posts;