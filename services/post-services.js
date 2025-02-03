const prisma = require("../configs/prisma");

exports.getPostById = (id) => {
  return prisma.post.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      tags: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
      comments: true,
    },
  });
};
