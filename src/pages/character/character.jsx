import React from "react";

import "./character.scss";
import Item from "./item/Item";
import data from "./characterData";

//? 人物：npc人物套装 √
//? 
export default function Character() {
  return (
    <div className="character">
      <h2>25套人物套装总览</h2>
      <div className="displayBox">
        <div>
          <span>人物</span>
          <span>类型</span>
          <span>抗性</span>
          <span>套装效果名称</span>
          <span>套装</span>
          <span>加成效果</span>
        </div>
        {data.map((ele) => {
          return <Item key={ele.suitName} data={ele} />;
        })}
      </div>
    </div>
  );
}
