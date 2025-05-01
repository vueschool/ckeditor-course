export default defineEventHandler(async (event) => {
  const query = await getQuery(event);
  const search = query.search?.toString();
  // dummy array of users
  const users = [
    { username: "john", name: "John Doe" },
    { username: "jane", name: "Jane Doe" },
    { username: "jim", name: "Jim Doe" },
  ];
  return users.filter((user) =>
    user.name.toLowerCase().includes(search?.toLowerCase() || "")
  );
});
