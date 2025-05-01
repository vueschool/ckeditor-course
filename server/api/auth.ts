import jwt from "jsonwebtoken";
export default defineEventHandler(async () => {
  const tokenPayload = {
    aud: `gY2Jfe6EkQlXgI4e0li4`,
    sub: "some-user-id",
    user: {
      email: "me@danielkelly.io",
      name: "Daniel Kelly",
      avatar: "https://avatars.githubusercontent.com/u/7635209?v=4",
    },
    auth: {
      collaboration: {
        "*": {
          role: "writer",
          permissions: ["comment:modify_all"],
        },
      },
    },
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  return jwt.sign(tokenPayload, process.env.CKEDITOR_SECRET_KEY, {
    algorithm: "HS256",
  });
});
