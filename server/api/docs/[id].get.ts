// [id].get.ts
export default defineEventHandler(async (event) => {
  const storage = useStorage("data");
  const documentId = await getRouterParam(event, "id");

  if (!documentId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Document ID is required",
    });
  }

  return await storage.getItem(documentId);
});
