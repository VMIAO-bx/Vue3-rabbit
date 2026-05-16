import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);
  //定义一个获取列表的函数，将获取到的值赋给categoryList
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };

  return {
    categoryList,
    getCategory,
  };
});
