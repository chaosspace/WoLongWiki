import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {  } from 'react-router-dom'

import style from './topNav.module.css'
import titleImg from '../../assets/utilImg/hometitle.webp'

export default function TopNav() {

  return (
    <div className={style.topNav}>
      <Link target={'_blank'} to={"https://teamninja-studio.com/wolong/sch/"}>
        <img src={titleImg} width={"200px"} alt="" />
      </Link>

      <div className={style.nav}>
        <NavLink to={"/home"}>主页</NavLink>
        <NavLink to={"/characters"}>人物套装</NavLink>
        <NavLink to={"/wizardry"}>奇术</NavLink>
        <NavLink to={"/weapons"}>武器</NavLink>
        <NavLink to={"/dlc"}>dlc内容</NavLink>
      </div>
    </div>
  );
}
