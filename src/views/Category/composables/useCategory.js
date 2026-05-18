//封装分类业务的逻辑
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { getTopCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getTopCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => {
    getTopCategory();
  });
  onBeforeRouteUpdate((to) => {
    //to就是新的路由对象
    getTopCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
