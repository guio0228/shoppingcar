<template>
  <h1 class="text-2xl px-2">完成購買</h1>
  <div>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center">商品圖片</div>
      <div class="gird-th">商品名稱</div>
      <div class="gird-th text-center">價錢</div>
      <div class="gird-th text-center">數量</div>
    </div>
  </div>
  <div>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
      </div>
      <div class="gird-th">商品名稱</div>
      <div class="gird-th text-center">價錢</div>
      <div class="gird-th text-center">數量</div>
    </div>
  </div>
  <div>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center">姓名</div>
      <div class="gird-th">電話</div>
      <div class="gird-th text-center">地址</div>
      <div class="gird-th text-center">付款方式</div>
      <div class="gird-th text-center">電子信箱</div>
      <div class="gird-th text-center">運送方式</div>
    </div>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center">1</div>
      <div class="gird-th">2</div>
      <div class="gird-th text-center">3</div>
      <div class="gird-th text-center">4</div>
      <div class="gird-th text-center">5</div>
      <div class="gird-th text-center">6</div>
    </div>
  </div>
  <RouterLink to="/" type="button" class="bg-blue-600 w-full px-2 text-center">回首頁</RouterLink>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
