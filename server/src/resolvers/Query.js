async function chats(parent, args, context) {
  return context.prisma.chat.findMany();
}

async function users(parent, args, context) {
  return context.prisma.user.findMany();
}

async function user(parent, args, context) {
  const { userId } = context;
  return context.prisma.user.findUnique({ where: { id: userId } });
}

module.exports = {
    chats,
    users,
    user,
}