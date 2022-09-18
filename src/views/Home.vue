<template>
  <div class="container">
    <div class="bg">
      <img src="@/assets/music.svg" alt="" />
      <div class="Rectangle">
        <span class="Artist-Album-Tit"> Artist / Album / Tit </span>
      </div>
      <div>
        <input
          class="search"
          v-model="key"
          @keyup.enter="search"
          placeholder="search"
          type="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router'

export default {
  name: "Home",
  setup() {
    const router = useRouter()
    const key = ref("");
    const search = () => {
      router.push({ path: 'search', query: { key: key.value }})
    };

    return {
      search,
      key,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.bg {
  width: 340px;
  height: 680px;
  padding: 256px 30px 26px;
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
}
.Rectangle {
  width: auto;
  height: 40px;
  margin: 219.2px 0 15px;
  /* padding: 13px 81px 13px 79px; */
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  height: 40px;
  margin: 15px 0 0;
  /* padding: 13px 116px 11px 117px; */
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  display: flex;
  width: 100%;
}
::placeholder {
  text-align: center;
  color: white;
}
input:focus-visible {
  outline: none;
}

.Artist-Album-Tit {
  width: 120px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.43px;
  color: var(--blue-gray-500);
}
</style>