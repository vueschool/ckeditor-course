// server/api/[id].post.ts
export default defineEventHandler(async (event) => {
  const storage = useStorage("data");
  const documentId = await getRouterParam(event, "id");
  const document = (await readBody(event)).document;

  if (!documentId || !document) {
    throw createError({
      statusCode: 400,
      statusMessage: "Document ID is required",
    });
  }

  await storage.setItem(documentId, document);

  return document;
});
