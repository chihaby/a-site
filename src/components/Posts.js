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
    speed: 500,
    width: "100%",
    slidesToScroll: 1,
    // autoplay: true,
    // lazyLoad: true,
    // centerMode: true,
    adaptiveHeight: true,
    // fade: true,
    // arrows: true,
    // autoplaySpeed: 50000,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    className: "center",
    loop: false,
    arrows: true,
    initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            initialSlide: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
      <Slider {...settings}>
          {posts.map(post => <Post {...post} key={post.id} />
          )} 
      </Slider>
  )
}
export default Posts;