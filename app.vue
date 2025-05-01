<script setup>
const route = useRoute();
const documentId = computed(() => route.query.id || "defaultId");
</script>
<template>
  <div>
    <Editor style="max-width: 100%" :document-id="documentId" />
  </div>
</template>
