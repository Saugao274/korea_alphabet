import React, { useState, useEffect } from "react";
import anh1 from "../../assets/GameImage/img1.jpg";
import anh2_winter from "../../assets/GameImage/img2_winter.png";
import anh2_sp from "../../assets/GameImage/img2_sp.png";
import anh2_fall from "../../assets/GameImage/img2_fall.png";
import anh2_sum from "../../assets/GameImage/img2_sum.png";

import anh3 from "../../assets/GameImage/img3.jpg";
import anh4 from "../../assets/GameImage/img4.jpg";
import game1_winter from "../../assets/GameImage/img1_winter.jpg";
import game1_sp from "../../assets/GameImage/img1_sp.jpg";
import game1_fall from "../../assets/GameImage/img1_fall.jpg";
import game1_sum from "../../assets/GameImage/img1_sum.jpg";

import { useTheme } from "../../ThemeContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const { season } = useTheme();
  const [img, setImg] = useState({ img1: game1_sp, img2: anh2_sp });

  useEffect(() => {
    if (season === "spring") setImg({ img1: game1_sp, img2: anh2_sp });
    if (season === "fall") setImg({ img1: game1_fall, img2: anh2_fall });
    if (season === "summer") setImg({ img1: game1_sum, img2: anh2_sum });
    if (season === "winter") setImg({ img1: game1_winter, img2: anh2_winter });
  }, [season]);

  const [slides, setSlides] = useState([
    {
      img: img.img1,
      title: "Word Game",
      description:
        " Word game is a game that helps people improve their new words by guessing a new word.",
      link: "/trailer2",
    },
    {
      img: img.img2,
      title: "Sad Story",
      description:
        "Weld letters will fall from above and the player must enter the correct letters on the screen.",
      link: "/sadstory",
    },
    {
      img: anh3,
      title: "Bubble Game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur.",
    },
  ]);

  useEffect(() => {
    setSlides((prevSlides) => [
      { ...prevSlides[0], img: img.img1 },
      { ...prevSlides[1], img: img.img2 },
      prevSlides[2],
    ]);
  }, [img]);

  const nextSlide = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides.push(newSlides.shift());
      return newSlides;
    });
  };

  const prevSlide = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides.unshift(newSlides.pop());
      return newSlides;
    });
  };

  return (
    <div className={`containers ${season}-gradient `}>
      <div className="slidered">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slides justify-center items-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div
              className={`${
                index === 0 ? "contented opacity-100" : "contented opacity-0"
              }`}
            >
              <h2 className="bg-slate-200 text-red-800 text-4xl">
                {slide.title}
              </h2>
              <p>{slide.description}</p>
            </div>
            <Link to={slide.link}>
              <div
                className=" py-1  grid-cols-2 bg-gray-200 rounded"
                style={{ marginBottom: "10px" }}
              >
                <button
                  className={`${
                    index === 0 ? "text-md" : "text-sm "
                  }  border-none text-md  mb-2 text-black font-poppins font-medium cursor-pointer transition duration-400 tracking-wider pl-2 flex justify-center items-center `}
                  style={{ gap: 20, padding: 10 }}
                >
                  <FontAwesomeIcon icon={faPlay} />
                  {index === 0 ? <p> SEE MORE</p> : <></>}
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="buttons">
        <span className="prev" onClick={prevSlide}></span>
        <span className="next" onClick={nextSlide}></span>
      </div>
    </div>
  );
};

export default Slider;
