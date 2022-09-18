<template>
  <div class="container-header">
    <div class="heights bg-result">
      <Header />
      <div>
        <span>Search result for :</span>
        <span class="keys">{{ key }}</span>
      </div>
      <div class="card-result" v-for="(items, idx) in list" :key="idx">
        <div style="display: flex">
          <div class="Bitmap">
            <img class="img-cover" :src="items.artworkUrl60" alt="" />
            <img style="position: absolute" src="@/assets/play.svg" alt="" />
          </div>
          <div style="margin-left: 10px; width: 100%">
            <p class="artist">{{ items.artistName }}</p>
            <p class="title-song">{{ items.trackName }}</p>
            <div style="display: flex; justify-content: space-between">
              <div class="genre">
                <span class="text-genre">{{ items.primaryGenreName }}</span>
              </div>
              <div class="value-currency">
                <img src="@/assets/currency-dollar.svg" alt="" />
                <span class="value">{{ items.trackPrice }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="list.length" class="loadmore" @click="getList(key)">
        <span class="text-load">Load more</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";

import axios from "axios";
import Header from "@/components/header";
import { useStore } from "vuex";
export default {
  components: {
    Header,
  },
  name: "Search",
  setup() {
    const store = useStore();
    const route = useRoute();
    const page = ref(0)

    const key = ref("");
    const list = computed({
      get: () => {
        return store.getters["getList"];
      },
    });
    const getList = (key) => {
      axios.get(`https://itunes.apple.com/search?term=${key}&entity=musicVideo&limit=4&offset=${page.value * 4}`)
        .then((res) => {
          page.value++
          store.commit("SET_LIST", res.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    watch(
      () => route.query.key,
      () => {
        key.value = route.query.key
      }
    )

    onMounted(() => {
      key.value = route.query.key;
      getList(key.value);
    });

    return {
      getList,
      key,
      list,
      page
    };
  },
};
</script>

<style>
.container-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-result {
  width: 340px;
  height: auto;
  padding: 0 0 28px;
  background-color: #f8fafc;
}
.heights {
  width: 372px;
  height: auto;
  min-height: 100vh;
}
.keys {
  width: 91px;
  height: 21px;
  margin: 0 0 0 10px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
  color: #7b34dd;
}
.card-result {
  width: 310px;
  height: 123px;
  margin: 36px 15px 20px;
  padding: 12px 12px 11px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
}
.Bitmap {
  cursor: pointer;
  width: 125px;
  height: 125px;
  background: aliceblue;
  margin: auto;
  justify-content: center;
  display: flex;
  align-items: center
}
.img-cover {
  border-radius: 10px;
  width: 125px;
  height: 125px;
  object-fit: cover;
}
.value {
  margin: 1px 0 1px 6px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.43px;
  color: #f5b014;
}
.value-currency {
  display: flex;
  align-items: center;
}
.genre {
  min-width: 45px;
  padding: 0px 4px;
  height: 20px;
  border-radius: 10px;
  background-color: #10b981;
}
.text-genre {
  width: 19px;
  height: 11px;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.36px;
  color: #fff;
}
.loadmore {
  width: 120px;
  height: 20px;
  margin: 20px 110px 0;
  padding: 10px 29px;
  border-radius: 17px;
  background-color: #e2e8f0;
}
.text-load {
  width: 62px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.43px;
  color: #64748b;
}

.artist {
  text-align: left;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.36px;
  color: #334155;
}
.title-song {
  text-align: left;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #334155;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

</style>