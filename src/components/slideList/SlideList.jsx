import React, { useRef } from "react";
import { useState } from "react";

import "./index.scss";
import slideData from "../../config/slideData";
import { useEffect } from "react";
import imgData from "../../config/slideData";

export default function SlideList() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [dataNum, setDataNum] = useState(4);

  useEffect(() => {
    setDataNum(imgData.length)
  }, []);
  
  //?自动切换函数
  const next = () => {
    if (slideIdx + 1 === dataNum) {
      setSlideIdx(0);
    } else {
      setTimeout(() => {
        setSlideIdx(slideIdx + 1);
      }, 0);
    }
  };
  //? 计时器hooks
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  };

  //?设置轮播图计时器
  useInterval(next, 4000);

  //?点击控制轴
  const handleClick = (e) => {
    let target = parseInt(e.target.dataset.idx);
    setSlideIdx(target);
  };
  return (
    <div className="slideWrapper">
      <div className="slideView">
        <div
          className="slideList"
          style={{ transform: `translateX(${-700 * slideIdx}px)` }}
        >
          {slideData.map((img, idx) => {
            return (
              <div key={idx}>
                <img width={700} height={440} src={img} alt="nosource" />
              </div>
            );
          })}
        </div>
      </div>
      <ul>
        {slideData.map((img, idx) => {
          return (
            <li
              key={idx}
              data-idx={idx}
              onClick={handleClick}
              className={`${slideIdx === idx ? "active" : ""}`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
