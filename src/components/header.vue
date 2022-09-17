<template>
  <div class="header">
    <img class="w-15" src="@/assets/menu.svg" alt="" />
    <img class="ngmusic" src="@/assets/ngmusic.svg" alt="" />
    <img class="w-15" src="@/assets/search.svg" alt="" />
  </div>
</template>

<style>
.header {
  width: 340px;
  height: 30px;
  margin: 0 0 39px;
  padding: 18px 15px 22.2px;
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  display: flex;
  justify-content: space-between;
}
.w-15 {
  width: 15px;
  margin-top: -16px;
}
.ngmusic {
  height: 16px;
  margin-top: 10px;
}
</style>