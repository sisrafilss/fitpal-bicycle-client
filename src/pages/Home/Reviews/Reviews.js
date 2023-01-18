import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Load Highlighted products
  useEffect(() => {
    axios.get("https://fitpal-bicycle-server.onrender.com/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);

  // Section Head props object
  const sectionHead = {
    title: "What Our Customers are Saying",
    subtitle: "Take a loot, what our customers are saying about our products",
  };

  var settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: "80px" }}>
      <SectionHead sectionHead={sectionHead} />
      <div className="container mb-5">
        <div className="row g-4">
          <Slider {...settings}>
            {/* Add Slider for each SingleReview if have enough time. */}
            {reviews.map((review) => (
              <SingleReview key={review._id} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;


