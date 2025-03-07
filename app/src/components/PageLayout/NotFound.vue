<template>
  <div class="container">
    <div
      class="blur-card not-found max-w-[1328px] py-[80px] px-[64px] rounded-[24px]"
    >
      <p>Error</p>
      <h1>4<span>0</span>4</h1>
      <p>Oops! Page not found.</p>
      <p>Let’s get you to where you need to be.</p>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script></script>

<style>
.not-found {
  padding: 80px 64px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.not-found h1 {
  font-size: 160px;
  color: #fff;
  font-family: "Dela Gothic One", serif !important;
  margin-bottom: 12px;
  text-align: center;
  margin-top: -40px;
  display: block;
}
.not-found p {
  color: #c4c4c6;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 32px;
}
.not-found span {
  color: #32fac8;
}
.not-found a {
  background: #32fac8;
  color: #000;
  font-size: 18px;
  padding: 17px 22px;
  border-radius: 12px;
  font-weight: 700;
  display: inline-block;
  margin-top: 8px;
}
@media (max-width: 768px) {
  .not-found {
    padding: 40px 24px;
    margin-top: 140px;
  }
  .not-found h1 {
    font-size: 60px;
    margin-top: 10px;
  }
  .not-found p {
    font-size: 16px;
    margin-bottom: 12px;
  }
}
</style>
