import React from "react";

export default function Item({ data }) {
  const { eName, buff } = data;

  //? 解析数值
  function parser(num) {
    //* 整数类型
    if (parseInt(num) === parseFloat(num)) {
      if (num < 0) {
        return `-${num}`;
      }
      return `+${num}`;
    }
    //* 浮点类型
    if (num < 0) {
      return `${num}%`;
    }
    return `+${num}%`;
  }
  return (
    <div>
      <span>{data.suitName}</span>
      <span>{data.type}</span>
      <span>{data.against}</span>
      <span>{data.suitBuffName}</span>
      <span>
        {Array.from(eName).map((ele) => {
          return <div key={ele.eName}>{ele.eName}</div>;
        })}
      </span>
      <span>
        {Array.from(buff).map((ele) => {
          return (
            <div key={ele.buffName}>
              {ele.buffName}
              {ele.number && parser(ele.number)}
            </div>
          );
        })}
      </span>
    </div>
  );
}
