import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/apis/home";

//封装轮播图数据逻辑
export const useBanner = () => {
  const bannerList = ref([0]);
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };
  onMounted(() => {
    getBanner();
  });

  return {
    bannerList,
  };
};
