<template>
    <div>
      <!-- 독바 HTML 코드 -->
      <nav>
        <ul>
          <li><router-link to="/">Dk_Ranking</router-link></li>
          <li><router-link to="/about">Dk_Friend</router-link></li>
          <li><router-link to="/contact">Dk_Home</router-link></li>
          <li><router-link to="/contact">Dk_Shop</router-link></li>
          <li><router-link to="/contact">Dk_Mypage</router-link></li>
        </ul>
      </nav>
      <!-- 각 페이지의 컨텐츠를 렌더링 -->
      <router-view></router-view>
    </div>
  </template>
  