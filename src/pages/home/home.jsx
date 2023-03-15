import React from "react";

import SlideList from "../../components/slideList/SlideList";
import "./home.scss";

//? 图片资源
import qishiImg from "../../assets/slideList/qishi.jpg";
import huajieImg from "../../assets/slideList/huajie.webp";
import liandong from "../../assets/news/liandong.webp";
import kuajie from "../../assets/news/kuajie.jpg";
import edwin from "../../assets/news/EDWIN.webp";

//? 引入攻略导航data
import navData from "./navData";

//? 轮播图 √
//? 新活动内容 √
//? 游戏机制介绍 √
//? 攻略跳转 √
//? boss图鉴
//? 人物加点对应攻击性能的计算器

export default function Home() {
  return (
    <div className="home">
      <div>
        <SlideList />
        <div className="basicInfo">
          <h2>游戏基本玩法</h2>
          <div>
            <img src={qishiImg} width={250} height={100} alt="nosource" />
            <div>
              <h3>气势</h3>
              <span>
                猛烈进攻则上升，一味招架则下降。 气将化作能量用于强力招数。
              </span>
            </div>
          </div>
          <div>
            <div>
              <h3>化解</h3>
              <span>
                卸开敌人攻击使其破绽大开的战斗技巧。攻击遭破解的敌人会失去平衡，在降低敌方气势的同时提升自身的气势。
              </span>
            </div>
            <img src={huajieImg} width={250} alt="nosource" />
          </div>
        </div>
      </div>
      <div className="lookFor">
        <ul className="activities">
          <li>
            <img src={liandong} height={200} alt="nosource" />
          </li>
          <li>
            <img src={kuajie} height={100} alt="nosource" />
          </li>
          <li>
            <img src={edwin} height={150} alt="nosource" />
          </li>
        </ul>
        <ul className="nav">
          <h2>推荐攻略</h2>
          {navData.map((ele) => {
            return (
              <li key={ele.name}>
                <a href={ele.url} target="_blank">
                  {ele.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
