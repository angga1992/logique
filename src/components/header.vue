<template>
  <div>
    <div class="header">
      <img class="w-15" src="@/assets/menu.svg" alt="" />
      <img class="ngmusic" src="@/assets/ngmusic.svg" alt="" />
      <img
        class="w-15"
        src="@/assets/search.svg"
        alt=""
        id="myBtn"
        @click="openModal"
      />
    </div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3 class="head-title">Search</h3>
        <div class="Rectangle">
          <span class="Artist-Album-Tit"> Artist / Album / Tit </span>
        </div>
        <div>
          <input
            class="search"
            v-model="key"
            @keyup.enter="getList(key)"
            placeholder="search"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import axios from "axios";

export default {
  name: "header",
  setup() {
    const store = useStore();
    const router = useRouter()
    const modal = ref("");
    const btn = ref("");
    const span = ref("");
    const color = ref("#1FBC9C");


    const key = ref("");
    const search = () => {
      router.push({ path: 'search', query: { key: key.value }})
    };

    const pallete = () => {
      console.log('masuk')
      document.getElementById("pallete").click()
    }

    const openModal = () => {
      modal.value.style.display = "block";
    };
    const closeModal = () => {
      modal.value.style.display = "none";
    };
    const getList = (key) => {
      router.push({ path: 'search', query: { key: key }})
      store.commit("CLEAR_LIST");
      axios.get(`https://itunes.apple.com/search?term=${key}&entity=musicVideo&limit=4&offset=${0 * 4}`)
        .then((res) => {
          store.commit("SET_LIST", res.data.results);
          closeModal()
        })
        .catch(function (error) {
          console.log(error);
          closeModal()
        });
    };
    onMounted(() => {
      modal.value = document.getElementById("myModal");
      btn.value = document.getElementById("myBtn");
      span.value = document.getElementsByClassName("close")[0];

      window.onclick = function (event) {
        if (event.target == modal.value) {
          modal.value.style.display = "none";
        }
      };
    });
    return {
      modal,
      search,
      key,
      getList,
      btn,
      span,
      openModal,
      closeModal,
      pallete,
      color,
    };
  },
};
</script>

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
.head-title {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.71px;
  color: #fff;
  margin: 219.2px 0 15px;
}
.w-15 {
  width: 15px;
  margin-top: -16px;
}
.ngmusic {
  height: 16px;
  margin-top: 10px;
}

.Rectangle {
  width: auto;
  height: 40px;
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
  background-image: linear-gradient(98deg, #712bda, #a45deb);
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
  background-image: linear-gradient(98deg, #712bda, #a45deb);
}

/* modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(28, 28, 45, 0.9);
}
/* Modal Content */
.modal-content {
  margin: auto;
  padding: 20px;
  width: 340px;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>