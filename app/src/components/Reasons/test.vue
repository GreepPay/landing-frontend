<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      @mouseenter="openItem(index)"
      @mouseleave="closeItem(index)"
    >
      <div class="accordion-header">
        {{ item.title }}
      </div>
      <div
        class="accordion-content-wrapper"
        :style="{
          height: activeIndex === index ? contentHeights[index] + 'px' : '0px',
        }"
        ref="contentRefs"
      >
        <div class="accordion-content">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const items = ref([
  { title: "Item 1", content: "This is the first item's content." },
  {
    title: "Item 2",
    content: "This is the second item's content, which could be longer.",
  },
  {
    title: "Item 3",
    content: "This is the third item's content with even more text.",
  },
]);

const activeIndex = ref(null);
const contentRefs = ref([]);
const contentHeights = ref([]);

onMounted(() => {
  calculateHeights();
});

const calculateHeights = async () => {
  console.log({ contentRefs });
  await nextTick(); // Wait for DOM update
  contentHeights.value = contentRefs.value.map((el) =>
    el ? el.scrollHeight : 0
  );
};

const openItem = (index) => {
  activeIndex.value = index;
};

const closeItem = () => {
  activeIndex.value = null;
};
</script>

<style scoped>
.accordion {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #ddd;
  background: #f9f9f9;
}

.accordion-header {
  padding: 10px;
  background: #ddd;
  cursor: pointer;
  font-weight: bold;
}

.accordion-content-wrapper {
  overflow: hidden;
  transition: height 0.3s ease;
}

.accordion-content {
  padding: 10px;
  background: #fff;
}
</style>
