<template>
  <div>
    <h1 class="text-2xl px-2">購物車確認</h1>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center"></div>
      <div class="gird-th text-center">商品圖片</div>
      <div class="gird-th">商品名稱</div>
      <div class="gird-th text-center">價錢</div>
      <div class="gird-th opacity-0">操作</div>
    </div>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center"><input type="checkbox" /></div>
      <div class="gird-th text-center">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
      </div>
      <div class="gird-th">商品名稱</div>
      <div class="gird-th text-center">價錢</div>
      <div class="gird-th opacity-0">操作</div>
    </div>
    <div class="checkinfor flex items-end flex-col">
      <div>商品數量:11</div>
      <div>商品總金額:11</div>
    </div>
    <div class="footer flex justify-around">
      <button class="bg-red-600">
        <RouterLink to="/" class="px-2"> 回上一頁繼續購買</RouterLink>
      </button>
      <button class="bg-blue-600"><RouterLink to="/informantion" class="px-2"> 確認送出</RouterLink></button>
    </div>
  </div>
</template>

<script></script>
