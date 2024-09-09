import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';   
import './CustomProducts.css'

const CustomProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const getApiData = async () => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const renderCarousel = () => {
    if (isLoading) {
      return <div>Loading products...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (data.length === 0) {
      return <div>No products found.</div>;
    }

    // Responsive settings for carousel (adjust as needed)
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // Optional: Slides to show at once on desktop
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // Optional: Slides to show at once on tablet
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // Optional: Slides to show at once on mobile
      }
    };

    return (
      <Carousel responsive={responsive}>
        {data.map((product) => (
          <div key={product.id} className="carousel-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* Add more content for each product card as needed */}
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <>
      <div>
        API Data: {renderCarousel()}
      </div>
    </>
  );
};

export default CustomProducts;